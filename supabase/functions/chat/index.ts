import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { conversationId, message, imageBase64 } = await req.json();
    
    const authHeader = req.headers.get('Authorization');
    if (!authHeader) {
      throw new Error('No authorization header');
    }

    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Verificar token do usuário
    const token = authHeader.replace('Bearer ', '');
    const { data: { user }, error: userError } = await supabase.auth.getUser(token);
    
    if (userError || !user) {
      throw new Error('Usuário não autenticado');
    }

    // Buscar mensagens anteriores da conversa para contexto
    const { data: previousMessages } = await supabase
      .from('messages')
      .select('*')
      .eq('conversation_id', conversationId)
      .order('created_at', { ascending: true })
      .limit(20);

    // Preparar mensagens para a IA
    const messages = [
      {
        role: 'system',
        content: `Eres la Dra. Sofía, una mentora emocional especializada en relaciones amorosas.

Tu filosofía central:
- Actúas desde la calma, la empatía y la sabiduría femenina
- Ayudas a las mujeres a dejar de actuar desde el miedo, la ansiedad y el desespero
- Enseñas a actuar desde el poder personal, la calma y el magnetismo natural
- No juzgas, comprendes el dolor emocional profundo

Tu estilo de comunicación:
- Cálido, cercano, como una hermana mayor sabia
- Usas "hermosa", "linda" de forma natural
- Das consejos específicos y prácticos, no teoría
- Preguntas para entender mejor antes de aconsejar
- Incluyes estrategias concretas: qué decir, cuándo responder, qué evitar

Áreas de especialización:
- Reencuentros después del silencio
- Manejo de ansiedad en relaciones
- Comunicación emocional inteligente
- Celos, inseguridad, miedos
- Timing y tono en mensajes
- Energía femenina y magnetismo

Recursos que sugieres cuando es apropiado:
- Frecuencia "Amor Permanente" (7 minutos de audio 528Hz + 639Hz)
- Rituales de energía femenina (mañana, noche, emergencia)
- Técnicas de respiración antes de responder
- Espaciamiento en respuestas (2-3 horas cuando hay ansiedad)

Tu objetivo: Que ella se sienta sostenida, comprendida y empoderada. Que deje de sabotearse y empiece a actuar desde su mejor versión.`
      }
    ];

    // Adicionar mensagens anteriores como contexto
    if (previousMessages) {
      previousMessages.forEach(msg => {
        messages.push({
          role: msg.role,
          content: msg.content
        });
      });
    }

    // Adicionar mensagem atual do usuário
    let userMessage: any;

    // Se houver imagem, criar mensagem multimodal
    if (imageBase64) {
      console.log('Image received, creating multimodal message');
      userMessage = {
        role: 'user',
        content: [
          { type: 'text', text: message || '¿Qué opinas de esta imagen?' },
          { 
            type: 'image_url', 
            image_url: { 
              url: `data:image/jpeg;base64,${imageBase64}`,
              detail: 'auto'
            } 
          }
        ]
      };
    } else {
      userMessage = {
        role: 'user',
        content: message
      };
    }

    messages.push(userMessage);
    console.log('Messages prepared:', messages.length, 'messages total, has image:', !!imageBase64);

    // Salvar mensagem do usuário
    let imageUrl = null;
    if (imageBase64) {
      // Fazer upload da imagem para storage
      const fileName = `${conversationId}/${Date.now()}.jpg`;
      
      // Converter base64 para Uint8Array (Deno não tem Buffer)
      const binaryString = atob(imageBase64);
      const bytes = new Uint8Array(binaryString.length);
      for (let i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }
      
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('chat-images')
        .upload(fileName, bytes, {
          contentType: 'image/jpeg',
          upsert: false
        });

      if (!uploadError) {
        const { data: { publicUrl } } = supabase.storage
          .from('chat-images')
          .getPublicUrl(fileName);
        imageUrl = publicUrl;
      }
    }

    await supabase.from('messages').insert({
      conversation_id: conversationId,
      role: 'user',
      content: message,
      image_url: imageUrl
    });

    // Chamar OpenAI API
    const OPENAI_API_KEY = Deno.env.get('OPENAI_API_KEY');
    if (!OPENAI_API_KEY) {
      throw new Error('OPENAI_API_KEY não configurada');
    }

    console.log('Calling OpenAI API with model gpt-4o-mini, vision enabled');
    
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: messages,
        max_tokens: 1000
      }),
    });
    
    console.log('OpenAI response status:', response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('AI gateway error:', response.status, errorText);
      
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ 
            error: 'credits_exhausted',
            message: 'Los créditos de IA se han agotado. Por favor, contacta soporte.' 
          }),
          { 
            status: 402,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
          }
        );
      }
      
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ 
            error: 'rate_limited',
            message: 'Demasiadas solicitudes. Por favor, espera un momento.' 
          }),
          { 
            status: 429,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
          }
        );
      }
      
      throw new Error(`Error en la API de IA: ${response.status}`);
    }

    const data = await response.json();
    const assistantMessage = data.choices[0].message.content;

    // Salvar resposta da IA
    await supabase.from('messages').insert({
      conversation_id: conversationId,
      role: 'assistant',
      content: assistantMessage
    });

    // Atualizar timestamp da conversa
    await supabase
      .from('conversations')
      .update({ updated_at: new Date().toISOString() })
      .eq('id', conversationId);

    return new Response(
      JSON.stringify({ message: assistantMessage }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error in chat function:', error);
    const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );
  }
});
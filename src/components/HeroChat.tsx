import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import sofiaAvatar from "@/assets/sofia-avatar-new.jpg";
import { Send, Image as ImageIcon, Loader2 } from "lucide-react";
interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  image_url?: string;
  created_at: string;
}
const HeroChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [conversationId, setConversationId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const {
    toast
  } = useToast();
  const {
    user
  } = useAuth();
  useEffect(() => {
    if (user) {
      initializeConversation();
    }
  }, [user]);
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  useEffect(() => {
    if (!conversationId) return;

    // Configurar realtime para novas mensagens
    const channel = supabase.channel('messages-channel').on('postgres_changes', {
      event: 'INSERT',
      schema: 'public',
      table: 'messages',
      filter: `conversation_id=eq.${conversationId}`
    }, payload => {
      const newMessage = payload.new as Message;
      setMessages(prev => {
        // Evitar duplicatas
        if (prev.some(m => m.id === newMessage.id)) {
          return prev;
        }
        return [...prev, newMessage];
      });
    }).subscribe();
    return () => {
      supabase.removeChannel(channel);
    };
  }, [conversationId]);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "nearest"
    });
  };
  const initializeConversation = async () => {
    if (!user) return;
    try {
      // Buscar conversa mais recente ou criar nova
      const {
        data: existingConversations
      } = await supabase.from('conversations').select('*').eq('user_id', user.id).order('updated_at', {
        ascending: false
      }).limit(1);
      if (existingConversations && existingConversations.length > 0) {
        const conversation = existingConversations[0];
        setConversationId(conversation.id);

        // Carregar mensagens
        const {
          data: msgs
        } = await supabase.from('messages').select('*').eq('conversation_id', conversation.id).order('created_at', {
          ascending: true
        });
        if (msgs) {
          setMessages(msgs as Message[]);
        }
      } else {
        // Criar nova conversa
        const {
          data: newConversation
        } = await supabase.from('conversations').insert({
          user_id: user.id
        }).select().single();
        if (newConversation) {
          setConversationId(newConversation.id);
        }
      }
    } catch (error) {
      console.error('Erro ao inicializar conversa:', error);
    }
  };
  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "Imagen muy grande",
          description: "Por favor selecciona una imagen menor a 5MB",
          variant: "destructive"
        });
        return;
      }
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  const convertImageToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = (reader.result as string).split(',')[1];
        resolve(base64);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };
  const sendMessage = async () => {
    if (!input.trim() && !imageFile || !conversationId || !user) return;
    setLoading(true);
    try {
      let imageBase64 = null;
      if (imageFile) {
        imageBase64 = await convertImageToBase64(imageFile);
      }
      const {
        data: {
          session
        }
      } = await supabase.auth.getSession();
      if (!session) {
        throw new Error('Sesión no válida');
      }
      const response = await supabase.functions.invoke('chat', {
        body: {
          conversationId,
          message: input.trim() || "¿Qué opinas de esta imagen?",
          imageBase64
        }
      });
      
      if (response.error) {
        // Check if it's a specific error from our edge function
        const errorData = response.data;
        if (errorData?.error === 'credits_exhausted') {
          toast({
            title: "Créditos agotados",
            description: "Los créditos de IA se han agotado temporalmente. Por favor, contacta soporte para más información.",
            variant: "destructive"
          });
          return;
        }
        if (errorData?.error === 'rate_limited') {
          toast({
            title: "Demasiadas solicitudes",
            description: "Por favor, espera unos segundos antes de enviar otro mensaje.",
            variant: "destructive"
          });
          return;
        }
        throw response.error;
      }
      setInput("");
      setImageFile(null);
      setImagePreview(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
      textareaRef.current?.focus({ preventScroll: true });
    } catch (error: any) {
      console.error('Erro ao enviar mensagem:', error);
      toast({
        title: "Error",
        description: error.message || "No se pudo enviar el mensaje",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };
  if (!user) {
    return <section className="py-12 md:py-20 bg-gradient-to-br from-background via-background-secondary to-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              🌹 Chat Sofía 24/7
            </h2>
            <p className="text-lg md:text-xl text-primary-light mb-6">
              Inicia sesión para acceder a tu mentora emocional
            </p>
          </div>
        </div>
      </section>;
  }
  return <section className="py-8 md:py-16 bg-gradient-to-br from-background via-background-secondary to-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid md:grid-cols-[1fr_2fr] gap-6 md:gap-12 items-start">
          <div className="space-y-5 md:space-y-7">
            <div className="rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-background/40 to-secondary/10 p-5 md:p-7 shadow-md">
              <div className="flex items-center justify-between mb-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-primary/15 text-primary px-3 py-1 text-xs md:text-sm">
                  ✨ Mentora emocional en tiempo real
                </span>
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-primary mb-2">
                Chat Sofía
              </h2>
              <p className="text-base md:text-lg text-foreground-secondary mb-4">
                Escribe. Respira. Recibe claridad y calma.
              </p>
              <div className="flex gap-2">
                <Button
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                  onClick={() => {
                    document.getElementById('chat-sofia')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    setTimeout(() => textareaRef.current?.focus({ preventScroll: true }), 300);
                  }}
                >
                  Empezar ahora
                </Button>
                <Button
                  variant="link"
                  className="text-primary px-0"
                  onClick={() => document.getElementById('mentoria-modulos')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                >
                  Ver contenidos
                </Button>
              </div>
            </div>

            <div className="space-y-3 md:space-y-4 text-foreground leading-relaxed text-sm md:text-base">
              <p>
                Cada vez que sientas miedo, dudas o ansiedad... no tienes que enfrentarlo sola.
              </p>
              <p>
                Escríbele a Sofía. Cuéntale lo que pasó, muéstrale el mensaje que él te envió, dile cómo te sientes.
              </p>
              <div className="space-y-2 pl-3 md:pl-4 border-l-2 border-primary/30">
                <p className="font-medium text-primary text-sm md:text-base">Ella te dirá:</p>
                <ul className="space-y-1 text-foreground-secondary text-sm md:text-base">
                  <li>• Qué hacer exactamente</li>
                  <li>• Qué decir (y qué evitar)</li>
                  <li>• Qué frecuencia o ritual usar</li>
                  <li>• Cómo mantener la calma mientras esperas</li>
                </ul>
              </div>
            </div>

            <div className="rounded-2xl bg-card border border-primary/25 p-5 md:p-6">
              <p className="font-semibold text-primary flex items-center gap-2 text-sm md:text-base mb-2">
                💡 Usa este chat cuando
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="bg-background-secondary/40 rounded-lg p-3">
                  <ul className="space-y-1.5 text-xs md:text-sm text-foreground-secondary">
                    <li>• Él tarda en responder y sientes ansiedad</li>
                    <li>• Tienes miedo de decir algo que lo aleje</li>
                    <li>• No sabes cómo interpretar su mensaje</li>
                  </ul>
                </div>
                <div className="bg-background-secondary/40 rounded-lg p-3">
                  <ul className="space-y-1.5 text-xs md:text-sm text-foreground-secondary">
                    <li>• Sientes celos, inseguridad o dudas</li>
                    <li>• Necesitas calma antes de actuar</li>
                    <li>• Quieres una respuesta cálida y clara</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna direita - Chat funcional */}
          <div id="chat-sofia" className="w-full bg-card border border-primary/30 rounded-2xl overflow-hidden shadow-2xl hover:shadow-primary/20 transition-all duration-300">
            {/* Header do chat */}
            <div className="bg-background-secondary border-b border-border p-3 md:p-4 flex items-center gap-3">
              <img src={sofiaAvatar} alt="Sofía" className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover ring-2 ring-primary/50" />
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-foreground text-sm md:text-base truncate">Sofía</h3>
                <p className="text-xs text-foreground-secondary truncate">Mentoría del Amor Eterno™</p>
              </div>
              <div className="text-xs text-primary flex items-center gap-1 shrink-0">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="hidden sm:inline">En línea</span>
              </div>
            </div>

            {/* Área de mensagens */}
            <ScrollArea className="h-[300px] md:h-[400px] lg:h-[500px] p-3 md:p-4 bg-background/50">
              <div className="space-y-3 md:space-y-4">
                {messages.length === 0 && <div className="text-center py-8 md:py-12">
                    <p className="text-muted-foreground text-sm md:text-base">
                      Hola hermosa 💕<br />
                      ¿En qué puedo ayudarte hoy?
                    </p>
                  </div>}
                
                {messages.map(message => <div key={message.id} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`rounded-2xl p-3 md:p-4 max-w-[85%] ${message.role === 'user' ? 'bg-primary/20 text-foreground rounded-tr-sm' : 'bg-muted text-foreground rounded-tl-sm'}`}>
                      {message.image_url && <img src={message.image_url} alt="Imagen compartida" className="rounded-lg mb-2 max-w-full h-auto" />}
                      <p className="text-xs md:text-sm leading-relaxed whitespace-pre-wrap">
                        {message.content}
                      </p>
                    </div>
                  </div>)}
                
                {loading && <div className="flex justify-start">
                    <div className="bg-muted text-foreground rounded-2xl rounded-tl-sm p-3 md:p-4">
                      <Loader2 className="w-4 h-4 md:w-5 md:h-5 animate-spin" />
                    </div>
                  </div>}
                
                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>

            {/* Preview de imagem */}
            {imagePreview && <div className="px-3 md:px-4 py-2 bg-background-secondary border-t border-border">
                <div className="relative inline-block">
                  <img src={imagePreview} alt="Preview" className="h-16 md:h-20 w-auto rounded-lg" />
                  <button onClick={() => {
                setImageFile(null);
                setImagePreview(null);
                if (fileInputRef.current) {
                  fileInputRef.current.value = "";
                }
              }} className="absolute -top-2 -right-2 bg-destructive text-white rounded-full w-5 h-5 md:w-6 md:h-6 flex items-center justify-center text-xs md:text-sm hover:bg-destructive/90">
                    ×
                  </button>
                </div>
              </div>}

            {/* Input de mensagem */}
            <div className="bg-background-secondary border-t border-border p-3 md:p-4">
              <div className="flex gap-2">
                <input ref={fileInputRef} type="file" accept="image/*" onChange={handleImageSelect} className="hidden" />
                <Button type="button" size="icon" variant="outline" onClick={() => fileInputRef.current?.click()} disabled={loading} className="shrink-0 h-9 w-9 md:h-10 md:w-10">
                  <ImageIcon className="w-4 h-4 md:w-5 md:h-5" />
                </Button>
                <Textarea ref={textareaRef} value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  sendMessage();
                }
              }} placeholder="Escribe tu mensaje..." className="min-h-[36px] max-h-[100px] md:min-h-[40px] md:max-h-[120px] resize-none text-sm md:text-base" disabled={loading} />
                <Button onClick={sendMessage} disabled={loading || !input.trim() && !imageFile} size="icon" className="shrink-0 h-9 w-9 md:h-10 md:w-10">
                  <Send className="w-4 h-4 md:w-5 md:h-5" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2 text-center">
                Sofía te responderá en segundos
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroChat;
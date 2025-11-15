import { useState } from "react";
import { FileText, AlertTriangle, CheckSquare, MessageSquare, Brain, HeartCrack } from "lucide-react";
import { Button } from "@/components/ui/button";
import RitualModal from "@/components/RitualModal";

const recursos = [
  {
    icon: FileText,
    titulo: "Frases que mantienen la conexión emocional sin parecer desesperada",
    key: "frases"
  },
  {
    icon: AlertTriangle,
    titulo: "Guía de emergencia: Qué hacer cuando él se aleja de repente",
    key: "guia"
  },
  {
    icon: CheckSquare,
    titulo: "Checklist anti-sabotaje: Qué NO hacer cuando estás ansiosa",
    key: "checklist"
  },
  {
    icon: MessageSquare,
    titulo: "Plantillas de mensajes para diferentes situaciones",
    key: "plantillas"
  },
  {
    icon: Brain,
    titulo: "Cómo interpretar sus silencios sin inventar historias",
    key: "silencios"
  },
  {
    icon: HeartCrack,
    titulo: "Primeros auxilios emocionales: Calmar el dolor en 5 pasos",
    key: "primeros"
  }
];

const libraryContent: Record<string, { title: string; subtitle?: string; content: string }> = {
  frases: {
    title: "📱 Frases que mantienen la conexión emocional sin parecer desesperada",
    subtitle: "Mantén la conversación viva sin energía de persecución",
    content: `
      <p>Cuando quieres mantener la conversación viva sin caer en la energía de persecución, estas frases te ayudarán.</p>
      <h2>Para responder después de un silencio</h2>
      <ul>
        <li>"Justo estaba pensando en ti ☺️"</li>
        <li>"Qué sorpresa tan linda escucharte"</li>
        <li>"Me hizo sonreír ver tu mensaje"</li>
      </ul>
      <h2>Para mantener conversación sin presionar</h2>
      <ul>
        <li>"Cuéntame más de eso cuando tengas tiempo"</li>
        <li>"Suena interesante, me gustaría saber cómo te fue"</li>
        <li>"Avísame cuando estés libre para conversar mejor"</li>
      </ul>
      <h2>Para cerrar una conversación con elegancia</h2>
      <ul>
        <li>"Espero que tengas un lindo día/noche 💫"</li>
        <li>"Nos hablamos pronto"</li>
        <li>"Cuídate mucho"</li>
      </ul>
      <h2>Para responder a mensajes cortos</h2>
      <ul>
        <li>"😊" + cambio de tema breve</li>
        <li>"Me alegra saber de ti"</li>
        <li>"Qué bueno que estés bien"</li>
      </ul>
      <p><strong>Regla de oro:</strong> Nunca termines con pregunta ansiosa. Termina dejando la puerta abierta pero sin empujar.</p>
    `
  },
  guia: {
    title: "🚨 Guía de emergencia: Qué hacer cuando él se aleja de repente",
    subtitle: "Actúa con calma estratégica en vez de ansiedad",
    content: `
      <h2>Paso 1: Respira antes de actuar (2 minutos)</h2>
      <ul>
        <li>No tomes tu celular inmediatamente</li>
        <li>Haz 5 respiraciones profundas</li>
        <li>Reconoce: "Esto dispara mi miedo al abandono"</li>
      </ul>
      <h2>Paso 2: No escribas nada (las primeras 24 horas)</h2>
      <ul>
        <li>El silencio estratégico es poderoso</li>
        <li>Él necesita sentir tu ausencia para valorar tu presencia</li>
        <li>Lo que escribas ahora probablemente lo alejará más</li>
      </ul>
      <h2>Paso 3: Observa el patrón</h2>
      <p>Pregúntate:</p>
      <ul>
        <li>¿Es la primera vez que se aleja?</li>
        <li>¿Cuánto tiempo suele durar su distancia?</li>
        <li>¿Siempre regresa por sí mismo?</li>
      </ul>
      <h2>Paso 4: Mantén tu vida activa</h2>
      <ul>
        <li>No canceles planes esperando su mensaje</li>
        <li>Sal con amigas</li>
        <li>Haz ejercicio</li>
        <li>Trabaja en tus proyectos</li>
      </ul>
      <h2>Paso 5: Si después de 3–5 días no dice nada</h2>
      <p>Puedes enviar UN mensaje ligero:</p>
      <ul>
        <li>"Hola, ¿cómo estás? 😊"</li>
        <li>"Espero que estés bien"</li>
      </ul>
      <p>Y luego: espera. Si no responde o responde frío, es tu señal de soltar y enfocarte en ti.</p>
      <p><em>Recuerda:</em> Un hombre que realmente te quiere no desaparece sin explicación. Si se aleja, está procesando algo (en él, no en ti).</p>
    `
  }
  ,
  checklist: {
    title: "✋ Checklist anti-sabotaje: Qué NO hacer cuando estás ansiosa",
    subtitle: "Protege tu energía de acciones que alejan",
    content: `
      <p>Cuando sientes ansiedad por él, tu cerebro te empuja a hacer cosas que alejan en lugar de atraer. Este checklist te protege de ti misma.</p>
      <h2>❌ NO hacer — En redes sociales</h2>
      <ul>
        <li>❌ Ver sus historias compulsivamente</li>
        <li>❌ Stalkear a sus seguidoras nuevas</li>
        <li>❌ Publicar indirectas para que él vea</li>
        <li>❌ Dar like a TODO lo que sube</li>
        <li>❌ Comentar en todas sus fotos</li>
      </ul>
      <h2>❌ NO hacer — En mensajes</h2>
      <ul>
        <li>❌ Enviar doble o triple mensaje sin respuesta</li>
        <li>❌ Escribir "hola" solo para ver si responde</li>
        <li>❌ Enviar mensajes a las 2 AM</li>
        <li>❌ Borrar y reenviar mensajes "corregidos"</li>
        <li>❌ Preguntarle "¿estás molesto conmigo?"</li>
      </ul>
      <h2>❌ NO hacer — En conversaciones</h2>
      <ul>
        <li>❌ Preguntarle constantemente "¿qué sientes por mí?"</li>
        <li>❌ Pedirle que "defina la relación" cuando hay tensión</li>
        <li>❌ Reclamarle por cada like que da</li>
        <li>❌ Compararte con sus ex</li>
        <li>❌ Decirle "si no me quieres, dímelo"</li>
      </ul>
      <h2>❌ NO hacer — Contigo misma</h2>
      <ul>
        <li>❌ Cancelar tu vida esperando que te escriba</li>
        <li>❌ Analizar cada palabra de sus mensajes con 5 amigas</li>
        <li>❌ Crear escenarios catastróficos en tu mente</li>
        <li>❌ Llamarlo a su trabajo/casa sin razón urgente</li>
        <li>❌ Aparecerte "casualmente" donde sabes que estará</li>
      </ul>
      <h2>✅ SÍ hacer</h2>
      <ul>
        <li>✅ Hacer el ritual de emergencia (2 minutos)</li>
        <li>✅ Llamar a una amiga de confianza (no a él)</li>
        <li>✅ Escribir en tu diario lo que sientes</li>
        <li>✅ Salir a caminar para regular tu cuerpo</li>
        <li>✅ Esperar al menos 2 horas antes de responder</li>
        <li>✅ Recordar: "Mi calma es mi poder"</li>
      </ul>
      <p><strong>Regla definitiva:</strong> Si sientes urgencia de hacerlo, probablemente NO deberías hacerlo.</p>
    `
  },
  plantillas: {
    title: "💬 Plantillas de mensajes para diferentes situaciones",
    subtitle: "Comunica con presencia, no con ansiedad",
    content: `
      <h2>1. Cuando él te escribe después de días de silencio</h2>
      <ul>
        <li>❌ Reactiva: "¿Y ahora sí te acordaste de mí? Pensé que ya no querías saber nada."</li>
        <li>✅ Femenina: "Hola 😊 ¿cómo has estado?"</li>
      </ul>
      <h2>2. Cuando quieres saber si está molesto</h2>
      <ul>
        <li>❌ Ansiosa: "Siento que estás distante. ¿Hice algo mal? ¿Estás enojado conmigo?"</li>
        <li>✅ Calmada: "Te noto un poco callado últimamente. Estoy aquí si quieres conversar"</li>
      </ul>
      <h2>3. Cuando él cancela planes</h2>
      <ul>
        <li>❌ Reclamo: "Siempre haces lo mismo. Ya no sé si de verdad quieres verme."</li>
        <li>✅ Dignidad: "Está bien, entiendo. Avísame cuando tengas tiempo libre 😊"</li>
      </ul>
      <p>(Y luego: hacer planes sin él)</p>
      <h2>4. Cuando sientes que se está alejando</h2>
      <ul>
        <li>❌ Persecución: "¿Por qué ya no me escribes como antes? ¿Ya no sientes lo mismo?"</li>
        <li>✅ Presencia: "He estado pensando en darnos un poco de espacio para que ambos podamos extrañarnos. ¿Qué opinas?"</li>
      </ul>
      <h2>5. Cuando quieres terminar una discusión</h2>
      <ul>
        <li>❌ Drama: "Si ya no me quieres, mejor déjame ir. No voy a rogar por amor."</li>
        <li>✅ Madura: "Creo que ambos necesitamos calmarnos. Te propongo que hablemos mañana con la mente más clara"</li>
      </ul>
      <h2>6. Cuando él dice "necesito espacio"</h2>
      <ul>
        <li>❌ Pánico: "¿Espacio de qué? ¿Ya no quieres estar conmigo? Por favor, no te alejes."</li>
        <li>✅ Confianza: "Entiendo. Tómate el tiempo que necesites. Estaré bien"</li>
      </ul>
      <h2>7. Cuando no te invita a un evento importante</h2>
      <ul>
        <li>❌ Reclamo: "¿Por qué no me invitaste? ¿Te avergüenzas de mí?"</li>
        <li>✅ Curiosa: "¿Cómo estuvo [el evento]? Cuéntame"</li>
      </ul>
    `
  },
  silencios: {
    title: "🤫 Cómo interpretar sus silencios sin inventar historias",
    subtitle: "Interpreta con calma, no con historias",
    content: `
      <p>Los silencios de un hombre pueden disparar mil historias en tu mente. Aquí está la verdad:</p>
      <h2>Lo que su silencio NO significa</h2>
      <ul>
        <li>❌ "Ya no me quiere"</li>
        <li>❌ "Está con otra"</li>
        <li>❌ "Hice algo imperdonable"</li>
        <li>❌ "Me está castigando"</li>
        <li>❌ "Se está alejando para siempre"</li>
      </ul>
      <h2>Lo que su silencio SÍ puede significar</h2>
      <ul>
        <li>✅ Está procesando algo (trabajo, familia, presión personal)</li>
        <li>✅ Necesita espacio para pensar con claridad</li>
        <li>✅ No sabe qué decir y prefiere el silencio a decir algo equivocado</li>
        <li>✅ Está en su "cueva masculina" resolviendo algo internamente</li>
        <li>✅ Simplemente está ocupado y no lo está pensando tanto como tú</li>
      </ul>
      <h2>Cómo interpretarlo sabiamente</h2>
      <p>Pregúntate primero:</p>
      <ul>
        <li><strong>¿Cuánto tiempo lleva el silencio?</strong></li>
        <li>Menos de 24h = normal, respira</li>
        <li>2–3 días = dale espacio sin drama</li>
        <li>Más de 5 días sin explicación = puede ser señal de desinterés</li>
      </ul>
      <ul>
        <li><strong>¿Cómo fue el último contacto?</strong></li>
        <li>Si terminó bien = su silencio probablemente no es sobre ti</li>
        <li>Si hubo tensión = está procesando la situación</li>
      </ul>
      <ul>
        <li><strong>¿Es un patrón recurrente?</strong></li>
        <li>Si desaparece y regresa constantemente = red flag</li>
        <li>Si es la primera vez = dale el beneficio de la duda</li>
      </ul>
      <h2>Qué hacer durante su silencio</h2>
      <ul>
        <li>✅ Mantén tu vida activa: No te quedes esperando que aparezca</li>
        <li>✅ No llenes el vacío con mensajes: Deja que el silencio hable</li>
        <li>✅ Regula tu ansiedad: Usa los rituales de emergencia</li>
        <li>✅ Observa sin juzgar: Deja que la situación se revele por sí misma</li>
      </ul>
      <h2>Regla de oro</h2>
      <ul>
        <li>Un día de silencio = No hagas nada</li>
        <li>Tres días de silencio = Sigue sin hacer nada (él sabe dónde encontrarte)</li>
        <li>Una semana de silencio = Puedes enviar un mensaje breve y ligero</li>
        <li>Más de una semana sin respuesta = Es momento de soltar y enfocarte en ti</li>
      </ul>
      <p><em>Recuerda:</em> Si él quiere hablar contigo, encontrará la forma. Los hombres no "olvidan" escribirle a una mujer que les importa.</p>
    `
  },
  primeros: {
    title: "💔 Primeros auxilios emocionales: Calmar el dolor en 5 pasos",
    subtitle: "Regula picos de dolor sin hacer daño",
    content: `
      <p>Cuando el dolor emocional te golpea fuerte y sientes que no puedes más:</p>
      <h2>Paso 1: Reconoce que estás en crisis (1 minuto)</h2>
      <p>Di en voz alta o escribe:</p>
      <p class="italic">"Estoy sintiendo dolor emocional intenso. Mi cuerpo está en modo alarma. Esto es temporal, aunque no lo sienta así."</p>
      <h2>Paso 2: Técnica de enfriamiento emocional (2 minutos)</h2>
      <ul>
        <li>Toma hielo y sostenlo en tus manos</li>
        <li>O lava tu cara con agua fría</li>
        <li>O toma una ducha fría de 30 segundos</li>
      </ul>
      <p><strong>¿Por qué funciona?</strong> El frío activa tu nervio vago y calma tu sistema nervioso inmediatamente.</p>
      <h2>Paso 3: Llora si lo necesitas (5–10 minutos)</h2>
      <ul>
        <li>No reprimas las lágrimas</li>
        <li>Pon un temporizador de 10 minutos</li>
        <li>Llora todo lo que necesites durante ese tiempo</li>
        <li>Cuando suene el temporizador, respira profundo y pasa al siguiente paso</li>
      </ul>
      <p><strong>Importante:</strong> Llorar regula, no debilita.</p>
      <h2>Paso 4: Descarga física del dolor (5 minutos)</h2>
      <p>Elige una:</p>
      <ul>
        <li>Golpea una almohada con fuerza</li>
        <li>Grita en una almohada</li>
        <li>Haz 20 sentadillas rápidas</li>
        <li>Sacude tu cuerpo durante 2 minutos</li>
      </ul>
      <p><strong>¿Por qué funciona?</strong> El dolor emocional se queda atrapado en el cuerpo. Necesitas moverlo físicamente.</p>
      <h2>Paso 5: Frase de contención y plan inmediato (3 minutos)</h2>
      <p>Coloca tu mano en tu corazón y di:</p>
      <p class="italic">"Esto duele, pero no me destruirá. He sobrevivido al 100% de mis días más difíciles. Este también pasará."</p>
      <p>Ahora haz un plan para las próximas 2 horas:</p>
      <ul>
        <li>✅ Llamar a alguien de confianza (no a él)</li>
        <li>✅ Salir a caminar aunque no quieras</li>
        <li>✅ Ver un episodio de algo ligero</li>
        <li>✅ Hacer cualquier cosa que te mantenga presente</li>
      </ul>
      <h2>Qué NO hacer en crisis emocional</h2>
      <ul>
        <li>❌ Llamarlo o escribirle desde el dolor</li>
        <li>❌ Tomar decisiones importantes</li>
        <li>❌ Aislarte completamente</li>
        <li>❌ Beber alcohol o usar sustancias</li>
        <li>❌ Stalkear sus redes sociales</li>
      </ul>
      <h2>Recuerda</h2>
      <ul>
        <li>💫 El dolor emocional tiene picos: El momento más intenso dura entre 15–90 minutos. Si resistes sin hacer algo destructivo durante ese tiempo, pasará.</li>
        <li>💫 No es debilidad sentir dolor: Es humano. Es válido. Y puedes sentirlo sin actuar destructivamente desde él.</li>
        <li>💫 Mañana te sentirás diferente: Quizás no "bien", pero diferente. Y esa diferencia es esperanza.</li>
      </ul>
      <p>Tu corazón es más fuerte de lo que crees. Y mereces cuidarlo, especialmente cuando duele.</p>
    `
  }
};

const Biblioteca = () => {
  const [selectedKey, setSelectedKey] = useState<string | null>(null);
  return (
    <section className="py-16 md:py-20 bg-background-secondary">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12 space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            📂 Biblioteca emocional
          </h2>
          <p className="text-xl text-foreground-secondary">
            Recursos de consulta rápida
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          {recursos.map((recurso, index) => {
            const Icon = recurso.icon;
            return (
              <Button
                key={index}
                variant="outline"
                className="h-auto p-4 md:p-6 justify-start text-left hover:bg-card hover:border-primary/30 transition-all group whitespace-normal"
                onClick={() => {
                  if (recurso.key && libraryContent[recurso.key]) {
                    setSelectedKey(recurso.key);
                  }
                }}
              >
                <div className="flex items-start gap-3 md:gap-4 w-full min-w-0">
                  <div className="bg-primary/10 p-2.5 md:p-3 rounded-lg group-hover:bg-primary/20 transition-colors flex-shrink-0">
                    <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <span className="text-foreground font-medium leading-snug flex-1 text-sm md:text-base break-words">
                    {recurso.titulo}
                  </span>
                </div>
              </Button>
            );
          })}
        </div>

        {selectedKey && (
          <RitualModal
            open={!!selectedKey}
            onOpenChange={(open) => !open && setSelectedKey(null)}
            title={libraryContent[selectedKey].title}
            subtitle={libraryContent[selectedKey].subtitle || ""}
            content={libraryContent[selectedKey].content}
          />
        )}
      </div>
    </section>
  );
};

export default Biblioteca;

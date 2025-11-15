import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Moon, Flower2, MessageSquare, Gem, ArrowRight } from "lucide-react";

const modulos = [
  {
    icon: Moon,
    titulo: "Módulo 1 - Reencuentro sin ansiedad",
    descripcion: "Los primeros contactos después del silencio son críticos. Aquí aprenderás exactamente qué decir, cuándo responder, y cómo regular tu ansiedad para no volver a alejarlo con mensajes desesperados o fríos.",
    beneficio: "Domina los primeros mensajes para que él sienta conexión, no presión."
  },
  {
    icon: Flower2,
    titulo: "Módulo 2 - Magnetismo femenino",
    descripcion: "Reconecta con tu energía femenina natural: presencia, calma, seguridad interna, y autoimagen. Cuando cambias tu energía, cambias todo lo que él percibe de ti.",
    beneficio: "Activa tu energía magnética sin juegos, manipulación ni falsas estrategias."
  },
  {
    icon: MessageSquare,
    titulo: "Módulo 3 - Comunicación emocional inteligente",
    descripcion: "Aprende el tono, timing y profundidad emocional perfectos. Cómo expresar lo que sientes sin parecer necesitada. Cómo resolver conflictos sin drama. Cómo hablarle de forma que se sienta atraído, no atacado.",
    beneficio: "Comunica tus emociones de forma que él quiera acercarse, no alejarse."
  },
  {
    icon: Gem,
    titulo: "Módulo 4 - Amor estable y consciente",
    descripcion: "Cómo sostener la relación después de que vuelve. Evitar autosabotajes. Manejar crisis, celos, silencios y dudas sin destruir todo. Construir amor duradero con paz y claridad.",
    beneficio: "Mantén el amor vivo día a día, sin miedo, sin dependencia, con confianza real."
  }
];

const MentoriaModulos = () => {
  const navigate = useNavigate();
  return (
    <section id="mentoria-modulos" className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12 space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            📖 Tu camino en la Mentoría del Amor Eterno™
          </h2>
          <p className="text-foreground-secondary max-w-3xl mx-auto leading-relaxed">
            Estos son los 4 pasos que te ayudarán a dejar de actuar desde el miedo, la ansiedad y el desespero... y empezar a actuar desde tu poder, tu calma y tu magnetismo natural.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {modulos.map((modulo, index) => {
            const Icon = modulo.icon;
            return (
              <div 
                key={index}
                className="bg-card border border-border rounded-2xl p-6 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-primary/10 p-3 rounded-xl group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground flex-1 leading-tight">
                    {modulo.titulo}
                  </h3>
                </div>

                <p className="text-foreground-secondary leading-relaxed mb-4">
                  {modulo.descripcion}
                </p>

                <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-4">
                  <p className="text-sm text-primary-light font-medium">
                    ✨ {modulo.beneficio}
                  </p>
                </div>

                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                  onClick={() => {
                    if (index === 0) {
                      navigate("/modulos/reencuentro-sin-ansiedad");
                    } else if (index === 1) {
                      navigate("/modulos/magnetismo-femenino");
                    } else if (index === 2) {
                      navigate("/modulos/comunicacion-emocional");
                    }
                  }}
                >
                  Ver contenido del módulo
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MentoriaModulos;

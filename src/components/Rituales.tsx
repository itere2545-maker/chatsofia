import { Sunrise, Moon, AlertCircle } from "lucide-react";
import { useState } from "react";
import RitualModal from "./RitualModal";
import { ritualsContent } from "@/data/ritualsContent";

const rituales = [
  {
    icon: Sunrise,
    titulo: "Ritual de la mañana",
    duracion: "(3 minutos)",
    descripcion: "Empieza el día desde tu poder, no desde tu miedo. Afirmaciones de presencia femenina, respiración consciente, y conexión con tu cuerpo antes de mirar el celular.",
    key: "morning" as const
  },
  {
    icon: Moon,
    titulo: "Ritual de la noche",
    duracion: "(5 minutos)",
    descripcion: "Libera la ansiedad acumulada del día. Suelta preocupaciones, miedos y escenarios mentales. Prepara tu corazón para dormir en paz, no en pánico.",
    key: "night" as const
  },
  {
    icon: AlertCircle,
    titulo: "Ritual de emergencia emocional",
    duracion: "(2 minutos)",
    descripcion: "Para momentos de crisis: cuando ves algo que te dispara (un like, un mensaje frío, silencio prolongado). Respira, escucha la frecuencia, escribe antes de actuar.",
    key: "emergency" as const
  }
];

const Rituales = () => {
  const [selectedRitual, setSelectedRitual] = useState<keyof typeof ritualsContent | null>(null);
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12 space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            🕯️ Rituales de energía femenina
          </h2>
          <p className="text-foreground-secondary max-w-3xl mx-auto leading-relaxed">
            Pequeñas prácticas diarias para volver a sentirte segura, presente, magnética y en paz contigo misma.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {rituales.map((ritual, index) => {
            const Icon = ritual.icon;
            return (
              <div 
                key={index}
                onClick={() => setSelectedRitual(ritual.key)}
                className="bg-card border border-border rounded-2xl p-8 hover:shadow-2xl hover:shadow-secondary/10 hover:border-secondary/30 transition-all duration-300 group text-center cursor-pointer"
              >
                <div className="bg-secondary/10 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                  <Icon className="w-10 h-10 text-secondary" />
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {ritual.titulo}
                </h3>
                
                <p className="text-sm text-primary-light font-medium mb-4">
                  {ritual.duracion}
                </p>

                <p className="text-foreground-secondary leading-relaxed text-sm">
                  {ritual.descripcion}
                </p>
              </div>
            );
          })}
        </div>

        {selectedRitual && (
          <RitualModal
            open={!!selectedRitual}
            onOpenChange={(open) => !open && setSelectedRitual(null)}
            title={ritualsContent[selectedRitual].title}
            subtitle={ritualsContent[selectedRitual].subtitle}
            content={ritualsContent[selectedRitual].content}
          />
        )}
      </div>
    </section>
  );
};

export default Rituales;

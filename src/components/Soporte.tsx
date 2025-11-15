import { Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Soporte = () => {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="bg-card border border-border rounded-2xl p-8 md:p-10 text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            📞 ¿Necesitas ayuda con tu acceso?
          </h2>

          <p className="text-foreground-secondary leading-relaxed">
            Si tienes algún problema técnico con la plataforma, los pagos, el acceso a módulos o la reproducción de contenido, nuestro equipo de soporte está aquí para ayudarte.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 py-4">
            <div className="flex items-center gap-3 text-foreground">
              <Mail className="w-5 h-5 text-primary" />
              <a 
                href="mailto:soporte@mentoriadelamoreterno.com"
                className="hover:text-primary transition-colors underline"
              >
                soporte@mentoriadelamoreterno.com
              </a>
            </div>

            <div className="flex items-center gap-3 text-foreground-secondary">
              <Clock className="w-5 h-5 text-secondary" />
              <span className="text-sm">Tiempo de respuesta: 24-48 horas hábiles</span>
            </div>
          </div>

          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Contactar soporte
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Soporte;

const Footer = () => {
  return (
    <footer className="bg-background-header border-t border-border/50 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center space-y-6">
          <h3 className="text-xl font-semibold text-foreground">
            Chat Sofía 24/7 + Mentoría del Amor Eterno™
          </h3>

          <div className="bg-card/50 border border-border rounded-lg p-6 max-w-3xl mx-auto">
            <p className="text-sm text-foreground-secondary leading-relaxed">
              <strong className="text-foreground">Aviso importante:</strong><br />
              Este contenido educativo no sustituye terapia psicológica profesional presencial. Es una guía de desarrollo personal y emocional basada en educación relacional.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-sm text-foreground-secondary">
            <a href="#" className="hover:text-primary transition-colors">
              Términos y condiciones
            </a>
            <span>|</span>
            <a href="#" className="hover:text-primary transition-colors">
              Política de privacidad
            </a>
            <span>|</span>
            <a href="#" className="hover:text-primary transition-colors">
              Política de reembolso
            </a>
          </div>

          <p className="text-xs text-foreground-secondary">
            © 2024 Mentoría del Amor Eterno. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

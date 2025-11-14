import React from 'react';
import { Star, Heart } from 'lucide-react';
import './TestimonialsSection.css';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "María G.",
      location: "Madrid",
      rating: 5,
      text: "Después de 3 meses de silencio, él volvió. Pero lo más importante no es que volvió, es que esta vez se quedó. La mentoría me enseñó cómo mantenerme fuerte incluso cuando quería escribirle a las 3 de la mañana.",
      highlight: "Ahora estamos planeando nuestra boda"
    },
    {
      name: "Carla V.",
      location: "Barcelona",
      rating: 5,
      text: "Pensé que tenía que ser perfecta para que me amara de nuevo. La mentoría me mostró que mi imperfección era mi poder. Cuando dejé de rogar y empecé a irradiar seguridad, él no podía creer cómo había cambiado.",
      highlight: "Me pidió volver en menos de un mes"
    },
    {
      name: "Sofía R.",
      location: "Valencia",
      rating: 5,
      text: "El miedo me paralizaba. Cada mensaje suyo me hacía temblar. Pero tener a alguien que me guiara en cada paso, que me dijera exactamente qué responder... eso cambió todo. No solo recuperé su amor, recuperé mi dignidad.",
      highlight: "Hoy somos más fuertes que nunca"
    }
  ];

  const stats = [
    {
      number: "847",
      lines: [
        <span className="text-success">Mujeres recuperaron su amor</span>,
        "y reconstruyeron una relación emocionalmente estable"
      ]
    },
    {
      number: "91%",
      lines: [
        <span className="text-success">Tasa de éxito comprobada</span>,
        "entre quienes aplicaron los pasos y las prácticas de la Dra. Sofía"
      ]
    },
    {
      number: "11 días",
      lines: [
        <span className="text-success">Para ver resultados efectivos en claridad emocional</span>
      ]
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="testimonials-content">
          {/* Header */}
          <div className="testimonials-header">
            <h2 className="section-title">
              No estás sola en este viaje
            </h2>
            <p className="section-subtitle">847 mujeres viven relaciones estables después de hacer esta mentoría</p>
          </div>

          {/* Stats */}
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-number">{stat.number}</div>
                {stat.lines.map((line, i) => (
                  <div key={i} className="stat-label">{line}</div>
                ))}
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-header">
                  <div className="testimonial-info">
                    <h3 className="testimonial-name">{testimonial.name}</h3>
                    <p className="testimonial-location">{testimonial.location}</p>
                  </div>
                  <div className="rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} color="#FFD700" fill="#FFD700" />
                    ))}
                  </div>
                </div>
                
                <div className="testimonial-content">
                  <p className="testimonial-text">
                    {testimonial.text}
                  </p>
                  <div className="testimonial-highlight">
                    <Heart size={16} color="#FF0099" />
                    <span className="highlight-text text-success">{testimonial.highlight}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Message */}
          <div className="testimonials-bottom">
            <div className="bottom-card">
              <h3 className="bottom-title">
                Ellas también pensaban que era imposible
              </h3>
              <p className="bottom-text">
                Y hoy están construyendo el amor que siempre soñaron.
                <br />
                No porque tuvieran superpoderes.
                <br />
                Sino porque decidieron que su amor valía la pena luchar por él,
                <br />
                <strong className="text-magenta">pero luchar con inteligencia, no con desesperación.</strong>
              </p>
              
              <div className="bottom-highlight">
                <p className="highlight-main">
                  <span className="text-success">Tú también puedes ser la próxima historia de éxito.</span>
                </p>
                <p className="highlight-sub">
                  La única diferencia entre ellas y tú es que ellas dieron el paso.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
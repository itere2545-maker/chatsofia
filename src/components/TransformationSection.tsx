import React from 'react';
import { Heart, ArrowRight } from 'lucide-react';
import './TransformationSection.css';

const TransformationSection: React.FC = () => {
  return (
    <section className="transformation-section">
      <div className="container">
        <div className="transformation-content">
          {/* Header */}
          <div className="section-header">
            <h2 className="section-title">
              Porque sé que estás pensando:
            </h2>
            <p className="section-subtitle">"Pero si ya tengo el método, ¿por qué necesito esto?"</p>
          </div>

          {/* Main Message */}
          <div className="main-message">
            <div className="message-block">
              <p className="intro-text">
                Y esa es una pregunta muy inteligente.
                <br />
                Déjame explicarte con la verdad:
              </p>

              <div className="comparison-section">
                <div className="before-section">
                  <h3 className="before-title">
                    El método te da el mapa.
                  </h3>
                  <p className="before-text">
                    Las frases, los tiempos, las estrategias.
                    <br />
                    Pero incluso con el mapa más perfecto…
                  </p>
                </div>

                <div className="arrow-divider">
                  <ArrowRight size={32} className="arrow-icon" />
                </div>

                <div className="after-section">
                  <h3 className="after-title">
                    ¿Quién camina contigo cuando el camino se pone empinado?
                  </h3>
                  <p className="after-text">
                    ¿Quién te sostiene cuando él responde y tus manos tiemblan?
                    <br />
                    ¿Quién te dice exactamente qué hacer cuando él dice
                    <br />
                    <strong className="highlight-text">"No sé"</strong> o
                    <br />
                    <strong className="highlight-text">"Déjame pensar"</strong> o
                    <br />
                    <strong className="highlight-text">"Ya no sé qué siento"</strong>?
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Critical Moment */}
          <div className="critical-moment">
            <div className="moment-card">
              <div className="moment-header">
                <Heart size={24} className="heart-icon" />
                <h3 className="moment-title">
                  Ahí es donde muchas mujeres pierden todo.
                </h3>
              </div>

              <div className="moment-content">
                <p className="moment-text">
                  No porque el método no funcione.
                  <br />
                  No porque ellas no sean suficientes.
                  <br />
                  Sino porque en ese momento crítico…
                </p>

                <div className="moment-highlight">
                  <p className="highlight-main">
                    <strong>El miedo las gana.</strong>
                  </p>
                  <p className="highlight-sub">
                    Y vuelven a los mismos patrones que las separaron.
                  </p>
                </div>

                <p className="moment-continue">
                  Vuelven a escribir demasiado rápido.
                  <br />
                  Vuelven a explicarse demasiado.
                  <br />
                  Vuelven a rogar, aunque sea en silencio.
                </p>
              </div>
            </div>
          </div>

          {/* Solution */}
          <div className="solution-message">
            <div className="solution-block">
              <p className="solution-intro">
                Y eso, mi amor, es lo que yo no voy a permitir que te pase.
              </p>

              <div className="solution-highlight-card">
                <div className="highlight-icon">
                  <Heart size={32} color="#FF0099" />
                </div>
                <h3 className="highlight-title">
                  Porque necesitas algo más que frases.
                </h3>
                <p className="highlight-text">
                  Necesitas una voz que te guíe en tiempo real.
                  <br />
                  Necesitas respuestas específicas para tus situaciones específicas.
                  <br />
                  Necesitas alguien que te diga:
                </p>

                <div className="guidance-list">
                  <div className="guidance-item">
                    <span className="guidance-marker">💭</span>
                    <span className="guidance-text">
                      "Él dijo esto. Aquí está exactamente cómo responder sin parecer desesperada."
                    </span>
                  </div>
                  <div className="guidance-item">
                    <span className="guidance-marker">💭</span>
                    <span className="guidance-text">
                      "Él está distante esta semana. Esto es lo que significa y esto es lo que haces."
                    </span>
                  </div>
                  <div className="guidance-item">
                    <span className="guidance-marker">💭</span>
                    <span className="guidance-text">
                      "Te sientes vulnerable. Aquí está cómo convertir esa vulnerabilidad en poder."
                    </span>
                  </div>
                </div>
              </div>

              <div className="final-message">
                <p className="final-text">
                  Eso es lo que hace la diferencia entre
                  <br />
                  <strong className="text-magenta">las mujeres que recuperan el amor</strong>
                  <br />
                  y las que lo dejan ir… otra vez.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;
import React, { useEffect, useState } from 'react';
import { Heart, CheckCircle } from 'lucide-react';
import './HeroSection.css';

const HeroSection: React.FC = () => {
  const messages = [
    'Tu compra fue aprobada',
    'Mira tu regalo al final de esta página'
  ];
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % messages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section">
      {/* Barra de notificação profissional */}
      <div className="notification-bar">
        <div className="container">
          <div className="notification-content">
            <Heart size={16} color="#00FF88" />
            <span className="notification-success">{messages[messageIndex]}</span>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-image-wrapper">
            <img
              className="hero-image"
              src="https://i.imgur.com/Lr0RtSU.png"
              alt="Foto"
            />
          </div>
          {/* Header com animação */}
          <div className="hero-header animate-fade-in-up">
            <h1 className="hero-title">
              Antes de acceder a tu
              <br />
              <span className="text-magenta">Frecuencia del Reencuentro</span>
              <br />
              necesito decirte algo
            </h1>
          </div>

          {/* Mensagem principal */}
          <div className="hero-message animate-fade-in-up delay-2">
            <div className="message-card">
              <div className="message-highlight">
                <p className="highlight-text">
                  <span className="text-success">Ya diste el paso correcto.</span>
                  <br />
                  <strong className="text-magenta">Él va a volver.</strong>
                </p>
              </div>

              <div className="message-content">
                <p className="main-text">
                  Y cuando eso suceda, quiero que estés preparada…
                  <br />
                  porque el verdadero momento comienza justo ahí.
                </p>

                <div className="fear-section">
                  <p className="fear-intro">
                    Él volvió a escribirte.
                    <br />
                    El corazón late fuerte.
                    <br />
                    Pero junto con la alegría… vuelve el miedo.
                  </p>

                  <div className="fear-list">
                    <div className="fear-item">
                      <CheckCircle size={16} className="fear-icon" />
                      <span>"¿Y si digo algo equivocado y se aleja otra vez?"</span>
                    </div>
                    <div className="fear-item">
                      <CheckCircle size={16} className="fear-icon" />
                      <span>"¿Y si esta es mi última oportunidad y la arruino?"</span>
                    </div>
                    <div className="fear-item">
                      <CheckCircle size={16} className="fear-icon" />
                      <span>"¿Y si repito los mismos errores que nos separaron?"</span>
                    </div>
                  </div>
                </div>

                <div className="solution-section">
                  <p className="solution-intro">
                    No lo dices en voz alta,
                    <br />
                    pero lo sientes en el pecho cada noche.
                  </p>

                  <div className="solution-highlight">
                    <p className="solution-text">
                      Respira, mi amor.
                      <br />
                      Escúchame bien:
                    </p>

                    <div className="solution-points">
                      <div className="point">
                        <span className="point-marker">👉</span>
                        <span>No estás sola.</span>
                      </div>
                      <div className="point">
                        <span className="point-marker">👉</span>
                        <span>Esto que sientes es normal.</span>
                      </div>
                      <div className="point">
                        <span className="point-marker">👉</span>
                        <span>Y esta vez… no vas a perderlo.</span>
                      </div>
                    </div>

                    <p className="power-message">
                      Porque ahora no vas a actuar desde la desesperación,
                      <br />
                      vas a actuar desde el <strong>poder</strong>.
                      <br />
                      Y la mujer que actúa desde su poder…
                      <br />
                      <span className="text-magenta">no ruega, atrae.</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Introdução do produto */}
          <div className="product-intro animate-fade-in-up delay-3">
            <div className="product-card">
              <div className="product-icon">
                <Heart size={32} color="#ff0099" />
              </div>
              <h2 className="product-title">
                La Mentoría del Amor Eterno™
              </h2>
              <p className="product-subtitle">
                no es solo un método:
                <br />
                es una guía viva creada para mujeres como tú —
                <br />
                mujeres que ya vivieron la pérdida, el silencio y el miedo,
                <br />
                y que ahora solo quieren una cosa:
                <br />
                <span className="text-magenta">que el amor vuelva y se quede.</span>
              </p>
            </div>
          </div>

          {/* Call to action inicial */}
          <div className="hero-cta animate-fade-in-up delay-4">
            <p className="cta-text">
              No estás frente a un curso.
              <br />
              No estás frente a un video más.
              <br />
              Estás frente a una experiencia diseñada para cambiar
              <br />
              cómo él te percibe, cómo tú te sientes,
              <br />
              y cómo el vínculo se sostiene.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
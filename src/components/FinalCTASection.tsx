import React, { useEffect } from 'react';
import { Heart, Shield } from 'lucide-react';
import './FinalCTASection.css';

declare global {
  interface Window {
    checkoutElements?: {
      init: (mode: string) => { mount: (selector: string) => void }
    }
  }
}

const FinalCTASection: React.FC = () => {
  useEffect(() => {
    const mount = () => {
      const ce = window.checkoutElements;
      if (ce) ce.init('salesFunnel').mount('#hotmart-sales-funnel');
    };
    if (!window.checkoutElements) {
      const s = document.createElement('script');
      s.src = 'https://checkout.hotmart.com/lib/hotmart-checkout-elements.js';
      s.onload = mount;
      document.body.appendChild(s);
    } else {
      mount();
    }
  }, []);
  return (
    <section className="final-cta-section">
      <div className="container">
        <div className="cta-content">
          {/* Header */}
          <div className="cta-header">
            <h2 className="cta-title">
              Ahora tienes dos opciones:
            </h2>
          </div>

          {/* Options Comparison */}
          <div className="options-comparison">
            <div className="option-left">
              <h3 className="option-title">
                Opción 1: Hacer esto sola
              </h3>
              <div className="option-content">
                <p className="option-text">
                  Puedes seguir intentándolo con las mismas estrategias que ya usaste.
                  <br />
                  Puedes seguir preguntándote qué pasaría si hubieras dicho algo diferente.
                  <br />
                  Puedes seguir rogando en silencio mientras él se aleja más.
                </p>
                <div className="option-result">
                  <p className="result-text">
                    <strong>Y en 6 meses seguirás exactamente donde estás ahora.</strong>
                  </p>
                </div>
              </div>
            </div>

            <div className="option-divider">
              <div className="divider-line"></div>
              <span className="divider-text">O</span>
              <div className="divider-line"></div>
            </div>

            <div className="option-right">
              <h3 className="option-title highlight">
                Opción 2: Tener una aliada que camine contigo
              </h3>
              <div className="option-content">
                <p className="option-text">
                  Tendrás respuestas específicas para tus situaciones específicas.
                  <br />
                  Tendrás una voz que te guíe cuando él responda.
                  <br />
                  Tendrás herramientas que funcionan, no teorías bonitas.
                </p>
                <div className="option-result">
                  <p className="result-text highlight">
                    <strong>Y en 30 días podrías estar celebrando su regreso.</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Main CTA */}
          <div className="main-cta">
            <div className="cta-card">
              <div className="cta-icon">
                <Heart size={48} color="#FF0099" />
              </div>
              <h3 className="cta-main-title">
                La decisión es tuya.
              </h3>
              <p className="cta-main-text">
                Pero recuerda: el amor que estás perdiendo no espera.
                <br />
                Cada día que pasa es un día que él se aleja más.
                <br />
                <strong className="text-magenta">Cada día que esperas es un día que otra mujer podría estar captando su atención.</strong>
              </p>
            </div>
          </div>

          <div className="offer-section">
            <div className="offer-card">
              <div className="offer-header">
                <img className="offer-badge-image" src="https://i.imgur.com/LD6khdu.png" alt="Oferta" />
                <h3 className="offer-title">OFERTA EXCLUSIVA PARA CLIENTAS DE LA FRECUENCIA DEL REENCUENTRO</h3>
              </div>
              <p className="offer-subtitle">Tu compra fue verificada con éxito.</p>
              <p className="offer-text">Por eso hoy desbloqueaste una condición que no está disponible para el público general:</p>

              <div className="bonus-section">
                <h4 className="bonus-title">💎 TODO LO QUE RECIBES HOY</h4>
                <div className="bonus-card">
                  <p className="bonus-highlight">🎁 BONO GRATUITO – Acceso vitalicio a la Mentoría del Amor Eterno™</p>
                  <p className="bonus-sub">Con los 4 pilares principales:</p>
                  <ul className="pillars-list">
                    <li className="pillar-item">
                      <span className="pillar-marker">1️⃣</span>
                      <div className="pillar-content">
                        <h5 className="pillar-title">Claridad emocional inmediata</h5>
                        <p className="pillar-text">Para dejar de actuar desde el miedo y recuperar el control de tus emociones.</p>
                      </div>
                    </li>
                    <li className="pillar-item">
                      <span className="pillar-marker">2️⃣</span>
                      <div className="pillar-content">
                        <h5 className="pillar-title">Comunicación inteligente y magnética</h5>
                        <p className="pillar-text">Scripts, ejemplos y guías para saber exactamente qué decir, cómo decirlo y cuándo.</p>
                      </div>
                    </li>
                    <li className="pillar-item">
                      <span className="pillar-marker">3️⃣</span>
                      <div className="pillar-content">
                        <h5 className="pillar-title">Energía femenina estable y atractiva</h5>
                        <p className="pillar-text">Rituales diarios, prácticas de autoestima y alineación vibracional para mantenerlo cerca.</p>
                      </div>
                    </li>
                    <li className="pillar-item">
                      <span className="pillar-marker">4️⃣</span>
                      <div className="pillar-content">
                        <h5 className="pillar-title">Guías prácticas para estabilidad emocional y amor duradero</h5>
                        <p className="pillar-text">Para no repetir errores, evitar sabotajes y construir una relación madura y estable.</p>
                      </div>
                    </li>
                  </ul>
                  <p className="bonus-note">Acceso para siempre, sin pagar nada extra.</p>
                </div>
              </div>

              <div className="main-access">
                <h4 className="access-title">⭐ ACCESO PRINCIPAL – CHAT SOFÍA 24/7 (30 días incluidos)</h4>
                <p className="access-sub">Tu guía emocional inteligente disponible a cualquier hora:</p>
                <ul className="scenarios-list">
                  <li className="scenario-item"><span className="scenario-marker">💬</span><span className="scenario-text">Cuando él escribe repentinamente</span></li>
                  <li className="scenario-item"><span className="scenario-marker">⏳</span><span className="scenario-text">Cuando tarda en responder</span></li>
                  <li className="scenario-item"><span className="scenario-marker">🫶</span><span className="scenario-text">Cuando te sientes insegura</span></li>
                  <li className="scenario-item"><span className="scenario-marker">📱</span><span className="scenario-text">Cuando no sabes si responder rápido o esperar</span></li>
                  <li className="scenario-item"><span className="scenario-marker">⚠️</span><span className="scenario-text">Cuando tienes miedo de arruinarlo todo</span></li>
                  <li className="scenario-item"><span className="scenario-marker">❓</span><span className="scenario-text">Cuando necesitas saber “qué hago ahora”</span></li>
                </ul>
                <p className="access-description">Es como tener una mentora emocional profesional en tu bolsillo, respondiéndote en segundos.</p>
              </div>

              <div className="renewal-section">
                <h4 className="renewal-title">🔄 Renovación opcional</h4>
                <p className="renewal-text">Después de los 30 días incluidos, puedes seguir con el Chat Sofía por solo:</p>
                <p className="renewal-price">👉 7,90 USD al mes</p>
                <p className="renewal-note">(convertido automáticamente a la moneda de tu país)</p>
                <p className="renewal-extra">Menos que una comida rápida… para tener apoyo emocional las 24 horas del día.</p>
                <div id="hotmart-sales-funnel"></div>
              </div>
            </div>
          </div>

          {/* Guarantee */}
          <div className="guarantee-section">
            <div className="guarantee-card">
              <div className="guarantee-header">
                <Shield size={32} color="#FFD700" />
                <h3 className="guarantee-title">
                  Garantía de 30 días
                </h3>
              </div>
              <p className="guarantee-text">
                Si en 30 días no ves ningún cambio en cómo él te responde,
                <br />
                si no sientes que estás recuperando tu poder,
                <br />
                si no ves siquiera un rayo de esperanza,
                <br />
                <strong>te devuelvo cada centavo.</strong>
                <br />
                <br />
                Porque estoy tan segura de que esto funciona que asumo todo el riesgo.
                <br />
                Tú solo asumes la responsabilidad de dar el paso.
              </p>
            </div>
          </div>

          

          {/* Final Button */}
          <div className="final-button-section">
            <p className="button-note">
              Al hacer clic, obtienes acceso inmediato a toda la mentoría
              <br />
              + acceso de por vida al grupo privado
              <br />
              + mi apoyo personal durante todo el proceso
            </p>
            
            <p className="currency-note">
              <small>convertido automaticamente a la moneda de tu pais</small>
            </p>
          </div>

          {/* Final Message */}
          <div className="final-message">
            <div className="message-card">
              <p className="message-text">
                No estás comprando una mentoría.
                <br />
                Estás invirtiendo en recuperar el amor de tu vida.
                <br />
                <br />
                No estás pagando por información.
                <br />
                Estás pagando por transformación.
                <br />
                <br />
                <strong className="text-magenta">
                  Y en 30 días, cuando él esté de vuelta a tu lado,
                  <br />
                  vas a mirar hacia atrás y vas a saber
                  <br />
                  que este fue el momento en que decidiste
                  <br />
                  que tu amor valía la pena luchar por él.
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
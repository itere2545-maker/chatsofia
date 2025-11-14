import React from 'react';
import { Heart } from 'lucide-react';
import './ModulesSection.css';

const ModulesSection: React.FC = () => {
  const modules = [
    {
      image: 'https://i.imgur.com/qZq1Kzm.png',
      title: "Módulo 1: La Frecuencia del Reencuentro",
      description: "Cómo sincronizar tu energía con la suya para crear un reencuentro inevitable",
      benefits: [
        "Las 3 palabras que activan su memoria emocional",
        "Cómo usar el silencio estratégico sin perder conexión",
        "La técnica del eco para que él sienta tu presencia incluso cuando no estás"
      ]
    },
    {
      image: 'https://i.imgur.com/toxAsW1.png',
      title: "Módulo 2: Mensajes que Reconectan",
      description: "Frases diseñadas científicamente para activar su sistema de apego",
      benefits: [
        "Los 5 mensajes que ningún hombre puede ignorar",
        "Cómo responder cuando él dice 'No sé'",
        "La técnica del espejo para que se vea reflejado en ti"
      ]
    },
    {
      image: 'https://i.imgur.com/7nyYDpq.png',
      title: "Módulo 3: El Poder de la Mujer Segura",
      description: "Transforma tu vulnerabilidad en la fuerza que él no puede resistir",
      benefits: [
        "Cómo convertir tus miedos en magnetismo",
        "La frase que hace que él se arrepienta de haberte perdido",
        "3 movimientos de poder para recuperar tu dignidad"
      ]
    },
    {
      image: 'https://i.imgur.com/3PRH5Oe.png',
      title: "Módulo 4: Protegiendo el Amor",
      description: "Crea un vínculo tan fuerte que ni el tiempo ni las circunstancias puedan romper",
      benefits: [
        "El ritual de las 21 noches para consolidar el reencuentro",
        "Cómo prevenir que vuelva a alejarse",
        "Los 3 pilares del amor eterno que solo las mujeres saben construir"
      ]
    }
  ];

  return (
    <section className="modules-section">
      <div className="container">
        <div className="modules-content">
          {/* Header */}
          <div className="modules-header">
            <h2 className="modules-title">💎 Mentoría completa – GRATIS</h2>
            <p className="modules-subtitle">Acceso vitalicio a todos los módulos (valor real $39 USD)</p>
          </div>

          {/* Main Message */}
          <div className="modules-intro">
            <div className="intro-card">
              <div className="intro-icon">
                <Heart size={48} color="#E34F9F" />
              </div>
              <h3 className="intro-title">
                La Mentoría del Amor Eterno™
              </h3>
              <p className="intro-text">
                No es solo información.
                <br />
                Es transformación guiada.
                <br />
                No es solo teoría.
                <br />
                Es práctica contigo, para ti, sobre ti.
              </p>
            </div>
          </div>

          {/* Modules Grid */}
          <div className="modules-grid">
            {modules.map((module, index) => (
              <div key={index} className="module-card">
                <div className="module-header">
                  <div className="module-image-wrapper">
                    <img className="module-image" src={module.image} alt={module.title} />
                    <div className="module-badge">{index + 1}</div>
                  </div>
                  <h3 className="module-title">{module.title}</h3>
                </div>
                <div className="module-content">
                  <p className="module-description">{module.description}</p>
                  <div className="module-benefits">
                    <h4 className="benefits-title">Lo que vas a obtener:</h4>
                    <ul className="benefits-list">
                      {module.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="benefit-item">
                          <span className="benefit-marker">✨</span>
                          <span className="benefit-text">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Message */}
          <div className="modules-bottom">
            <div className="bottom-card">
              <h3 className="bottom-title">
                Pero aquí está lo que realmente hace que esto sea diferente:
              </h3>
              <div className="bottom-points">
                <div className="point-item">
                  <span className="point-marker">🎯</span>
                  <div className="point-content">
                    <h4 className="point-title">
                      No estás sola en este viaje
                    </h4>
                    <p className="point-text">
                      Tendrás acceso directo a mí y a un grupo de mujeres que están viviendo exactamente lo mismo que tú
                    </p>
                  </div>
                </div>
                <div className="point-item">
                  <span className="point-marker">⚡</span>
                  <div className="point-content">
                    <h4 className="point-title">
                      Respuestas en tiempo real
                    </h4>
                    <p className="point-text">
                      Cuando él responda y no sepas qué hacer, estaré ahí para guiarte paso a paso
                    </p>
                  </div>
                </div>
                <div className="point-item">
                  <span className="point-marker">💎</span>
                  <div className="point-content">
                    <h4 className="point-title">
                      Transformación profunda
                    </h4>
                    <p className="point-text">
                      No solo recuperarás su amor, te convertirás en la mujer que nunca más tendrá que rogar por amor
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;
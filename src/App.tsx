import React from 'react';
import './App.css';
import './styles/Professional.css';
import './components/ModulesSection.css';

function App() {
  const modules = [
    {
      image: 'https://i.imgur.com/qZq1Kzm.png',
      title: 'Módulo 1: La Frecuencia del Reencuentro'
    },
    {
      image: 'https://i.imgur.com/toxAsW1.png',
      title: 'Módulo 2: Mensajes que Reconectan'
    },
    {
      image: 'https://i.imgur.com/7nyYDpq.png',
      title: 'Módulo 3: El Poder de la Mujer Segura'
    },
    {
      image: 'https://i.imgur.com/3PRH5Oe.png',
      title: 'Módulo 4: Protegiendo el Amor'
    }
  ];
  return (
    <div className="App">
      <section className="section section-contrast">
        <div className="container text-center animate-fade-in-up stack gap-md">
          <p className="lead">💔 Entiendo… quizá $7.90 no era para ti ahora.</p>
          <p className="lead">Pero antes de que te vayas, quiero darte una última oportunidad</p>
          <p className="lead">que jamás volverá a aparecer.</p>
          <div className="card card-stack">
            <h1 className="section-title">🌹 ÚLTIMA OFERTA ESPECIAL</h1>
            <p className="section-subtitle">Mentoría del Amor Eterno™ + Chat Sofía 24/7</p>
            <p className="lead">Por una fracción del precio original.</p>
            <p className="lead">💖 TU NUEVO PRECIO HOY:</p>
            <div className="pricing">
              <span className="price">Solo <strong>$4.90 USD al mes</strong></span>
            </div>
            <p>(en lugar de $7.90)</p>
            <p className="text-muted">Descuento inmediato por ser clienta de la Frecuencia del Reencuentro.</p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container card-stack">
          <h2 className="section-title text-center">✨ LO QUE RECIBES</h2>
          <div className="card animate-slide-in-left stack">
            <h3 className="section-title" style={{ fontSize: '2rem' }}>✅ Chat Sofía 24/7 – 30 días incluidos</h3>
            <div className="section-subtitle stack">
              <p>Tu guía personal en tiempo real:</p>
              <ul style={{ listStyle: 'none' }} className="stack gap-sm">
                <li>• Qué responder</li>
                <li>• Cuándo responder</li>
                <li>• Cómo mantener la calma</li>
                <li>• Qué hacer cuando sientes miedo o ansiedad</li>
              </ul>
              <p>Es como tener una mentora emocional profesional en tu bolsillo.</p>
            </div>
          </div>

          <div className="card animate-slide-in-right stack">
            <h3 className="section-title" style={{ fontSize: '2rem' }}>💎 Mentoría completa – GRATIS</h3>
            <div className="section-subtitle stack">
              <p>Acceso vitalicio a todos los módulos (valor real $39 USD)</p>
              <div className="modules-grid" style={{ marginTop: '1rem' }}>
                {modules.map((module, index) => (
                  <div key={index} className="module-card">
                    <div className="module-header">
                      <div className="module-image-wrapper">
                        <img className="module-image" src={module.image} alt={module.title} />
                        <div className="module-badge">{index + 1}</div>
                      </div>
                      <h3 className="module-title">{module.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
                <div style={{ padding: '16px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.06)', textAlign: 'center' }}>
                  <span style={{ display: 'block', fontWeight: 800, fontSize: '1.05rem', color: 'var(--text-primary)' }}>+ Frecuencia Amor Permanente</span>
                </div>
                <div style={{ padding: '16px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.06)', textAlign: 'center' }}>
                  <span style={{ display: 'block', fontWeight: 800, fontSize: '1.05rem', color: 'var(--text-primary)' }}>+ Guía de frases</span>
                </div>
                <div style={{ padding: '16px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.06)', textAlign: 'center' }}>
                  <span style={{ display: 'block', fontWeight: 800, fontSize: '1.05rem', color: 'var(--text-primary)' }}>+ Rituales de energía femenina</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      <section className="section">
        <div className="container">
          <div className="card stack">
            <h2 className="section-title">💰 RESUMEN RÁPIDO</h2>
            <img src="https://i.imgur.com/e0xybSD.png" alt="Resumen visual" style={{ display: 'block', width: '100%', maxWidth: '560px', margin: 'var(--spacing-lg) auto', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 16px 40px rgba(0,0,0,0.35)' }} />
            <div className="section-subtitle stack">
              <p>Chat Sofía 24/7 → <span className="text-magenta">$4.90/mes</span></p>
              <p>Mentoría completa → <span className="text-success">GRATIS</span></p>
              <p>Acceso vitalicio al contenido → <span className="text-primary">INCLUIDO</span></p>
            </div>
            
            <p>Es tu última oportunidad de tener todo esto por menos de un café.</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="#" className="btn btn-primary btn-large animate-glow">💕 Sí, acepto por solo $4.90/mes</a>
              <a href="#" className="btn btn-secondary btn-large">✨ Quiero todo por $4.90/mes</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container card-stack">
          <div className="card animate-scale-in stack">
            <h2 className="section-title">⏳ IMPORTANTE</h2>
            <div className="section-subtitle stack">
              <p>Esta oferta solo existe en esta página.</p>
              <p>Si sales, el precio vuelve a <span className="text-magenta">$7.90/mes</span> y pierdes la mentoría gratuita.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container text-center">
          <div className="card animate-fade-in-up stack">
            <h2 className="section-title">🔒 Garantía total de 30 días</h2>
            <p className="section-subtitle">Si no sientes paz, claridad y control emocional, recuperas tu dinero sin preguntas.</p>
            <a href="#" className="btn btn-primary btn-large">Acceso inmediato + 30 días incluidos</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
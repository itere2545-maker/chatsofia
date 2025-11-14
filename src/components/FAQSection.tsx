import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Heart } from 'lucide-react';
import './FAQSection.css';

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "¿Funcionará si él ya me dijo que no me quiere más?",
      answer: "Precisamente en esos casos es donde hemos visto los resultados más poderosos. Cuando un hombre dice 'no te quiero', muchas veces está protegiéndose de su propia vulnerabilidad. La mentoría te enseña exactamente cómo atravesar esa muralla sin empujar, sin rogar, simplemente recordándole quién eres tú y quién es él contigo."
    },
    {
      question: "¿Y si él ya está con otra persona?",
      answer: "Sí, incluso en esos casos. Porque no estamos compitiendo por él, estamos recordándole quién es él cuando está contigo. Las conexiones verdaderas no se borran con nuevas relaciones. La mentoría incluye técnicas específicas para estos casos delicados donde debes actuar con más precisión que nunca."
    },
    {
      question: "¿Cuánto tiempo tengo acceso a la mentoría?",
      answer: "Acceso de por vida. Porque sé que cada historia es diferente. Algunas mujeres ven resultados en semanas, otras necesitan meses. Lo importante es que cuando él responda, tengas a alguien que te guíe en ese momento crítico."
    },
    {
      question: "¿Qué pasa si no funciona con él?",
      answer: "Primero, déjame decirte que cuando aplicas estas técnicas con dedicación, los resultados aparecen. Pero si por alguna razón él no regresa, tú no estarás en el mismo lugar donde comenzaste. Habrás crecido, habrás recuperado tu poder, y habrás aprendido a amarte de una forma que atraerá un amor aún mejor. Muchas mujeres descubren que cuando se vuelven magnéticas, atraen amores que ni imaginaban posibles."
    },
    {
      question: "¿Es ético usar técnicas psicológicas para recuperar a alguien?",
      answer: "Estas técnicas no manipulan, revelan. No engañan, muestran la verdad de quién eres. No estamos creando una falsa imagen, estamos quitando las capas de miedo y desesperación que lo alejaron. Es como limpiar un diamante que estaba cubierto de polvo. ¿Es ético mostrar tu luz más brillante?"
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="container">
        <div className="faq-content">
          {/* Header */}
          <div className="faq-header">
            <h2 className="section-title">
              Sé que tienes preguntas
            </h2>
            <p className="section-subtitle">
              Déjame responder las que más escucho
            </p>
          </div>

          {/* FAQ List */}
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <button
                  className={`faq-question ${openIndex === index ? 'active' : ''}`}
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="question-text">{faq.question}</span>
                  <div className="question-icon">
                    {openIndex === index ? (
                      <ChevronUp size={20} color="#FF0099" />
                    ) : (
                      <ChevronDown size={20} color="#FF0099" />
                    )}
                  </div>
                </button>
                
                <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
                  <div className="answer-content">
                    <p className="answer-text">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Message */}
          <div className="faq-bottom">
            <div className="bottom-card">
              <div className="bottom-icon">
                <Heart size={32} color="#FF0099" />
              </div>
              <h3 className="bottom-title">
                ¿Tienes una pregunta que no ves aquí?
              </h3>
              <p className="bottom-text">
                Cuando entres a la mentoría, tendrás acceso directo a mí.
                <br />
                No estás comprando un curso más.
                <br />
                Estás ganando una aliada que caminará contigo en cada paso.
              </p>
              <div className="bottom-highlight">
                <p className="highlight-text">
                  <span className="text-success">Tu historia de amor no termina aquí.</span>
                  <br />
                  <strong className="text-magenta">Solo está esperando que des el siguiente paso.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
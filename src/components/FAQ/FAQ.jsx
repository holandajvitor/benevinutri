import React, { useState } from "react";
import "./FAQ.css";
import WhatsappButton from "../WhatsappButton/WhatsappButton";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const whatsappLink =
    "https://wa.me/558981235396?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta.";

  const faqItems = [
    {
      question: "Como funciona o atendimento online?",
      answer:
        "O atendimento é agendado para um horário conveniente para ambas as partes, realizado via WhatsApp ou plataforma de videochamada. Durante a sessão, analisamos seu histórico, definimos metas e criamos um plano alimentar personalizado.",
    },
    {
      question: "Preciso tomar algum suplemento alimentar?",
      answer:
        "A indicação de suplementos varia conforme suas necessidades específicas. Para atletas, gestantes ou casos específicos, podemos prescrever suplementação científica. Para a maioria dos pacientes, focamos em nutrição natural.",
    },
    {
      question: "Quais casos você atende?",
      answer: (
        <>
          Atendo diversos perfis:
          <ul>
            <li>Atletas (amadores e profissionais)</li>
            <li>Controle de peso (ganho ou perda)</li>
            <li>Distúrbios alimentares (anorexia, compulsão)</li>
            <li>Gestantes e lactantes</li>
            <li>Pacientes com diabetes ou hipertensão</li>
            <li>Vegetarianos/veganos</li>
          </ul>
        </>
      ),
    },
    {
      question: "Suas consultas têm retorno?",
      answer:
        "Sim! O acompanhamento é essencial. Agendamos retornos a cada 30-45 dias para ajustar o plano nutricional, monitorar resultados e garantir a evolução contínua.",
    },
    {
      question: "Quais os diferenciais no atendimento?",
      answer:
        "Meu método combina: ▶ Autonomia alimentar (sem dietas restritivas) ▶ Foco em hábitos sustentáveis ▶ Zero medicamentos ▶ Educação nutricional prática ▶ Acompanhamento humanizado",
    },
  ];

  return (
    <section id="faq" className="faq-section">
      <div className="faq-card">
        <h1>Perguntas Frequentes</h1>

        <div className="faq-items">
          {faqItems.map((item, index) => (
            <div className="faq-item" key={index}>
              <div
                className="question"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3>{item.question}</h3>
                <button className="toggle-button">
                  {openIndex === index ? "−" : "+"}
                </button>
              </div>

              {openIndex === index && (
                <div className="answer">
                  {typeof item.answer === "string" ? (
                    <p>{item.answer}</p>
                  ) : (
                    item.answer
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="faq-button-container">
          <WhatsappButton link={whatsappLink} />
        </div>
      </div>
    </section>
  );
}

export default FAQ;

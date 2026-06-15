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
        "Meu método combina autonomia alimentar (sem dietas restritivas), foco em hábitos sustentáveis, zero medicamentos, educação nutricional prática e acompanhamento humanizado.",
    },
  ];

  return (
    <section id="faq" className="faq-section">
      <div className="container faq-layout">
        <div className="faq-head">
          <span className="eyebrow" data-reveal>
            Perguntas frequentes
          </span>
          <h2
            className="section-title faq-title"
            data-reveal
            style={{ "--reveal-delay": "80ms" }}
          >
            Ainda com <em>dúvidas?</em>
          </h2>
          <p className="faq-sub" data-reveal style={{ "--reveal-delay": "140ms" }}>
            Reuni as perguntas que mais escuto antes da primeira consulta. Se
            ficar faltando alguma, é só me chamar.
          </p>
          <div
            className="faq-cta-aside"
            data-reveal
            style={{ "--reveal-delay": "200ms" }}
          >
            <WhatsappButton link={whatsappLink} />
          </div>
        </div>

        <div className="faq-items" data-reveal>
          {faqItems.map((item, index) => (
            <div
              className={`faq-item ${openIndex === index ? "open" : ""}`}
              key={index}
            >
              <button
                type="button"
                className="question"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <h3>{item.question}</h3>
                <span className="toggle-button" aria-hidden="true">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

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
      </div>
    </section>
  );
}

export default FAQ;

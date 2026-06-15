import React from "react";
import "./Home.css";
import nutri1 from "../../assets/images/nutri1.jpg";
import WhatsappButton from "../WhatsappButton/WhatsappButton";

function Home() {
  const whatsappLink =
    "https://wa.me/558981235396?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta.";
  return (
    <section id="home" className="home-section">
      <div className="container home-grid">
        <div className="home-text">
          <span className="eyebrow" data-reveal>
            Atendimento online
          </span>

          <h1 className="home-title" data-reveal style={{ "--reveal-delay": "80ms" }}>
            Nutrição que cabe na sua <em>rotina</em>, sem dietas que punem.
          </h1>

          <p className="home-lead" data-reveal style={{ "--reveal-delay": "160ms" }}>
            Consultas de nutrição 100% online, com a comodidade de cuidar da sua
            saúde de onde estiver. O acompanhamento é por WhatsApp ou
            videochamada — personalizado, próximo e construído para durar.
          </p>

          <div
            className="home-actions"
            data-reveal
            style={{ "--reveal-delay": "240ms" }}
          >
            <WhatsappButton link={whatsappLink} />
            <span className="home-reassure">Resposta no mesmo dia</span>
          </div>

          <ul
            className="home-points"
            data-reveal
            style={{ "--reveal-delay": "320ms" }}
          >
            <li>Plano alimentar sob medida</li>
            <li>Sem métodos restritivos</li>
            <li>Acompanhamento contínuo</li>
          </ul>
        </div>

        <div className="home-media" data-reveal style={{ "--reveal-delay": "200ms" }}>
          <div className="home-media-shape" aria-hidden="true"></div>
          <div className="home-photo">
            <img src={nutri1} alt="Raul Benevinuto, nutricionista" />
          </div>
          <div className="home-badge">
            <span className="home-badge-num">+500</span>
            <span className="home-badge-label">vidas transformadas</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;

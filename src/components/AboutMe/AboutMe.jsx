import React from "react";
import "./AboutMe.css";
import nutri2 from "../../assets/images/nutri2.jpg";
import WhatsappButton from "../WhatsappButton/WhatsappButton";
import InstagramButton from "../InstagramButton/InstagramButton";

function AboutMe() {
  const expertise = [
    "Nutrição esportiva e para o dia a dia",
    "Prescrição científica de suplementos",
    "Avaliação física e composição corporal",
    "Planejamento alimentar personalizado",
    "Educação nutricional para hábitos saudáveis",
  ];

  return (
    <section id="aboutme" className="about-section">
      <div className="container about-grid">
        <div className="about-media" data-reveal>
          <div className="about-photo">
            <img src={nutri2} alt="Raul Benevinuto, nutricionista" />
          </div>
          <div className="about-credential">
            <span className="about-credential-name">Raul Benevinuto</span>
            <span className="about-credential-role">
              Nutricionista clínico e esportivo
            </span>
          </div>
        </div>

        <div className="about-body">
          <span className="eyebrow" data-reveal>
            O profissional
          </span>
          <h2
            className="section-title about-title"
            data-reveal
            style={{ "--reveal-delay": "80ms" }}
          >
            Sobre <em>mim</em>
          </h2>

          <p
            className="about-intro"
            data-reveal
            style={{ "--reveal-delay": "140ms" }}
          >
            Acredito em uma nutrição que liberta, não que aprisiona. Te ajudo a
            alcançar seu objetivo sem métodos restritivos ou prejudiciais —
            construindo hábitos que se sustentam na vida real.
          </p>

          <div
            className="about-stats"
            data-reveal
            style={{ "--reveal-delay": "200ms" }}
          >
            <div className="stat">
              <span className="stat-num">+5</span>
              <span className="stat-label">anos de experiência</span>
            </div>
            <div className="stat">
              <span className="stat-num">+500</span>
              <span className="stat-label">vidas transformadas</span>
            </div>
            <div className="stat">
              <span className="stat-num">100%</span>
              <span className="stat-label">acompanhamento online</span>
            </div>
          </div>

          <div
            className="about-expertise"
            data-reveal
            style={{ "--reveal-delay": "260ms" }}
          >
            <h3 className="about-expertise-title">Como eu trabalho</h3>
            <ul>
              {expertise.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div
            className="about-actions"
            data-reveal
            style={{ "--reveal-delay": "320ms" }}
          >
            <WhatsappButton link="https://wa.me/558981235396?text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20consulta." />
            <InstagramButton link="https://www.instagram.com/benevinutri/" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;

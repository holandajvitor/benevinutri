import React from "react";
import "./AboutMe.css";
import nutri2 from "../../assets/images/nutri2.jpg";
import WhatsappButton from "../WhatsappButton/WhatsappButton";
import InstagramButton from "../InstagramButton/InstagramButton";

function AboutMe() {
  return (
    <section id="aboutme" className="about-section">
      <div className="about-card">
        <div className="about-text">
          <h1>Sobre Mim</h1>

          {/* Imagem para mobile */}
          <div className="mobile-image">
            <img src={nutri2} alt="Nutricionista Raul Benevinuto" />
          </div>

          <div className="about-content">
            <div className="destaque-box">
              <p>Já transformei mais de 500 vidas</p>
            </div>
            <ul>
              <li>
                <strong>Nome:</strong> Raul Benevinuto
              </li>
              <li>
                <strong>Experiência:</strong> Mais de 5 anos na área
              </li>
              <li>
                <strong>Especialidade:</strong>
                <br />
                Te ajudo a alcançar o seu objetivo sem métodos restritivos ou
                prejudiciais
              </li>
              <li>
                <strong>Expertise:</strong>
                <br />
                • Nutrição esportiva e para o dia a dia
                <br />
                • Prescrição científica de suplementos
                <br />
                • Avaliação física e composição corporal
                <br />
                • Planejamento alimentar personalizado
                <br />• Educação nutricional para hábitos saudáveis
              </li>
            </ul>

            <div className="buttons-container">
              <WhatsappButton link="https://wa.me/558981235396?text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20consulta." />
              <InstagramButton link="https://www.instagram.com/benevinutri/" />
            </div>
          </div>
        </div>

        {/* Imagem para desktop */}
        <div className="about-image">
          <img src={nutri2} alt="Nutricionista Raul Benevinuto" />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;

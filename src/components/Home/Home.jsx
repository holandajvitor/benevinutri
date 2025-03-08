import React from "react";
import "./Home.css";
import nutri1 from "../../assets/images/nutri1.jpg";
import WhatsappButton from "../WhatsappButton/WhatsappButton";

function Home() {
  const whatsappLink =
    "https://wa.me/558981235396?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta.";
  return (
    <section id="home" className="home-section">
      <div className="home-card">
        <div className="home-text">
          <h1>Atendimento On-line</h1>
          <p>
            Oferecemos consultas de nutrição online, proporcionando comodidade e
            flexibilidade para você cuidar da sua saúde de onde estiver. Nossos
            atendimentos são realizados via WhatsApp ou videochamada, garantindo
            um acompanhamento personalizado e eficiente.
          </p>
          <div className="whatsapp-button-container">
            <WhatsappButton link={whatsappLink} />
          </div>
        </div>
        <div className="home-image">
          <img src={nutri1} alt="Imagem do nutricionista" />
        </div>
      </div>
    </section>
  );
}

export default Home;

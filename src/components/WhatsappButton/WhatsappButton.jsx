import React from "react";
import "./WhatsappButton.css";
import whatsappIcon from "../../assets/images/icone-whatsapp.png";

function WhatsappButton({ link, mobile }) {
  return (
    <button
      className={`whatsapp-button ${mobile ? "mobile" : ""}`}
      onClick={() => (window.location.href = link)}
    >
      <img src={whatsappIcon} alt="WhatsApp" className="whatsapp-icon" />
      <span>Agendar Atendimento</span>
    </button>
  );
}

export default WhatsappButton;

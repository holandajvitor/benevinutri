import React from "react";
import "./InstagramButton.css";
import instagramIcon from "../../assets/images/icone-instagram.png";

function InstagramButton({ link }) {
  return (
    <button
      className="instagram-button"
      onClick={() => window.open(link, "_blank")}
    >
      <img src={instagramIcon} alt="Instagram" className="instagram-icon" />
      <span>Siga-me no Instagram</span>
    </button>
  );
}

export default InstagramButton;

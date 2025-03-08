import React from "react";
import "./Footer.css";
import emailIcon from "../../assets/images/icone-email.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-email">
          <img src={emailIcon} alt="Ícone de Email" className="email-icon" />
          <a href="mailto:benevinutri@gmail.com">benevinutri@gmail.com</a>
        </div>

        <div className="footer-copyright">
          <span>© Benevinutri - Todos os direitos reservados</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

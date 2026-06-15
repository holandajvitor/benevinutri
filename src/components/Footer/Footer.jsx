import React from "react";
import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <span className="footer-wordmark">Benevinutri</span>
          <span className="footer-tag">saúde e nutrição</span>
          <p className="footer-desc">
            Nutrição clínica e esportiva com atendimento online. Sem dietas que
            punem — só hábitos que ficam.
          </p>
        </div>

        <nav className="footer-nav" aria-label="Navegação do rodapé">
          <span className="footer-col-title">Navegar</span>
          <a href="#home">Início</a>
          <a href="#results">Resultados</a>
          <a href="#aboutme">Sobre mim</a>
          <a href="#faq">Dúvidas</a>
        </nav>

        <div className="footer-contact">
          <span className="footer-col-title">Contato</span>
          <a className="footer-link" href="mailto:benevinutri@gmail.com">
            <svg
              className="footer-ico"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <rect
                x="3"
                y="5"
                width="18"
                height="14"
                rx="2.5"
                stroke="currentColor"
                strokeWidth="1.6"
              />
              <path
                d="m4 7 8 6 8-6"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            benevinutri@gmail.com
          </a>
          <a
            className="footer-link"
            href="https://www.instagram.com/benevinutri/"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              className="footer-ico"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <rect
                x="3.5"
                y="3.5"
                width="17"
                height="17"
                rx="5"
                stroke="currentColor"
                strokeWidth="1.6"
              />
              <circle
                cx="12"
                cy="12"
                r="4"
                stroke="currentColor"
                strokeWidth="1.6"
              />
              <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" />
            </svg>
            @benevinutri
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>© {year} Benevinutri · Todos os direitos reservados</span>
          <span className="footer-credit">Raul Benevinuto · Nutricionista</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

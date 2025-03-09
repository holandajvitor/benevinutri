import React, { useState } from "react";
import "./Header.css";
import banner from "../../assets/images/banner.png";
import MenuButton from "../MenuButton/MenuButton";
import WhatsappButton from "../WhatsappButton/WhatsappButton";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const whatsappLink = "https://wa.me/558981235396";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerHeight = document.querySelector(".header").offsetHeight;
      const sectionPosition = section.offsetTop - headerHeight;
      window.scrollTo({ top: sectionPosition, behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-left">
        <img src={banner} alt="Banner" className="header-banner" />
        <div className="hamburger-menu" onClick={toggleMenu}>
          <div className={`hamburger-icon ${isMenuOpen ? "open" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      <div className={`header-center ${isMenuOpen ? "mobile-visible" : ""}`}>
        <nav className="menu">
          <MenuButton label="Home" onClick={() => scrollToSection("home")} />
          <MenuButton
            label="Resultados"
            onClick={() => scrollToSection("results")}
          />
          <MenuButton
            label="Sobre Mim"
            onClick={() => scrollToSection("aboutme")}
          />
          <MenuButton label="F.A.Q." onClick={() => scrollToSection("faq")} />
          <div className="mobile-whatsapp">
            <WhatsappButton link={whatsappLink} />
          </div>
        </nav>
      </div>

      {/* Botão WhatsApp visível apenas no desktop */}
      <div className="header-right">
        <WhatsappButton link={whatsappLink} />
      </div>
    </header>
  );
}

export default Header;

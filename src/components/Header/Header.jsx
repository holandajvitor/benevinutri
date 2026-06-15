import React, { useState, useEffect } from "react";
import "./Header.css";
import banner from "../../assets/images/banner.png";
import MenuButton from "../MenuButton/MenuButton";
import WhatsappButton from "../WhatsappButton/WhatsappButton";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const whatsappLink = "https://wa.me/558981235396";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-inner">
        <div className="header-left">
          <img
            src={banner}
            alt="Benevinutri — saúde e nutrição"
            className="header-banner"
            onClick={() => scrollToSection("home")}
          />
          <button
            type="button"
            className="hamburger-menu"
            onClick={toggleMenu}
            aria-label="Abrir menu"
            aria-expanded={isMenuOpen}
          >
            <div className={`hamburger-icon ${isMenuOpen ? "open" : ""}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>

        <div className={`header-center ${isMenuOpen ? "mobile-visible" : ""}`}>
          <nav className="menu">
            <MenuButton label="Início" onClick={() => scrollToSection("home")} />
            <MenuButton
              label="Resultados"
              onClick={() => scrollToSection("results")}
            />
            <MenuButton
              label="Sobre mim"
              onClick={() => scrollToSection("aboutme")}
            />
            <MenuButton label="Dúvidas" onClick={() => scrollToSection("faq")} />
            <div className="mobile-whatsapp">
              <WhatsappButton link={whatsappLink} />
            </div>
          </nav>
        </div>

        {/* Botão WhatsApp visível apenas no desktop */}
        <div className="header-right">
          <WhatsappButton link={whatsappLink} />
        </div>
      </div>
    </header>
  );
}

export default Header;

import React, { useState, useEffect, useRef } from "react";
import "./Results.css";
import antesdepois1 from "../../assets/images/antesdepois1.jpg";
import antesdepois2 from "../../assets/images/antesdepois2.jpg";
import antesdepois3 from "../../assets/images/antesdepois3.jpg";
import antesdepois4 from "../../assets/images/antesdepois4.jpg";
import antesdepois5 from "../../assets/images/antesdepois5.jpg";
import antesdepois6 from "../../assets/images/antesdepois6.jpg";

function Results() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const carouselRef = useRef(null);
  const images = [
    antesdepois1,
    antesdepois2,
    antesdepois3,
    antesdepois4,
    antesdepois5,
    antesdepois6,
  ];

  // Swipe para mobile
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const diff = touchStart - touchEnd;
    if (diff > 5) {
      // Swipe para esquerda
      setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
    } else if (diff < -5) {
      // Swipe para direita
      setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  // Ajuste de largura para mobile
  useEffect(() => {
    if (window.innerWidth <= 768 && carouselRef.current) {
      carouselRef.current.style.width = "100vw";
      carouselRef.current.style.marginLeft = "calc(-50vw + 50%)";
    }
  }, []);

  return (
    <section id="results" className="results-section">
      <div className="container results-head">
        <span className="eyebrow is-centered" data-reveal>
          O método na prática
        </span>
        <h2 className="section-title results-title" data-reveal>
          Resultados <em>reais</em> de quem confiou no processo
        </h2>
        <p className="results-sub" data-reveal>
          Transformações construídas com consistência, sem atalhos e sem
          sofrimento. Arraste para ver mais.
        </p>
      </div>

      <div
        className="carousel-container"
        ref={carouselRef}
        data-reveal
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Versão Desktop */}
        <button
          className="arrow-button prev"
          aria-label="Anterior"
          onClick={() =>
            setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1))
          }
        >
          &#10094;
        </button>

        <div className="carousel-card">
          <div
            className="images-wrapper"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((img, index) => (
              <div key={index} className="image-container">
                <img
                  src={img}
                  alt={`Resultado ${index + 1}`}
                  className="result-image"
                />
                <div className="image-label">
                  <span className="before">Antes</span>
                  <span className="after">Depois</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          className="arrow-button next"
          aria-label="Próximo"
          onClick={() =>
            setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0))
          }
        >
          &#10095;
        </button>

        {/* Indicadores */}
        <div className="scroll-indicator">
          {images.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              aria-label={`Ir para o resultado ${index + 1}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Results;

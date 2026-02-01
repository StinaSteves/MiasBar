import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import Bar from "../assets/Img/BarRegal.png";
import Logo from "../assets/Img/Logo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [parallaxY, setParallaxY] = useState(0);

  const location = useLocation();

  const pageMeta = {
    "/impressum": {
      kicker: "Rechtliches",
      title: "Impressum",
    },
    "/datenschutz": {
      kicker: "Rechtliches",
      title: "Datenschutz",
    },
  };

  const meta = pageMeta[location.pathname] || {
    kicker: "auf gute Zeiten",
    title: "Kommt vorbei und \n stoßt mit uns an",
  };

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [isMenuOpen]);

  useEffect(() => {
    const hero = document.querySelector(".hero");
    if (!hero) return;

    let raf = 0;

    const update = () => {
      raf = 0;
      const rect = hero.getBoundingClientRect();
      const vh = window.innerHeight;

      const progress = Math.min(
        Math.max((vh - rect.top) / (vh + rect.height), 0),
        1
      );

      const strength = 260;
      setParallaxY((progress - 0.5) * strength);
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen((v) => !v);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="hero">
      <div
        className="hero__bg"
        style={{
          backgroundImage: `url(${Bar})`,
          transform: `translate3d(0, ${parallaxY}px, 0) scale(1.28)`,
        }}
        aria-hidden="true"
      />

      <div className="hero__overlay" />

      <nav className="hero__nav" aria-label="Main navigation">
        <Link to="/" className="hero__logo" aria-label="Mias Bar">
          <img src={Logo} alt="Mias Bar" />
        </Link>

        <ul className="hero__links hero__links--desktop">
          <li><a href="#home" className="is-active">Home</a></li>
          <li><a href="#about">Angebot</a></li>
          <li><a href="#menu">Öffnungszeiten</a></li>
          <li><a href="#events">Events</a></li>
          <li><a href="#contact">Kontakt</a></li>
        </ul>

        <div className="hero__right">
          <a
            href="https://www.instagram.com/miasbar.de/"
            target="_blank"
            rel="noopener noreferrer"
            className="hero__social"
            aria-label="Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>

          <button
            type="button"
            className="hero__burger"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} />
          </button>
        </div>
      </nav>

      {/* ===== Mobile Menu ===== */}
      <div className={`mobileMenu ${isMenuOpen ? "is-open" : ""}`} aria-hidden={!isMenuOpen}>
        <button
          className="mobileMenu__backdrop"
          onClick={closeMenu}
          aria-label="Close menu overlay"
          type="button"
        />

        <div className="mobileMenu__panel" id="mobile-menu" role="dialog" aria-modal="true">
          <ul className="mobileMenu__links">
            <li><a href="#home" onClick={closeMenu}>Home</a></li>
            <li><a href="#about" onClick={closeMenu}>Angebot</a></li>
            <li><a href="#menu" onClick={closeMenu}>Öffnungszeiten</a></li>
            <li><a href="#events" onClick={closeMenu}>Events</a></li>
            <li><a href="#contact" onClick={closeMenu}>Kontakt</a></li>
          </ul>

          <div className="mobileMenu__footer">
            <a
              href="https://www.instagram.com/miasbar.de/"
              target="_blank"
              rel="noopener noreferrer"
              className="mobileMenu__insta"
              aria-label="Instagram"
              onClick={closeMenu}
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>

      <div className="hero__content">
        <p className="hero__kicker">{meta.kicker}</p>

        <h1 className="hero__title">
          {meta.title.split("\n").map((line, i) => (
            <span key={i}>
              {line}
              {i === 0 && <br />}
            </span>
          ))}
        </h1>
      </div>
    </header>
  );
}
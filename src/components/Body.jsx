import { useRef, useEffect } from "react";
import Alcohol from "../assets/Img/alcohol.jpg";
import Live from "../assets/Img/liveEvent.jpg";
import CocktailGlas from "../assets/Img/cocktail.png";
import BierGlas from "../assets/Img/bier.png";
import CaffeeGlas from "../assets/Img/caffeeTasse.png";
import WeinGlas from "../assets/Img/weinGlas.png";
import Longdrink from "../assets/Img/longdrink.png";
import Milchshake from "../assets/Img/milchshake.png";

export default function Body() {
  const trackRef = useRef(null);
  const showcaseRef = useRef(null);
  const showcaseBgRef = useRef(null);

  /* ===== PARALLAX (iOS SAFE) ===== */
useEffect(() => {
  const section = showcaseRef.current;
  const bg = showcaseBgRef.current;
  if (!section || !bg) return;

  let raf = 0;

  const update = () => {
    raf = 0;

    const rect = section.getBoundingClientRect();
    const vh = window.innerHeight || 0;

    // Wenn Section komplett außerhalb viewport ist, Background ausblenden (optional, aber sauber)
    const isOut = rect.bottom <= 0 || rect.top >= vh;
    bg.style.opacity = isOut ? "0" : "1";
    if (isOut) return;

    // 🔥 Das ist der Trick:
    // Section bewegt sich beim Scrollen (rect.top ändert sich).
    // Wir verschieben den BG genau entgegengesetzt, damit er "fixed" wirkt.
    const y = -rect.top;

    bg.style.transform = `translate3d(0, ${y}px, 0)`;
  };

  const onScroll = () => {
    if (raf) return;
    raf = requestAnimationFrame(update);
  };

  update();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });

  return () => {
    window.removeEventListener("scroll", onScroll);
    window.removeEventListener("resize", onScroll);
    if (raf) cancelAnimationFrame(raf);
  };
}, []);

  /* ===== SLIDER ===== */
  const scrollByOne = (dir) => {
    const track = trackRef.current;
    if (!track) return;

    const slide = track.querySelector(".angebotSlide");
    if (!slide) return;

    const gap = parseFloat(getComputedStyle(track).columnGap || "0") || 0;
    const amount = slide.getBoundingClientRect().width + gap;

    track.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <>
      {/* ===== ANGEBOT ===== */}
      <section id="angebot" className="angebotSection">
        <div className="angebotContainer">
          <header className="angebotHeader">
            <p className="angebotKicker">UNSER ANGEBOT</p>
            <p className="angebotSub">Everything You Want to Know</p>
          </header>

          <div className="angebotSliderWrap">
            <button
              className="sliderArrow sliderArrow--left"
              onClick={() => scrollByOne(-1)}
            >
              ‹
            </button>

            <div className="angebotSlider">
              <div className="angebotTrack" ref={trackRef}>
        {[
  {
    img: BierGlas,
    title: "Bier vom Fass",
    text: "Frisch gezapfte Biere vom Fass – klassisch, regional und immer gut gekühlt."
  },
  {
    img: CocktailGlas,
    title: "Cocktails",
    text: "Klassische Cocktails und kreative Eigenkreationen, frisch gemixt an der Bar."
  },
  {
    img: WeinGlas,
    title: "Feine Weine",
    text: "Ausgewählte Rot- und Weißweine für entspannte Abende und besondere Momente."
  },
  {
    img: CaffeeGlas,
    title: "Warme Getränke",
    text: "Kaffeespezialitäten, Tee und warme Drinks für gemütliche Stunden."
  },
  {
    img: Milchshake,
    title: "Alkoholfreie Alternativen",
    text: "Erfrischende alkoholfreie Getränke, Softdrinks und kreative Alternativen."
  },
  {
    img: Longdrink,
    title: "Long Drinks",
    text: "Beliebte Klassiker und moderne Long Drinks – perfekt für lange Abende."
  }
].map((item, i) => (
  <article key={i} className="angebotCard angebotSlide">
    <div className="angebotImgWrap">
      <img src={item.img} alt={item.title} />
    </div>
    <h3 className="angebotTitle">{item.title}</h3>
    <p className="angebotText">{item.text}</p>
  </article>
))}
              </div>
            </div>

            <button
              className="sliderArrow sliderArrow--right"
              onClick={() => scrollByOne(1)}
            >
              ›
            </button>
          </div>
        </div>
      </section>

      {/* ===== PARALLAX SECTION ===== */}
      <section id="open" className="bgShowcase" ref={showcaseRef}>
        <div
          className="bgShowcase__bg"
          ref={showcaseBgRef}
          style={{ backgroundImage: `url(${Alcohol})` }}
        />
        <div className="bgShowcase__overlay" />

        <div className="borderBox">
          <div className="liveInfoBox">
            <h4>Öffnungszeiten</h4>
            <ul>
              <li>Donnerstag, Freitag & Samstag</li>
              <li>17:00–22:00 Uhr</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== LIVE EVENT ===== */}
      <div id="events" className="liveEvent" style={{ backgroundImage: `url(${Live})` }}>
        <div className="liveContent">
          <div className="liveTextBox">
            <span className="liveKicker">Events</span>
            <h2 className="liveHeadline">Live Auftritte</h2>
            <p className="liveText">
             Regelmäßig wechselnde Live-Auftritte von Bands, Lesungen und besonderen Events in entspannter Atmosphäre.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
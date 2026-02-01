import { useRef } from "react";
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
      {/* ===== ANGEBOT (FULLWIDTH SLIDER) ===== */}
      <section className="angebotSection">
        <div className="angebotContainer">
          <header className="angebotHeader">
            <p className="angebotKicker">UNSER ANGEBOT</p>
            <p className="angebotSub">Everything You Want to Know</p>
          </header>

          <div className="angebotSliderWrap">
            <button
              type="button"
              className="sliderArrow sliderArrow--left"
              onClick={() => scrollByOne(-1)}
              aria-label="Vorheriges Angebot"
            >
              ‹
            </button>

            <div className="angebotSlider" aria-label="Angebot Slider">
              <div className="angebotTrack" ref={trackRef}>
                <article className="angebotCard angebotSlide">
                  <div className="angebotImgWrap">
                    <img src={BierGlas} alt="Bier vom Fass" />
                  </div>
                  <h3 className="angebotTitle">Bier vom Fass</h3>
                  <p className="angebotText">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus posuere...
                  </p>
                </article>

                <article className="angebotCard angebotSlide">
                  <div className="angebotImgWrap">
                    <img src={CocktailGlas} alt="Cocktails" />
                  </div>
                  <h3 className="angebotTitle">Cocktails</h3>
                  <p className="angebotText">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus posuere...
                  </p>
                </article>

                <article className="angebotCard angebotSlide">
                  <div className="angebotImgWrap">
                    <img src={WeinGlas} alt="Feine Weine" />
                  </div>
                  <h3 className="angebotTitle">Feine Weine</h3>
                  <p className="angebotText">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus posuere...
                  </p>
                </article>

                <article className="angebotCard angebotSlide">
                  <div className="angebotImgWrap">
                    <img src={CaffeeGlas} alt="Warme Getränke" />
                  </div>
                  <h3 className="angebotTitle">Warme Getränke</h3>
                  <p className="angebotText">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus posuere...
                  </p>
                </article>

                       <article className="angebotCard angebotSlide">
                  <div className="angebotImgWrap">
                    <img src={Milchshake} alt="Nicht Alkoholisches" />
                  </div>
                  <h3 className="angebotTitle">Alkoholfreie Alternativen</h3>
                  <p className="angebotText">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus posuere...
                  </p>
                </article>

                       <article className="angebotCard angebotSlide">
                  <div className="angebotImgWrap">
                    <img src={Longdrink} alt="Longdrinks" />
                  </div>
                  <h3 className="angebotTitle">Long Drinks</h3>
                  <p className="angebotText">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus posuere...
                  </p>
                </article>
              </div>
            </div>

            <button
              type="button"
              className="sliderArrow sliderArrow--right"
              onClick={() => scrollByOne(1)}
              aria-label="Nächstes Angebot"
            >
              ›
            </button>
          </div>
        </div>
      </section>

      {/* ===== bgShowcase section  ===== */}
<section className="bgShowcase" style={{ backgroundImage: `url(${Alcohol})` }}>
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

      {/* ===== liveEvent  ===== */}
      <div className="liveEvent" style={{ backgroundImage: `url(${Live})` }}>
        <div className="liveContent">
          <div className="liveTextBox">
            <span className="liveKicker">Events</span>
            <h2 className="liveHeadline">Live Auftritte</h2>
            <p className="liveText">
              We accept all questions, and event planning inquiries via the contact form below
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
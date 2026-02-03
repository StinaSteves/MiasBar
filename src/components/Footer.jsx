import Map from "../assets/Img/blackMap.png";
import Logo from "../assets/Img/Logo.png";
import { Link } from "react-router-dom";


export default function Footer() {
  return (
    <footer className="contactFooter" id="contact">
      <div className="contactMap">
        <img
          className="contactMap__img"
          src={Map}
          alt="Map Kirchhellen"
        />

        <section className="contactCard">
           <a href="/" className="footer__logo" aria-label="Mias Bar">
              <img src={Logo} alt="Mias Bar" />
            </a>


          <div>
            <p className="contactCard__label">Adresse</p>
            <p className="contactCard__value">
              Hauptstraße 30<br />
              46244 Bottrop
            </p>
          </div>

          <div className="contactCard__row">
            <p className="contactCard__label">Öffnungszeiten</p>
            <p className="contactCard__value">
              Donnerstag, Freitag & Samstag<br />
            17:00-22:00 Uhr
            </p>
          </div>

        <div className="contactCard__row">
            <p className="contactCard__label">Information</p>
            <p className="contactCard__value">
            <Link to="/impressum">Impressum</Link> <br />
            <Link to="/datenschutz">Datenschutz</Link>
            </p>

                    <div className="contactCard__row">
  <span className="rights">© 2026 Mia's Bar. Alle Rechte vorbehalten.</span>
</div>
          </div>

        </section>
      </div>
    </footer>
  );
}
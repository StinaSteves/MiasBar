export default function Impressum() {
  return (
    <main className="legalPage" id="top">
      <header className="legalHeader">
        <h1>Impressum</h1>
        <p className="legalSub">
          Angaben gemäß § 5 TMG
        </p>
      </header>

      <section className="legalCard">
        <h2>Betreiber</h2>
        <p>
          Mia’s Bar Inh. Elias Franze<br />
          Hauptstraße 30<br />
          46244 Kirchhellen
        </p>

        <h2>Kontakt</h2>
        <p>
          E-Mail:{" "}
          <a className="legalLink" href="mailto:info@miasbar.de">
            info@miasbar.de
          </a>
        </p>
      </section>

      <section className="legalGrid">
        <div className="legalCard">
          <h2>Redaktionell verantwortlich</h2>
          <p>
            Elias Franze<br />
            Hauptstraße 30<br />
            46244 Kirchhellen
          </p>
        </div>

        <div className="legalCard">
          <h2>EU-Streitschlichtung</h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit.
            Verbraucher können diese Plattform nutzen, um Streitigkeiten aus Online-Verträgen beizulegen.
          </p>
        </div>

        <div className="legalCard">
          <h2>Verbraucherstreitbeilegung</h2>
          <p>
            Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </div>

        <div className="legalCard">
          <h2>Haftung für Inhalte</h2>
          <p>
            Als Diensteanbieter sind wir gemäß den allgemeinen Gesetzen für eigene Inhalte auf diesen
            Seiten verantwortlich. Für übermittelte oder gespeicherte fremde Informationen sind wir
            nicht verpflichtet, diese zu überwachen. Verpflichtungen zur Entfernung oder Sperrung
            der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben unberührt.
          </p>
        </div>

        <div className="legalCard">
          <h2>Haftung für Links</h2>
          <p>
            Diese Website enthält Links zu externen Websites Dritter. Auf deren Inhalte haben wir keinen
            Einfluss. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die
            Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich.
          </p>
        </div>

        <div className="legalCard">
          <h2>Urheberrecht</h2>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf dieser Website unterliegen dem
            deutschen Urheberrecht. Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung
            außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen
            Autors bzw. Erstellers.
          </p>
        </div>
      </section>

      <footer className="legalFooter">
        <p>
          Stand: {new Date().toLocaleDateString("de-DE")}
        </p>
      </footer>
    </main>
  );
}
export default function Datenschutz() {
  return (
    <main className="legalPage" id="top">
      <header className="legalHeader">
        <h1>Datenschutz</h1>
        <p className="legalSub">
          Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO
        </p>
      </header>

      <section className="legalCard">
        <h2>1. Verantwortlicher</h2>
        <p>
          Mia’s Bar Inh. Elias Franze<br />
          Hauptstraße 30<br />
          46244 Kirchhellen<br />
          E-Mail:{" "}
          <a className="legalLink" href="mailto:info@miasbar.de">
            info@miasbar.de
          </a>
        </p>
      </section>

      <section className="legalGrid">
        <div className="legalCard">
          <h2>2. Allgemeine Hinweise</h2>
          <p>
            Wir nehmen den Schutz deiner persönlichen Daten ernst. Personenbezogene
            Daten werden auf dieser Website nur im notwendigen Umfang verarbeitet.
            Diese Datenschutzerklärung erläutert Art, Umfang und Zweck der
            Verarbeitung.
          </p>
        </div>

        <div className="legalCard">
          <h2>3. Zugriffsdaten / Server-Logs</h2>
          <p>
            Beim Aufruf dieser Website verarbeitet der Hosting-Provider automatisch
            sogenannte Server-Logfiles. Dabei können z. B. folgende Daten anfallen:
            IP-Adresse, Datum/Uhrzeit, aufgerufene Seite/Datei, Referrer-URL,
            Browsertyp/Version, Betriebssystem. Die Verarbeitung erfolgt zur
            Sicherstellung des technischen Betriebs und der Sicherheit der Website.
          </p>
        </div>

        <div className="legalCard">
          <h2>4. Cookies</h2>
          <p>
            Diese Website setzt nach unserem derzeitigen Stand keine Cookies zu
            Tracking- oder Werbezwecken ein. Technisch notwendige Cookies können je
            nach Hosting/Browserumgebung entstehen (z. B. für Sicherheitsfunktionen).
          </p>
        </div>

        <div className="legalCard">
          <h2>5. Instagram</h2>
          <p>
            Auf dieser Website ist ein Link zu unserem Instagram-Profil vorhanden.
            Beim bloßen Besuch dieser Website werden dadurch keine Inhalte von
            Instagram automatisch nachgeladen. Erst wenn du den Link anklickst,
            wirst du zu Instagram weitergeleitet.
          </p>
          <p style={{ marginTop: 12 }}>
            Anbieter: Meta Platforms Ireland Limited. Weitere Informationen findest
            du in der Datenschutzerklärung von Instagram/Meta.
          </p>
        </div>

        <div className="legalCard">
          <h2>6. Empfänger von Daten</h2>
          <p>
            Eine Weitergabe personenbezogener Daten an Dritte erfolgt grundsätzlich
            nicht, außer sie ist zur Bereitstellung dieser Website erforderlich
            (z. B. Hosting-Provider) oder wir sind gesetzlich dazu verpflichtet.
          </p>
        </div>

        <div className="legalCard">
          <h2>7. Speicherdauer</h2>
          <p>
            Wir verarbeiten personenbezogene Daten nur so lange, wie es für die
            jeweiligen Zwecke erforderlich ist. Server-Logdaten werden vom
            Hosting-Provider in der Regel zeitlich begrenzt gespeichert und danach
            gelöscht (abhängig vom Provider).
          </p>
        </div>

        <div className="legalCard">
          <h2>8. Deine Rechte</h2>
          <p>
            Du hast nach der DSGVO insbesondere das Recht auf Auskunft, Berichtigung,
            Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit sowie das
            Recht auf Widerspruch gegen bestimmte Verarbeitungen.
          </p>
        </div>

        <div className="legalCard">
          <h2>9. Beschwerderecht</h2>
          <p>
            Du hast das Recht, dich bei einer Datenschutzaufsichtsbehörde zu
            beschweren, wenn du der Ansicht bist, dass die Verarbeitung deiner
            personenbezogenen Daten gegen die DSGVO verstößt.
          </p>
        </div>
      </section>

      <footer className="legalFooter">
        <p>Stand: {new Date().toLocaleDateString("de-DE")}</p>
      </footer>
    </main>
  );
}
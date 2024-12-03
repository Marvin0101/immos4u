import classes from "@/styles/PrivacyPolicy.module.css";

function DataProtectionPage() {
  return (
    <>
      <div className={classes.privacyPolicy}>
        <h1>Datenschutzerklärung</h1>

        <section>
          <h2>1. Verantwortlicher</h2>
          <p>
            <strong>immos4u</strong>
            <br />
            Unterer Häuselbergweg 8 
            <br />
            69493 Hirschberg a.d. Bergstraße
            <br />
            +49 6201 - 878585
            <br />
            carta@immos4u.eu
          </p>
        </section>

        <section>
          <h2>2. Allgemeine Hinweise zum Datenschutz</h2>
          <p>
            Der Schutz Ihrer personenbezogenen Daten ist uns ein wichtiges
            Anliegen. Wir behandeln Ihre Daten vertraulich und entsprechend den
            gesetzlichen Datenschutzvorschriften sowie dieser
            Datenschutzerklärung.
          </p>
        </section>

        <section>
          <h2>
            3. Erhebung und Speicherung personenbezogener Daten sowie Art und
            Zweck der Verwendung
          </h2>

          <h3>a) Beim Besuch unserer Webseite</h3>
          <p>
            Beim Aufrufen unserer Webseite <strong>www.immos4u.de</strong>{" "}
            werden durch den auf Ihrem Endgerät verwendeten Browser automatisch
            Informationen an den Server unserer Webseite gesendet. Diese
            Informationen werden temporär in einem sogenannten Logfile
            gespeichert:
          </p>
          <ul>
            <li>IP-Adresse des anfragenden Rechners</li>
            <li>Datum und Uhrzeit des Zugriffs</li>
            <li>Name und URL der abgerufenen Datei</li>
            <li>Webseite, von der aus der Zugriff erfolgt (Referrer-URL)</li>
            <li>Verwendeter Browser und ggf. Betriebssystem Ihres Rechners</li>
            <li>Name Ihres Access-Providers</li>
          </ul>
          <p>
            Rechtsgrundlage für die Datenverarbeitung ist Art. 6 Abs. 1 lit. f
            DSGVO. Unser berechtigtes Interesse folgt aus den oben genannten
            Zwecken zur Datenerhebung.
          </p>

          <h3>b) Kontaktformular</h3>
          <p>
            Wenn Sie uns über ein Kontaktformular Anfragen zukommen lassen,
            werden Ihre Angaben inklusive der von Ihnen angegebenen Kontaktdaten
            zwecks Bearbeitung der Anfrage gespeichert. Rechtsgrundlage: Art. 6
            Abs. 1 lit. b oder f DSGVO.
          </p>

          <h3>c) Google Maps</h3>
          <p>
            Wir verwenden Google Maps, um geografische Informationen
            bereitzustellen. Beim Aufrufen einer Seite mit Google Maps wird Ihre
            IP-Adresse an Google übertragen und Cookies können gesetzt werden.
            Diese Datenverarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit.
            f DSGVO.
          </p>
          <p>
            Weitere Informationen finden Sie in der Datenschutzerklärung von
            Google:{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://policies.google.com/privacy
            </a>
          </p>

          <h3>d) Hosting durch Vercel</h3>
          <p>
            Unsere Webseite wird auf der Plattform <strong>Vercel</strong>{" "}
            gehostet. Weitere Informationen finden Sie in der
            Datenschutzerklärung von Vercel:{" "}
            <a
              href="https://vercel.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://vercel.com/legal/privacy-policy
            </a>
          </p>
        </section>

        {/* <section>
          <h2>4. Cookies</h2>
          <p>
            Unsere Webseite verwendet Cookies. Sie können die Speicherung von
            Cookies durch eine entsprechende Einstellung Ihrer Browser-Software
            verhindern. Weitere Informationen erhalten Sie über unseren
            Cookie-Banner.
          </p>
        </section> */}

        <section>
          <h2>4. Weitergabe von Daten</h2>
          <p>
            Eine Übermittlung Ihrer personenbezogenen Daten an Dritte erfolgt
            nur, wenn:
            <ul>
              <li>
                Sie Ihre ausdrückliche Einwilligung erteilt haben (Art. 6 Abs. 1
                lit. a DSGVO),
              </li>
              <li>
                die Weitergabe zur Erfüllung eines Vertrags erforderlich ist
                (Art. 6 Abs. 1 lit. b DSGVO),
              </li>
              <li>
                eine rechtliche Verpflichtung besteht (Art. 6 Abs. 1 lit. c
                DSGVO) oder
              </li>
              <li>
                die Weitergabe zur Wahrung berechtigter Interessen erforderlich
                ist (Art. 6 Abs. 1 lit. f DSGVO).
              </li>
            </ul>
          </p>
        </section>

        <section>
          <h2>5. Ihre Rechte</h2>
          <p>
            Sie haben folgende Rechte:
            <ul>
              <li>Auskunft (Art. 15 DSGVO)</li>
              <li>Berichtigung (Art. 16 DSGVO)</li>
              <li>Löschung (Art. 17 DSGVO)</li>
              <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
              <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
            </ul>
          </p>
          <p>Bitte richten Sie Ihre Anliegen an: [E-Mail-Adresse]</p>
        </section>

        <section>
          <h2>6. Aktualität und Änderung dieser Datenschutzerklärung</h2>
          <p>
            Diese Datenschutzerklärung ist aktuell gültig und hat den Stand
            03.12.2024. Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf
            anzupassen.
          </p>
        </section>
      </div>
    </>
  );
}

export default DataProtectionPage;

import Head from "next/head";
import { Inter } from "next/font/google";
import classes from "@/styles/Home.module.css";
import Card from "@/components/Card";
import { CountUp } from "use-count-up";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
        <div className={classes.welcome}>
          <h2 className={classes.texth2}>
            Wir für Sie - zuverlässig, kompetent und ehrlich!
          </h2>
          <p className={classes.textp}>
            immos4u® - ist seit vielen Jahren als Immobilieninitiator tätig. Als
            Inhabergeführtes Familienunternehmen mit Sitz in Hirschberg a.d.
            Bergstraße haben wir uns auf die Beratung und die Vermittlung und
            Verwaltung von Immobilien im In-und Ausland spezialisiert. Neu
            bieten wir unseren Kunden den Service &quot; Alles rund um Haus &quot;
            erfolgreich an.
          </p>
          <p className={classes.textp}>
            Mit unserer Strategie, Immobilien an Wachstumsstandorten, auch mit
            Full – Service – Paket, anzubieten, führen wir unsere Verkäufer,
            Erwerber oder Kapitalanleger zum Erfolg. In unserer
            Unternehmensgeschichte sind sehr viele Menschen den Weg vom Verkauf,
            Erwerb bis hin zur Verwaltung einer Immobilie mit uns gegangen.
            Überzeugen Sie sich selbst von der Qualität der Arbeit der immos4u®
            – Gruppe und Partner.
          </p>
        </div>
        <div className={classes.countstats}>
          <div className={classes.counter}>
            <p className={classes.countnumber}>
              <CountUp isCounting={true} start={10} end={20} duration={5} />+
              Jahre
            </p>
            <p>Erfahrung</p>
          </div>
          <div className={classes.counter}>
            <p className={classes.countnumber}>
              <CountUp isCounting start={20} end={200} duration={5} />+
            </p>
            <p>Verkaufte Immobilien</p>
          </div>
          <div className={classes.counter}>
            <p className={classes.countnumber}>
              <CountUp isCounting start={300} end={500} duration={5} />+
            </p>
            <p>Vermietete Immobilien</p>
          </div>
          <div className={classes.counter}>
            <p className={classes.countnumber}>
              <CountUp isCounting start={5} end={10} duration={5} />+
            </p>
            <p>Hausverwaltungen</p>
          </div>
        </div>
        <h2 className={classes.texth2}>Ein Auszug unserer Leistungen:</h2>
        <div className={classes.grid}>
          <Card
            title="Verkauf"
            text="Alle unsere Dienste beim Verkauf..."
            link="/kaufobjekte"
            image="https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80"
          />
          <Card
            title="Vermietung"
            text="Alle unsere Dienste bei der Vermietung..."
            link="/mietobjekte"
            image="https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          />
          <Card
            title="Hausmeisterservice"
            text="Hausmeisterdienst und mehr..."
            link="/rund-ums-haus"
            image="https://images.unsplash.com/photo-1640682841767-cdfce3aea6e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          />
          <Card
            title="Malerarbeiten"
            text="Hausmeisterdienst und mehr..."
            link="/rund-ums-haus"
            image="https://images.unsplash.com/photo-1525909002-1b05e0c869d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80"
          />
          <Card
            title="Renovierung"
            text="Hausmeisterdienst und mehr..."
            link="/rund-ums-haus"
            image="https://images.unsplash.com/photo-1604159848821-104723525eb4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
          />
          <Card
            title="Instandhaltung"
            text="Hausmeisterdienst und mehr..."
            link="/rund-ums-haus"
            image="https://images.unsplash.com/photo-1676311396794-f14881e9daaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          />
          <Card
            title="Gartenservice"
            text="Hausmeisterdienst und mehr..."
            link="/rund-ums-haus"
            image="https://images.unsplash.com/photo-1598807919604-1f94e119943b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
          />
        </div>
    </>
  );
}

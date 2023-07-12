import Head from "next/head";
import { Inter } from "next/font/google";
import classes from "@/styles/Home.module.css";
import Card from "@/components/Card";
import { CountUp } from "use-count-up";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>immos4u</title>
        <meta name="description" content="Immobilien für dich" />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
        <meta name="viewport" content="height=device-height, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, target-densitydpi=device-dpi"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <main className={classes.main}> */}
        <div className={classes.welcome}>
          <h2 className={classes.texth2}>
            Wir für Sie - zuverlässig, kompetent und ehrlich!
          </h2>
          <p className={classes.textp}>
            immos4u® - ist seit vielen Jahren als Immobilieninitiator tätig. Als
            Inhabergeführtes Familienunternehmen mit Sitz in Hirschberg a.d.
            Bergstraße haben wir uns auf die Beratung und die Vermittlung und
            Verwaltung von Immobilien im In-und Ausland spezialisiert. Neu
            bieten wir unseren Kunden den Service " Alles rund um Haus "
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
              <CountUp isCounting={true} start={10} end={25} duration={5} />+
              Jahre
            </p>
            <p>Erfahung</p>
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
            title="Hausverwaltung"
            text="Hausmeisterdienst und mehr..."
            image="https://images.unsplash.com/photo-1606836379799-f88b03bc7039?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
          />
          <Card
            title="Hausverwaltung"
            text="Hausmeisterdienst und mehr..."
            image="https://images.unsplash.com/photo-1606836379799-f88b03bc7039?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
          />
          <Card
            title="Hausverwaltung"
            text="Hausmeisterdienst und mehr..."
            image="https://images.unsplash.com/photo-1606836379799-f88b03bc7039?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
          />
          <Card
            title="Hausverwaltung"
            text="Hausmeisterdienst und mehr..."
            image="https://images.unsplash.com/photo-1606836379799-f88b03bc7039?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
          />
          <Card
            title="Hausverwaltung"
            text="Hausmeisterdienst und mehr..."
            image="https://images.unsplash.com/photo-1606836379799-f88b03bc7039?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
          />
          <Card
            title="Hausverwaltung"
            text="Hausmeisterdienst und mehr..."
            image="https://images.unsplash.com/photo-1606836379799-f88b03bc7039?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
          />
          <Card
            title="Hausverwaltung"
            text="Hausmeisterdienst und mehr..."
            image="https://images.unsplash.com/photo-1606836379799-f88b03bc7039?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
          />
          <Card
            title="Hausverwaltung"
            text="Hausmeisterdienst und mehr..."
            image="https://images.unsplash.com/photo-1606836379799-f88b03bc7039?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
          />
        </div>
      {/* </main> */}
    </>
  );
}

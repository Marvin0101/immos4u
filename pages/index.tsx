import { Inter } from "next/font/google";
import classes from "@/styles/Home.module.css";
import Card from "@/components/Card";
import Countstats from "@/components/Countstats";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
        <div className={classes.welcome}>
          <h2 className={classes.texth2}>
            Wir für Sie - zuverlässig, kompetent und ehrlich!
          </h2>
          <p className={classes.textp}>
            {/* immos4u® - ist seit vielen Jahren als Immobilieninitiator tätig. Als
            Inhabergeführtes Familienunternehmen mit Sitz in Hirschberg a.d.
            Bergstraße haben wir uns auf die Beratung und die Vermittlung und
            Verwaltung von Immobilien im In-und Ausland spezialisiert. Neu
            bieten wir unseren Kunden den Service &quot; Alles rund um Haus &quot;
            erfolgreich an. */}
            immos4u® ist mehr als nur eine Immobilienfirma. Wir sind Ihr Partner für alle Fragen rund um Ihre Immobilie. Ob Sie kaufen, verkaufen, mieten oder vermieten wollen, wir bieten Ihnen eine professionelle und persönliche Beratung, die auf Ihre individuellen Bedürfnisse zugeschnitten ist.
          </p>
          <p className={classes.textp}>
            {/* Mit unserer Strategie, Immobilien an Wachstumsstandorten, auch mit
            Full – Service – Paket, anzubieten, führen wir unsere Verkäufer,
            Erwerber oder Kapitalanleger zum Erfolg. In unserer
            Unternehmensgeschichte sind sehr viele Menschen den Weg vom Verkauf,
            Erwerb bis hin zur Verwaltung einer Immobilie mit uns gegangen.
            Überzeugen Sie sich selbst von der Qualität der Arbeit der immos4u®
            – Gruppe und Partner. */}
            Wir sind seit 2005 als Immobilieninitiator tätig und haben uns auf die Vermittlung von Immobilien im In- und Ausland spezialisiert. Wir verfügen über ein starkes regionales Netzwerk und eine sehr gepflegte Interessentenkartei, die es uns ermöglicht, Ihnen die besten Angebote zu präsentieren.
          </p>
          <p className={classes.textp}>
          Wir sind nicht nur Makler, sondern auch Dienstleister. Wir bieten Ihnen einen umfassenden Service &quot;Alles rund ums Haus&quot;, der von der Fotografie und Exposé-Erstellung über die Bonitätsprüfung der Interessenten bis hin zur Wohnungsübergabe und -abnahme reicht. 
          </p>
          <p className={classes.textp}>
          Wir sind Immobilien-Menschen mit Leib und Seele. Wir lieben, was wir tun, und das merken Sie auch an unserer Arbeit. Wir sind immer für Sie da, auch nach dem Verkauf oder der Vermietung Ihrer Immobilie. Wir freuen uns auf Ihre Kontaktaufnahme!
          </p>
          <p className={classes.textp}>
          immos4u® - Wir für Sie - zuverlässig, kompetent und ehrlich!
          </p>
        </div>
        <Countstats />
        <h2 className={classes.texth2}>Ein Auszug unserer Leistungen:</h2>
        <div className={classes.grid}>
          <Card
            title="Verkauf"
            text="Weitere Informationen zum Verkauf..."
            link="/rund-ums-haus#verkauf"
            image="https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80"
          />
          <Card
            title="Vermietung"
            text="Weitere Informationen zur Vermietung..."
            link="/rund-ums-haus#vermietung"
            image="https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          />
          <Card
            title="Hausmeisterservice"
            text="Weitere Informationen zum Hausmeisterservice..."
            link="/rund-ums-haus#hausmeisterservice"
            image="https://images.unsplash.com/photo-1676311396794-f14881e9daaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          />
          <Card
            title="Malerarbeiten"
            text="Weitere Informationen zu Malerarbeiten..."
            link="/rund-ums-haus#malerarbeiten"
            image="https://images.unsplash.com/photo-1525909002-1b05e0c869d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80"
          />
          <Card
            title="Renovierung"
            text="Weitere Informationen zur Renovierung..."
            link="/rund-ums-haus#renovierung"
            image="https://images.unsplash.com/photo-1604159848821-104723525eb4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
          />
          {/* <Card
            title="Instandhaltung"
            text="Hausmeisterdienst und mehr..."
            link="/rund-ums-haus#instandhaltung"
            image="https://images.unsplash.com/photo-1676311396794-f14881e9daaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          /> */}
          <Card
            title="Gartenservice"
            text="Weitere Informationen zum Gartenservice..."
            link="/rund-ums-haus#gartenservice"
            image="https://images.unsplash.com/photo-1598807919604-1f94e119943b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
          />
        </div>
    </>
  );
}

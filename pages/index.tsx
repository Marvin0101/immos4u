import { Inter } from "next/font/google";
import classes from "@/styles/Home.module.css";
import Card from "@/components/Card";
import Countstats from "@/components/Countstats";
import ReadMore from "@/components/ReadMore";
import Gallery from "@/components/Gallery";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const welcomeText: string = `Bei uns stehen Sie als Kunde im Mittelpunkt! Als Ihr zuverlässiger Partner bieten wir Ihnen bereits seit 2005 maßgeschneiderte Lösungen für alle Fragen rund um Ihre Immobilie. Ob Vermietung, Verkauf, Finanzierung oder die Durchführung einer Bonitätsprüfung – wir begleiten Sie mit Kompetenz, Erfahrung und Leidenschaft auf jedem Schritt Ihres Weges – im In- sowie im Ausland. Unser Ziel ist es, Ihre Wünsche zu verstehen und die besten Lösungen zu finden – immer persönlich, transparent und engagiert. <br>
  Möchten Sie eine Immobilie verkaufen oder vermieten? Wir übernehmen für Sie die gesamte Abwicklung – von der professionellen Wertermittlung über die Erstellung ansprechender Exposés bis hin zur Vermarktung und den Besichtigungen. Dabei greifen wir auf unser umfangreiches regionales Netzwerk und eine exklusive, sorgfältig gepflegte Interessentendatenbank zurück, um Ihnen die passenden Käufer oder Mieter zu präsentieren. So gelingt es uns, den richtigen Partner für Ihre Immobilie zu finden – schnell und zuverlässig.<br>
  Darüber hinaus bieten wir Ihnen eine umfassende Beratung und Unterstützung bei der Immobilienfinanzierung. Wir kennen die besten Finanzierungsangebote und helfen Ihnen, die passenden Konditionen für Ihre Situation zu finden. Zudem führen wir eine gründliche Bonitätsprüfung durch, um sicherzustellen, dass Ihre Mietverhältnisse oder Verkaufsabschlüsse reibungslos verlaufen.<br>
  Unser Service „Alles rund ums Haus“ bietet Ihnen von Anfang bis Ende jegliche Form der Unterstützung, die Sie benötigen. Wir stehen Ihnen auch nach dem Verkauf oder der Vermietung mit Rat und Tat zur Seite – sei es bei der Wohnungsübergabe, der Schlüsselübergabe oder bei allen weiteren organisatorischen Fragen. Mit uns haben Sie einen Partner, der Sie langfristig betreut und Ihnen den Rücken freihält.<br>
  Verlassen Sie sich auf unsere langjährige Erfahrung und Leidenschaft für Immobilien. Wir freuen uns darauf, gemeinsam mit Ihnen Ihre Immobilienträume zu verwirklichen! Kontaktieren Sie uns noch heute!<br>
  immos4u® - Wir für Sie - zuverlässig, kompetent und ehrlich!
  `
  return (
    <>
        <div className={classes.welcome}>
          <h2 className={classes.texth2}>
          Willkommen bei Ihrem Immobilienpartner immos4u® – Vertrauen, Expertise und Service aus einer Hand
          </h2>
          <Gallery />
          <br />
          <ReadMore text={welcomeText} maxWords={27} />
          
        </div>

        <Countstats />
        <h2 className={classes.texth2}>Ein Auszug unserer Leistungen:</h2>
        <div className={classes.grid}>
          <Card
            title="Verkauf"
            text="Weitere Informationen zum Verkauf..."
            link="/kaufobjekte"
            image="https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80"
          />
          <Card
            title="Vermietung"
            text="Weitere Informationen zur Vermietung..."
            link="/mietobjekte"
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

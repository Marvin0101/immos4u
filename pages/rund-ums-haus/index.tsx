import Service from "@/components/Service";
import classes from "@/styles/Housekeeping.module.css";

function HousekeepingPage() {
  return (
    <>
      <div id="hausmeisterservice"></div>
      <h2>Rund ums Haus</h2>
      <div className={classes.serviceContainer}>
      {/* <Service
        title="Verkauf"
        imageLeft="https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80"
        imageMiddle="https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80"
        imageRight="https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80"
      />
      <div id="vermietung"></div>
      <Service
        title="Vermietung"
        imageLeft="https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        imageMiddle="https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        imageRight="https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
      /> */}
      {/* <div id="hausmeisterservice"></div> */}
      <Service
        title="Hausmeisterservice"
        imageLeft="/hausmeisterservice.jpg"
        imageMiddle="/hausmeisterservice2.jpg"
        imageRight="https://images.unsplash.com/photo-1676311396794-f14881e9daaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
      >
        Mit den Hausmeistern von immos4u können Sie sicher sein, dass Ihre Immobilie in guten Händen ist. Sie sparen sich Zeit, Geld und Ärger und können sich auf andere Dinge konzentrieren. Die Hausmeister von immos4u sind flexibel, zuverlässig und freundlich. Sie arbeiten nach den höchsten Qualitätsstandards und sind stets bemüht, Ihre Zufriedenheit zu gewährleisten.
        Die Hausmeister von immos4u übernehmen unter anderem folgende Aufgaben:
        <ul style={{margin: "20px 0px 0px 30px"}}>
          <li>Reparatur- und Ausbesserungsarbeiten</li>
          <li>Kontrolltätigkeiten und Dokumentation von technischen Anlagen</li>
          <li>Pflege der Außen- und Grünanlagen sowie Winterdienst</li>
          <li>Reinigung von Treppenhaus, Keller und Gemeinschaftsräumen</li>
          <li>Entsorgung von Müll und Sperrmüll</li>
        </ul>

      </Service>
      <div id="malerarbeiten"></div>
      <Service
        title="Malerarbeiten"
        imageLeft="/malerarbeiten.jpg"
        imageMiddle="https://images.unsplash.com/photo-1525909002-1b05e0c869d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80"
        imageRight="https://images.unsplash.com/photo-1525909002-1b05e0c869d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80"
      >
        immos4u Ihr Partner für professionelle Malerarbeiten.
Sie möchten Ihre Wohnung oder Ihr Haus neu gestalten, aber haben keine Zeit oder Lust, selbst zu streichen? Dann sind Sie bei immos4u genau richtig. Ob Sie nur einen frischen Anstrich wünschen oder eine komplette Wandgestaltung mit individuellen Techniken und Farben, wir erfüllen Ihre Wünsche mit höchster Qualität und Sorgfalt.
Wir arbeiten schnell, sauber und termingerecht. Wir beraten Sie gerne bei der Auswahl der passenden Farben und Materialien für Ihr Projekt. Wir verwenden nur hochwertige Produkte, die langlebig, umweltfreundlich und schadstoffarm sind. Wir achten auf die Einhaltung aller gesetzlichen Vorschriften und Normen.
immos4u ist nicht nur Ihr Ansprechpartner für private Wohnräume, sondern auch für gewerbliche Objekte wie Büros, Praxen, Geschäfte oder Hotels. Wir übernehmen auch die Renovierung von Mietwohnungen bei Ein- oder Auszug. Wir kümmern uns um alle erforderlichen Schönheitsreparaturen, wie sie in vielen Mietverträgen vorgeschrieben sind. Wir erstellen Ihnen gerne ein unverbindliches Angebot für Ihre Malerarbeiten.
Kontaktieren Sie uns noch heute und lassen Sie sich von unserem Service überzeugen.

      </Service>
      <div id="renovierung"></div>
      <Service
        title="Renovierung"
        imageLeft="/renovierung.jpg"
        imageMiddle="https://images.unsplash.com/photo-1604159848821-104723525eb4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
        imageRight="https://images.unsplash.com/photo-1604159848821-104723525eb4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
      >
        immos4u ist Ihr kompetenter Partner für alle Arten von Renovierungen. Ob Sie Ihre Wohnung streichen oder Ihre Küche erneuern wollen, wir sind für Sie da. Wir bieten Ihnen eine professionelle Beratung, eine faire Kalkulation und eine zuverlässige Ausführung.
Wir übernehmen nicht nur die Renovierung Ihrer Immobilie, sondern auch die Pflege Ihres Gartens, die Reinigung Ihrer Fenster und die Betreuung Ihres Hauses während Ihrer Abwesenheit. Wir kümmern uns um alles, was Ihnen wichtig ist.
Mit immos4u können Sie sich entspannt zurücklehnen und das Ergebnis genießen. Wir arbeiten mit hochwertigen Materialien, modernen Techniken und erfahrenen Handwerkern. Wir garantieren Ihnen eine termingerechte Fertigstellung und eine hohe Kundenzufriedenheit.
Kontaktieren Sie uns noch heute und lassen Sie sich ein individuelles Angebot unterbreiten. 

      </Service>
      {/* <div id="instandhaltung"></div>
      <Service
        title="Instandhaltung"
        imageLeft="https://images.unsplash.com/photo-1676311396794-f14881e9daaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        imageMiddle="https://images.unsplash.com/photo-1676311396794-f14881e9daaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        imageRight="https://images.unsplash.com/photo-1676311396794-f14881e9daaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
        sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
        dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
        et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
        takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
        amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
        kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Duis autem vel eum iriure dolor in hendrerit in vulputate velit
        esse molestie consequat, vel illum dolore eu feugiat nulla facilisis
        at vero eros et accumsan et iusto odio dignissim qui blandit praesent
        luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
        Lorem ipsum dolor sit amet."
      /> */}
      <div id="gartenservice"></div>
      <Service
        title="Gartenservice"
        imageLeft="/gartenservice.jpg"
        imageMiddle="/gartenservice2.jpg"
        imageRight="/gartenservice3.jpg"
      >
        Immos4u ist mehr als nur ein Immobilieninitiator. Wir bieten Ihnen auch einen professionellen Gartenservice an, der Ihren Garten in eine grüne Oase verwandelt. Ob Sie eine Eigentumswohnung mit Garten besitzen oder eine Gartenhilfe für Hauseigentümer suchen, wir sind für Sie da.
        Unser Gartenservice umfasst folgende Leistungen:
        <ul style={{margin: "20px 0px 20px 30px"}}>
          <li>Rasenpflege: Wir mähen, vertikutieren, lüften und säen Ihren Rasen aus.</li>
          <li>Beet- und Baumpflege: Wir pflanzen, schneiden, düngen und gießen Ihre Blumen, Sträucher und Bäume.</li>
          <li>Unkrautbekämpfung: Wir jäten und entfernen Unkraut aus Ihrem Garten.</li>
          <li>Laub- und Schneeentsorgung: Wir räumen Laub und Schnee von Ihrem Grundstück.</li>
          <li>Haus-Sitting: Wir kümmern uns um Ihr Zuhause, wenn Sie verreist sind. Wir leeren den Briefkasten, lüften, gehen mit Ihrem Hund spazieren und mehr.</li>
        </ul>
        Wir arbeiten mit modernen Geräten und qualifizierten Mitarbeitern, die Ihren Garten nach Ihren Wünschen gestalten. Wir sind zuverlässig, kompetent und ehrlich. Wir beraten Sie gerne individuell und erstellen Ihnen ein unverbindliches Angebot.
        immos4u - wir machen Ihren Garten zum Paradies!
      </Service>
      </div>
    </>
  );
}

export default HousekeepingPage;

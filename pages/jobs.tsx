import AccessTimeIcon from "@mui/icons-material/AccessTime";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Link from "next/link";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Chip,
} from "@mui/material";
import classes from "@/styles/JobPage.module.css";

const jobOffers = [
  // {
  //   title: "Immobilienmakler (m/w/d)",
  //   type: "Teilzeit / freie Mitarbeit",
  //   location: "Hirschberg und Rhein-Neckar-Region",
  //   schedule: "Flexibel",
  //   teaser:
  //     "Sie begleiten Eigentümer und Interessenten zuverlässig durch Vermietung und Verkauf.",
  //   tasks: [
  //     "Betreuung von Eigentümern, Käufern und Mietinteressenten",
  //     "Vorbereitung und Durchführung von Besichtigungen",
  //     "Unterstützung bei Exposés, Objektaufnahmen und Marktwert-Einschätzungen",
  //     "Kommunikation mit Notaren, Hausverwaltungen und Dienstleistern",
  //   ],
  //   profile: [
  //     "Erfahrung in der Immobilienvermittlung oder eine hohe Affinität zum Immobilienmarkt",
  //     "Souveränes Auftreten, Verlässlichkeit und Freude am direkten Kundenkontakt",
  //     "Selbstständige, strukturierte Arbeitsweise",
  //     "Führerschein Klasse B ist von Vorteil",
  //   ],
  // },
  {
    title: "Mitarbeiter Hausmeisterservice (m/w/d)",
    type: "Vollzeit / Teilzeit / Minijob",
    location: "Hirschberg, Weinheim, Heidelberg und Umgebung",
    schedule: "Nach Absprache",
    teaser:
      "Sie unterstützen unser Team bei Objektbetreuung, Kleinreparaturen und Pflegearbeiten.",
    tasks: [
      "Regelmäßige Objektkontrollen und Pflege von Wohnanlagen",
      "Kleinere Reparaturen und Koordination externer Fachbetriebe",
      "Winterdienst, Mülltonnenservice und allgemeine Hausmeistertätigkeiten",
      "Dokumentation erledigter Arbeiten und kurzer Rückmeldungen an das Team",
    ],
    profile: [
      "Handwerkliches Geschick und ein Blick für Ordnung",
      "Zuverlässigkeit, Pünktlichkeit und serviceorientiertes Auftreten",
      "Selbstständiges Arbeiten nach klarer Abstimmung",
      "Führerschein Klasse B wünschenswert",
    ],
  },
  // {
  //   title: "Aushilfe Garten- und Renovierungsservice (m/w/d)",
  //   type: "Minijob / saisonale Unterstützung",
  //   location: "Rhein-Neckar-Region",
  //   schedule: "Stundenweise",
  //   teaser:
  //     "Sie packen bei Gartenpflege, Renovierungsarbeiten und vorbereitenden Tätigkeiten mit an.",
  //   tasks: [
  //     "Unterstützung bei Gartenpflege, Rückschnitt und einfachen Außenarbeiten",
  //     "Vorbereitende Tätigkeiten bei Maler- und Renovierungsarbeiten",
  //     "Materialtransport und Unterstützung vor Ort",
  //     "Sauberes Hinterlassen der Arbeitsbereiche",
  //   ],
  //   profile: [
  //     "Freude an praktischer Arbeit und körperlicher Einsatzbereitschaft",
  //     "Teamfähigkeit und zuverlässige Absprachen",
  //     "Sorgfältige Arbeitsweise",
  //     "Erste Erfahrung im Garten- oder Renovierungsbereich ist hilfreich",
  //   ],
  // },
];

function JobPage() {
  return (
    <section className={classes.jobPage}>
      <div className={classes.intro}>
        <p className={classes.eyebrow}>Karriere bei immos4u</p>
        <h2>Offene Stellenangebote</h2>
        <p>
          Wir suchen Menschen, die Immobilien, Service und verlässliche
          Zusammenarbeit genauso ernst nehmen wie wir. Klappen Sie ein
          Stellenangebot auf und erfahren Sie mehr über Aufgaben und Profil.
        </p>
      </div>

      <div className={classes.jobList}>
        {jobOffers.map((job) => (
          <Accordion
            disableGutters
            key={job.title}
            className={classes.accordion}
            sx={{
              border: "1px solid rgba(var(--card-border-rgb), 0.3)",
              backgroundColor: "rgba(24, 26, 27, 0.38)",
              backgroundImage: "none",
              color: "#d6d3cd",
              overflow: "hidden",
              "&:before": { display: "none" },
              "&.Mui-expanded": {
                backgroundColor: "rgba(24, 26, 27, 0.38)",
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`${job.title}-content`}
              id={`${job.title}-header`}
              className={classes.summary}
              sx={{
                minHeight: "auto",
                padding: { xs: "14px", sm: "18px" },
                "&.Mui-expanded": {
                  minHeight: "auto",
                },
                "& .MuiAccordionSummary-content": {
                  margin: 0,
                  paddingTop: "8px",
                  paddingBottom: "8px",
                  "&.Mui-expanded": {
                    margin: 0,
                  },
                },
              }}
            >
              <div className={classes.summaryContent}>
                <div>
                  <h3>{job.title}</h3>
                  <p>{job.teaser}</p>
                </div>

                <div className={classes.chips} aria-label="Rahmendaten">
                  <Chip
                    icon={<BusinessCenterIcon />}
                    label={job.type}
                    color="warning"
                    variant="outlined"
                  />
                  <Chip
                    icon={<LocationOnIcon />}
                    label={job.location}
                    variant="outlined"
                  />
                  <Chip
                    icon={<AccessTimeIcon />}
                    label={job.schedule}
                    variant="outlined"
                  />
                </div>
              </div>
            </AccordionSummary>

            <AccordionDetails className={classes.details}>
              <div className={classes.detailGrid}>
                <div>
                  <h4>Ihre Aufgaben</h4>
                  <ul>
                    {job.tasks.map((task) => (
                      <li key={task}>{task}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4>Ihr Profil</h4>
                  <ul>
                    {job.profile.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className={classes.applyBox}>
                <div>
                  <h4>Interesse?</h4>
                  <p>
                    Senden Sie uns eine kurze Nachricht mit Lebenslauf oder
                    rufen Sie direkt an. Wir melden uns zeitnah zurück.
                  </p>
                </div>
                <Button
                  className={classes.applyButton}
                  component={Link}
                  href="/kontakt"
                  variant="outlined"
                  color="warning"
                  startIcon={<MailOutlineIcon />}
                >
                  Jetzt bewerben
                </Button>
              </div>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </section>
  );
}

export default JobPage;

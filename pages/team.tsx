import EmailIcon from "@mui/icons-material/Email";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import Image from "next/image";
import classes from "@/styles/TeamPage.module.css";

const teamMembers = [
    {
        name: "Tobias Hablowetz",
        position: "Inhaber & Hausservices",
        image: "/team/tobias_hablowetz.jpg",
        imageFit: "cover",
        phone: "+49 176 - 62771773",
        email: "hablowetz@immos4u.eu",
    },
    {
        name: "Andrea Carta",
        position: "Immobilienmaklerin",
        image: "/immo.png",
        imageFit: "contain",
        phone: "+49 152 - 53519024",
        email: "carta@immos4u.eu",
    },
];

function TeamPage() {
  return (
    <section className={classes.teamPage}>
      <div className={classes.intro}>
        <h2>Unser Team</h2>
        <p>
          Persönlich, zuverlässig und direkt erreichbar: Hier finden Sie Ihre
          Ansprechpartner bei immos4u.
        </p>
      </div>

      <div className={classes.teamList}>
        {teamMembers.map((member) => (
          <article className={classes.memberCard} key={member.email}>
            <div className={classes.imageContainer}>
              <Image
                src={member.image}
                alt={member.name}
                fill
                sizes="(max-width: 700px) 100vw, 280px"
                className={
                  member.imageFit === "contain"
                    ? classes.imageContain
                    : classes.image
                }
              />
            </div>

            <div className={classes.memberContent}>
              <div>
                <h3>{member.name}</h3>
                <p className={classes.position}>{member.position}</p>
              </div>

              <div className={classes.contactLinks}>
                <a href={`tel:${member.phone.replace(/[\s-]/g, "")}`}>
                  <PhoneAndroidIcon fontSize="small" />
                  <span>{member.phone}</span>
                </a>
                <a href={`mailto:${member.email}`}>
                  <EmailIcon fontSize="small" />
                  <span>{member.email}</span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default TeamPage;

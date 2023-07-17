import classes from "@/styles/ContactPage.module.css";
import ContactForm from "@/components/ContactForm";
import Address from "@/components/Address";

function ContactPage() {
  return (
    <>
      <h2 className="center">Kontakt</h2>
      <div className={classes.addressContainer}>
        <div className={classes.addresses}>
          Wir freuen uns über Ihre Nachricht!
          <Address name="immos4u®" tel="+49 6201 - 878585" street="Unterer Häuselbergweg 8" city="69493 Hirschberg a.d. Bergstraße"/>
          <Address name="Andrea Carta" position="Immobilienmaklerin" mobil="+49 152 - 53519024" mail="carta@immos4u.eu"/>
          <Address name="Tobias Hablowetz" position="Rund ums Haus" mobil="+49 152 - 53519024" mail="carta@immos4u.eu"/>
        </div>
        <br />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1295.5317501260638!2d8.665791239031984!3d49.502194834734816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4797c493add2c57d%3A0x6c61cef13d0500e3!2sUnterer%20H%C3%A4uselbergweg%208%2C%2069493%20Hirschberg%20an%20der%20Bergstra%C3%9Fe!5e0!3m2!1sde!2sde!4v1689369418077!5m2!1sde!2sde"
          width="700"
          height="300"
          style={{ border: "0" }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className={classes.formular}>
        <h3>Oder nutzen Sie einfach unser Kontaktformular:</h3>
        <br />
        <ContactForm></ContactForm>
      </div>
    </>
  );
}

export default ContactPage;

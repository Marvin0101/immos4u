import { Button, TextField, TextareaAutosize } from "@mui/material";
import { useRef } from "react";
import classes from '@/styles/ContactPage.module.css';

function ContactPage() {
  const inputRefVorname: any = useRef();

  const sendMessage = (event: any) => {
    event.preventDefault();
    console.log("send: ", inputRefVorname.current.value);
  };

  return (
    <>
      <h2 className="center">Kontakt</h2>
      <address>
        Tobias Hablowetz
        <br /> adadasddadad a3 <br /> 3423 sfsffsfsf
      </address>

      <br />
	  Oder nutzen Sie einfach unser Formular:
      <form onSubmit={sendMessage} className="center">
        <div className="contact">
          <div className={classes.row}>
            <TextField id="vorname" label="Vorname" size="small" sx={{marginRight: "10px"}}/>
            <TextField id="nachname" label="Nachname" size="small" />
          </div>
          <div className={classes.row}>
            <TextField id="email" label="Email" size="small" />
          </div>
		  <div className={classes.row}>
          <TextField
            id="message"
            label="Nachricht"
            size="medium"
            multiline
            rows={10}
            sx={{ width: "500px" }}
          />
		  </div>
        </div>
        <Button variant="outlined">Senden</Button>
      </form>
    </>
  );
}

export default ContactPage;

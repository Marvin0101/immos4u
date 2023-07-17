import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import classes from "@/styles/ContactForm.module.css";
import { useRef, useState } from "react";

function ContactForm() {
  const inputRefVorname: any = useRef();
  const [age, setAge] = useState(null);

  const sendMessage = (event: any) => {
    event.preventDefault();
    console.log("send: ", inputRefVorname.current.value);
  };

  const selectChange = (event: any): void => {
    setAge(event.target.value);
  };

  return ( 
    <form onSubmit={sendMessage} className="center">
          <div className="contact">
            <div className={classes.row}>
              <TextField
                id="vorname"
                label="Vorname*"
                fullWidth
              />
              <TextField
                id="nachname"
                label="Nachname*"
                size="medium"
                fullWidth
              />
            </div>
            <div className={classes.row}>
              <TextField
                id="email"
                label="Email*"
                size="medium"
                fullWidth
              />
            </div>
            <div className={classes.row}>
              <FormControl fullWidth>
                <InputLabel id="select">Betreff*</InputLabel>
                <Select
                  value={age}
                  id="select"
                  onChange={selectChange}
                  label="Betreff*"
                  fullWidth
                  MenuProps={{
                    disableScrollLock: true,
                  }}
                >
                  <MenuItem value="kauf">Wohnungskauf</MenuItem>
                  <MenuItem value="miete">Mietwohnung</MenuItem>
                  <MenuItem value="hausmeister">Hausmeisterservice</MenuItem>
                  <MenuItem value="sonstiges">Sonstiges</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className={classes.row}>
              <TextField
                id="message"
                label="Nachricht*"
                size="medium"
                multiline
                rows={10}
                fullWidth
              />
            </div>
          </div>
          <Button variant="outlined" startIcon={<SendIcon />}>
            Senden
          </Button>
        </form>
   );
}

export default ContactForm;
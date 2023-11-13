import Image from "next/image";
import classes from "@/styles/Referent.module.css";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

function Referent(props: any) {
  return (
    <>
      <div className={classes.center}>
        <h3 className={classes.title}>{props.title}</h3>
        <div className={classes["image-container"]}>
          <Image
            className={classes.image}
            src={props.src}
            alt={props.alt}
            fill
          />
        </div>
        {props.hasText &&
        <div className={classes.textbox}>
          <FormatQuoteIcon />
          {props.children}
          <FormatQuoteIcon className={classes["last-quote"]} />
        </div>
        }
      </div>
    </>
  );
}

export default Referent;

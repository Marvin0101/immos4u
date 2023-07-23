import Image from "next/image";
import classes from "@/styles/Expose.module.css";
import { Button } from "@mui/material";

function Expose(props: any) {
  return (
    <>
      <div className={classes.flex}>
        <div className={classes["image-flex"]}>
          <div className={classes["image-container"]}>
            <Image
              className={classes.image}
              src={props.bigImage}
              alt=""
              fill
            />
          </div>
          <div className={classes["small-image-flex"]}>
            <div className={classes["small-image-container"]}>
              <Image
                className={classes.image}
                src={props.smallImageLeft}
                alt=""
                fill
              />
            </div>
            <div className={classes["small-image-container"]}>
              <Image
                className={classes.image}
                src={props.smallImageCenter}
                alt=""
                fill
              />
            </div>
            <div className={classes["small-image-container"]}>
              <Image
                className={classes.image}
                src={props.smallImageRight}
                alt=""
                fill
              />
            </div>
          </div>
        </div>
        <div className={classes["flex-text"]}>
          <div>
            <h3>{props.title}</h3>
            <br />
            <h4>{props.titleSecond}</h4>
            <br />
          </div>
          <p className={classes.text}>
            {props.text}
          </p>
          <div>
            <br />
            <p>Warmmiete</p>
            <h4>600 €</h4><br></br>
            <Button variant="outlined" color="warning">mehr</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Expose;

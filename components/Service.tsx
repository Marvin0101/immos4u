import classes from "@/styles/Service.module.css";
import Image from "next/image";

function Service(props: any) {
  return (
    <>
      <div className={classes.titleContainer}>
        <h2 className={classes.title}>{props.title}</h2>
      </div>
      <div className={classes.imageFlex}>
        <div className={classes.imageContainer}>
          <Image className={classes.image} src={props.imageLeft} alt="" fill />
        </div>
        <div className={classes.imageContainer}>
          <Image
            className={classes.image}
            src={props.imageMiddle}
            alt=""
            fill
          />
        </div>
        <div className={classes.imageContainer}>
          <Image className={classes.image} src={props.imageRight} alt="" fill />
        </div>
      </div>
        <div className={classes.text}>
            {props.text}
        </div>
    </>
  );
}

export default Service;

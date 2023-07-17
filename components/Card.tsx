import Link from "next/link";
import classes from "@/styles/Card.module.css";
import Image from "next/image";

interface CardType {
  link: string,
  title: string,
  image: string,
  text: string
}

function Card(props: CardType) {
  return (
    <>
      <Link href={props.link} className={classes.card}>
        <div className={classes["image-container"]}>
          <Image className={classes.image} src={props.image} alt="" fill />
        </div>
        <h2>
          {props.title} <span>-&gt;</span>
        </h2>
        <p>{props.text}</p>
      </Link>
    </>
  );
}

export default Card;

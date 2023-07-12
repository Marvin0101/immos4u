import classes from "@/styles/Header.module.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function Header() {
  const [height, setHeight] = useState<string>('120px');
  const [imageHeight, setImageHeight] = useState<string>('100px');

  useEffect(() => {
    const options = { passive: true }; 
    document.addEventListener("scroll", scroll, {passive: true});
    return () => document.removeEventListener("scroll", scroll);
  }, []);
  
  const scroll = () => {
    if( document.documentElement.scrollTop > 50) {
      setHeight('50px');
      setImageHeight('45px');
    } else {
      setHeight('120px');
      setImageHeight('100px');
    }
   };

  return (
    <>
      <header className={classes.header}>
        <nav className={classes.nav} style={{height: height}}>
          <div className={classes["title-container"]}>
            <div className={classes["image-container"]} style={{height: imageHeight}}>
              <Image
                className={classes.image}  
                src="/immo.png"
                alt=""
                fill
              />
            </div>
            <Link href="/" className={classes.title}>
              immos<span className={classes.colored}>4</span>u
            </Link>
          </div>
          <div className={classes.menu}>
            <Link href="/kaufobjekte" className={classes.link}>
              Kaufobjekte
            </Link>
            <Link href="/mietobjekte" className={classes.link}>
              Mietobjekte
            </Link>
            <Link href="/hausverwaltung" className={classes.link}>
              Hausverwaltung
            </Link>
            <Link href="/services" className={classes.link}>
              Weitere Services
            </Link>
            <Link href="/kontakt" className={classes.link}>
              Kontakt
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;

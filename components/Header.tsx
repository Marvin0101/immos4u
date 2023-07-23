import classes from "@/styles/Header.module.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

function Header() {
  const [height, setHeight] = useState<string>("120px");
  const [imageHeight, setImageHeight] = useState<string>("100px");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    document.addEventListener("scroll", scroll, { passive: true });
    return () => document.removeEventListener("scroll", scroll);
  }, []);

  const scroll = () => {
    if (document.documentElement.scrollTop > 50) {
      setHeight("50px");
      setImageHeight("45px");
    } else {
      setHeight("120px");
      setImageHeight("100px");
    }
  };

  const toggleDrawer = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <header className={classes.header}>
        <nav className={classes.nav} style={{ height: height }}>
            <Link href="/">
          <div className={classes["title-container"]}>
            <div
              className={classes["image-container"]}
              style={{ height: imageHeight }}
            >
              <Image className={classes.image} src="/immo.png" alt="" fill />
            </div>
              <div className={classes.title}>
              immos<span className={classes.colored}>4</span>u
              </div>
          </div>
            </Link>
          <div className={classes.menu}>
            <Link href="/kaufobjekte" className={classes.link}>
              Kaufobjekte
            </Link>
            <Link href="/mietobjekte" className={classes.link}>
              Mietobjekte
            </Link>
            <Link href="/rund-ums-haus" className={classes.link}>
              Rund ums Haus
            </Link>
            <Link href="/referenzen" className={classes.link}>
              Referenzen
            </Link>
            <Link href="/kontakt" className={classes.link}>
              Kontakt
            </Link>
          </div>
          <div className={classes.burger} onClick={toggleDrawer}>
            <MenuIcon fontSize="inherit" />
            <Drawer
              anchor="right"
              open={isOpen}
              BackdropProps={{ style: { backdropFilter: "blur(3px)" } }}
            >
              <div className={classes.drawer}>
                <List className={classes.drawer}>
                  <Link href="/kaufobjekte">
                    <ListItemButton>
                      <ListItemText primary="Kaufobjekte" />
                    </ListItemButton>
                  </Link>
                  <Link href="/mietobjekte">
                    <ListItemButton>
                      <ListItemText primary="Mietobjekte" />
                    </ListItemButton>
                  </Link>
                  <Link href="/rund-ums-haus">
                    <ListItemButton>
                      <ListItemText primary="Rund ums Haus" />
                    </ListItemButton>
                  </Link>
                  <Link href="/referenzen">
                    <ListItemButton>
                      <ListItemText primary="Referenzen" />
                    </ListItemButton>
                  </Link>
                  <Link href="/kontakt">
                    <ListItemButton>
                      <ListItemText primary="Kontakt" />
                    </ListItemButton>
                  </Link>
                </List>
              </div>
            </Drawer>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;

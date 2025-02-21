import classes from "@/styles/Header.module.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  Button,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import BasicMenu from "./BasicMenu";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

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
            {/* <Link href="/" className={classes.link}>
              Start
            </Link> */}
            {/* <Link href="/kaufobjekte" className={classes.link}>
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
            </Link> */}
            <Link href="/">
              <Button
                sx={{ fontSize: "18px", color: "#fd7800", fontWeight: "bold" }}
                // startIcon={<MenuIcon />}
              >
                Start
              </Button>
            </Link>
            <BasicMenu
              buttonName="Immobilien"
              menuItems={[
                { label: "Verkauf", link: "/kaufobjekte" },
                { label: "Vermietung", link: "/mietobjekte" },
                { label: "Bewertung", link: "/bewertung" },
                { label: "Ferienvermietung", link: "/ferienobjekte" },
              ]}
            />
            <BasicMenu
              buttonName="Rund ums Haus"
              menuItems={[
                {
                  label: "Hausmeisterservice",
                  link: "/rund-ums-haus#hausmeisterservice",
                },
                {
                  label: "Malerarbeiten",
                  link: "/rund-ums-haus#malerarbeiten",
                },
                { label: "Renovierung", link: "/rund-ums-haus#renovierung" },
                {
                  label: "Gartenservice",
                  link: "/rund-ums-haus#gartenservice",
                },
              ]}
            />
            <BasicMenu
              buttonName="Über uns"
              menuItems={[
                { label: "Kontakt", link: "/kontakt" },
                { label: "Team", link: "/team" },
                { label: "Referenzen", link: "/referenzen" },
              ]}
            />
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
                  <Link href="/">
                    <ListItemButton>
                      <ListItemIcon sx={{ minWidth: "20px" }}>
                        <ArrowForwardIosIcon
                          sx={{ fontSize: "1rem", color: "white" }}
                        />
                      </ListItemIcon>
                      <ListItemText primary="Start" />
                    </ListItemButton>
                  </Link>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      mt: 1,
                    }}
                  >
                    <Divider sx={{ flexGrow: 1, backgroundColor: "#612500" }} />
                    <Typography variant="subtitle1" sx={{ color: "#612500" }}>
                      Immobilien
                    </Typography>
                    <Divider sx={{ flexGrow: 1, backgroundColor: "#612500" }} />
                  </Box>
                  <Link href="/kaufobjekte">
                    <ListItemButton>
                      <ListItemIcon sx={{ minWidth: "20px" }}>
                        <ArrowForwardIosIcon
                          sx={{ fontSize: "1rem", color: "white" }}
                        />
                      </ListItemIcon>
                      <ListItemText primary="Verkauf" />
                    </ListItemButton>
                  </Link>
                  <Link href="/mietobjekte">
                    <ListItemButton>
                      <ListItemIcon sx={{ minWidth: "20px" }}>
                        <ArrowForwardIosIcon
                          sx={{ fontSize: "1rem", color: "white" }}
                        />
                      </ListItemIcon>
                      <ListItemText primary="Vermietung" />
                    </ListItemButton>
                  </Link>
                  <Link href="/bewertung">
                    <ListItemButton>
                      <ListItemIcon sx={{ minWidth: "20px" }}>
                        <ArrowForwardIosIcon
                          sx={{ fontSize: "1rem", color: "white" }}
                        />
                      </ListItemIcon>
                      <ListItemText primary="Bewertung" />
                    </ListItemButton>
                  </Link>
                  <Link href="/ferienobjekte">
                    <ListItemButton>
                      <ListItemIcon sx={{ minWidth: "20px" }}>
                        <ArrowForwardIosIcon
                          sx={{ fontSize: "1rem", color: "white" }}
                        />
                      </ListItemIcon>
                      <ListItemText primary="Ferienvermietung" />
                    </ListItemButton>
                  </Link>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      mt: 1,
                    }}
                  >
                    <Divider sx={{ flexGrow: 1, backgroundColor: "#612500" }} />
                    <Typography variant="subtitle1" sx={{ color: "#612500" }}>
                      Rund ums Haus
                    </Typography>
                    <Divider sx={{ flexGrow: 1, backgroundColor: "#612500" }} />
                  </Box>
                  <Link href="/rund-ums-haus#hausmeisterservice">
                    <ListItemButton>
                      <ListItemIcon sx={{ minWidth: "20px" }}>
                        <ArrowForwardIosIcon
                          sx={{ fontSize: "1rem", color: "white" }}
                        />
                      </ListItemIcon>
                      <ListItemText primary="Hausmeisterservice" />
                    </ListItemButton>
                  </Link>
                  <Link href="/rund-ums-haus#malerarbeiten">
                    <ListItemButton>
                      <ListItemIcon sx={{ minWidth: "20px" }}>
                        <ArrowForwardIosIcon
                          sx={{ fontSize: "1rem", color: "white" }}
                        />
                      </ListItemIcon>
                      <ListItemText primary="Malerarbeiten" />
                    </ListItemButton>
                  </Link>
                  <Link href="/rund-ums-haus#renovierung">
                    <ListItemButton>
                      <ListItemIcon sx={{ minWidth: "20px" }}>
                        <ArrowForwardIosIcon
                          sx={{ fontSize: "1rem", color: "white" }}
                        />
                      </ListItemIcon>
                      <ListItemText primary="Renovierung" />
                    </ListItemButton>
                  </Link>
                  <Link href="/rund-ums-haus#gartenservice">
                    <ListItemButton>
                      <ListItemIcon sx={{ minWidth: "20px" }}>
                        <ArrowForwardIosIcon
                          sx={{ fontSize: "1rem", color: "white" }}
                        />
                      </ListItemIcon>
                      <ListItemText primary="Gartenservice" />
                    </ListItemButton>
                  </Link>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      mt: 1,
                    }}
                  >
                    <Divider sx={{ flexGrow: 1, backgroundColor: "#612500" }} />
                    <Typography variant="subtitle1" sx={{ color: "#612500" }}>
                      Über Uns
                    </Typography>
                    <Divider sx={{ flexGrow: 1, backgroundColor: "#612500" }} />
                  </Box>
                  <Link href="/kontakt">
                    <ListItemButton>
                      <ListItemIcon sx={{ minWidth: "20px" }}>
                        <ArrowForwardIosIcon
                          sx={{ fontSize: "1rem", color: "white" }}
                        />
                      </ListItemIcon>
                      <ListItemText primary="Kontakt" />
                    </ListItemButton>
                  </Link>
                  <Link href="/team">
                    <ListItemButton>
                      <ListItemIcon sx={{ minWidth: "20px" }}>
                        <ArrowForwardIosIcon
                          sx={{ fontSize: "1rem", color: "white" }}
                        />
                      </ListItemIcon>
                      <ListItemText primary="Team" />
                    </ListItemButton>
                  </Link>
                  <Link href="/referenzen">
                    <ListItemButton>
                      <ListItemIcon sx={{ minWidth: "20px" }}>
                        <ArrowForwardIosIcon
                          sx={{ fontSize: "1rem", color: "white" }}
                        />
                      </ListItemIcon>
                      <ListItemText primary="Referenzen" />
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

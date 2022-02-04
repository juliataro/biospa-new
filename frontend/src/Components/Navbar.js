import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import DrawerComponent from "./Drawer";
import logo from "../Images/Loodus-BioSpa-Logo-300.png"; //
import "../index.css";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const useStyles = makeStyles((theme) => ({
  navbar: {
    backgroundColor: "#fff",
    height: 80,
  },

  logo: {
    cursor: "pointer",
    marginTop: 15,
    marginLeft: 60,
    marginRight: 40,
  },

  logolinks: {
    display: "flex",
    justifyContent: "space-between",
    width: "100vw",
  },

  navlinks: {
    marginTop: 30,
    display: "flex",
    justifyContent: "space-between",
  },

  link: {
    textDecoration: "none",
    color: "#585c69",
    fontSize: "16px",
    marginLeft: theme.spacing(3),

    "&:hover": {
      color: "#72bb94",
      borderBottom: "1px solid white",
    },

    loginout: {
      color: "#72bb94 !important",
    },

    button: {
      backgroundColor: "#72bb94 !important",
    },
  },
}));

function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar className={classes.navbar} position="static">
      <CssBaseline />
      <Toolbar>
        <Link className={classes.logo} to="/">
          <img
            width="100px"
            height="auto"
            className="img-responsive"
            src={logo}
            alt="logo"
          />
        </Link>
        <div className={classes.logolinks}>
          {isMobile ? (
            <DrawerComponent />
          ) : (
            <div className={classes.navlinks}>
              <Link to="/" className={classes.link}>
                Procedurite eelkatse
              </Link>
              <Link to="/about" className={classes.link}>
                Meist
              </Link>
              <Stack direction="row" spacing={2}>
                <Button variant="outlined">Loogi Sisse</Button>

                <Button
                  className={classes.button}
                  variant="contained"
                  href="#contained-buttons"
                >
                  Registreeri
                </Button>
              </Stack>
            </div>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;

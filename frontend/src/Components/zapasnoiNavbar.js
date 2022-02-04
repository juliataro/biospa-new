import React from "react";
import { AppBar, Toolbar, CssBaseline, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import logo from "../Images/Loodus-BioSpa-Logo-300.png"; //

const useStyles = makeStyles((theme) => ({
  navbar: {
    backgroundColor: "#fff",
    height: 80,
  },
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
    maxWidth: 40,
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "16px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "#72bb94 ",
      borderBottom: "1px solid white",
    },
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <AppBar className={classes.navbar} position="static">
      <CssBaseline />
      <Toolbar>
        <Toolbar>
          <Link to="/">
            <img
              width="70px"
              height="auto"
              className="img-responsive"
              src={logo}
              alt="logo"
            />
          </Link>
        </Toolbar>
        <div className={classes.navlinks}>
          <Link to="/about" className={classes.link}>
            Procedures test
          </Link>
          <Link to="/about" className={classes.link}>
            About
          </Link>
          <Link to="/contact" className={classes.link}>
            Contact
          </Link>
          <Link to="/faq" className={classes.link}>
            FAQ
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;

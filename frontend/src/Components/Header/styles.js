import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
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
  },

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
  languages: {
    marginLeft: 50,
    marginRight: 50,
  },
}));

import React from "react";
import Grid from "@mui/material/Grid";

import DropTargets from "../../Components/DropTargets";
import DropSymptoms from "../../Components/DropSymptoms";
import DropDesiases from "../../Components/DropDesiases";
import Slider from "../../Components/Slider";

import Typography from "@mui/material/Typography";

const classes = {
  root: {
    marginTop: "5rem",
    marginLeft: "2rem",
    marginRight: "2rem",
  },
  paper: {
    padding: 20,
    textAlign: "center",
    color: "blue",
    fontFamily: "Roboto",
    marginTop: "10rem",
  },
};

/**Drop Down elements in two colomns and two rows */

export const Procedures = () => {
  return (
    <div style={classes.root}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12}>
          <Typography variant="h4" component="div" gutterBottom>
            Loodus BioSpa on eksklusiivne butiik-SPA
          </Typography>
          <Typography variant="h6" component="div" gutterBottom>
            Mingi intro text
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        {/*This item will be 12 units on extra small screens */}
        {/*But will be 6 units on small screens */}
        <Grid item xs={12} sm={6}>
          <DropTargets />
        </Grid>
        <Grid item xs={12} sm={6}>
          <DropSymptoms />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        {/*This item will be 12 units on extra small screens */}
        {/*But will be 6 units on small screens */}
        <Grid item xs={12} sm={6}>
          <DropDesiases />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Slider />
        </Grid>
      </Grid>
    </div>
  );
};

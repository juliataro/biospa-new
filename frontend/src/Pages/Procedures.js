import React from "react";
import Grid from "@mui/material/Grid";
import { useState, useEffect } from "react";

import DropTargets from "../Components/Procedures/DropTargets";
import DropSymptoms from "../Components/Procedures/DropSymptoms";
import DropDesiases from "../Components/Procedures/DropDiseases";
import Slider from "../Components/Procedures/Slider";

import Typography from "@mui/material/Typography";

const classes = {
  root: {
    marginLeft: "2rem",
    marginRight: "2rem",
  },
  paper: {
    padding: 20,
    backgorundColor: "#000",
    textAlign: "center",
    color: "blue",
    fontFamily: "Roboto",
    marginTop: "10rem",
  },
  intro: {
    backgroundColor: '#EDEDED',
    color: "#000000",
    paddingTop: "5rem",
    paddingBottom: "5rem",
    paddingLeft: "2rem",
    paddingRight: "2rem",
  },
  sec: {
    paddingTop: "2rem",
    paddingBottom: "2rem",
  },
  h1: {
    fontSize: '38px',
    fontWeight: 500,
    maxWidth: '600px',
    lineHeight: '1.2',
  },
  h2: {
    fontSize: '21px',
    fontWeight: 500,
    marginTop: '15px',
  },
  p: {
    color: '#000000',
  }
};


/**Drop Down elements in two colomns and two rows */

export const Procedures = () => {
  return (
    <div >
      <Grid style={classes.intro} item xs={12}>
        <div style={classes.root}>
          <Grid rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Typography style={classes.h1} variant="h1" component="div" gutterBottom>
              Loodus BioSpa on eksklusiivne butiik-SPA
            </Typography>
            <Typography style={classes.h2} variant="h2" component="div" gutterBottom>
              Mingi intro text
            </Typography>
          </Grid>
        </div>
      </Grid>
    <div style={classes.root}>
      <div style={classes.sec}>
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
    </div>
    </div>
  );
};

import React, { useState } from "react";
import Grid from "@mui/material/Grid";
// import { useState, useEffect } from "react";

import DropTargets from "../Components/Procedures/DropTargets";
import DropSymptoms from "../Components/Procedures/DropSymptoms";

import Slider from "../Components/Procedures/Slider";

import Typography from "@mui/material/Typography";

import ProceduresList from "../Components/Procedures/ProceduresList";
import DropDiseases from "../Components/Procedures/DropDiseases";

// import axios from "axios";

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
  const [diseases, setDiseases] = useState([]);
  const [diseasesValue, setDiseasesValue] = useState([]); // Responsible for catching chousen ID in dropdown

  // One variable for all useStates for passing
  const obj = {
    diseases,
    setDiseases,
    diseasesValue,
    setDiseasesValue,
  };

  return (
    <div style={classes.root}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12}>
          {/* HEADER */}
          <Typography variant="h4" component="div" gutterBottom>
            Loodus BioSpa on eksklusiivne butiik-SPA
          </Typography>

          {/* INTRO TEXT */}
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
          <DropDiseases
            {...obj} ///////////////////////////// All states and setStates are in one variable
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Slider />
        </Grid>
      </Grid>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12}>
          <ProceduresList {...obj} />
        </Grid>
      </Grid>
    </div>
  );
};

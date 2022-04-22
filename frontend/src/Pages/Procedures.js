import React, { useState } from "react";
import Grid from "@mui/material/Grid";
// import { useState, useEffect } from "react";

import DropTargets from "../Components/Procedures/DropTargets";
import DropSymptoms from "../Components/Procedures/DropSymptoms";

import Slider from "../Components/Procedures/Slider";

import Typography from "@mui/material/Typography";

import ProceduresList from "../Components/Procedures/ProceduresList";
import DropDiseases from "../Components/Procedures/DropDiseases";


const classes = {
  root: {
   
  },
  intro: {
    backgroundColor: "#EDEDED",
    color: "#000000",
    paddingTop: "5rem",
    paddingBottom: "5rem",
    paddingLeft: "2rem",
    paddingRight: "2rem",
    margin: "auto",
  },
  sec: {
    margin: "auto",
    maxWidth: "1200px",
    paddingRight: "30px",
    paddingLeft: "30px"
  },
  secTwo: {
    margin: "auto",
    maxWidth: "1200px",
    marginTop: "5rem",
    marginLeft: "-19px !important",
    paddingRight: "30px",
    paddingLeft: "30px"
  },
  container: {
    width: "100%",
    display: "flex",
  },
  containerSecond: {
    width: "100%",
    display: "flex",
    marginTop: "4rem",
  },
  secResult: {
    marginLeft: 6,
  },
  filter: {
    width: "100%",
    justifyContent: "right",
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
  const [targets, setTargets] = useState([]);
  const [targetsValue, setTargetsValue] = useState([]); // Responsible for catching chousen ID in dropdown
  const [symptoms, setSymptoms] = useState([]);
  const [symptomsValue, setSymptomsValue] = useState([]); // Responsible for catching chousen ID in dropdown
  const [priceValue, setPriceValue] = useState([]);

  // One variable for all useStates for passing
  const obj = {
    targets,
    setTargets,
    targetsValue,
    setTargetsValue,
    diseases,
    setDiseases,
    diseasesValue,
    setDiseasesValue,
    symptoms,
    setSymptoms,
    symptomsValue,
    setSymptomsValue,
    priceValue,
    setPriceValue,
  };

  return (
    <div style={classes.root}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} style={classes.intro}>
          {/* HEADER */}
          <div style={classes.sec}>
            <Typography variant="h4" component="div" gutterBottom style={{maxWidth: "45%"}}>
              Loodus BioSpa on eksklusiivne butiik-SPA
            </Typography>
            {/* INTRO TEXT */}
            <Typography variant="h6" component="div" gutterBottom>
              Mingi intro text
            </Typography>
          </div>
        </Grid>
      </Grid>
      <div style={classes.secTwo}>
        <Grid container spacing={3}>
          {/*This item will be 12 units on extra small screens */}
          {/*But will be 6 units on small screens */}
          <div style={classes.container}>
            <Grid item xs={12} sm={6}>
              <DropTargets {...obj} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <DropSymptoms {...obj} />
            </Grid>
          </div>
        </Grid>

        <Grid container spacing={3}>
          {/*This item will be 12 units on extra small screens */}
          {/*But will be 6 units on small screens */}
          <div style={classes.containerSecond}>
            <Grid item xs={12} sm={6}>
              <DropDiseases
                {...obj}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Slider 
                {...obj}
                />
            </Grid>
          </div>
        </Grid>
      </div>
      <div style={classes.secTwo}>
        <Grid
          container
          rowSpacing={1}
          style={classes.secResult}
        >
          <Grid item xs={12}>
            <ProceduresList {...obj} />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

import React from "react";
import axios from "axios";
import Button from "@mui/material/Button";

const classes = {
  extractData: {
    marginTop: "0px",
  },
  icon: {
    color: "white",
  },
  searchBtn: {
    marginTop: "-3rem",
    marginBottom: "3rem",
  },
};

const GenericBtn = (props) => {
  const {
    targetsValue,
    diseasesValue,
    symptomsValue,
    pricesValue,
    setProcedures,
  } = props;

  // const loadProceduresOnAnyFilters = async () => {
  //   if ((diseasesValue, targetsValue, symptomsValue, pricesValue)) {
  //     // If three is clients Targets choice
  //     const tarIds = targetsValue
  //       .map((n, index) => `tarId[${index}]=${n}`)
  //       .join("&");

  //     // If there is clients Symptoms
  //     const sympIds = symptomsValue
  //       .map((n, index) => `sympId[${index}]=${n}`)
  //       .join("&");

  //     // If three is clients Diseases choice
  //     const disIds = diseasesValue
  //       .map((n, index) => `disId[${index}]=${n}`)
  //       .join("&");

  //     // If there is clients Price choice it joins to query
  //     const response = await axios.get(
  //       `http://localhost:4000/procedures/proc_all_filters?${tarIds}&${sympIds}&${disIds}&${pricesValue}`
  //     );

  //     const response = await axios.get(
  //       `http://localhost:4000/procedures/procTar?${tarIds}&procSymp?${sympIds}&procDis?${disIds}?procPrice&${pricesValue}`
  //     );

  //     setProcedures(response.data);
  //   }
  // };

  /////////////////////////////////////////////////////////////////////////

  // // Fetches Procedures depending on diseases
  // const loadProceduresDiseases = async () => {
  //   const idsQuery = diseasesValue
  //     .map((n, index) => `id[${index}]=${n}`)
  //     .join("&");
  //   const response = await axios.get(
  //     `http://localhost:4000/procedures/procedures_diseases?${idsQuery}`
  //   );
  //   setProcedures(response.data);
  // };

  // // Fetches Procedures on diseases
  // const loadProceduresTargets = async () => {
  //   const idsQuery = targetsValue
  //     .map((n, index) => `id[${index}]=${n}`)
  //     .join("&");
  //   const response = await axios.get(
  //     `http://localhost:4000/procedures/procedures_targets?${idsQuery}`
  //   );
  //   setProcedures(response.data);
  // };

  // // Procedures on Symptoms
  // const loadProceduresSymptoms = async () => {
  //   const idsQuery = symptomsValue
  //     .map((n, index) => `id[${index}]=${n}`)
  //     .join("&");
  //   const response = await axios.get(
  //     `http://localhost:4000/procedures/procedures_symptoms?${idsQuery}`
  //   );
  //   setProcedures(response.data);
  // };

  // Procedures on Targets And Symptoms
  const loadProcTargetsSymptoms = async () => {
    const idsTarQuery = targetsValue.map((n) => `tarIds=${n}`).join("&"); // Take props, mapp it and with query param join
    const idsSympQuery = symptomsValue.map((n) => `&sympIds=${n}`).join("&");
    const idsDisQuery = diseasesValue.map((n) => `&disIds=${n}`).join("&");

    const response = await axios.get(
      `http://localhost:4000/procedures/procTarSymp?${idsTarQuery}${idsSympQuery}${idsDisQuery}&priceMax=${pricesValue}`
    );
    setProcedures(response.data);
  };

  // const loadProceduresPrice = async () => {
  //   // console.log("price ", priceValue);

  //   const response = await axios.get(
  //     `http://localhost:4000/procedures/procedures_prices?maxPrice=${pricesValue}`
  //   );
  //   setProcedures(response.data);
  // };

  // Procedures on Targts and Symptoms

  // const loadProceduresTargets = async () => {
  //   let resource= ""
  //   switch (EventType) {
  //     case DISEASE:
  //       resource = "disease"
  //   }
  //   const response = await axios.get(
  //     "http://localhost:4000/"+resource+"/procedures_targets"
  //   );
  //   setProcedures(response.data[0]);
  // };

  return (
    <Button
      style={classes.searchBtn}
      spacing={5}
      onClick={() => {
        // loadProceduresDiseases(diseasesValue.id);
        // loadProceduresTargets(targetsValue.id);
        // loadProceduresSymptoms(symptomsValue.id);
        // loadProcTargetsSymptoms(targetsValue.id, symptomsValue.id);
        // loadProceduresPrice(pricesValue);
        loadProcTargetsSymptoms(
          diseasesValue.disIds,
          targetsValue.tarIds,
          symptomsValue.sympIds,
          pricesValue.priceMax
        );
      }}
      variant="contained"
    >
      Otsi
    </Button>
  );

  /* return (
    <Button
      style={classes.searchBtn}
      spacing={5}
      onClick={() => {
        loadProceduresTargets(targetsValue.id);
        // loadProceduresTargets();
      }}
      variant="contained"
    >
      Otsi
    </Button>
  ); */
};

export default GenericBtn;

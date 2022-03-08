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
    marginTop: "0px",
  },
};

const GenericBtn = ({ setProcedures }) => {
  // Router if only diseases had been chosen
  const loadProceduresDiseases = async () => {
    const response = await axios.get(
      "http://localhost:4000/procedures/procedures_diseases?id=${id}"
    );
    setProcedures(response.data[0]);
  };

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
        loadProceduresDiseases();
        // loadProceduresTargets();
      }}
      variant="contained"
    >
      Otsi
    </Button>
  );
};

export default GenericBtn;

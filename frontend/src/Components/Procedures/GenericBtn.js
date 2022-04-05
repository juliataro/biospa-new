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

const GenericBtn = (props) => {
  const { diseasesValue, setProcedures } = props;

  // Method fetches Procedures depending on diseases
  const loadProceduresDiseases = async () => {
    const idsQuery = diseasesValue
      .map((n, index) => `id[${index}]=${n}`)
      .join("&");
    const response = await axios.get(
      `http://localhost:4000/procedures/procedures_diseases?${idsQuery}`
    );
    setProcedures(response.data);
  };

  return (
    <Button
      style={classes.searchBtn}
      spacing={5}
      onClick={() => {
        loadProceduresDiseases(diseasesValue.id);
        // loadProceduresTargets();
      }}
      variant="contained"
    >
      Otsi
    </Button>
  );
};

export default GenericBtn;

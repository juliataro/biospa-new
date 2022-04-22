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
  const { targetsValue, diseasesValue, symptomsValue, priceValue, setProcedures } = props;

  const loadProceduresPrice = async () => {
  let minPrice = priceValue.slice(0, 1);
  let maxPrice = priceValue.slice(1, 2);

  const tarIds = targetsValue
  .map((n, index) => `tarid[${index}]=${n}`)
  .join("&");
  
  const sympIds = symptomsValue
  .map((n, index) => `sympid[${index}]=${n}`)
  .join("&");

  const disIds = diseasesValue
  .map((n, index) => `disid[${index}]=${n}`)
  .join("&");
  
  var urlQuery = [];
  if (targetsValue) {
    urlQuery.push(`${tarIds}`);
  }
  if (symptomsValue) {
    urlQuery.push(`&${sympIds}`);
  }
  if (diseasesValue) {
    urlQuery.push(`&${disIds}`);
  }
  if (priceValue) {
    urlQuery.push(`&pricemin=${minPrice}&pricemax=${maxPrice}`);
  }
  var url = urlQuery.join(' ');
  

  const response = await axios.get(
    `http://localhost:4000/procedures/procedures_prices?${url}`
  );

  setProcedures(response.data);
  
  };

  return (
    <Button
      style={classes.searchBtn}
      spacing={5}
      onClick={() => {
        loadProceduresPrice(priceValue, targetsValue, symptomsValue, diseasesValue);
      }}
      variant="contained"
    >
      Otsi
    </Button>
  );

};

export default GenericBtn;

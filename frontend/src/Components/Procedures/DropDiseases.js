import React, { useState, useEffect } from "react";
import axios from "axios";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import Checkbox from "@mui/material/Checkbox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

// For fetching data
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@material-ui/core/Typography";

const classes = {
  extractData: {
    marginTop: "100px",
  },
  icon: {
    color: "white",
  },
};

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

//////////////////////////////////////////////////////////////////////////////

//  TODO Extract list of diseases from db into dropdown list
function DropDiseases() {
  const [diseases, setDiseases] = useState([]);

  const loadData = async () => {
    const response = await axios.get("http://localhost:4000/diseases/all/et");
    setDiseases(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);
  console.log(diseases);

  //////////////////////////////////////////////////////////////////////////////

  // TODO Extract data from DB depending on selected value in Dropdown
  const [procedures, setProcedures] = useState([]);

  const loadProcedures = async () => {
    const result = await axios.get(
      "http://localhost:4000/procedures/procedures_diseases"
    );
    setProcedures(result.data);
  };

  return (
    <Grid container spacing={5}>
      <Grid item xs={6}>
        {/* -------------------------------------------------------------------------------------------------- */}
        {/* Dropdown element */}
        <Autocomplete
          multiple
          id="checkboxes-tags-demo"
          options={diseases}
          disableCloseOnSelect
          getOptionLabel={(option) => `${option.dis_title_et}`}
          renderOption={(props, option, { selected }) => (
            <li {...props}>
              <Checkbox
                icon={icon}
                checkedIcon={checkedIcon}
                style={{ marginRight: 8 }}
                checked={selected}
              />
              {[option.dis_title_et]}
            </li>
          )}
          style={{ width: 500 }}
          renderInput={(params) => (
            <TextField {...params} label="Haigused" placeholder="Favorites" />
          )}
        />
      </Grid>

      {/* -------------------------------------------------------------------------------------------------- */}
      {/* Fetching Procedures data from DataBase */}

      <Grid style={classes.extractData} item xs={6}>
        <Button spacing={5} onClick={loadProcedures} variant="contained">
          Search
        </Button>

        {procedures.map((val, key) => {
          return (
            <Grid item xs={6}>
              <Typography variant="h6">
                Procedure{procedures.proc_title_et}
              </Typography>
              <Typography variant="body1">body1 </Typography>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
}
export default DropDiseases;

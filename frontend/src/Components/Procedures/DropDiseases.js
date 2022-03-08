import React, { useState, useEffect } from "react";
import axios from "axios";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import Checkbox from "@mui/material/Checkbox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

// For fetching data
import Grid from "@mui/material/Grid";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

//////////////////////////////////////////////////////////////////////////////

//  TODO Extract list of diseases from db into dropdown list
function DropDiseases() {
  const [diseases, setDiseases] = useState([]);
  const [diseasesValue, setDiseasesValue] = useState([]);

  const loadData = async () => {
    const response = await axios.get("http://localhost:4000/diseases/all/et");
    setDiseases(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);
  console.log(diseases);

  function handleSelectChange(event) {
    console.log(event.target.value);
    setDiseasesValue(event.target.value);
  }

  //////////////////////////////////////////////////////////////////////////////

  return (
    <Grid container spacing={5}>
      <Grid item xs={6}>
        {/* -------------------------------------------------------------------------------------------------- */}
        {/* Dropdown element */}
        <Autocomplete
          value={diseasesValue.id}
          onChange={handleSelectChange}
          multiple
          id="diseasesId"
          options={diseases}
          disableCloseOnSelect
          getOptionLabel={(option) => `${option.dis_title_et}`}
          // onChange={handleChange}
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
    </Grid>
  );
}
export default DropDiseases;

import React, { useEffect } from "react";
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
function DropDiseases(props) {
  const { diseases, setDiseases, diseasesValue, setDiseasesValue } = props;

  useEffect(() => {
    const loadData = async () => {
      const response = await axios.get("http://localhost:4000/diseases/all/et");
      setDiseases(response.data);
    };
    loadData();
  }, [setDiseases]);

  function handleSelectChange(event, newValue) {
    if (newValue != null) {
      setDiseasesValue(newValue);
    }
    const newArray = diseasesValue;
    newArray.push(event.target.value);
    console.log(newValue);
    console.log(event.target.value);

    setDiseasesValue(newArray);
  }

  // function handleSelectChange(event, id) {
  //   let newArray = diseasesValue.selected;
  //   newArray = newArray.push(diseasesValue.id);
  //   console.log(id);
  //   console.log(diseasesValue.selected);

  //   setDiseasesValue({ selected: newArray });
  // }

  //////////////////////////////////////////////////////////////////////////////

  return (
    <Grid container spacing={5}>
      <Grid item xs={6}>
        {/* -------------------------------------------------------------------------------------------------- */}
        {/* Dropdown element */}
        <Autocomplete
          onChange={handleSelectChange}
          multiple={true}
          id="valueId"
          options={diseases}
          disableCloseOnSelect
          getOptionLabel={(option) => `${option.dis_title_et}`}
          // onChange={handleChange}
          renderOption={(props, option, { selected }) => (
            <li
              {...props}
              id={diseasesValue.id}
              value={diseasesValue.id}
              key={diseasesValue.id}
            >
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
        <div>{diseasesValue.id}</div>
      </Grid>

      {/* -------------------------------------------------------------------------------------------------- */}
      {/* Fetching Procedures data from DataBase */}
    </Grid>
  );
}
export default DropDiseases;

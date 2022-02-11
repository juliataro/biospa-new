// import React, { useState, useEffect } from "react";
// import axios from "axios";
// // import Stack from "@mui/material/Stack";
// // import Autocomplete from "@mui/material/Autocomplete";
// // import Box from "@mui/material/Box";

// function DropDiseases() {
//   // Chage DropDown lable position onClick

//   const [diseases, setDiseases] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:4000/diseases/all/et/")
//       .then((response) => response.json())
//       .then((json) => setDiseases(json.data));
//   }, []);

//   console.log(diseases);
//   return <div></div>;
// }
// export default DropDiseases;

/////////////////

import React, { useState, useEffect } from "react";
import axios from "axios";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import Checkbox from "@mui/material/Checkbox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

function DropDiseases() {
  // Chage DropDown lable position onClick

  const [diseases, setDiseases] = useState([]);

  const loadData = async () => {
    const response = await axios.get("http://localhost:4000/diseases/all/et");
    setDiseases(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);
  console.log(diseases);

  return (
    <Autocomplete
      multiple
      id="checkboxes-tags-demo"
      options={[diseases]}
      disableCloseOnSelect
      getOptionLabel={(option) => `${diseases.dis_title_et}`}
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
  );
}
export default DropDiseases;

////////////////////////////////////////////

//   <div>
//     <FormControl sx={{ m: 1 }}>
//       <InputLabel id="demo-multiple-checkbox-label">Haigused</InputLabel>
//       <Select
//         labelId="demo-multiple-checkbox-label"
//         id="demo-multiple-checkbox"
//         multiple
//         value={selectedDiseases}
//         input={<OutlinedInput label="Diseases" />}
//         renderValue={(selected) => selected.join(", ")}
//         MenuProps={MenuProps}
//         onChange={(ev) => setSelectedDiseases(ev.target.value)}
//       >
//         <MenuItem value="">
//           <em>None</em>
//         </MenuItem>
//         {diseases.map((disease) => (
//           <MenuItem key={disease.id} value={disease.id}>
//             {disease.dis_title_et}
//           </MenuItem>
//         ))}
//       </Select>
//     </FormControl>
//   </div>
// );
// }

//////////////////////////////////////////////
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import OutlinedInput from "@mui/material/OutlinedInput";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";

// import Select from "@mui/material/Select";

// import "../../index.css";

// // Fetchig data

// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250,
//     },
//   },
// };

// export default function DropDiseases() {
//   // Chage DropDown lable position onClick

//   const [diseases, setDiseases] = useState([]);
//   const [selectedDiseases, setSelectedDiseases] = useState("");

//   useEffect(() => {
//     const getDiseasesEt = async () => {
//       const result = await axios("/all/et", {
//         method: "GET",
//         headers: { "Content-Type": "application/json" },
//       });
//       const response = await result.json();
//       setDiseases(response);
//     };
//     getDiseasesEt();
//   }, []);

//   return (
//     <div>
//       <FormControl sx={{ m: 1 }}>
//         <InputLabel id="demo-multiple-checkbox-label">Haigused</InputLabel>
//         <Select
//           labelId="demo-multiple-checkbox-label"
//           id="demo-multiple-checkbox"
//           multiple
//           value={selectedDiseases}
//           input={<OutlinedInput label="Diseases" />}
//           renderValue={(selected) => selected.join(", ")}
//           MenuProps={MenuProps}
//           onChange={(ev) => setSelectedDiseases(ev.target.value)}
//         >
//           <MenuItem value="">
//             <em>None</em>
//           </MenuItem>
//           {diseases.map((disease) => (
//             <MenuItem key={disease.id} value={disease.id}>
//               {disease.dis_title_et}
//             </MenuItem>
//           ))}
//         </Select>
//       </FormControl>
//     </div>
//   );
// }

/////////////////////////////////////////////////

// import React, { useState } from "react";
// import axios from "axios";
// import OutlinedInput from "@mui/material/OutlinedInput";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import ListItemText from "@mui/material/ListItemText";
// import Select from "@mui/material/Select";
// import Checkbox from "@mui/material/Checkbox";

// import "../../index.css";

// // Fetchig data

// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250,
//     },
//   },
// };

// export default function MultipleSelectCheckmarks() {
//   // Chage DropDown lable position onClick
//   const [data, setData] = useState([]);

//   // Get Diseases From DB dinamically EST

//   const getAllDiseasesEt = async () => {
//     axios.get("http://localhost:4000/diseases/all/et/").then((response) => {
//       setData(response.data);
//     });
//   };

//   return (
//     <div>
//       <FormControl sx={{ m: 1 }}>
//         <InputLabel id="demo-multiple-checkbox-label">Haigused</InputLabel>
//         <Select
//           labelId="demo-multiple-checkbox-label"
//           id="demo-multiple-checkbox"
//           multiple
//           value={data}
//           input={<OutlinedInput label="Diseases" />}
//           renderValue={(selected) => selected.join(", ")}
//           MenuProps={MenuProps}
//           onClick={getAllDiseasesEt}
//         >
//           {data.map((item, index) => {
//             return (
//               <MenuItem key={item.id}>
//                 <Checkbox checked={data.indexOf(item.dis_title_et) > -1} />
//                 <ListItemText primary={item.dis_title_et} />
//               </MenuItem>
//             );
//           })}
//         </Select>
//       </FormControl>
//     </div>
//   );
// }

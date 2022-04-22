import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";

export default function RangeSlider(props) {
  const  {priceValue, setPriceValue} = props;
  const [price, setPrice] = React.useState([20, 37]);

  function handleSelectChange(event, newValues) {
    setPrice(newValues.map((priceValue) => priceValue));
    setPriceValue(priceValue => price);
    console.log(priceValue);
  }

  return (
    <Box sx={{ width: "100%", marginLeft: "30px", paddingRight: "30px" }}>
      <Typography id="input-slider" gutterBottom>
        Hind
      </Typography>
      <Slider
        getAriaLabel={() => "Hinnavahemik"}
        value={price}
        onChange={handleSelectChange}
        valueLabelDisplay="auto"
      />
    </Box>
  );
}


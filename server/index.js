// allows environment variables to be set on process.env should be at top: ;
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");

// import Axios from "axios";

var corsOptions = {
  origin: "http://localhost:4000",
};
// Allowing to make calls from frontend to backend api
app.use(cors(corsOptions));

// Middleware parse json bodies in the request object
app.use(express.json());

// Redirect requests to endpoint starting with /procedures to getProsedures.js
app.use("/procedures", require("./routes/procedureRoutes"));
app.use("/symptoms", require("./routes/symptomRoutes"));
app.use("/targets", require("./routes/targetRoutes"));
app.use("/diseases", require("./routes/diseaseRoutes"));

app.use((err, req, res, next) => {
  console.log(err.stack);
  console.log(err.name);
  console.log(err.code);

  res.status(err.code).json({
    message: "Something went really wrong",
  });
});

// Listening for port cheking if serfer running, in terminal command: run indexjs
app.listen(process.env.PORT || 5000, function () {
  console.log(`Listening on port ${process.env.PORT}`);
});

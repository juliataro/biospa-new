const express = require("express");
const dControllers = require("../controllers/diseaseControllers");
const router = express.Router();

// @route GET && POST /diseases/
router.route("/").get(dControllers.getAllDiseases);

// http://localhost:4000/diseases/newdisease/ router for creating disease
router.route("/newdisease").post(dControllers.postNewDisease);

// GET Disease by Id
router.route("/:id").get(dControllers.getDiseaseById);

// PUT & DELETE Disease by Id
router
  .route("/:id")
  .put(dControllers.updateDiseaseById)
  .delete(dControllers.deleteDiseaseById);

module.exports = router;

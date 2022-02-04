const express = require("express");
const sControllers = require("../controllers/symptomControllers");
const router = express.Router();

// @route GET && POST /symptoms/
router.route("/").get(sControllers.getAllSymptoms);

//http://localhost:4000/procedures/newsymptom/
router.route("/newsymptom").post(sControllers.postNewSymptom);

// GET symptom by Id
router.route("/:id").get(sControllers.getSymptomById);

// PUT & DELETE symptom by Id
router
  .route("/:id")
  .put(sControllers.updateSymptomById)
  .delete(sControllers.deleteSymptomById);

module.exports = router;

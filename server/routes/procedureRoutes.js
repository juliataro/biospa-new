const express = require("express");
// Stands for "contraindications" tabel in DB
const pControllers = require("../controllers/procedureControllers");
const router = express.Router();

// @ routes GET /procedures/ For Users -----------------------

//   http://localhost:4000/procedures/procedures-diseases

router.route("/procedures_targets").get(pControllers.getProceduresTargets);
router.route("/procedures_diseases").get(pControllers.getProceduresDiseases);
//   .get(pControllers.getProceduresSymptoms)
//   .get(pControllers.getProceduresDiseases)
//   .get(pControllers.getProceduresTargetsSymptoms)
//   .get(pControllers.getProceduresTargetsDiseases)
//   .get(pControllers.getProceduresSymptomsDiseases)
//   .get(pControllers.getProceduresTargetsSymptomsDiseases);

/** ------------------------------------------------------------------
 * Routses GET && POST && PUT && DELETE /procedures/ for Admin-panel
 */
router.route("/").get(pControllers.getAllProcedures);

//http://localhost:4000/procedures/newprocedure/
router.route("/newprocedure").post(pControllers.postNewProcedure);

// GET procedure by Id
router.route("/:id").get(pControllers.getProcedureById);

// PUT & DELETE router by Id
router
  .route("/:id")
  .put(pControllers.updateProcedureById)
  .delete(pControllers.deleteProcedureById);

module.exports = router;

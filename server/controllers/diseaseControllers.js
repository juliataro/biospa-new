const Disease = require("../models/diseaseModel");

/** ------------------------------------------------------------------
 * ADMINS-PANEL controller Methods for Deseases routses
 */

//  Saving  NEW Symptom
exports.postNewDisease = async (req, res, next) => {
  try {
    let { dis_title_et, dis_title_ru, dis_title_en } = req.body;

    let disease = new Disease(dis_title_et, dis_title_ru, dis_title_en);

    disease = await disease.saveNewDisease();

    console.log(disease);
    res.send("Created New Disease!");
  } catch (error) {}
};

// Get All Symptoms from DB

exports.getAllDiseases = async (req, res, next) => {
  try {
    let diseases = await Disease.findAll();

    res.status(200).json({ diseases });
    res.send(rows);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// Get the Symptom By Id
exports.getDiseaseById = async (req, res, next) => {
  try {
    //let symptom = await Symptom.findById(2);

    let [disease, _] = await Disease.findById(req.params.id);

    res.status(200).json({ disease });
    res.send(rows);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// Update Symptom By Id
exports.updateDiseaseById = async (req, res, next) => {};

// Delete the Symptom By Id
exports.deleteDiseaseById = async (req, res, next) => {
  try {
    //let symptom = await Symptom.findById(2);

    let diseaseDelete = await Disease.deleteById(req.params.id);

    res.status(200);
    res.send("Disease has been successfully deleted");
  } catch (error) {
    console.log(error);
    next(error);
  }
};

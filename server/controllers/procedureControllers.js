const Procedure = require("../models/procedureModel");

/** ------------------------------------------------------------------
 * USERS controller Methods for procedures routses
 */

//  Method fetches Procedures dependendent on Targets values and ids

exports.getProceduresTargets = async (req, res, next) => {
  try {
    let tarIds = req.query.id;
    let tarIdsString = tarIds.toString(); // To stringify array of ids to pass it to models SQL clause
    let procedures = (
      await Procedure.findAllProceduresOnTargets(tarIdsString)
    )[0]; // Passing ids variable to method

    res.status(200).json(procedures);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.getProceduresPrices = async (req, res, next) => {
  try {

    if (req.query.tarid) {
      let tarIds = req.query.tarid;
      tarIdsString = tarIds.toString();
    } else {
      tarIdsString = null;
    }

    if (req.query.pricemin && req.query.pricemax) {
      priceMin = req.query.pricemin;
      priceMax = req.query.pricemax;
    } else {
      priceMin = null;
      priceMax = null;
    }

    if (req.query.sympid) {
      let sympIds = req.query.sympid;
      sympIdsString = sympIds.toString(); 
    } else {
      sympIdsString = null;
    }

    if (req.query.disid) {
      let disIds = req.query.disid;
      disIdsString = disIds.toString(); 
    } else {
      disIdsString = null;
    }
  
    console.log('price', priceMin, priceMax, tarIdsString, sympIdsString, disIdsString);
      let procedures = (
        await Procedure.findAllProceduresOnPrice(priceMin, priceMax, tarIdsString, sympIdsString, disIdsString)
      )[0]; // Passing ids variable to method
      res.status(200).json(procedures);

  } catch (error) {
    console.log(error);
    next(error);
  }
};


//  Method fetches Procedures dependendent on Diseaes values and ids

exports.getProceduresDiseases = async (req, res, next) => {
  try {
    //Access the provided 'id' as query parameter that is passing to button
    let disIds = req.query.id;
    let disIdsStr = disIds.toString(); // To stringify array of ids to pass it to models SQL clause
    let procedures = (
      await Procedure.findAllProceduresOnDiseases(disIdsStr)
    )[0]; // Passing ids variable to method

    // Returning the procedures to the rendering engine
    res.status(200).json(procedures);
  } catch (error) {
    console.log(error);
    next(error);
  }
};


//  Method fetches Procedures dependendent on Symptoms values and ids

exports.getProceduresSymptoms = async (req, res, next) => {
  try {
    let sympIds = req.query.id;
    let sympIdsString = sympIds.toString(); // To stringify array of ids to pass it to models SQL clause
    let procedures = (
      await Procedure.findAllProceduresOnSymptoms(sympIdsString)
    )[0]; // Passing ids variable to method

    res.status(200).json(procedures);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.getProceduresTargetsSymptoms = async (req, res, next) => {
  try {
    let sympIds = req.query.id;
    let sympIdsString = sympIds.toString(); // To stringify array of ids to pass it to models SQL clause
    let procedures = (await Procedure.getAllProcOnTarAndSymp(sympIdsString))[0]; // Passing ids variable to method

    res.status(200).json(procedures);
  } catch (error) {
    console.log(error);
    next(error);
  }
};


/** ------------------------------------------------------------------
 * ADMINS-PANEL controller Methods for procedures routses
 */
//  Saving  NEW Symptom
exports.postNewProcedure = async (req, res, next) => {
  try {
    let {
      proc_title_et,
      proc_title_ru,
      proc_title_en,
      proc_descr_et,
      proc_descr_ru,
      proc_descr_en,
      proc_duration,
      proc_price,
    } = req.body;

    let procedure = new Procedure(
      proc_title_et,
      proc_title_ru,
      proc_title_en,
      proc_descr_et,
      proc_descr_ru,
      proc_descr_en,
      proc_duration,
      proc_price
    );

    procedure = await procedure.saveNewProcedure();

    console.log(procedure);
    res.send("Created New Procedure!");
  } catch (error) {}
};

// Get All Procedures from DB

exports.getAllProcedures = async (req, res, next) => {
  try {
    let procedures = await Procedure.findAll();

    res.status(200).json(procedures);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// Get the Procedure By Id
exports.getProcedureById = async (req, res, next) => {
  try {
    let [procedure, _] = await Procedure.findById(req.params.id);

    res.status(200).json(procedure);
    res.send(rows);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.getProcedureByPrice = async (req, res, next) => {
  try {
    let [procedure, _] = await Procedure.findById(req.params.id);

    res.status(200).json(procedure);
    res.send(rows);
  } catch (error) {
    console.log(error);
    next(error);
  }
};


// Update Procedure By Id
exports.updateProcedureById = async (req, res, next) => {};

// Delete the ProcedureBy Id
exports.deleteProcedureById = async (req, res, next) => {
  try {
    let procedureDelete = await Procedure.deleteById(req.params.id);

    res.status(200);
    res.send("Procedure has been successfully deleted!");
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const Procedure = require("../models/procedureModel");

/** ------------------------------------------------------------------
 * USERS controller Methods for procedures routses
 */

//  Method fetches Procedures dependent on any filtering

// exports.getProceduresAnyFilters = async (req, res, next) => {
//   try {
//     /// siia tuleb kood
//     const procedures = (
//       await Procedure.findAllProceduresOnAnyfilters(midagi)
//     )[0];
//     res.status(200).json(procedures);
//   } catch (error) {
//     console.log(error);
//     next(error);
//   }
// };

//  Method fetches Procedures dependendent on Symptoms values and ids

//Get all Procedures on Prices
exports.getProceduresPrices = async (req, res, next) => {
  try {
    let priceMax = req.query.maxPrice; // Catching query parameters maxPrice from GenericBtn route
    let priceMaxNum = Number(priceMax); // Transform to number from string
    const procedures = (
      await Procedure.findAllProceduresOnPrices(priceMaxNum)
    )[0];
    res.status(200).json(procedures);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

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

// exports.getProceduresTargetsSymptoms = async (req, res, next) => {
//   try {
//     let sympIds = req.query.id;
//     let sympIdsString = sympIds.toString(); // To stringify array of ids to pass it to models SQL clause
//     let procedures = (await Procedure.getAllProcOnTarAndSymp(sympIdsString))[0]; // Passing ids variable to method

//     res.status(200).json(procedures);
//   } catch (error) {
//     console.log(error);
//     next(error);
//   }
// };
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
// getProceduresPrices

//
//

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

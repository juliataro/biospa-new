const db = require("../config/db");

// Contraindications DB table class
class Procedure {
  constructor(
    proc_id,
    proc_title_et,
    proc_title_ru,
    proc_title_en,
    proc_descr_et,
    proc_descr_ru,
    proc_descr_en,
    proc_duration,
    proc_price
  ) {
    this.proc_id = proc_id;
    this.proc_title_et = proc_title_et;
    this.proc_title_ru = proc_title_ru;
    this.proc_title_en = proc_title_en;
    this.proc_descr_et = proc_descr_et;
    this.proc_descr_ru = proc_descr_ru;
    this.proc_descr_en = proc_descr_en;
    this.proc_duration = proc_duration;
    this.proc_price = proc_price;
  }


  static findAllProceduresOnPrice(priceMin, priceMax, tarIdsString, sympIdsString, disIdsString) {
     let where = [];
     let placeholders = [];
     let joins = [];
     let ons = [];

     if (tarIdsString) {
         joins.push('INNER JOIN procedures_targets')
         joins.push('INNER JOIN targets')
         ons.push('ON procedures.proc_id=procedures_targets.proc_id')
         ons.push('procedures_targets.tar_id=targets.tar_id ')
         where.push(`WHERE targets.tar_id IN (${tarIdsString})`)
     }

     if (sympIdsString) {
      joins.push('INNER JOIN procedures_symptoms')
      joins.push('INNER JOIN symptoms')
      ons.push('procedures.proc_id=procedures_symptoms.proc_id')
      ons.push('procedures_symptoms.symp_id=symptoms.symp_id ')
      where.push(`symptoms.symp_id IN (${sympIdsString})`)
    }

    if (disIdsString) {
      joins.push('INNER JOIN procedures_diseases')
      joins.push('INNER JOIN diseases')
      ons.push('procedures.proc_id=procedures_diseases.proc_id')
      ons.push('procedures_diseases.dis_id=diseases.dis_id')
      where.push(`diseases.dis_id NOT IN (${disIdsString})`)
    }

    if (priceMin && priceMax) {
      where.push(`proc_price BETWEEN ${priceMin} AND ${priceMax}`)
    }

    function implodeData(type, data, separator = '') {
         data = data.join(' ' + separator + ' ')
         if (data.legth) {
             data = type + ' ' + data    
         }
         return data
    }

     joins = implodeData('INNER JOIN', joins)
     ons = implodeData('ON', ons, 'AND')
     where = implodeData('WHERE', where, 'AND')

     let result = db.execute(
         `SELECT proc_title_et, proc_descr_et, proc_duration, proc_price FROM procedures ${joins} ${ons} ${where} ORDER BY procedures.proc_price;`,
         placeholders,
         console.log()
     );
     
     console.log(result)
     return result;
  }



  
  /** ------------------------------------------------------------------
   * ADMINS-PANEL MySQL statements for Procedures Controller methods
   */
  // Create new
  async saveNewProcedure() {
    let sql = `INSERT INTO procedures(proc_title_et,proc_title_ru,proc_title_en,proc_descr_et,proc_descr_ru,proc_descr_en,proc_duration,proc_price)
    VALUES('${this.proc_title_et}','${this.proc_title_ru}','${this.proc_title_en}','${this.proc_descr_et}','${this.proc_descr_ru}','${this.proc_descr_en}','${this.proc_duration}','${this.proc_price}')`;

    const [newProcedure, _] = await db.execute(sql);
    return newProcedure;
  }

  // Find all procedures
  static findAll() {
    let sql = "SELECT * FROM procedures;";
    return db.execute(sql);
  }

  // Find by ID
  static findById(proc_id) {
    let sql = `SELECT * FROM procedures WHERE proc_id = ${proc_id};`;
    return db.execute(sql);
  }

  static findByIdAndUpdate(proc_id) {
    let sql = `UPDATE procedures SET proc_title_et = ${this.proc_title_et}, 
    proc_title_ru = ${this.proc_title_ru}, proc_title_en = ${this.proc_title_en} WHERE proc_id = ${proc_id} ;`;
    return db.execute(sql);
  }

  static deleteById(proc_id) {
    let sql = `DELETE FROM procedures WHERE proc_id = ${proc_id};`;
    return db.execute(sql);
  }

  static findByPrice() {
    let sql = `SELECT proc_id, proc_price FROM procedures;`;
    return db.execute(sql);
  }
}

module.exports = Procedure;

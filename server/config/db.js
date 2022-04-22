require("dotenv").config();

const mysql = require("mysql2");

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  namedPlaceholders: true,
});

module.exports = pool.promise();

// require("dotenv").config();
// const mqp = require('mysql-query-placeholders');
// const mysql = require('mysql2').createConnection...

// const pool = mysql.createPool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   database: process.env.DB_NAME,
//   password: process.env.DB_PASS,
//   namedPlaceholders: true,
// });

//
// module.exports = pool.promise();

//  require("dotenv").config();
// const mysql = require("mysql2/promise");

// console.log("Creating connection pool...")

// const pool = mysql.createPool({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     database: process.env.DB_NAME,
//     password: process.env.DB_PASS,
//     namedPlaceholders: true
// })

// module.exports = pool;

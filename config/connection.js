// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Dependencies
var Sequelize = require("sequelize");

// Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.
var sequelize = new Sequelize("burgers_db", "root", "root", {
  host: "localhost",
  //QUESTION: Below was originally "mysql", but I changed to "mysql2". Is this right?
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

// Exports the connection for other files to use
module.exports = sequelize;


//=====================================================================

// // Set up MySQL connection.
// // var mysql = require("mysql");

// // var connection = mysql.createConnection({
// //   port: 3306,
// //   host: "localhost",
// //   user: "root",
// //   password: "root",
// //   database: "burgers_db"
// // });

// // Make connection.
// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });

// // Export connection for our ORM to use.
// module.exports = connection;

//===============================================================================
// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Burger" model that matches up with DB
var Burger = sequelize.define("burgers_db", {
  // the routeName gets saved as a string
  routeName: Sequelize.STRING,
  // the name of the burger (a string)
  burger_name: Sequelize.STRING,
}, {
  devoured: false
});

// Syncs with DB
Burger.sync();

// Makes the Character Model available for other files (will also create a table)
module.exports = Burger;

// =========================================================

// var orm = require("../config/orm.js");

// var burger = {
//     all: function(cb) {
//       orm.all("burger", function(res) {
//         cb(res);
//       });
//     },
//     // The variables cols and vals are arrays.
//     create: function(cols, vals, cb) {
//       orm.create("burgers", cols, vals, function(res) {
//         cb(res);
//       });
//     },
//     update: function(objColVals, condition, cb) {
//       orm.update("burgers", objColVals, condition, function(res) {
//         cb(res);
//       });
//     },
//     delete: function(condition, cb) {
//       orm.delete("burgers", condition, function(res) {
//         cb(res);
//       });
//     }
//   };
  
//   // Export the database functions for the controller (catsController.js).
//   module.exports = burger;

  //============================================================================
  
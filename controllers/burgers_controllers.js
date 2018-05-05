var burger = require ('../models/burger.js')

var express = require("express");

var router = express.Router();

router.get("/", function(req, res) {
    burger.findAll().then(function(data) {
      var hbsObject = {
        burger: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

  router.post("/burger/create", function(req, res) {
    burger.create([
      "burger_name"
    ], [
      req.body.burger_name
    ], function(result) {
      // Send back the ID of the new quote
      res.redirect("/");
    });
  });

  router.put("/burger/update/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burger.update({
      id: req.body.id
    }, condition, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

  module.exports = router;
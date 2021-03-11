const { SequelizeScopeError } = require("sequelize/lib/errors");
const { Sequelize } = require("../models");
var db = require("../models");

module.exports = function(app){
    
    app.get("/api/:users?", function (req, res) {
        if (req.params.users) {
          db.User.findOne({
            where: {
              email: req.params.users,
            },
          }).then(function (dbUser) {
            return res.json(dbUser);
          });
        
        }
      });
      
      app.post("/api/new", function(req, res) {
        // create takes an argument of an object describing the item we want to
        // insert into our table. In this case we just we pass in an object with a text
        // and complete property (req.body)
        db.User.create({
            email: req.body.email,
        }).then(function(dbUser) {
         
          res.json(dbUser);
        })
          .catch(function(err) {
            console.log(err.message)
          // Whenever a validation or flag fails, an error is thrown
          // We can "catch" the error to prevent it from being "thrown", which could crash our node app
           res.json(err.message);
          })
      });



}
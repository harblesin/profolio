const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.User.findAll().then(data => res.json(data));
  },

  saveUser: function(req, res) {
    console.log(req.body);
    db.User.create(req.body).then(data => res.json(data));
    db.Details.create(req.body).then(data => res.json(data));
  }
};

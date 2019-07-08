const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.users.findAll().then(data => res.json(data));
  },

  saveUser: function(req, res) {
    db.users.create(req.body).then(data => res.json(data));
  }
};

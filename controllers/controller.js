const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.User.find(req.query).then(data => res.json(data));
  }
};

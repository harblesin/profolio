const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.User.findAll().then(data => res.json(data));
  },

  saveUser: function(req, res) {
<<<<<<< HEAD
    db.users.create(req.body).then(data => res.json(data));
  },

  createPort: function(req, res) {
    db.users.findAll({where:{userId: req.params}}).then(data => res.json(data))
=======
    console.log(req.body);
    db.User.create(req.body).then(data => res.json(data));
    db.Details.create(req.body).then(data => res.json(data));
>>>>>>> 2d77ee6ca3afcb1a953001d47dbeb64459696aab
  }

};

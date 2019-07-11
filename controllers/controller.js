const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.User.findAll().then(data => res.json(data));
  },

  saveUser: function(req, res) {
    console.log(req.body);
    async (req, res) => {
      const { username, password } = req.body;

      const hashCost = 10;

      try {
        const passwordHash = await bcrypt.hash(password, hashCost);
        const userDocument = new UserModel({ username, passwordHash });
        await userDocument.save();

        db.User.create({ username }).then(data => res.json(data));
        //res.status(200).send({ username });
      } catch (error) {
        res.status(400).send({
          error: "req.body isnt taking the form data"
        });
      }
    };
  }
  // db.Details.create(req.body).then(data => res.json(data));
};

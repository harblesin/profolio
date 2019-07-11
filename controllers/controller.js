const db = require("../models");
const router = require("express").Router();
const passport = require("passport");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


module.exports = {
  findAll: function(req, res) {
    db.User.findAll().then(data => res.json(data));
  },

  saveUser: function(req, res) {
    console.log(req.body);
    async (req, res) => {
      const { email, password } = req.body;

      const hashCost = 10;

      try {
        const passwordHash = await bcrypt.hash(password, hashCost);
        const userDocument = new UserModel({ email, passwordHash });
        await userDocument.save();

        db.User.create({ email }).then(data => res.json(data));
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

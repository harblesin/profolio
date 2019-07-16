const db = require("../models");
const router = require("express").Router();
const passport = require("passport");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const keys = require("../routes/keys/secret");

module.exports = {
  findAll: (req, res) => {
    // passport.authenticate("jwt", { session: false },
    db.User.findAll().then(data => res.json(data));
  },

  function(req, res) {
    console.log("this");
    const { email } = req;
    res.status(200).send({ email });
  },

  saveUser: async (req, res) => {
    console.log(req.body);

    const { email, password } = req.body;
    console.log("here i am");
    console.log(email);
    const hashCost = 10;

    try {
      console.log("here i am");
      const passwordHash = await bcrypt.hash(password, hashCost);
      await db.User.create({ email: email, password: passwordHash });

      res.status(200).send({ email });
    } catch (error) {
      res.status(400).send({
        error: "req.body isnt taking the form data"
      });
    }
  },

  loginUser: (req, res, next) => {
    passport.authenticate("local", { session: false }, (error, user, info) => {
      console.log(error);
      console.log(user);
      console.log(info);

      if (error || !user) {
        res.status(400).json({ error });
      }

      const payload = {
        email: user.email,
        expires: Date.now() + parseInt(100000000)
      };

      req.login(payload, { session: false }, error => {
        if (error) {
          res.status(400).send({ error });
        }

        const token = jwt.sign(JSON.stringify(payload), process.env.SECRET);
        console.log(token);
        console.log(payload);

        res.cookie("jwt", token, { secure: false });
        res.status(200).send({ user });
      });
    })(req, res, next);
  }

  // db.Details.create(req.body).then(data => res.json(data));
};

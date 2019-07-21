const db = require("../models");
const router = require("express").Router();
const passport = require("passport");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const keys = require("../routes/keys/secret");

module.exports = {
  findOne: (req, res) => {
    console.log(req.body.email);
    db.User.findOne({ where: { email: req.body.email } }).then(data =>
      res.json(data)
    );
  },

  // function(req, res) {
  //   console.log("this");
  //   const { email } = req;
  //   res.status(200).send({ email });
  // },

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
        expires: Date.now() + parseInt(36000)
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
  },

  // loadProfiles: (req,res)=>{
  //   db.findAll
  // },

  check: (req, res) => {
    console.log(req);
    console.log("this is here");
    res.status(200).send();
  },

  test: (req, res) => {
    stuff = {
      firstName: req.body.one,
      lastName: req.body.two,
      title: req.body.three,
      UserId: 20
    };
    db.Details.create(stuff).then(data => res.send(data));
  },

  loadProfiles: (req, res) => {
    db.Profolio.findAll({
      where: { UserId: req.body.id },
      include: [
        {
          model: db.Bio,
          where: {
            ProfolioId: req.body.id
          }
        },
        {
          model: db.Skill,
          where: {
            ProfolioId: req.body.id
          }
        }
      ]
    }).then(data => res.json(data));
  }

  // db.Details.create(req.body).then(data => res.json(data));
};

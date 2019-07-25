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
      db.User.findOne({
        where: {
          email: email
        }
      }).then(async user => {
        if (user !== null) {
          console.log("Already user with this email");
          res.send({
            message: "This email has already been used to create an account"
          });
        } else {
          const passwordHash = await bcrypt.hash(password, hashCost);
          await db.User.create({ email: email, password: passwordHash });

          res.status(200).send({ email });
        }
      });
    } catch (err) {
      console.log(err);
      res.send(err);
    }
  },

  loginUser: (req, res, next) => {
    passport.authenticate("local", { session: false }, (error, user, info) => {
      //console.log(error);
      console.log(user);
      //console.log(info);

      if (error || !user) {
        res.status(400).json({ error });
      }

      const payload = {
        id: user.id,
        email: user.email,
        expires: Date.now() + parseInt(360000)
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

  logout: (req, res,next) => {
    
    passport.authenticate("local", {session: false}, (error,user, info)=>{
      // console.log(req);
      // if(error){
      //   console.log("first error")
      //   res.status(400).json({error});
      // }

      req.login({session: false }, error=>{
        // if(error){
        //   console.log('second error')
        //   res.status(400).send({ error })
        // }
        // //const token = jwt.sign(JSON.stringify(payload))
        const token = {

        }
        res.clearCookie("jwt")
        res.status(200).send({message: "Logged Out"})
      })
    })(req,res,next)




        //localStorage.removeItem(req.cookies), 
    // console.log(req)
    //  console.log(req.cookies)
    //  req.cookies = 'token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;'

    // = ;

    // sessionStorage.removeItem('token')
    //res.send("User token deleted")
  },

  loadProfiles: (req, res, next) => {
    passport.authenticate("jwt", { sessions: false }, (err, user, info) => {
      if (err) {
        console.log(err);
      }
      if (info !== undefined) {
        console.log(info.message);
        res.send(info.message);
      } else {
        if (user !== undefined) {
          db.Profolio.findAll({ where: { UserId: user.id } }).then(data =>
            res.json(data)
          );
        } else {
          res.send({
            auth: false
          });
        }
      }
    })(req, res, next);
  },

  loadFinishedProfiles: (req, res) => {
    console.log(req);
    db.Profolio.findOne({
      where: { UserId: 1 },
      include: [
        {
          model: db.Bio,
          where: {
            ProfolioId: 1
          }
        },
        {
          model: db.Skill,
          where: {
            ProfolioId: 1
          }
        }
      ]
    }).then(data => res.json(data));
  }

  // db.Details.create(req.body).then(data => res.json(data));
};

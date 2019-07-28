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
        
        res.send({error, auth:false})
        //res.status(400).send({auth: false});
      }else{
        const payload = {
        id: user.id,
        email: user.email,
        expires: Date.now() + parseInt(3600000)
      };

      req.login(payload, { session: false }, error => {
        if (error) {

          res.send({ error , auth: false});
        }

        const token = jwt.sign(JSON.stringify(payload), process.env.SECRET);
        console.log(token);
        console.log(payload);

        res.cookie("jwt", token, { secure: false });
        res.status(200).send({ user });
      });
      }

      
    })(req, res, next);
  },

  check: (req, res,next) => {
    passport.authenticate("jwt", { sessions: false }, (err, user, info) => {
      if (err) {
        console.log(err);
      }
      if (info !== undefined) {
        console.log(info.message);
        res.send(info.message);
      } else {
        if (user !== undefined) {
          db.User.findOne({ where: { id: user.id } }).then(data => {
            res.send({
              data: data,
              auth: true
            });
          });
        } else {
          res.send({
            auth: false
          });
        }
      }
    })(req, res, next);
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

  logout: (req, res, next) => {
    passport.authenticate("local", { session: false }, (error, user, info) => {
      // console.log(req);
      // if(error){
      //   console.log("first error")
      //   res.status(400).json({error});
      // }

      req.login({ session: false }, error => {
        // if(error){
        //   console.log('second error')
        //   res.status(400).send({ error })
        // }
        // //const token = jwt.sign(JSON.stringify(payload))
        const token = {};
        res.clearCookie("jwt");
        res.status(200).send({ message: "Logged Out" });
      });
    })(req, res, next);

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
          db.Profolio.findAll({ where: { UserId: user.id } }).then(data => {
            res.status(200).send({
              data: data,
              auth: true
            });
          });
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
  },

  newProfolio: (req, res,next) => {
    passport.authenticate("jwt", { sessions: false }, (err, user, info) => {
      if (err) {
        console.log(err);
      }
      if (info !== undefined) {
        console.log(info.message);
        res.send(info.message);
      } else {
        if (user !== undefined) {
          console.log(user.id)
          console.log(user)
          console.log(req.user)
          db.Profolio.create({
            
            name: req.body.name,
            UserId: user.id
          }).then((data) => {
            console.log(data)
            console.log(data.id)
            res.json(data.id)
          });
        } else {
          res.send({
            auth: false
          });
        }
      }
    })(req, res, next);
  },

  deleteProfolio: (req,res, next) =>{
    console.log(req.body)

    passport.authenticate("jwt", { sessions: false }, async (err, user, info) => {
      if (err) {
        console.log(err);
      }
      if (info !== undefined) {
        console.log(info.message);
        res.send(info.message);
      } else {
        if (user !== undefined) {
          console.log(req.body)
        try{db.Profolio.destroy({
              where: {id: req.body.profId.id}
              }).then((data) => {
            console.log(data)
            res.json(data)
          });
        }catch(err){
          res.json(error)
        }
        } else {
          res.send({
            auth: false
          });
        }
      }
    })(req, res, next);
  },

  getPortfolio: (req, res) => {
    db.Profolio.findOne({
      where: { id: req.body.ProfolioId },
      include: [
        {
          model: db.Bio,
          where: {
            ProfolioId: req.body.ProfolioId
          },
          required: false
        },
        {
          model: db.Skill,
          where: {
            ProfolioId: req.body.ProfolioId
          },
          required: false
        },
        {
          model: db.Project,
          where: {
            ProfolioId: req.body.ProfolioId
          },
          required: false
        },
        {
          model: db.Contact,
          where: {
            ProfolioId: req.body.ProfolioId
          },
          required: false
        },
        {
          model: db.Final,
          where: {
            ProfolioId: req.body.ProfolioId
          },
          required: false
        }
      ]
    }).then(data => res.json(data));
  },

  getBio: (req, res) => {
    console.log("req.body = " + req.body.profolioId);
    db.Bio.findOne({
      where: { ProfolioId: req.body.profolioId }
    }).then(data => res.json(data));
  },

  saveBio: (req, res) => {
    console.log(req.body);
    db.Bio.create(req.body).then(data => res.send(data));
  },

  saveProjectCard: (req, res) => {
    db.Project.create(req.body).then(data => res.send(data));
  },

};

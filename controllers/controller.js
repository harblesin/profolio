const db = require("../models");
const router = require("express").Router();
const passport = require("passport");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
//const UserModel = require("../models/User");
const keys = require("../routes/keys/secret");
//require("../config/authSetup.js")(passport, db.User);

module.exports = {

  findAll:
  
    passport.authenticate('jwt', {sessions: false}),
    function(req,res){
      console.log(req);
    },
      
    
  // function(req, res) {
    
    // const { email } = req;

    // res.status(200).send({email})
    
    //db.User.findAll().then(data => res.json(data));

  
  
  

  saveUser: async (req, res) => {
    console.log(req.body);

    const { email, password } = req.body;
    console.log("here i am");
    console.log(email);
    const hashCost = 10;

    try {
      //Using a little bittle a different method a more straight object injection, this chunk of code
      //is working and hashing the password into the db along with the username
      //I left the commented out stuff in for now in case it needs referencing

      console.log("here i am");
      const passwordHash = await bcrypt.hash(password, hashCost);
      //const userDocument = new UserModel({ email, passwordHash });
      await db.User.create({ email: email, password: passwordHash })//.then(
       // data => res.json(data)
      //); //userDocument.save();

      res.status(200).send({ email });
    } catch (error) {
      res.status(400).send({
        error: "req.body isnt taking the form data"
      });
    }
  },

  //This is what I am currently working on, after checking the user is valid in the db,
  // passes them a JSON token

  //sends back error that next is not a function, and from what i can gather is an issue with
  //the custom callback,working on resolve
  loginUser: (req, res,next) => {
    
    passport.authenticate("local", 
    { session: false }, (error, user, info) => {
      console.log(error)
      console.log(user)
      console.log(info)
      
      if (error || !user) {
        res.status(400).json({ error });
      }

      const payload = {
        email: user.email,
        expires: Date.now() + parseInt(10)
      };

      req.login(payload, { session: false }, error => {
        if (error) {
          res.status(400).send({ error });
        }

        const token = jwt.sign(JSON.stringify(payload), process.env.SECRET);
        console.log(token)
        console.log(payload)

        res.cookie("jwt", token, { httpOnly: true, secure: true });
        res.status(200).send({ user });
      });
    })(req, res,next);
}

  // db.Details.create(req.body).then(data => res.json(data));
};

const router = require("express").Router();
const passport = require("passport");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const keys = require("../keys/secret");
const userController = require("../../controllers/controller");
const User = require("../../models/User");

const authenticate = function(req, res) {
  return passport.authenticate("jwt", function(err, user, info) {

    console.log(req);
    console.log("this" + user);
    console.log(info);
    if (err) {
      return err;
    }
    if (!user) {
      return res.redirect("/");
    }
    req.login(user, function(err) {
      if (err) {
        return err;
      }
      return res.redirect("/usersplash");
    });
  });
};

const checkToken = (req, res, user, next) => {
  const header = req.header["authorization"];

  if(typeof header !== "undefined"){
    const bearer = header.split(' ');
    const token = bearer[1];

    req.token = token;
    next();
  }else{
    //res.redirect("/")
    res.sendStatus(403);
  }
}

router.route("/register").post(userController.saveUser);

router.route("/login").post(userController.loginUser);

router.route("/").get(userController.findOne);

router.route("/check").get(authenticate)//, userController.check);

router
  .route("/test")
  .post(userController.test)
  .get(checkToken, userController.loadProfiles);

module.exports = router;

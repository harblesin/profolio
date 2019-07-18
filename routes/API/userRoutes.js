const router = require("express").Router();
const passport = require("passport");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const keys = require("../keys/secret");
const userController = require("../../controllers/controller");
const User = require("../../models/User");

router.route("/register").post(userController.saveUser);

router.route("/login").post(userController.loginUser);

router
  .route("/")
  .get(
    userController.findOne
  );

router
  .route("/check")
  .get(passport.authenticate("jwt", { session: false }), userController.check);

module.exports = router;

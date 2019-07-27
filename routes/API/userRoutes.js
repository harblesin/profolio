const router = require("express").Router();
const passport = require("passport");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const keys = require("../keys/secret");
const userController = require("../../controllers/controller");
const User = require("../../models/User");
const secret = require("../keys/secret");

router.route("/register").post(userController.saveUser);

router.route("/login").post(userController.loginUser);

router.route("/logout").get(userController.logout);

router.route("/").get(userController.findOne);

//router.route("/check").get(authenticate)//, userController.check);

router
  .route("/test")
  .post(userController.test)
  .get(userController.loadProfiles);

<<<<<<< HEAD
router.route("/master").get(
  (log = () => {
    console.log(secret);
  })
);
=======
router.route("/newProfolio").post(userController.newProfolio)
>>>>>>> 4c8830b2314dd584970b9bad1fd95692f460a064

module.exports = router;

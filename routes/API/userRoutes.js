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

router.route("/check").get(userController.check);

router
  .route("/test")
  .post(userController.test)
  .get(userController.loadProfiles);

router.route("/getbio").post(userController.getBio);

router.route("/savebio").post(userController.saveBio);
router.route("/newProfolio").post(userController.newProfolio);

router.route("/getPortfolio").post(userController.getPortfolio);

router.route("/saveProjectCard").post(userController.saveProjectCard);

router.route("/deleteProfolio").post(userController.deleteProfolio)

module.exports = router;

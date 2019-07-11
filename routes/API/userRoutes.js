const router = require("express").Router();
const passport = require("passport");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const keys = require("../authSetup");
const userController = require("../../controllers/controller");
const User = require("../../models/User");

router.post("/register", async (req, res) => {
  const { username, password } = req.body;

  const hashCost = 10;

  try {
    const passwordHash = await bcrypt.hash(password, hashCost);
    const userDocument = new UserModel({ username, passwordHash });
    await userDocument.save();

    res.status(200).send({ username });
  } catch (error) {
    res.status(400).send({
      error: "req.body isnt taking the form data"
    });
  }
});

router.route("/register").post(userController.saveUser);
router.post("/login");

router.route("/").get(userController.findAll);

module.exports = router;

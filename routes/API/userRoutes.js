const router = require("express").Router();
const userController = require("../../controllers/controller");

router
  .route("/")
  .post(userController.saveUser)
  .get(userController.findAll);

module.exports = router;

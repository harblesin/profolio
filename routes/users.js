const router = require("express").Router();
const controller = require("../controllers/controller");

router
  .route("/")
  .get()
  .post();

module.exports = router;

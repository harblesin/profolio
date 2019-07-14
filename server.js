require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
var db = require("./models");

const router = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(passport.initialize());
require("./config/authSetup.js")(passport, db.User);
app.use(router);
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

var syncOptions = { force: false };

if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;

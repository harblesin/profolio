const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const passportJWT = require("passport-jwt");
const JWTStrategy = passportJWT.Strategy;
const bcrypt = require("bcrypt");

const { secret } = require("../routes/keys/secret");

//const UserModel = require("../models/User");

module.exports = function(passport, user) {
  const UserModel = user;

  passport.use(
    new LocalStrategy(
      {
        userNameField: "email",
        passwordField: "password"
      },
      async (email, password, done) => {
        try {
          const userDocument = await UserModel.findOne({
            email: email
          }).exec();
          const passwordsMatch = await bcrypt.compare(
            password,
            userDocument.passwordHash
          );

          if (passwordsMatch) {
            return done(null, userDocument);
          } else {
            return done("Incorrect Username or Password");
          }
        } catch (error) {
          done(error);
        }
      }
    )
  );

  passport.use(
    new JWTStrategy(
      {
        jwtFromRequest: req => req.cookies.jwt,
        secretOrKey: process.env.SECRET
      },
      (jwtPayload, done) => {
        if (Date.now() > jwtPayload.expires) {
          return done("jwt expired");
        }

        return done(null, jwtPayload);
      }
    )
  );
};

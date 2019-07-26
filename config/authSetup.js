const passport = require("passport");
const secret = require("./key");
const passportJWT = require("passport-jwt");
const JWTStrategy = passportJWT.Strategy;
const bcrypt = require("bcrypt");

module.exports = function(passport, user) {
  const UserModel = user;
  const LocalStrategy = require("passport-local").Strategy;

  passport.use(
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password"
      },
      async (email, password, done) => {
        try {
          const userDocument = await UserModel.findOne({
            where: {
              email: email
            }
          });
          const passwordsMatch = await bcrypt.compare(
            password,
            userDocument.password
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
        secretOrKey: secret
      },
      (jwtPayload, done) => {
        if (Date.now() > jwtPayload.expires) {
          console.log(jwtPayload);
          console.log("bitch");
          return done("jwt expired");
        }
        console.log("bitch2");
        return done(null, jwtPayload);
      }
    )
  );
};

const db = require("../models");
const User = db.users;
const bcrypt = require("bcryptjs");
const LocalStrategy = require("passport-local").Strategy;

module.exports = function (passport) {
  passport.use(
    new LocalStrategy(
      { usernameField: "user_email", passwordField: "user_password" },
      async (email, password, done) => {
        console.log("checking user");
        await User.findOne({ where: { user_email: email } })
          .then(async (user) => {
            if (!user) {
              return done(null, false);
            }
            const passValid = await bcrypt.compare(
              password,
              user.user_password
            );

            if (passValid) {
              return done(null, user);
            } else {
              return done(null, false);
            }
          })
          .catch((err) => {
            done(err);
          });
      }
    )
  );

  // passport.use(
  //   new LocalStrategy(
  //     { usernameField: "user_email", passwordField: "user_password" },
  //     (email, password, done) => {
  //       console.log("checking user");
  //       const user = User.findOne({ where: { user_email: email } });
  //       done(null, user);
  //     }
  //   )
  // );

  passport.serializeUser((user, done) => {
    done(null, user.user_id);
  });

  passport.deserializeUser(async function (id, done) {
    await User.findOne({ where: { user_id: id } }).then((user) => {
      done(null, user);
    });
  });
};

const localStrategy = require("passport-local").Strategy;

module.exports = (app) => {
  // Import express
  const passport = require("passport");
  const auth = require("../controllers/auth.controller");

  // Init express router
  const routerLogin = require("express").Router();
  routerLogin.post("/", (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
      if (err) throw err;
      if (!user) {
        res.status(401);
        res.send("No user exists");
      } else {
        req.logIn(user, (err) => {
          if (err) throw err;
          res.send("Sucessfully authenticated");
        });
      }
    })(req, res, next);
  });

  app.use("/api/login", routerLogin);
};

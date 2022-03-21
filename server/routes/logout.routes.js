module.exports = (app) => {
  // Init express router
  const routerLogout = require("express").Router();

  routerLogout.post("/", (req, res) => {
    req.logOut();
    res.clearCookie("secretcode");
    req.session.destroy((err) => res.redirect("/"));
  });

  app.use("/api/logout", routerLogout);
};
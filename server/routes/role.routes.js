const passport = require("passport");

function checkAuthentication(req, res, next) {
  if (req.isAuthenticated()) {
    //req.isAuthenticated() will return true if user is logged in
    next();
  } else {
    res.redirect("/login");
  }
}

module.exports = (app) => {
  const roles = require("../controllers/role.controller.js");
  var router = require("express").Router();
  // INDEX
  router.get("/", checkAuthentication, roles.findAll);
  // SHOW
  router.get("/:role_id", roles.findOne);
  // CREATE
  router.post("/", roles.create);
  // UPDATE
  router.put("/:role_id", roles.update);
  // DESTROY
  router.delete("/:role_id", roles.delete);

  app.use("/api/roles", router);
};

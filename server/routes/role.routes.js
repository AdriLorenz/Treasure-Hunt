const passport = require("passport");

module.exports = (app) => {
  const roles = require("../controllers/role.controller.js");
  var router = require("express").Router();
  const auth = require("../controllers/auth.controller");

  // INDEX
  router.get("/", roles.findAll);
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

module.exports = (app) => {
  const roles = require("../controllers/role.controller.js");
  var router = require("express").Router();
  // INDEX
  router.get("/", roles.findAll);
  // SHOW
  router.get("/:id", roles.findOne);
  // CREATE
  router.post("/", roles.create);
  // UPDATE
  router.put("/:id", roles.update);
  // DESTROY
  router.delete("/:id", roles.delete);

  app.use("/api/roles", router);
};

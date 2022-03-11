module.exports = (app) => {
  const users = require("../controllers/user.controller.js");
  var router = require("express").Router();
  // INDEX
  router.get("/", users.findAll);
  // SHOW
  router.get("/:id", users.findOne);
  // CREATE
  router.post("/", users.create);
  // UPDATE
  router.put("/:id", users.update);
  // DESTROY
  router.delete("/:id", users.delete);

  app.use("/api/users", router);
};

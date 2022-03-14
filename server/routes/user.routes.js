module.exports = (app) => {
  const users = require("../controllers/user.controller.js");
  var router = require("express").Router();
  // INDEX
  router.get("/", users.findAll);
  // SHOW
  router.get("/:user_id", users.findOne);
  // CREATE
  router.post("/", users.create);
  // UPDATE
  router.put("/:user_id", users.update);
  // DESTROY
  router.delete("/:user_id", users.delete);

  app.use("/api/users", router);
};

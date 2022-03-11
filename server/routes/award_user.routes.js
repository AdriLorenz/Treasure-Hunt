module.exports = (app) => {
  const award_users = require("../controllers/award_user.controller.js");
  var router = require("express").Router();
  // INDEX
  // router.get("/", award_users.findAll);
  // CREATE
  // router.post("/", award_users.create);

  app.use("/api/award_users", router);
};

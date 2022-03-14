module.exports = (app) => {
  const awards = require("../controllers/award.controller.js");
  var router = require("express").Router();
  // INDEX
  router.get("/", awards.findAll);
  // SHOW
  router.get("/:award_id", awards.findOne);
  // CREATE
  router.post("/", awards.create);
  // UPDATE
  router.put("/:award_id", awards.update);
  // DESTROY
  router.delete("/:award_id", awards.delete);

  app.use("/api/awards", router);
};

module.exports = (app) => {
  const types = require("../controllers/type.controller.js");
  var router = require("express").Router();
  // INDEX
  router.get("/", types.findAll);
  // SHOW
  router.get("/:type_id", types.findOne);
  // CREATE
  router.post("/", types.create);
  // UPDATE
  router.put("/:type_id", types.update);
  // DESTROY
  router.delete("/:type_id", types.delete);

  app.use("/api/types", router);
};

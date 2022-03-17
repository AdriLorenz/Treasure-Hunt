module.exports = (app) => {
  const types = require("../controllers/type.controller.js");
  var router = require("express").Router();
  const images = require("../upload/upload");

  // INDEX
  router.get("/", types.findAll);
  // SHOW
  router.get("/:type_id", types.findOne);
  // CREATE
  router.post("/", images.upload.single("fileName"), types.create);
  // UPDATE
  router.put("/:type_id", images.upload.single("fileName"), types.update);
  // DESTROY
  router.delete("/:type_id", types.delete);

  app.use("/api/types", router);
};

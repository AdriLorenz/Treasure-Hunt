module.exports = (app) => {
  const places = require("../controllers/place.controller.js");
  var router = require("express").Router();
  const images = require("../upload/upload");

  // INDEX
  router.get("/", places.findAll);
  // SHOW
  router.get("/:place_id", places.findOne);
  // CREATE
  router.post("/", images.upload.single("fileName"), places.create);
  // UPDATE
  router.put("/:place_id", images.upload.single("fileName"), places.update);
  // DESTROY
  router.delete("/:place_id", places.delete);

  app.use("/api/places", router);
};

module.exports = (app) => {
  const images = require("../upload/upload");
  const places = require("../controllers/place.controller.js");
  const multer = require("multer");
  var router = require("express").Router();
  // INDEX
  router.get("/", places.findAll);
  // SHOW
  router.get("/:place_id", places.findOne);
  // CREATE
  router.post("/", images.upload.single("fileName"), places.create);
  // UPDATE
  router.put("/:place_id", places.update);
  // DESTROY
  router.delete("/:place_id", places.delete);

  app.use("/api/places", router);
};

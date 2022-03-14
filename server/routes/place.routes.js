module.exports = (app) => {
  const places = require("../controllers/place.controller.js");
  var router = require("express").Router();
  // INDEX
  router.get("/", places.findAll);
  // SHOW
  router.get("/:place_id", places.findOne);
  // CREATE
  router.post("/", places.create);
  // UPDATE
  router.put("/:place_id", places.update);
  // DESTROY
  router.delete("/:place_id", places.delete);

  app.use("/api/places", router);
};

module.exports = (app) => {
  const places = require("../controllers/place.controller.js");
  var router = require("express").Router();
  // INDEX
  router.get("/", places.findAll);
  // SHOW
  router.get("/:id", places.findOne);
  // CREATE
  router.post("/", places.create);
  // UPDATE
  router.put("/:id", places.update);
  // DESTROY
  router.delete("/:id", places.delete);

  app.use("/api/places", router);
};

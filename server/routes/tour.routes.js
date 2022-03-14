module.exports = (app) => {
  const tours = require("../controllers/tour.controller.js");
  var router = require("express").Router();
  // INDEX
  router.get("/", tours.findAll);
  // SHOW
  router.get("/:tour_id", tours.findOne);
  // CREATE
  router.post("/", tours.create);
  // UPDATE
  router.put("/:tour_id", tours.update);
  // DESTROY
  router.delete("/:tour_id", tours.delete);

  app.use("/api/tours", router);
};

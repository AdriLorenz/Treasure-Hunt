module.exports = (app) => {
  const tours = require("../controllers/tour.controller.js");
  var router = require("express").Router();
  // INDEX
  router.get("/", tours.findAll);
  // SHOW
  router.get("/:id", tours.findOne);
  // CREATE
  router.post("/", tours.create);
  // UPDATE
  router.put("/:id", tours.update);
  // DESTROY
  router.delete("/:id", tours.delete);

  app.use("/api/tours", router);
};

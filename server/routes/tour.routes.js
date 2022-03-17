module.exports = (app) => {
  const tours = require("../controllers/tour.controller.js");
  var router = require("express").Router();
  const auth = require("../controllers/auth.controller");

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
  //Add a place
  router.post("/tour_places", tours.addAPlace);
  //Add a user
  //router.post("/user_tour", tours.addAUser);

  app.use("/api/tours", router);
};

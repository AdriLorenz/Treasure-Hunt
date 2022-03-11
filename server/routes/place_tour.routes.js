module.exports = (app) => {
  const place_tours = require("../controllers/place_tour.controller.js");
  var router = require("express").Router();
  // INDEX
  // router.get("/", place_tours.findAll);
  // CREATE
  // router.post("/", place_tours.create);

  app.use("/api/place_tour", router);
};

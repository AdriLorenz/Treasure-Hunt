module.exports = (app) => {
  const user_tours = require("../controllers/user_tour.controller.js");
  var router = require("express").Router();
  // INDEX
  // router.get("/", user_tours.findAll);
  // CREATE
   router.post("/", user_tours.create);

  app.use("/api/user_tours", router);
};

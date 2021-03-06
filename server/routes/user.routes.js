module.exports = (app) => {
  const images = require("../upload/upload");
  const users = require("../controllers/user.controller.js");
  var router = require("express").Router();
  const auth = require("../controllers/auth.controller");

  // INDEX
  router.get("/", users.findAll);
  // SHOW
  router.get("/:user_email", users.findOne);
  // CREATE
  router.post("/", images.upload.single("fileName"), users.create);
  // UPDATE
  router.put("/:user_id", images.upload.single("fileName"), users.update);
  // DESTROY
  router.delete("/:user_id", users.delete);
  //Add a tour
  router.post("/addTour", users.addATour);

  app.use("/api/users", router);
};

module.exports = (app) => {
  const categories = require("../controllers/category.controller.js");
  var router = require("express").Router();
  // INDEX
  router.get("/", categories.findAll);
  // SHOW
  router.get("/:id", categories.findOne);
  // CREATE
  router.post("/", categories.create);
  // UPDATE
  router.put("/:id", categories.update);
  // DESTROY
  router.delete("/:id", categories.delete);

  app.use("/api/categories", router);
};

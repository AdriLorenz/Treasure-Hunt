module.exports = (app) => {
  const categories = require("../controllers/category.controller.js");
  var router = require("express").Router();
  const images = require("../upload/upload");

  // INDEX
  router.get("/", categories.findAll);
  // SHOW
  router.get("/:category_idid", categories.findOne);
  // CREATE
  router.post("/", images.upload.single("fileName"), categories.create);
  // UPDATE
  router.put(
    "/:category_id",
    images.upload.single("fileName"),
    categories.update
  );
  // DESTROY
  router.delete("/:category_idid", categories.delete);

  app.use("/api/categories", router);
};

const db = require("../models");
const Category = db.categories;
const Op = db.Sequelize.Op;

const categoryImagesDir = "\\images\\";

// INDEX
exports.findAll = (req, res) => {
  Category.findAll({
    include: [
      {
        model: db.tours,
      },
    ],
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occured while retrieving categories.",
      });
    });
};

// SHOW
exports.findOne = (req, res) => {
  const id = req.params.category_id;
  Category.findByPk(id, {
    include: [
      {
        model: db.tours,
      },
    ],
  })
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find category with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving category with id=" + id,
      });
    });
};

// CREATE
exports.create = async (req, res) => {
  var category = "";

  if (!req.body.category_name) {
    res.status(400).send({
      message: "Content can not be empty!",
    });

    return;
  }
  //Create a Type
  if (req.file) {
    category = {
      category_name: req.body.category_name,
      category_description: req.body.category_description,
      category_img_path:
        categoryImagesDir + req.file.filename || req.body.category_img_path,
    };
  } else {
    category = {
      category_name: req.body.category_name,
      category_description: req.body.category_description,
      category_img_path: "",
    };
  }

  //Save Category in the database
  await Category.create(category)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occured while creating the category.",
      });
    });
};

// UPDATE
exports.update = (req, res) => {
  const id = req.params.category_id;
  Category.update(req.body, {
    where: { category_id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Category was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update category with id=${id}. Maybe category was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating category with id=" + id,
      });
    });
};

// DESTROY
exports.delete = async (req, res) => {
  const id = req.params.category_id;

  const category = await Category.findOne({
    where: { category_id: id },
  });

  fs.unlink("./public" + category.category_img_path, (err) => {
    if (err !== null) {
      res.status(500).send(err.message);
      return;
    }
  });

  await Category.destroy({
    where: { category_id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "category was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete category with id=${id}. Maybe category was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete category with id=" + id,
      });
    });
};

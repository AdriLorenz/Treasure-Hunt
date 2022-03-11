const db = require("../models");
const Category = db.categories;
const Op = db.Sequelize.Op;

//Create and Save a new Place
exports.create = async (req, res) => {
  if (!req.body.category_name) {
    res.status(400).send({
      message: "Content can not be empty!",
    });

    return;
  }
  //Create a Type
  const category = {
    category_name: req.body.category_name,
    category_description: req.body.category_description,
  };

  //Save Category in the database
  Category.create(category)
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
//Retrieve all Categories from the database
exports.findAll = (req, res) => {
  Category.findAll()
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

//Find a single Category with an id
exports.findOne = (req, res) => {
  const id = req.params.category_id;
  Category.findByPk(id)
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

//Update a category by the id in the request

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

//Delete a category with the specified id in the request

exports.delete = (req, res) => {
  const id = req.params.category_id;
  Category.destroy({
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

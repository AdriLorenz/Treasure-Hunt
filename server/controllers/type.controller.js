const db = require("../models");
const Type = db.types;
const Op = db.Sequelize.Op;

//Create and save a new type
exports.create = async (req, res) => {
  if (!req.body.type_name) {
    res.status(400).send({
      message: "Content can not be empty!",
    });

    return;
  }
  //Create a type
  const type = {
    type_name: req.body.type_name,
  };

  //Save type in the database
  Type.create(type)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occured while creating the type.",
      });
    });
};

//Retrieve all type from the database
exports.findAll = (req, res) => {
  Type.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occured while retrieving types.",
      });
    });
};

//Find a single type with an id
exports.findOne = (req, res) => {
  const id = req.params.type_id;
  Type.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find type with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving type with id=" + id,
      });
    });
};

//Update a type by the id in the request
exports.update = (req, res) => {
  const id = req.params.type_id;
  Type.update(req.body, {
    where: { type_id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Place was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update type with id=${id}. Maybe type was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating type with id=" + id,
      });
    });
};

//Delete a type with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.type_id;
  Type.destroy({
    where: { type_id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Type was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete type with id=${id}. Maybe type was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete type with id=" + id,
      });
    });
};

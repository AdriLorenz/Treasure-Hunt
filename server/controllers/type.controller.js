const db = require("../models");
const Type = db.types;
const Op = db.Sequelize.Op;

// INDEX
exports.findAll = (req, res) => {
  Type.findAll({
    include: [
      {
        model: db.places,
      },
    ],
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occured while retrieving types.",
      });
    });
};

// SHOW
exports.findOne = (req, res) => {
  const id = req.params.type_id;
  Type.findByPk(id, {
    include: [
      {
        model: db.places,
      },
    ],
  })
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

// CREATE
exports.create = async (req, res) => {
  console.log(req.body);
  if (!req.body.type_name) {
    res.status(400).send({
      message: "Content can not be empty!",
    });

    return;
  }
  //Create a type
  const type = {
    type_name: req.body.type_name,
    type_description: req.body.type_description,
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

// UPDATE
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

// DESTROY
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

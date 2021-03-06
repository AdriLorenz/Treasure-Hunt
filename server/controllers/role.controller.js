const db = require("../models");
const Role = db.roles;
const Op = db.Sequelize.Op;

// INDEX
exports.findAll = (req, res) => {
  Role.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occured while retrieving roles.",
      });
    });
};

// SHOW
exports.findOne = (req, res) => {
  const id = req.params.role_id;
  Role.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Role with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Role with id=" + id,
      });
    });
};

// CREATE
exports.create = (req, res) => {
  if (!req.body.role_name) {
    res.status(400).send({
      message: "Content can not be empty!",
    });

    return;
  }
  //Create a Role
  const role = {
    role_name: req.body.role_name,
  };

  //Save Role in the database
  Role.create(role)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occured while creating the role.",
      });
    });
};

// UPDATE
exports.update = (req, res) => {
  const id = req.params.role_id;
  Role.update(req.body, {
    where: { role_id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Role was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Role with id=${id}. Maybe Role was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Role with id=" + id,
      });
    });
};

// DESTROY
exports.delete = (req, res) => {
  const id = req.params.role_id;
  Role.destroy({
    where: { role_id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Role was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete   Role with id=${id}. Maybe Role was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Role with id=" + id,
      });
    });
};

const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;

//Create and Save a new User
exports.create = (req, res) => {
  if (!req.body.user_name) {
    res.status(400).send({
      message: "Content can not be empty!",
    });

    return;
  }
  //Create a User
  const user = {
    user_name: req.body.user_name,
    user_email: req.body.user_email,
    user_password: req.body.user_password,
    user_score: req.body.user_score,
    role_id_fk: req.body.role_id_fk,
  };

  //Save User in the database
  User.create(user)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occured while creating the user.",
      });
    });
};
//Retrieve all Users from the database
exports.findAll = (req, res) => {
  User.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occured while retrieving users.",
      });
    });
};

//Find a single User with an id
exports.findOne = (req, res) => {
  const id = req.params.user_id;
  User.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find User with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving User with id=" + id,
      });
    });
};

//Update a User by the id in the request

exports.update = (req, res) => {
  const id = req.params.user_id;
  User.update(req.body, {
    where: { user_id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "User was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating User with id=" + id,
      });
    });
};

//Delete a User with the specified id in the request

exports.delete = (req, res) => {
  const id = req.params.user_id;
  User.destroy({
    where: { user_id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "User was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete User with id=${id}. Maybe User was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete User with id=" + id,
      });
    });
};
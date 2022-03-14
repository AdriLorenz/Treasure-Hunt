const db = require("../models");
const User_Tour = db.users_tour;
const Op = db.Sequelize.Op;

//Create and Save a new User_Tour
exports.create = (req, res) => {
  if (!req.body.userUserId) {
    res.status(400).send({
      message: "Content can not be empty!",
    });

    return;
  }
  //Create a User_Tour
  const user_tour = {
    isLiked: req.body.isLiked,
    userUserId: req.body.userUserId,
    tourTourId: req.body.tourTourId
  };

  //Save User_Tour in the database
  User_Tour.create(user_tour)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occured while creating the user_tour.",
      });
    });
};
//Retrieve all Users_Tours from the database
exports.findAll = (req, res) => {
  User_Tour.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occured while retrieving users_tours.",
      });
    });
};

//Find a single User_Tour with an id
exports.findOne = (req, res) => {
  const id = req.params.user_id;
  User_Tour.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find User_Tour with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving User_Tour with id=" + id,
      });
    });
};

//Update a User_Tour by the id in the request

exports.update = (req, res) => {
  const id = req.params.user_id;
  User_Tour.update(req.body, {
    where: { user_id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "User_Tour was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update User_Tour with id=${id}. Maybe User_Tour was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating User_Tour with id=" + id,
      });
    });
};

//Delete a User_Tour with the specified id in the request

exports.delete = (req, res) => {
  const id = req.params.user_id;
  User_Tour.destroy({
    where: { user_id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "User_Tour was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete User_Tour with id=${id}. Maybe User_Tour was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete User_Tour with id=" + id,
      });
    });
};

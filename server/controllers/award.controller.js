const db = require("../models");
const Award = db.awards;
const Op = db.Sequelize.Op;

//Create and Save a new Award
exports.create = (req, res) => {
  if (!req.body.award_name) {
    res.status(400).send({
      message: "Content can not be empty!",
    });

    return;
  }
  //Create a Award
  const award = {
    award_name: req.body.award_name,
    award_score: req.body.award_score,
  };

  //Save Award in the database
  Award.create(award)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occured while creating the award.",
      });
    });
};
//Retrieve all Awards from the database
exports.findAll = (req, res) => {
  Award.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occured while retrieving Awards.",
      });
    });
};

//Find a single Award with an id
exports.findOne = (req, res) => {
  const id = req.params.award_id;
  Award.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Award with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Award with id=" + id,
      });
    });
};

//Update a Award by the id in the request

exports.update = (req, res) => {
  const id = req.params.award_id;
  Award.update(req.body, {
    where: { award_id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Award was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Award with id=${id}. Maybe Award was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Award with id=" + id,
      });
    });
};

//Delete a Award with the specified id in the request

exports.delete = (req, res) => {
  const id = req.params.award_id;
  Award.destroy({
    where: { award_id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Award was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Award with id=${id}. Maybe Award was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Award with id=" + id,
      });
    });
};

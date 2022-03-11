const db = require("../models");
const Award_User = db.award_user;
const Op = db.Sequelize.Op;

//Create and Save a new Place
exports.create = async (req, res) => {
  // if (!req.body.place_id) {
  //   res.status(400).send({
  //     message: "Content can not be empty!",
  //   });

  //   return;
  // }

  //Create a Place
  const award_user = {
    awardAwardId: req.body.awardAwardId,
    userUserId: req.body.userUserId,
  };

  //Save Place in the database
  Award_User.create(place_tour)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occured while creating the place.",
      });
    });
};

//Retrieve all Awards from the database
exports.findAll = (req, res) => {
  Award_User.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occured while retrieving Awards.",
      });
    });
};

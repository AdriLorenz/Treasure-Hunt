const db = require("../models");
const Place_Tour = db.place_tour;
const Op = db.Sequelize.Op;

//Create and Save a new Place
exports.create = async (tourId, req, res) => {
  // if (!req.body.place_id) {
  //   res.status(400).send({
  //     message: "Content can not be empty!",
  //   });

  //   return;
  // }

  //Create a Place
  const place_tour = {
    placePlaceId: req.body.placePlaceId,
    tourTourId: req.body.tourTourId,
  };

  //Save Place in the database
  Place_Tour.create(place_tour)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occured while creating the place.",
      });
    });
};

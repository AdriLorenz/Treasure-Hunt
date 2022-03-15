const db = require("../models");
const Place = db.places;
//const Place_Tour = db.place_tour;
const Op = db.Sequelize.Op;

// INDEX
exports.findAll = (req, res) => {
  Place.findAll(
    {
      include: [
        {
          model: db.types
        },
        {
          model: db.tours
        }
      ]
    }
  )
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occured while retrieving places.",
      });
    });
};

// SHOW
exports.findOne = (req, res) => {
  const id = req.params.place_id;
  Place.findByPk(id,
    {
      include: [
        {
          model: db.types
        },
        {
          model: db.tours
        }
      ]
    }  
  )
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Place with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Place with id=" + id,
      });
    });
};

// CREATE
exports.create = async (req, res) => {
  if (!req.body.place_name) {
    res.status(400).send({
      message: "Content can not be empty!",
    });

    return;
  }
  //Create a Place
  const place = {
    place_name: req.body.place_name,
    place_description: req.body.place_description,
    place_points: req.body.place_points,
    place_location: req.body.place_location,
    type_id_fk: req.body.type_id_fk,
  };

  //Save Place in the database
  const createdPlace = Place.create(place)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occured while creating the place.",
      });
    });
};

// UPDATE
exports.update = (req, res) => {
  const id = req.params.place_id;
  Place.update(req.body, {
    where: { place_id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Place was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Place with id=${id}. Maybe Place was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Place with id=" + id,
      });
    });
};

// DESTROY
exports.delete = (req, res) => {
  const id = req.params.place_id;
  Place.destroy({
    where: { place_id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Place was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Place with id=${id}. Maybe Place was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Place with id=" + id,
      });
    });
};

const db = require("../models");
const Tour = db.tours;
const Place = db.places;
const User = db.users;
const Op = db.Sequelize.Op;
//const createTour = require("./place_tour.controller").create;

//Create and Save a new Tour
exports.create = async (req, res) => {
  if (!req.body.tour_name) {
    res.status(400).send({
      message: "Content can not be empty!",
    });

    return;
  }
  //Create a Tour
  // const tour = {
  //   tour_name: req.body.tour_name,
  //   tour_description: req.body.tour_description,
  //   tour_likes: req.body.tour_likes,
  //   category_id_fk: req.body.category_id_fk,
  // };

  //Save Tours in the database
  const tour = Tour.create({
    tour_name: req.body.tour_name,
    tour_description: req.body.tour_description,
    tour_likes: req.body.tour_likes,
    tour_duration: req.body.tour_duration,
    category_id_fk: req.body.category_id_fk,
  })

    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occured while creating the tour.",
      });
    });
};
//Add a place to a tour
exports.addAPlace = async(req, res) => {
  try {
   
  const tour = await Tour.findByPk(req.body.idTour);
  const place = await Place.findByPk(req.body.idPlace);

  console.log(tour)
  console.log(place)
  tour.addPlace(place)
 
  res.send("success")
  } catch (error) {
  res.send(error.message)    
  }
}
//Add a user to a tour
/*exports.addAUser = async(req, res) => {
  try {
   
  const tour = await Tour.findByPk(req.body.idTour);
  const user = await User.findByPk(req.body.idUser);
  tour.addUser(user, {through : {isLiked: req.body.isLiked}})
  console.log(tour)
  console.log(user)
  
 
  res.send("success")
  } catch (error) {
  res.send(error.message)    
  }
}*/
//Retrieve all Tours from the database
exports.findAll = (req, res) => {
  Tour.findAll(
    {
      include: [
        {
          model: db.categories
        },
        {
          model: db.places
        },
        {
          model: db.users
        }
      ]
    }
  )
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occured while retrieving tours.",
      });
    });
};

// SHOW
exports.findOne = (req, res) => {
  const id = req.params.tour_id;
  Tour.findByPk(id,
    {
      include: [
        {
          model: db.categories
        },
        {
          model: db.places
        },
        {
          model: db.users
        }
      ]
    }  
  )
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Tour with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Tour with id=" + id,
      });
    });
};

// CREATE
exports.create = async (req, res) => {
  if (!req.body.tour_name) {
    res.status(400).send({
      message: "Content can not be empty!",
    });

    return;
  }
  //Create a Tour
  // const tour = {
  //   tour_name: req.body.tour_name,
  //   tour_description: req.body.tour_description,
  //   tour_likes: req.body.tour_likes,
  //   tour_duration: req.body.tour_duration,
  //   category_id_fk: req.body.category_id_fk,
  // };

  //Save Tours in the database
  const tour = Tour.create({
    tour_name: req.body.tour_name,
    tour_description: req.body.tour_description,
    tour_likes: req.body.tour_likes,
    tour_duration: req.body.tour_duration,
    category_id_fk: req.body.category_id_fk,
  })

    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occured while creating the tour.",
      });
    });
};

// UPDATE
exports.update = (req, res) => {
  const id = req.params.tour_id;
  Tour.update(req.body, {
    where: { tour_id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tour was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Tour with id=${id}. Maybe Tour was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Tour with id=" + id,
      });
    });
};

// DESTROY
exports.delete = (req, res) => {
  const id = req.params.tour_id;
  Tour.destroy({
    where: { tour_id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tour was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Tour with id=${id}. Maybe Tour was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Tour with id=" + id,
      });
    });
};

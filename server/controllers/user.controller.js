const db = require("../models");
const User = db.users;
const bcrypt = require("bcrypt");
const Op = db.Sequelize.Op;

const userImagesDir = "\\images\\";

// INDEX
exports.findAll = (req, res) => {
  User.findAll(
    {
      include: [
        {
          model: db.roles
        },
        {
          model: db.tours
        },
        {
          model: db.awards
        }
      ]
    },

  )
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occured while retrieving users.",
      });
    });
};

// SHOW
exports.findOne = (req, res) => {
  const email = req.params.user_email;
  User.findAll({where: {user_email: email}},
    {
      include: [
        {
          model: db.roles
        },
        {
          model: db.tours
        },
        {
          model: db.awards
        }
      ]
    }
  )
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

// CREATE
exports.create = async (req, res) => {
  try {
    var user = "";
    const hashedPassword = await bcrypt.hash(req.body.user_password, 3);

    const userWithSameEmail = await User.findOne({
      where: { user_email: req.body.user_email },
    });

    if (userWithSameEmail) {
      return res.send("Email already used !");
    } else {
      if (req.file) {
        user = {
          user_name: req.body.user_name,
          user_email: req.body.user_email,
          user_password: hashedPassword,
          user_img_path:
            userImagesDir + req.file.filename || req.body.user_img_path || "",
          role_id_fk: req.body.role_id_fk,
        };
      } else {
        user = {
          user_name: req.body.user_name,
          user_email: req.body.user_email,
          user_password: hashedPassword,
          user_img_path: "",
          role_id_fk: req.body.role_id_fk,
        };
      }
      await User.create(user);

      res.json({
        message: "User Created",
      });
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// UPDATE
exports.update = (req, res) => {
  const id = req.params.user_id;
  req.body.user_img_path = userImagesDir + req.file.filename;
  User.update(req.body, {
    where: { user_id: id }
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

// DESTROY
exports.delete = async (req, res) => {
  const id = req.params.user_id;

  const user = await User.findOne({
    where: { user_id: id },
  });

  fs.unlink("./public" + user.user_img_path, (err) => {
    if (err !== null) {
      res.status(500).send(err.message);
      return;
    }
  });

  await User.destroy({
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

// Add a tour to a user
exports.addATour = async (req, res) => {
  try {
    const user = await User.findByPk(req.body.userId);

    const tour = await db.tours.findByPk(req.body.tourId);

    user.addTour(tour, { through: { isLiked: req.body.isLiked } });

    res.send("Tour added successfully");
  } catch (error) {
    res.send(error.message);
  }
};

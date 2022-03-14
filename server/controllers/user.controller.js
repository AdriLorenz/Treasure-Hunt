const db = require("../models");
const User = db.users;
const bcrypt = require("bcrypt");
const Op = db.Sequelize.Op;

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
  const id = req.params.user_id;
  User.findByPk(id,
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
    const hashedPassword = await bcrypt.hash(req.body.user_password, 3);

    const userWithSameEmail = await User.findOne({
      where: { user_email: req.body.user_email },
    });

    if (userWithSameEmail) {
      return res.send("Email already used !");
    } else {
      const user = await User.create({
        user_name: req.body.user_name,
        user_email: req.body.user_email,
        user_password: hashedPassword,
        role_id_fk: req.body.role_id_fk,
      });

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

// DESTROY
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

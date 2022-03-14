module.exports = (sequelize, Sequelize) => {
  // Define schema
  const User = sequelize.define(
    "users",
    {
      // Define attributes
       user_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      user_name: {
        type: Sequelize.STRING,
      },

      user_email: {
        type: Sequelize.STRING,
      },

      user_password: {
        type: Sequelize.STRING,
      },

      user_score: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },

      role_id_fk: {
        type: Sequelize.INTEGER,
      },
    },
    {
      // Freeze Table Name, turn of timestamps fields
      timestamps: false,
      freezeTableName: true,
    }
  );

  // Specify the relationship
  User.associate = (models) => {
    User.belongsTo(models.roles, {
      foreignKey: "role_id_fk",
    });
    
    User.belongsToMany(models.tours, {
      through: models.user_tour,
    });
     
    User.belongsToMany(models.awards, {
      onDelete: "cascade",
      through:"user_awards"
     
    });
  };

  return User;
};

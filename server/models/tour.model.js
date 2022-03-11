module.exports = (sequelize, Sequelize) => {
  // Define schema
  const Tour = sequelize.define(
    "tours",
    {
      // Define attributes
      tour_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      tour_name: {
        type: Sequelize.STRING,
      },

      tour_description: {
        type: Sequelize.STRING,
      },

      tour_likes: {
        type: Sequelize.INTEGER,
      },

      tour_duration: {
        type: Sequelize.STRING
      },

      category_id_fk: {
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
  Tour.associate = (models) => {
    Tour.belongsTo(models.categories, {
      foreignKey: "category_id_fk",
    });
    Tour.belongsToMany(models.places, {
      through: "place_tour",
      onDelete: "cascade",
    });
    Tour.belongsToMany(models.users, {
      through: "user_tour",
      onDelete: "cascade",
    });
  };

  return Tour;
};

module.exports = (sequelize, Sequelize) => {
  // Define schema
  const Place = sequelize.define(
    "places",
    {
      // Define attributes
      place_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      place_name: {
        type: Sequelize.STRING,
      },

      place_description: {
        type: Sequelize.STRING,
      },

      place_points: {
        type: Sequelize.STRING,
      },

      type_id_fk: {
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
  Place.associate = (models) => {
    Place.belongsTo(models.types, {
      foreignKey: "type_id_fk",
    });
    Place.belongsToMany(models.tours, {
      through: "place_tour",
      onDelete: "cascade",
    });
  };

  return Place;
};
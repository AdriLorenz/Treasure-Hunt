module.exports = (sequelize, Sequelize) => {
  // Define schema
  const Place_Tour = sequelize.define(
    "place_tour",
    {},
    {
      // Freeze Table Name, turn of timestamps fields
      timestamps: true,
      freezeTableName: true,
    }
  );

  return Place_Tour;
};

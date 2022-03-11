module.exports = (sequelize, Sequelize) => {
  // Define schema
  const User_Tour = sequelize.define(
    "user_tour",
    {
      liked: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },

      disliked: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      // Freeze Table Name, turn of timestamps fields
      timestamps: false,
      freezeTableName: true,
    }
  );

  return User_Tour;
};

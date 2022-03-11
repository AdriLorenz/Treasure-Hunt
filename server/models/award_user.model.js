module.exports = (sequelize, Sequelize) => {
  // Define schema
  const Award_User = sequelize.define(
    "award_user",
    {},
    {
      // Freeze Table Name, turn of timestamps fields
      timestamps: true,
      freezeTableName: true,
    }
  );

  return Award_User;
};

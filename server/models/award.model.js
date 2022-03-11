module.exports = (sequelize, Sequelize) => {
  // Define schema
  const Award = sequelize.define(
    "awards",
    {
      // Define attributes
      award_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      award_name: {
        type: Sequelize.STRING,
      },

      award_score: {
        type: Sequelize.INTEGER,
      },
    },
    {
      // Freeze Table Name, turn of timestamps fields
      timestamps: true,
      freezeTableName: true,
    }
  );

  // Specify the relationship
  Award.associate = (models) => {
    Award.belongsToMany(models.users, {
      through: "award_user",
      onDelete: "cascade",
    });
  };

  return Award;
};

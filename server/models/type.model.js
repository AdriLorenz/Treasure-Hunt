module.exports = (sequelize, Sequelize) => {
  // Define schema
  const Type = sequelize.define(
    "types",
    {
      // Define attributes
      type_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      type_name: {
        type: Sequelize.STRING,
      },

      type_description: {
        type: Sequelize.STRING,
      },

      type_img_path: {
        type: Sequelize.STRING,
      },
    },
    {
      // Freeze Table Name, turn of timestamps fields
      timestamps: false,
      freezeTableName: true,
    }
  );

  // Specify the relationship
  Type.associate = (models) => {
    Type.hasMany(models.places, {
      foreignKey: "type_id_fk",
      onDelete: "cascade",
    });
  };

  return Type;
};

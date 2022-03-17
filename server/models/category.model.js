// Export model Role
module.exports = (sequelize, Sequelize) => {
  // Define schema
  const Category = sequelize.define(
    "categories",
    {
      // Define attributes
      category_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      category_name: {
        type: Sequelize.STRING,
      },

      category_description: {
        type: Sequelize.STRING,
      },

      category_img_path: {
        type: Sequelize.STRING,
      },
    },
    {
      // Freeze Table Name, turn of timestamps fields
      timestamps: false,
      freezeTableName: true,
    }
  );
  Category.associate = (models) => {
    Category.hasMany(models.tours, {
      onDelete: "CASCADE",
      foreignKey: "category_id_fk",
    });
  };

  return Category;
};

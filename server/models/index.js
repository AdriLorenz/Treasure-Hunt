const dbConfig = require("../config/db.config");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};
const models = [];

const modules = [
  require("./role.model"),
  require("./user.model"),
  require("./place.model"),
  require("./tour.model"),
  require("./type.model"),
  require("./category.model"),
  require("./award.model"),
  require("./place_tour.model"),
  require("./user_tour.model"),
  require("./award_user.model"),
];

modules.forEach((module) => {
  const model = module(sequelize, Sequelize);

  db[model.name] = model;
  models.push(model);
});
db.sequelize = sequelize;
db.Sequelize = Sequelize;

models.forEach((model) => {
  if (db[model.name].associate) db[model.name].associate(db);
});

module.exports = db;

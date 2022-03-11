const Sequelize = require("sequelize");

// create connection
const db = new Sequelize("treasure_hunt", "root", "adri123", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = db;

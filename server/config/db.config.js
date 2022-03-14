require('dotenv').config();

module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "Reussite@19",
  DB: "treasure_hunt",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

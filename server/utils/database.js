const { Sequelize } = require('sequelize');

// Create a connection to database
const db = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'Pvera#280295',
  database: 'academloBank',
  logging: false,
});

module.exports = { db };

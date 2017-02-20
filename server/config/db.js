'use strict'

const Sequelize = require('sequelize');
const env = require('./env');
const sequelize = new Sequelize(env.DATABASE, env.DATABASE_USERNAME, env.DATABASE_PASSWORD, {
  dialect: env.DATABASE_DIALECT,
  storage: env.DATABASE_STORAGE,
  define: {
    underscored: true
  }
});

// Connect all the models/tables in the database to a db object,
//so everything is accessible via one object
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
db.todos = require('../models/todos.js')(sequelize, Sequelize);

//Relations
// (no relations with only one table)

module.exports = db;

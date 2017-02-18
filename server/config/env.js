'use strict';
const path = require('path');

const env = {
  DATABASE_USERNAME: process.env.DATABASE_USERNAME || null,
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD || null,
  DATABASE: process.env.DATABASE || 'data.sqlite',
  DATABASE_DIALECT: process.env.DATABASE_DIALECT || 'sqlite',
  DATABASE_STORAGE: process.env.DATABASE_STORAGE || path.join(__dirname, '../data.sqlite'),
  PORT: 8019,
  NODE_ENV: process.env.NODE_ENV || 'development',
};

module.exports = env;

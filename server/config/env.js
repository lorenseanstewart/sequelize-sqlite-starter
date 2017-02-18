'use strict';

const env = {
  DATABASE_USERNAME: process.env.DATABASE_USERNAME || null,
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD || null,
  DATABASE: process.env.DATABASE || 'todos',
  DATABASE_HOST: process.env.DATABASE_HOST || 'localhost',
  DATABASE_DIALECT: process.env.DATABASE_DIALECT || 'sqlite',
  DATABASE_STORAGE: process.env.DATABASE_DIALECT || '../data.sqlite3',
  PORT: 8019,
  NODE_ENV: process.env.NODE_ENV || 'development',
};

module.exports = env;

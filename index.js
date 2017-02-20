'use strict';

const express = require('express'),
  bodyParser = require('body-parser'),
  morgan = require('morgan'),
  db = require('./server/config/db.js'),
  env = require('./server/config/env'),
  router = require('./server/router/index');

const app = express();
const PORT = env.PORT;

app.use(morgan('combined'));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Content-Type', 'application/json');
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

router(app, db);

//drop and resync with { force: true }
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log('Express listening on port:', PORT);
  });
});

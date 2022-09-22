'use strict';

const express = require('express');
const notFound = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const logger = require('./middleware/logger');
const validator = require('./middleware/validator');

const PORT = process.env.PORT || 3002;

// design principle:  singleton
const app = express();

app.use(logger);

app.get('/', (req, res, next) => {
  res.status(200).send('Hello World');
});

app.get('/person', validator,(req, res, next) => {
  let { name } = req.query;
  // console.log('name', name);
  res.status(200).send({name:name});
});

app.use('*', notFound);

app.use(errorHandler);

function start(){
  app.listen(PORT, () => console.log(`listening on port ${PORT}`));
}

module.exports = { app, start};

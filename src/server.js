'use strict';

const { response } = require('express');
const express = require('express');
const notFound = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
//const logger = require('./middleware/logger');
//const validator = require('./middleware/validator');
const {FoodModel} = require('./models');


const PORT = process.env.PORT || 3002;

// design principle:  singleton
const app = express();
app.use(express.json());
//app.use(logger);

app.get('/', (req, res, next) => {
  res.status(200).send('Hello World');
});

app.post('/food', async (req, res, send) => {
  const newFood = await FoodModel.create(req.body);
  res.status(200).send(newFood);
});

app.use('*', notFound);

app.use(errorHandler);

function start(){
  app.listen(PORT, () => console.log(`listening on port ${PORT}`));
}

module.exports = { app, start};

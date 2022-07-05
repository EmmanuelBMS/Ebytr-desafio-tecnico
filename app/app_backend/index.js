const express = require('express');
const bodyParser = require('body-parser');
const ErrorMiddleware = require('./utils/ErrorMiddleware');
const TaskRoute = require('./routes/TaskRoute');

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});
app.use(bodyParser.json());
app.use(TaskRoute);
app.use(ErrorMiddleware);

module.exports = app;

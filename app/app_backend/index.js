const express = require('express');
const bodyParser = require('body-parser');
const ErrorMiddleware = require('./utils/ErrorMiddleware');
const TaskRoute = require('./routes/TaskRoute');

const app = express();

app.use(bodyParser.json());
app.use(TaskRoute);
app.use(ErrorMiddleware);

module.exports = app;

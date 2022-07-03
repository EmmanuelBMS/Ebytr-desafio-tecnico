const express = require('express');
const bodyParser = require('body-parser');
const ErrorMiddleware = require('./utils/ErrorMiddleware');
const TaskRoute = require('./routes/TaskRoute');

const app = express();

app.use(bodyParser.json());
app.use(TaskRoute);

app.use(ErrorMiddleware);

app.listen(3001, () => {
  console.log('App listening 3001');
});

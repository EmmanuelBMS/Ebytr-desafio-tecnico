const express = require('express');
const bodyParser = require('body-parser');
const ErrorHandler = require('./utils/ErrorHandler');
const TaskRoute = require('./routes/TaskRoute');

const app = express();

app.use(bodyParser.json());
app.use(TaskRoute);

app.use(ErrorHandler);

app.listen(3001, () => {
  console.log('App listening 3001');
});

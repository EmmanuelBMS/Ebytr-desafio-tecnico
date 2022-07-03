const express = require('express');
const TaskController = require('../controllers/TaskController');
const TaskValidator = require('../middlewares/TasksMiddleware');

const router = express.Router();

router.get('/', TaskController.getAll);
router.post('/tasks', TaskValidator.create, TaskController.create);
router.patch('/tasks/:id', TaskValidator.update, TaskController.update);

module.exports = router;

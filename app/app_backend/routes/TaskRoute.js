const express = require('express');
const TaskController = require('../controllers/TaskController');
const TaskValidator = require('../middlewares/TasksMiddleware');

const router = express.Router();

router.get('/', TaskController.getAllTasks);
router.post('/tasks', TaskValidator.create, TaskController.createTask);
router.patch('/tasks/:id', TaskValidator.update, TaskController.updateTask);
router.delete('/task/:id', TaskController.deleteTask);

module.exports = router;

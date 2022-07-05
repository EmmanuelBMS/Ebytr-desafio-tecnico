const TaskService = require('../services/TaskService');

const getAllTasks = async (_req, res, next) => {
  try {
    const task = await TaskService.getAllTasks();

    return res.status(200).json(task);
  } catch (error) {
    next(error);
  }
};

const createTask = async (req, res, next) => {
  try {
    const { task, employeeId } = req.body;
    await TaskService.createTask(task, employeeId);

    return res.status(201).json({ message: 'Created Successfuly' });
  } catch (error) {
    next(error);
  }
};

const updateTask = async (req, res, next) => {
  try {
    const { id, status } = req.body;
    const updated = await TaskService.updateTask(id, status);

    return res.status(200).json(updated);
  } catch (error) {
    next(error);
  }
};

const deleteTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    await TaskService.deleteTask(id);

    return res.status(200).json({ message: 'Deleted successfuly' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createTask,
  getAllTasks,
  updateTask,
  deleteTask,
};

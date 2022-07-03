const TaskService = require('../services/TaskService');

const getAll = async (_req, res, next) => {
  try {
    const task = await TaskService.getAll();

    return res.status(200).json(task);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAll,
};

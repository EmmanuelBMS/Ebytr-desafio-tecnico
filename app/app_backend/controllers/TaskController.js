const TaskService = require('../services/TaskService');

const getAll = async (_req, res, next) => {
  try {
    const task = await TaskService.getAll();

    return res.status(200).json(task);
  } catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  try {
    const { task, employeeId } = req.body;
    await TaskService.create(task, employeeId);

    return res.status(201).json({ message: 'Created Successfuly' });
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const updated = await TaskService.update(id, status);

    return res.status(200).json(updated);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
  getAll,
  update,
};

const { Tasks: TasksModel } = require('../models');

const getAll = async () => {
  const allTasks = await TasksModel.findAll();
  return allTasks;
};

module.exports = {
  getAll,
};

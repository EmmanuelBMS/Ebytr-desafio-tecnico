const { Tasks: TasksModel, Employees } = require('../models');
const { ErrorHandler } = require('../utils/ErrorHandler');

const getAll = async () => {
  const allTasks = await TasksModel.findAll();
  return allTasks;
};

const create = async (task, id) => {
  const checkEmployee = await Employees.findOne({ where: { id } });

  if (!checkEmployee) throw ErrorHandler(400, 'Id not valid!');
  await TasksModel.create({ task, employeeId: id });
};

const update = async (id, status) => {
  const updated = await TasksModel.update({ status }, { where: { id } });
  if (!updated) throw ErrorHandler(401, 'Task not found!');
  return updated;
};

module.exports = {
  getAll,
  create,
  update,
};

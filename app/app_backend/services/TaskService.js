const { Tasks: TasksModel, Employees } = require('../models');
const { ErrorHandler } = require('../utils/ErrorHandler');

const getAllTasks = async () => {
  const allTasks = await TasksModel.findAll({
    include: [{
      model: Employees,
      as: 'employee',
      attributes: { exclude: ['id'] },
    }],
  });
  return allTasks;
};

const createTask = async (task, id) => {
  const checkEmployee = await Employees.findOne({ where: { id } });

  if (!checkEmployee) throw ErrorHandler(400, 'Id not valid!');
  await TasksModel.create({ task, employeeId: id });
};

const updateTask = async (id, status) => {
  const updated = await TasksModel.update({ status }, { where: { id } });
  if (updated[0] === 0) throw ErrorHandler(401, 'Task not found!');
  return updated;
};

const deleteTask = async (id) => {
  const deleted = await TasksModel.delete({ where: { id } });
  if (deleted[0] === 0) throw ErrorHandler(401, 'Task not found!');
  return deleted;
};

module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
};

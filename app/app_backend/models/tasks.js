'use strict';

const Tasks = (sequelize, DataTypes) => {
  const Task = sequelize.define('Tasks', {
    task: DataTypes.STRING,
    employeeId: DataTypes.INTEGER,
    status: DataTypes.STRING,
  }, {
    tableName: 'Tasks',
    underscored: true,
    timestamps: false,
  });

  Task.associate = (models) => {
    Task.belongsTo(models.Employees, { foreignKey: 'employeeId', as: 'employee' });
  };
  return Task;
};

module.exports = Tasks;

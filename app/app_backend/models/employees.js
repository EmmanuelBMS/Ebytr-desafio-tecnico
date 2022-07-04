'use strict';

const Employees = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employees', {
    full_name: DataTypes.STRING,
  }, {
    tableName: 'Employees',
    timestamps: false,
  });

  Employee.associate = (models) => {
    Employee.hasMany(models.Tasks, { foreignKey: 'employeeId', as: 'task' });
  };
  return Employee;
};

module.exports = Employees;

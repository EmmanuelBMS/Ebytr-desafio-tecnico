const Employees = (sequelize, DataTypes) => {
  const Task = sequelize.define('Employees', {
    full_name: DataTypes.STRING,
  }, {
    tableName: 'Employees',
    timestamps: false,
  });

  return Task;
};

Employees.associate = (models) => {
  Employees.hasOne(models.Tasks, { foreignKey: 'employeeId', as: 'employee' });
};

module.exports = Employees;

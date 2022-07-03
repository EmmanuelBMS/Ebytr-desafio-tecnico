const Employees = (sequelize, DataTypes) => {
  const Task = sequelize.define('Employees', {
    id: DataTypes.INTEGER,
    fullName: DataTypes.string,
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

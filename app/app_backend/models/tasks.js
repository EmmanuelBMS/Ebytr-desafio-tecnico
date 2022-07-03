const Tasks = (sequelize, DataTypes) => {
  const Task = sequelize.define('Tasks', {
    task: DataTypes.STRING,
    employee_id: DataTypes.INTEGER,
    status: DataTypes.STRING,
  }, {
    tableName: 'Tasks',
    underscored: true,
    timestamps: false,
  });

  return Task;
};

Tasks.associate = (models) => {
  Tasks.belongsTo(models.Employees, { foreignKey: 'employeeId', as: 'employee' });
};

module.exports = Tasks;

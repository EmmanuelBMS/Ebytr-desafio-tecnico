const Tasks = (sequelize, DataTypes) => {
  const Task = sequelize.define('Tasks', {
    id: DataTypes.INTEGER,
    task: DataTypes.STRING,
    employeeId: DataTypes.INTEGER,
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

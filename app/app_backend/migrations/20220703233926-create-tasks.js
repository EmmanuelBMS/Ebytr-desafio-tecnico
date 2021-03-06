'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      task: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      employeeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'employee_id',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'Employees',
          field: 'id',
        },
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'pendant',
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Tasks');
  },
};

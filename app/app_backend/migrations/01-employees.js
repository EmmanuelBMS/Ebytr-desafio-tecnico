module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Employees', {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      fullName: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'full_name',
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Employees');
  },
};

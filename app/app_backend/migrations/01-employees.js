module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Employees', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      fullName: {
        type: Sequelize.STRING,
        field: 'full_name',
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Employees');
  },
};

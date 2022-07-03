module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'Employees',
    [
      {
        full_name: 'Lebron James',
      },
      {
        full_name: 'Michael Scofield',
      },
      {
        full_name: 'Michael Jordan',
      },
      {
        full_name: 'Lamello ball',
      },
    ],
    {},
  ),

  down: async (queryInterface) => queryInterface.bulkDelete('Employees', null, {}),
};

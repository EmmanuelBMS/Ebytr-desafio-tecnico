module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'Tasks',
    [
      {
        task: 'Fix computer issues',
        employee_id: 1,
      },
      {
        task: 'Organize office',
        employee_id: 2,
      },
      {
        task: 'Clean bathroom',
        employee_id: 3,
      },
      {
        task: 'Practice new library',
        employee_id: 4,
      },
      {
        task: 'Lead the team',
        employee_id: 2,
      },
    ],
    {},
  ),

  down: async (queryInterface) => queryInterface.bulkDelete('Tasks', null, {}),
};

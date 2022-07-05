module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'Tasks',
    [
      {
        task: 'Fix computer issues',
        employee_id: 1,
        status: 'done',
      },
      {
        task: 'Organize office',
        employee_id: 2,
        status: 'doing',
      },
      {
        task: 'Clean bathroom',
        employee_id: 3,
        status: 'done',
      },
      {
        task: 'Practice new library',
        employee_id: 4,
        status: 'pendant',
      },
      {
        task: 'Lead the team',
        employee_id: 2,
        status: 'pendant',
      },
    ],
    {},
  ),

  down: async (queryInterface) => queryInterface.bulkDelete('Tasks', null, {}),
};

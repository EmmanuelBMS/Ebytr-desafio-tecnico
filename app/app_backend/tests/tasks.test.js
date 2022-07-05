const mocha = require('mocha');
const chai = require('chai');
const sinon = require('sinon');

const chaiHttp = require('chai-http');

const app = require('../index');
const tasksModel = require('../models/tasks');

chai.use(chaiHttp);

const { expect } = chai;

mocha.describe('Testa a rota /tasks', () => {
  let chaiHttpResponse;

  mocha.before(async () => {
    sinon
      .stub(tasksModel, 'findAll')
      .resolves([{
        id: 1,
        task: 'Fix computer issues',
        employeeId: 1,
        status: 'done',
        employee: {
          full_name: 'Lebron James',
        },
      }]);
  });

  mocha.after(() => {
    (tasksModel.findAll).restore();
  });

  mocha.it('Test if get all tasks correctly', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .get('/tasks');

    expect(chaiHttpResponse.status).to.be.equal(200);
    chaiHttpResponse.body.forEach((team) => {
      expect(team).to.have.property('id');
      expect(team).to.have.property('task');
      expect(team).to.have.property('employeeId');
      expect(team).to.have.property('employee');
    });
  });
});

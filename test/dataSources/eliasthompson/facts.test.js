const { createSandbox } = require('sinon');
const { expect } = require('chai');

const { FactsDataSource } = require('../../../src/dataSources/eliasthompson/facts');

describe('DataSources: Elias Thompson: Facts', function () {
  const sandbox = createSandbox();
  const data = { id: 1 };
  const findOneSpy = sandbox.stub().resolves();
  const config = {
    models: {
      facts: {
        findOne: findOneSpy,
      },
    },
  };

  afterEach(function () {
    findOneSpy.resetHistory();
    sandbox.restore();
  });

  describe('getFact', function () {
    it('creates an RDR', async function () {
      const facts = new FactsDataSource(config);

      await facts.getFact(data);
      expect(findOneSpy).to.have.been.calledOnce;
    });
  });

  describe('getRandomFact', function () {
    it('creates an RDR', async function () {
      const facts = new FactsDataSource(config);

      await facts.getRandomFact(data);
      expect(findOneSpy).to.have.been.calledOnce;
    });
  });
});

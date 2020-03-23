const { createSandbox } = require('sinon');
const { expect } = require('chai');

const models = require('../../../src/models');

describe('Models: Elias Thompson: Initialization', function () {
  const sandbox = createSandbox();

  afterEach(function () {
    sandbox.restore();
  });

  it('exits process on initialization failure', async function () {
    const authenticateSpy = sandbox.stub().rejects('error');
    const importSpy = sandbox.stub().returns();
    const consoleSpy = sandbox.stub(console, 'error').returns();
    const processSpy = sandbox.stub(process, 'exit').throws();
    const mockSequelize = class {
      constructor() {
        this.authenticate = authenticateSpy;
        this.import = importSpy;
      }
    };

    await expect(models.eliasthompson.initialize(mockSequelize)).to.be.rejected;
    expect(authenticateSpy).to.have.been.calledOnce;
    expect(consoleSpy).to.have.been.calledOnce;
    expect(processSpy).to.have.been.calledOnce;
  });
});

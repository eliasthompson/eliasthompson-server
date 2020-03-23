require('dotenv').config();

const SequelizeMock = require('sequelize-mock');
const _ = require('lodash');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const sinonChai = require('sinon-chai');

const dbs = require('../src/models');

before(async function () {
  chai.should();
  chai.use(chaiAsPromised);
  chai.use(sinonChai);

  const mockSequelize = class extends SequelizeMock {
    constructor() {
      super();

      this.import = () => {};
    }
  };

  await Promise.all(_.map(dbs, db => db.initialize(mockSequelize)));
});

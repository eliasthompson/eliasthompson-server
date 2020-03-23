const { BIGINT } = require('sequelize');
const { expect } = require('chai');

const { formatSchema } = require('../../../src/models/helpers');

describe('Models: Helpers: formatSchema', function () {
  it('populates id', function () {
    expect(formatSchema({})).to.eql({
      id: {
        type: BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
    });
  });
});

const { FactsDataSource } = require('./facts');
const { eliasthompson: models } = require('../../models');

module.exports = {
  facts: new FactsDataSource({ models }),
};

const { merge } = require('lodash');

const date = require('./date');
const facts = require('./facts');

module.exports = merge(
  date,
  facts,
);

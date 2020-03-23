const _ = require('lodash');
const { TEXT } = require('sequelize');

const { formatSchema } = require('../helpers');

const schema = {
  fact: { allowNull: false, type: TEXT },
};

exports.schema = schema;
exports.default = sequelize => sequelize.define(_.snakeCase('facts'), formatSchema(schema));

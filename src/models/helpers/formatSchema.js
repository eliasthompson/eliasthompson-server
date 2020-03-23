const { BIGINT } = require('sequelize');

/**
 * Defines standardized sequelize model
 * @param {Object} schema - Model Schema
 * @returns {Object}
 */
exports.formatSchema = schema => ({
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: BIGINT,
  },
  ...schema,
});

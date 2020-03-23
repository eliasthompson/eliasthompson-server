const { DataSource } = require('apollo-datasource');
const { literal } = require('sequelize');

/** Elias Thompson Facts Data Source */
exports.FactsDataSource = class extends DataSource {
  /**
   * Constructs class
   * @param {Object} options
   */
  constructor({ models }) {
    super();

    /** The Sequelize Model */
    this.models = models;
  }

  /**
   * Get Fact
   * @returns {Promise<Object>}
   */
  getFact({ where }) {
    return this.models.facts.findOne({ where });
  }

  /**
   * Get Random Fact
   * @returns {Promise<Object>}
   */
  getRandomFact() {
    return this.models.facts.findOne({ order: literal('RANDOM()') });
  }
};

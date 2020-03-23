/** The Elias Thompson Models */
const models = {};

models.initialize = async (Sequelize) => {
  models.sequelize = new Sequelize({
    database: process.env.DB_DATABASE,
    define: {
      freezeTableName: true,
      timestamps: true,
      underscored: true,
    },
    dialect: 'postgres',
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    schema: process.env.DB_SCHEMA,
    username: process.env.DB_USERNAME,
  });

  try {
    await models.sequelize.authenticate({ logging: false });
  } catch (error) {
    console.error(error); // eslint-disable-line no-console
    process.exit(1);
  }

  models.facts = models.sequelize.import('./facts');
};

module.exports = models;

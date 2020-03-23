require('dotenv').config();

const Sequelize = require('sequelize');
const _ = require('lodash');
const { ApolloServer } = require('apollo-server');

const dataSources = require('./dataSources');
const dbs = require('./models');
const resolvers = require('./resolvers');
const typeDefs = require('./typeDefs');

(async () => {
  await Promise.all(_.map(dbs, db => db.initialize(Sequelize)));

  const server = new ApolloServer({ dataSources, resolvers, typeDefs });
  const { url } = await server.listen();

  console.info(`🚀 Server is listening at ${url}`); // eslint-disable-line no-console
})();

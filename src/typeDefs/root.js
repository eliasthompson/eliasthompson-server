const { gql } = require('apollo-server');

module.exports = gql`
  scalar Date

  type Query {
    root: String
  }

  type Mutation {
    root: String
  }

  type Subscription {
    root: String
  }
`;

const { gql } = require('apollo-server');

module.exports = gql`
  type Fact {
    id: Int
    fact: String
    createdAt: Date
    updatedAt: Date
  }

  input GetFactInput {
    id: Int!
  }

  extend type Query {
    getFact(input: GetFactInput): Fact
    getRandomFact: Fact
  }
`;

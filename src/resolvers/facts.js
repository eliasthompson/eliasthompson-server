module.exports = {
  Query: {
    getFact: async (parent, { input }, { dataSources }) => (
      dataSources.eliasthompson.facts.getFact(input)
    ),
    getRandomFact: async (parent, variables, { dataSources }) => (
      dataSources.eliasthompson.facts.getRandomFact()
    ),
  },
};

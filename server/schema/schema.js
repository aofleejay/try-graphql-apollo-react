const { GraphQLSchema } = require('graphql')
const rootQuery = require('./rootQuery')
const rootMutation = require('./rootMutation')

module.exports = new GraphQLSchema({
  query: rootQuery,
  mutation: rootMutation,
})

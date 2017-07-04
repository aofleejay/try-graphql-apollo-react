const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema
} = require('graphql')

const wrestlers = [
  { id: '1', name: 'John Cena', age: 40 },
  { id: '2', name: 'Kenny Omega', age: 33 },
]

const WrestlerType = new GraphQLObjectType({
  name: 'Wrestler',
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
  },
})

const RootSchema = new GraphQLObjectType({
  name: 'RootSchema',
  fields: {
    wrestler: {
      type: WrestlerType,
      args: { id: { type: GraphQLString } },
      resolve(parentValue, args) {
        return wrestlers.find(wrestler => wrestler.id === args.id)
      },
    },
  },
})

module.exports = new GraphQLSchema({
  query: RootSchema,
})

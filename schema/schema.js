const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema
} = require('graphql')
const axios = require('axios')

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
        return axios.get(`http://localhost:3000/wrestlers/${args.id}`)
          .then(res => res.data)
      },
    },
  },
})

module.exports = new GraphQLSchema({
  query: RootSchema,
})

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull
} = require('graphql')
const axios = require('axios')
const WrestlerType = require('./WrestlerType')

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addWrestler: {
      type: WrestlerType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        age: { type: new GraphQLNonNull(GraphQLInt) },
        companyId: { type: GraphQLString },
      },
      resolve(parentValue, { name, age, companyId }) {
        return axios.post('http://localhost:3000/wrestlers', { name, age, companyId })
          .then(res => res.data)
      },
    },
    deleteWrestler: {
      type: WrestlerType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parentValue, { id }) {
        return axios.delete(`http://localhost:3000/wrestlers/${id}`)
          .then(res => res.data)
      },
    },
  },
})

module.exports = mutation

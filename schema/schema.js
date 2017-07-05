const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull
} = require('graphql')
const axios = require('axios')

const CompanyType = new GraphQLObjectType({
  name: 'Company',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    country: { type: GraphQLString },
    wrestler: {
      type: new GraphQLList(WrestlerType),
      resolve(parentValue, args) {
        return axios.get(`http://localhost:3000/companies/${parentValue.id}/wrestlers`)
          .then(res => res.data)
      },
    },
  }),
})

const WrestlerType = new GraphQLObjectType({
  name: 'Wrestler',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    company: {
      type: CompanyType,
      resolve(parentValue, args) {
        return axios.get(`http://localhost:3000/companies/${parentValue.companyId}`)
          .then(res => res.data)
      },
    },
  }),
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
    company: {
      type: CompanyType,
      args: { id: { type: GraphQLString } },
      resolve(parentValue, args) {
        return axios.get(`http://localhost:3000/companies/${args.id}`)
          .then(res => res.data)
      },
    },
  },
})

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
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootSchema,
  mutation,
})

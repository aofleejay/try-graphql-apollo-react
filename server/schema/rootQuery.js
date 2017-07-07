const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
} = require('graphql')
const axios = require('axios')
const WrestlerType = require('./WrestlerType')
const CompanyType = require('./CompanyType')

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    wrestlers: {
      type: new GraphQLList(WrestlerType),
      resolve(parentValue, args) {
        return axios.get('http://localhost:3000/wrestlers')
          .then(res => res.data)
      },
    },
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

module.exports = RootQuery

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
} = require('graphql')
const axios = require('axios')
const WrestlerType = require('./WrestlerType')

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

module.exports = CompanyType

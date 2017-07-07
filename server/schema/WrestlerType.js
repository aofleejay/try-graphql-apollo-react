const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
} = require('graphql')
const axios = require('axios')

const WrestlerType = new GraphQLObjectType({
  name: 'Wrestler',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    twitter: { type: GraphQLString }, 
    // company: {
    //   type: CompanyType,
    //   resolve(parentValue, args) {
    //     return axios.get(`http://localhost:3000/companies/${parentValue.companyId}`)
    //       .then(res => res.data)
    //   },
    // },
  }),
})

module.exports = WrestlerType

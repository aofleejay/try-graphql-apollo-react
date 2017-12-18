const { makeExecutableSchema } = require('graphql-tools')
const axios = require('axios')

const typeDefs = [`
  schema {
    query: Query
  }

  type Query {
    photos: [Photo]
  }

  type Photo {
    id: String!
    url: String
    credit: User
  }

  type User {
    id: String!
    name: String
  }
`]

const resolvers = {
  Query: {
    photos() {
      return axios.get('http://localhost:3000/photos')
        .then(response => response.data)
    },
  },
  Photo: {
    credit({ credit }, _, context) {
      const { userLoader } = context.loaders
      return userLoader.load(credit)
    },
  },
}

const schema = makeExecutableSchema({ typeDefs, resolvers })

module.exports = schema

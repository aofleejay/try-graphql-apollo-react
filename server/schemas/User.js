const { makeExecutableSchema } = require('graphql-tools')
const axios = require('axios')

const typeDefs = [`
  schema {
    query: Query
  }

  type Query {
    users: [User]
  }

  type User {
    id: String!
    name: String
    photos: [Photo]
    posts: [Post]
  }

  type Photo {
    id: String!
    url: String
    credit: User
  }

  type Post {
    id: String!
    content: String
  }
`]

const resolvers = {
  Query: {
    users() {
      return axios.get('http://localhost:3000/users')
        .then(response => response.data)
    },
  },
  User: {
    photos({ id }) {
      return axios.get(`http://localhost:3000/photos?userId=${id}`)
        .then(response => response.data)
    },
    posts({ id }) {
      return axios.get(`http://localhost:3000/posts?userId=${id}`)
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

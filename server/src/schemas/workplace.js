import { makeExecutableSchema, gql } from 'apollo-server-express'
import workplace from '../models/workplace'

const typeDefs = gql`
  schema {
    query: Query
    mutation: Mutation
  }

  type Query {
    workplaces: [Workplace]
    workplace(id: String): Workplace
  }

  type Mutation {
    createWorkplace(input: createWorkplaceInput): Workplace
  }

  input createWorkplaceInput {
    name: String
    description: String
    coverImage: String
  }

  type Workplace @cacheControl(maxAge: 360) {
    id: String
    name: String
    description: String
    coverImage: String
  }
`

const resolvers = {
  Query: {
    workplaces: () => workplace.find(),
    workplace: (root, { id }) => workplace.findById(id),
  },
  Mutation: {
    createWorkplace: (root, args) => workplace.create(args.input),
  },
}

const rootSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

export default rootSchema

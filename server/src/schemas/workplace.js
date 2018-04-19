import { makeExecutableSchema } from 'graphql-tools';
import workplace from '../models/workplace';

const typeDefs = [`
  schema {
    query: Query
    mutation: Mutation
  }

  type Query {
    workplaces: [Workplace]
  }

  type Mutation {
    createWorkplace(input: createWorkplaceInput): Workplace
  }

  input createWorkplaceInput {
    name: String,
    description: String,
  }

  type Workplace {
    name: String
    description: String
  }
`];

const resolvers = {
  Query: {
    workplaces: () => workplace.find(),
  },
  Mutation: {
    createWorkplace: (root, args) => workplace.create(args.input),
  },
};

const rootSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export default rootSchema;

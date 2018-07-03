import express from 'express';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import { ApolloEngine } from 'apollo-engine';
import schema from './schemas';
import {
  DB_HOST,
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
  NODE_PORT,
  APOLLO_ENGINE_API_KEY,
} from './config';

const uri = DB_HOST;
const options = {
  dbName: DB_NAME,
  auth: {
    user: DB_USER,
    password: DB_PASSWORD,
  },
};

mongoose.connect(uri, options).then(
  () => console.log('Connected to database.'),
  err => console.error('Failed to connect database', err),
);

const app = express();

app.use(cors());
app.use('/graphql', bodyParser.json(), graphqlExpress({
  schema,
  tracing: true,
  cacheControl: {
    defaultMaxAge: 3600,
  },
}));
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

const engine = new ApolloEngine({
  apiKey: APOLLO_ENGINE_API_KEY,
});

engine.listen({
  port: NODE_PORT,
  expressApp: app,
}, () => {
  console.log(`http://localhost:${NODE_PORT}/graphiql`);
});

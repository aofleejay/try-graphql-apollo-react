import express from 'express';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import schema from './schemas';
import { DB_HOST, DB_NAME, DB_USER, DB_PASSWORD, NODE_PORT } from './config';

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

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));
app.listen(NODE_PORT, () => {
  console.log(`Go to http://localhost:${NODE_PORT}/graphiql to run queries!`);
});

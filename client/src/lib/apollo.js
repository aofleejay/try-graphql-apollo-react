import ApolloClient from 'apollo-boost';
import { SERVICE_ENDPOINT } from '../config';

const client = new ApolloClient({
  uri: SERVICE_ENDPOINT,
});

export { client };

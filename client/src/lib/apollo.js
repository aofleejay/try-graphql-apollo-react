import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { SERVICE_ENDPOINT } from '../config'

const client = new ApolloClient({
  link: new HttpLink({ uri: SERVICE_ENDPOINT }),
  cache: new InMemoryCache(),
})

export { client }

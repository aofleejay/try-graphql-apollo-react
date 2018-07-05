import { createPersistedQueryLink } from 'apollo-link-persisted-queries'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { createHttpLink } from 'apollo-link-http'
import { SERVICE_ENDPOINT } from '../config'

const link = createPersistedQueryLink().concat(createHttpLink({ uri: SERVICE_ENDPOINT }))
const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
})

export { client }

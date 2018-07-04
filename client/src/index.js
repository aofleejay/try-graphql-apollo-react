import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import Routes from './Routes'
import { client } from './lib/apollo'

ReactDOM.render(
  <ApolloProvider client={client}>
    <Routes />
  </ApolloProvider>
  , document.getElementById('root'),
)

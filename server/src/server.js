import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { ApolloEngine } from 'apollo-engine'
import cors from 'cors'
import compression from 'compression'
import mongoose from 'mongoose'
import { express as voyagerMiddleware } from 'graphql-voyager/middleware'
import schema from './schemas'
import {
  DB_HOST,
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
  NODE_PORT,
  APOLLO_ENGINE_API_KEY,
} from './config'

const uri = DB_HOST
const options = {
  dbName: DB_NAME,
  auth: {
    user: DB_USER,
    password: DB_PASSWORD,
  },
}

mongoose.connect(uri, options).then(
  () => console.log('Connected to database.'),
  err => console.error('Failed to connect database', err),
)

const app = express()
app.use(compression())
app.use(cors())
app.use('/voyager', voyagerMiddleware({ endpointUrl: '/graphql' }))

const server = new ApolloServer({
  schema,
  tracing: true,
  cacheControl: true,
  engine: false,
})
server.applyMiddleware({ app })

const engine = new ApolloEngine({
  apiKey: APOLLO_ENGINE_API_KEY,
  frontends: [{
    overrideGraphqlResponseHeaders: {
      'Access-Control-Allow-Origin': '*',
    },
  }],
})

engine.listen({
  port: NODE_PORT,
  expressApp: app,
}, () => {
  console.log(`🚀 Server ready at http://localhost:${NODE_PORT}/graphql`)
})

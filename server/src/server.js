import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import compression from 'compression'
import cors from 'cors'
import { express as voyagerMiddleware } from 'graphql-voyager/middleware'
import mongoose from 'mongoose'
import { ApolloEngine } from 'apollo-engine'
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

const server = new ApolloServer({ schema })
server.applyMiddleware({ app })

app.use('/voyager', voyagerMiddleware({ endpointUrl: '/graphql' }))

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
})

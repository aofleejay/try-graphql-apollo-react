const express = require('express')
const bodyParser = require('body-parser')
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express')
const cors = require('cors')
const schema = require('./schemas/Root')
const loaders = require('./loaders')

const app = express()
app.use(cors())

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema, context: { loaders } }))
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))
app.listen(4000, () => console.log('Now browse to localhost:4000/graphiql'))

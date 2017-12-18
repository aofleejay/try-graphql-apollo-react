const express = require('express')
const bodyParser = require('body-parser')
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express')
const cors = require('cors')
const DataLoader = require('dataloader')
const schema = require('./schemas/Root')
const { fetchUsersById } = require('./apis/user')

const app = express()
app.use(cors())

const userLoader = new DataLoader(ids => Promise.all(ids.map(fetchUsersById)))
const loaders = {
  userLoader,
}

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema, context: { loaders } }))
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))
app.listen(4000, () => console.log('Now browse to localhost:4000/graphiql'))

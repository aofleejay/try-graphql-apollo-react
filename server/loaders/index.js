const DataLoader = require('dataloader')
const { fetchUserById } = require('../apis/user')

const userLoader = new DataLoader(ids => Promise.all(ids.map(fetchUserById)))

const loaders = {
  userLoader,
}

module.exports = loaders

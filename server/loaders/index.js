const DataLoader = require('dataloader')
const { fetchUsersById } = require('../apis/user')

const userLoader = new DataLoader(ids => Promise.all(ids.map(fetchUsersById)))

const loaders = {
  userLoader,
}

module.exports = loaders

const axios = require('axios')

exports.fetchUsersById = id => axios.get(`http://localhost:3000/users/${id}`)
  .then(response => response.data)

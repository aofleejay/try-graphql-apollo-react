const axios = require('axios')

exports.fetchUserById = id => axios.get(`http://localhost:3000/users/${id}`)
  .then(response => response.data)

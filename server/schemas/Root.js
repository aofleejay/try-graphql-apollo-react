const { mergeSchemas } = require('graphql-tools')
const UserSchema = require('./User')
const PhotoSchema = require('./Photo')

module.exports = mergeSchemas({
  schemas: [UserSchema, PhotoSchema],
})

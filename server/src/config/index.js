require('dotenv').config()

const {
  DB_HOST,
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
  NODE_PORT,
  APOLLO_ENGINE_API_KEY,
} = process.env

export {
  DB_HOST,
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
  NODE_PORT,
  APOLLO_ENGINE_API_KEY,
}

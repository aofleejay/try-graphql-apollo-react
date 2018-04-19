require('dotenv').config();

const {
  DB_HOST, DB_NAME, DB_USER, DB_PASSWORD, NODE_PORT,
} = process.env;

export { DB_HOST, DB_NAME, DB_USER, DB_PASSWORD, NODE_PORT };

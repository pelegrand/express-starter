require('dotenv').config();

const getEnv = (variable) => {
  const value = process.env[variable];
  return value;
};

const SERVER_PORT = getEnv('SERVER_PORT');
const SECRET = getEnv('SECRET');
const URL_CLIENT = getEnv('URL_CLIENT');
const DATABASE_URL = getEnv('DATABASE_URL');

module.exports = {
  SERVER_PORT,
  SECRET,
  URL_CLIENT,
  DATABASE_URL
};
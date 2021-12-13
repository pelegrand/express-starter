const express = require('express');
const cors = require('cors');
const { SERVER_PORT, URL_CLIENT, DATABASE_URL } = require('./env');
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require('./swagger.json');

const handleRecordNotFoundError = require('./middlewares/handleRecordNotFoundError');
const handleUnauthorizedError = require('./middlewares/handleUnauthorizedError');
const handleUserAlreadyExistError = require('./middlewares/handleUserAlreadyExistError');
const handleBadRequestError = require('./middlewares/handleBadRequestError');
const handleNoContentError = require('./middlewares/handleNoContentError');

const logger = require('./winston/logger.winston');

const app = express();

app.use(
  '/api-docs',
  swaggerUi.serve, 
  swaggerUi.setup(swaggerDocument)
  );

app.use(cors(URL_CLIENT));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// require('./routes')(app);

app.use(handleUnauthorizedError);
app.use(handleUserAlreadyExistError);
app.use(handleBadRequestError);
app.use(handleNoContentError);
app.use(handleRecordNotFoundError);

const server = app.listen(SERVER_PORT, () => {
  logger.info(`Server is listening on : ${SERVER_PORT}`);
});

process.on('unhandledRejection', (error) => {
  console.error('unhandledRejection', JSON.stringify(error), error.stack);
  process.exit(1);
});

process.on('uncaughtException', (error) => {
  console.error('uncaughtException', JSON.stringify(error), error.stack);
  process.exit(1);
});

process.on('beforeExit', () => {
  app.close((error) => {
    if (error) console.error(JSON.stringify(error), error.stack);
  });
});

module.exports = server;
const { UnauthorizedError } = require('../error-types');
const logger = require('../winston/logger.winston');

module.exports = (err, req, res, next) => {
  if (err instanceof UnauthorizedError) {
    logger.error(err.message)
    return res.status(401).send(err.message);
  }
  return next(err);
};


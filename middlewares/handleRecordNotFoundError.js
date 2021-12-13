const { RecordNotFoundError } = require('../error-types');
const logger = require('../winston/logger.winston');

module.exports = (err, req, res, next) => {
  if (err instanceof RecordNotFoundError) {
    logger.error(err.message)
    return res.status(404).send(err.message);
  }
  return next(err);
};


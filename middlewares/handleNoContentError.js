const { BadRequestError } = require('../error-types');
const logger = require('../winston/logger.winston');

module.exports = (err, req, res, next) => {
  if (err instanceof BadRequestError) {
    logger.error(err.message)
    return res.status(400).send(err.message);
  }
  return next(err);
};


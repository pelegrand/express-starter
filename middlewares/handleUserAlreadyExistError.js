const { UserAlreadyExistError } = require('../error-types');
const logger = require('../winston/logger.winston');

module.exports = (err, req, res, next) => {
  if (err instanceof UserAlreadyExistError) {
    logger.error(err.message)
    return res.status(409).send(err.message);
  }
  return next(err);
};


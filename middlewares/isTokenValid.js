const jwt = require('jsonwebtoken');
const { SECRET } = require('../env');
const { UnauthorizedError } = require('../error-types');

const isTokenValid = (req, res, next) => {
  if (!req.headers.authorization) {
    throw new UnauthorizedError();
  } else {
    const token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, SECRET, (err) => {
      if (err) {
        throw new UnauthorizedError();
      } else {
        next();
      }
    });
  }
};

module.exports = isTokenValid;
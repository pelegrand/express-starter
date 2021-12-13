const winston = require('winston');

const logger = winston.createLogger({
  level: 'debug',
  format: winston.format.json(),
  defaultMeta: { service: 'mon api' },
  transports: [
    new winston.transports.File({ filename: 'winston/logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'winston/logs/combined.log' }),
  ],
});

module.exports = logger
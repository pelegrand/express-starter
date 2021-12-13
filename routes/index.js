const firstRoute = require('./firstRoute');

module.exports = (app) => {
  app.use('/firstroute', firstRoute);
};

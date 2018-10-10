const userRoutes = require('./userRoutes');

module.exports = function(app) {
  userRoutes(app);
};

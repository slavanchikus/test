const user = require('../controllers/userController');

module.exports = function(app) {
  app.post('/api/user', user.create);

  app.get('/api/user/:id', user.findById);
};

const user = require('../controllers/userController');

module.exports = function(app) {
  app.get('/api/user/:id', user.findById);

  app.post('/api/user', user.create);

  app.post('/api/user/update', user.update);
};

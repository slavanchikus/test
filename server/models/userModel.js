module.exports = (sequelize, Sequelize) => sequelize.define('user', {
  id: {
    type: Sequelize.NUMBER
  },
  shared: {
    type: Sequelize.BOOL
  },
  email: {
    type: Sequelize.STRING
  }
});

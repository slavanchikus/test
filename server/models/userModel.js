module.exports = (sequelize, Sequelize) => sequelize.define('user', {
  id: {
    type: Sequelize.BIGINT,
    primaryKey: true
  },
  shared: {
    type: Sequelize.BOOLEAN
  },
  email: {
    type: Sequelize.STRING
  }
}, {
  timestamps: false
});

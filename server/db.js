const Sequelize = require('sequelize');

const sequelize = new Sequelize('postgres://eggrgvib:H5xqLV7wV2CpfaPGuREvPE-N73uSlsGh@dumbo.db.elephantsql.com:5432/eggrgvib');

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require('./models/userModel')(sequelize, Sequelize);

module.exports = db;

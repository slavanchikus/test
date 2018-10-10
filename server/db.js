const Sequelize = require('sequelize');

const sequelize = new Sequelize('postgres://eggrgvib:H5xqLV7wV2CpfaPGuREvPE-N73uSlsGh@dumbo.db.elephantsql.com:5432/eggrgvib', {
  username: 'eggrgvib',
  password: 'H5xqLV7wV2CpfaPGuREvPE-N73uSlsGh',
  dialect: 'postgres',
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.customers = require('../model/customer.model.js')(sequelize, Sequelize);

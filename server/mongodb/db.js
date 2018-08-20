const mongoose = require('mongoose');
const config = require('../config');

mongoose.connect(config.dburl, {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', () => {
  console.log('DB connection error');
  mongoose.disconnect();
});

db.once('open', () => {
  console.log('Mongodb open on : ' + config.dburl)
});

db.on('close', () => {
  console.log('Mongodb is disconnected. reconnecting...');
  mongoose.connect(config.dburl, {useNewUrlParser: true, server: {auto_reconnect: true}})
});

module.exports = db;

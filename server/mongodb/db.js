const mongoose = require('mongoose');
const config = require('../config');

mongoose.connect(config.dburl, {useNewUrlParser: true, autoIndex: false});

const db = mongoose.connection;
db.on('error', () => {
  console.error('DB connection error. Did you start DBServer?');
  mongoose.disconnect();
  process.exit(1);
});

db.once('open', () => {
  console.log('Mongodb open on : ' + config.dburl)
});

db.on('close', () => {
  console.log('Mongodb is disconnected. reconnecting...');
  mongoose.connect(config.dburl, {useNewUrlParser: true, server: {auto_reconnect: true}})
});

module.exports = db;

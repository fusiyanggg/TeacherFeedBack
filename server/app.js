const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const setRouter = require('./routes');
const db = require('./mongodb/db');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.all('*', (req, res, next) => {
  //open XHR
  res.header("Access-Control-Allow-Origin", req.headers.origin || '*');
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Credentials", true); //可以带cookies
  res.header("X-Powered-By", '3.2.1');
  if (req.method == 'OPTIONS') {
    res.send(200);
  } else {
    next();
  }
});

app.get('/', function (req, res) {
  res.end('hello')
});

setRouter(app);

app.listen(config.PORT, () => {
  console.log('server start on : ' + config.PORT)
});

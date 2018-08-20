let User = require('./user');
let grades = require('./grades');

module.exports = app => {
  app.use('/user', User);
  app.use('/grades', grades)
};

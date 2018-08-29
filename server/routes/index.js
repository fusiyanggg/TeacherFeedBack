const User = require('./user');
const grades = require('./grades');
const lessons = require('./lessons');

module.exports = app => {
  app.use('/user', User);
  app.use('/grades', grades);
  app.use('/lessons',lessons);
};

let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let user = new Schema({
  user_name: String,
  password: String,
  id: Number,
  create_time: {type: Date, default: Date.now},
  // admin: {type: String, default: '管理员'},
  status: Number,  //1:普通管理、 2:超级管理员
  avatar: {type: String, default: 'default.jpg'},
  test: {
    type: String,
    index: true,
    unique: true
  }
});

let User = mongoose.model('user', user);

module.exports = User;

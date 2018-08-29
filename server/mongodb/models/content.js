const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Content = new Schema({
  grade: String,
  lesson: String,
  level: String,
  _index: Number,


});

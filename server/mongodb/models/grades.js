const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const grades = new Schema({
  id: Number,
  grade_name: String,
  create_time: {type: Date, default: Date.now},
  _index: {type: Number},
  lessions: {
    lession_name: String,
    _index: Number,
    create_time: {type: Date},
    creator: String
  }
});

const gradesModel = mongoose.model('grades', grades);
module.exports = gradesModel;

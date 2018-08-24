const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const grades = new Schema({
  id: Number,
  grade_name: String,
  create_time: {type: Date, default: Date.now},
  _index: {type: Number},
  lessons: [
    {
      lesson_name: {type: String, index: true},
      create_time: {type: Date, default: Date.now},
      creator: String
    }
  ]
});

grades.index({id: 1}); //添加索引

const gradesModel = mongoose.model('grades', grades);
module.exports = gradesModel;

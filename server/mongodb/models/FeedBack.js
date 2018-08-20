const mongoose = require('mongoose');

const Scamma = mongoose.Schema;

const TeachList = new Scamma({
  grade: String,
  _index: Number,
  lessons: [{
    lesson: Number,
    level: [{
      lv: String,
      feedback: [{
        create_time: {type: Date, default: Date.now},
        title: String,
        content: [{body: String}]
      }]
    }]
  }]
});


const DataModel = mongoose.model('FeedBackData', TeachList);


module.exports = DataModel;


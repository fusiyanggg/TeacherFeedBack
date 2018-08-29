const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const lessonSchema = new Schema({
  grade: String,
  lesson: String,
  level: String,
  creator: String,
  create_time: {type: Date, default: Date.now},
  feedBacks: [
    {
      create_time: {type: Date, default: Date.now},
      creator: String,
      title: String,
      _index: Number,
      content: [
        {
          title: String,
          img: String,
          description: String
        }
      ]
    }
  ]
}, {timeStamps: {createdAt: 'created', updatedAd: 'updated'}});

lessonSchema.index({grade: 1});

const lessons = mongoose.model('lessons', lessonSchema);

module.exports = lessons;

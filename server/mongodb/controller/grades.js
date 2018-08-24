const gradesModel = require('../models/grades');
const assert = require('assert')

class Grades {
  constructor() {
  }

  async createGrades(req, res, next) {

    const {grade_name, lesson_name} = req.body;

    if (grade_name && lesson_name) {
      let insertData = {
        grade_name, lesson_name, creator: 'default'
      };

      gradesModel.findOne({grade_name}, function (err, doc) {
        if (err) console.log(err);
        if (doc) {
          let ary = doc.get('lessons')
          let les = ary.find(v => v.lesson_name == lesson_name);
          if (!les) {
            ary.push({lesson_name, creator: 'default'});
            doc.save();
            res.json({
              status: 200,
              message: 'ok',
              data: doc
            })
          } else {
            res.json({
              status: 400,
              message: 'grades and lesson is already exits'
            })
          }
        } else {
          gradesModel.create({grade_name, lessons: [{lesson_name, creator: 'default'}]}, function (err, doc) {
            res.json({
              status: 200,
              message: 'ok',
              data: doc
            })
          })
        }

      });
      //检测是否存在组
      // gradesModel.update({grade_name}, {
      //   $push: {
      //     "lessons": {
      //       lesson_name: lessons,
      //       creator: 'fsy'
      //     }
      //   }
      // }, function (err) {
      //   if (err) console.log(err)
      //
      //
      // })

      // gradesModel.create({grade_name, lessons: {lesson_name: lessons}}).then(data => {
      //   res.json({status: 200, text: 'ok', data})
      // })
    } else {
      res.json({
        status: 400,
        message: 'parameter error'
      })
    }

  }

  getAllGrades(req, res, next) {
    gradesModel.find({}, function (err, docs) {
      if (err) console.log(err);
      res.json({
        status: 200,
        message: 'ok',
        data: docs
      })
    })
  }
}


module.exports = new Grades();

const gradesModel = require('../models/grades');
const assert = require('assert')

class Grades {
  constructor() {
  }

  async createGrades(req, res, next) {

    const {grade_name, lession_name} = req.body;

    var query = gradesModel.findOne({grade_name});
    assert.ok(!(query instanceof Promise))

    query.then(function (doc) {
      console.log(typeof doc,111);
    })

    var promise = query.exec();
    promise.then(function (doc) {
      console.log(typeof doc,222);
    })

    // if (grade_name && lession_name) {
    //   //检测是否存在组
    //   gradesModel.update({grade_name}, {
    //     $push: {
    //       "lessions": {
    //         lession_name: lessions,
    //         creator: 'fsy'
    //       }
    //     }
    //   }, function (err) {
    //     if (err) console.log(err)
    //
    //
    //   })
    //
    //   // gradesModel.create({grade_name, lessions: {lesson_name: lessions}}).then(data => {
    //   //   res.json({status: 200, text: 'ok', data})
    //   // })
    // }


    // res.json(req.body)
    // if (grade_name && lessions) {
    //   gradesModel.create({grade_name}).then(data => {
    //     res.json(data)
    //   })
    // }
  }

  getAllGrades(req, res, next) {
    gradesModel.find({}).then(data => {
      res.json(data)
    }, (err) => {
      console.log(err);
    })
  }
}


module.exports = new Grades();

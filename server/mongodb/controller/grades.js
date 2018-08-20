const gradesModel = require('../models/grades');


class Grades {
  constructor() {
  }

  createGrades(req, res, next) {
    const {grade_name, lessions} = req.body;
    console.log(req.body);
    // console.log(req);
    res.json(req.body)
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

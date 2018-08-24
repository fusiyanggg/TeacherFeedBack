const db = require('../db');
const gradesModel = require('../models/grades');

// gradesModel.find({lessions: {lessions_name: {$gt: 26}}}, function (err, data) {
//   console.log(err);
//   console.log(data);
// });
// gradesModel.find({grade_name: 'summer'}, function (err, doc) {
//   let document = doc[0];
//   document._index = 1;
//   document.save(function(err,data){
//     console.log(data instanceof gradesModel);
//   })
// });
// gradesModel.find({grade_name:'summer'}).then(res=>{
//   console.log(res[0] instanceof gradesModel);
//   console.log(res[0]);
// })
//
// let promise = gradesModel.find({grade_name: 'summer'}).exec();
// promise.then(res => {
//   console.log(res[0] instanceof gradesModel); //true
// });


let grades = {
  grade_name: "atom",
  _index: 2,
  id: 1234124,
  lessions: [
    {
      lession_name: '1',
      creator: 'fsy'
    }
  ]
};
//
// gradesModel.create(grades,function(err,doc){
//   console.log(doc);
// });

gradesModel.findOne({grade_name: "summer"}, function (err, doc) {
  var ary = doc.get('lessions')

  var c = ary.find(v => v.lession_name == '29');
  if (!c){
    ary.push({lession_name:29})
    doc.save()
  }
});



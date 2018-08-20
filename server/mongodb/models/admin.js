const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema({
  user_name: String,
  password: String,
  id: Number,
  create_time: String,
  admin: {type: String, default: "administrator"},
  level: Number,//1:common admin ,2:super root
  avatar: {type: String, default: 'default.jpg'},
  city:{type:String,default:'sdf'}
});

adminSchema.index({id: 1}); //todo >>>???

const Admin = mongoose.model('Users', adminSchema);

module.exports = Admin;

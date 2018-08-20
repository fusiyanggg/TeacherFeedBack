const UserModel = require('../models/users');

class User {
  constructor() {

  }

  async login(req, res, next) {
    const {user_name, password} = req.body
    try {
      if (!user_name) {
        throw new Error('用户名不能为空')
      } else if (!password) {
        throw new Error('密码不能为空')
      }
    } catch (err) {
      console.log(err.message, err);
      res.send({
        status: 0,
        type: 'GET_ERROR_PARAM',
        message: err.message
      });
      return
    }

    const existsUser = await UserModel.findOne({user_name});
    if (!existsUser) { //用户不存在
      res.send({
        status: 0,
        type: 'USER_IS_NOT_EXISTS',
        message: '用户名不存在',
      })
    } else {
      if (password.toString() !== existsUser.password.toString()) {
        res.send({
          status: 0,
          message: '密码错误!'
        })
      } else {
        res.send({
          status: 1,
          message: '登陆成功!'
        })
      }
    }

  };

  async register(req, res, next) {
    const {user_name, password} = req.body
    try {
      if (!user_name) {
        throw new Error('用户名不能为空')
      } else if (!password) {
        throw new Error('密码不能为空')
      }
    } catch (err) {
      console.log(err.message, err);
      res.send({
        status: 0,
        type: 'GET_ERROR_PARAM',
        message: err.message
      });
      return
    }

    const existsUser = await UserModel.findOne({user_name});
    if (existsUser) { //用户已存在
      res.send({
        status: 0,
        type: 'USER_ALREADY_EXISTS',
        message: '用户名已存在',
      })
    } else {
      await UserModel.create({user_name, password})
      res.send({
        status: 1,
        message: '注册成功!'
      })
    }
  }
}

module.exports = new User();

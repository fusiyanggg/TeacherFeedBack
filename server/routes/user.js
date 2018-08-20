let express = require('express');
let User = require('../mongodb/controller/user');
let router = express.Router();

router.post('/login',User.login);
router.post('/register',User.register);

module.exports = router


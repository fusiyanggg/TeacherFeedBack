const Grades = require('../mongodb/controller/grades');
const express = require('express');

const router = express.Router();
router.post('/create', Grades.createGrades);
router.get('/all', Grades.getAllGrades);
module.exports = router;

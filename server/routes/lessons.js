const lesson = require('../mongodb/controller/lessons');
const express = require('express');
const router = express.Router();
router.get('/all', lesson.getAllLessons);
router.get('/cur', lesson.getCurrentLesson);
router.post('/add', lesson.addLesson);
router.post('/update',lesson.updateLesson);
module.exports = router;

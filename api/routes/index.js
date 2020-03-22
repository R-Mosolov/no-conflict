var express = require('express');
var router = express.Router();
var ctrlAnswers = require('../controllers/answers');

// LOCATIONS ROUTERS
router.get('/answers', ctrlAnswers.answersRead);

module.exports = router;

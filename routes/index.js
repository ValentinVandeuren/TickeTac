var express = require('express');
var router = express.Router();
let journeyModel = require('../models/journey');



/* GET login page. */
router.get('/', function (req, res, next) {
  res.render('index');
});

/* GET home page. */
router.get('/home', function (req, res, next) {
  res.render('homepage');
});


module.exports = router;
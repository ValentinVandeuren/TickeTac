var express = require('express');
var router = express.Router();
let journeyModel = require('../models/journey');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

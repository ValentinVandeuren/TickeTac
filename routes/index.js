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

router.post('/notrain', function (req, res, next) {
  res.render('noTrain');
});

router.post('/journey-list', function (req, res, next) {
  res.render('journeyList');
});

router.get('/basket', function (req, res, next) {
  res.render('basket');
});

router.get('/lastTrips', function (req, res, next) {
  res.render('lastTrip');
});

module.exports = router;
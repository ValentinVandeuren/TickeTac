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

router.post('/journey-list', async function (req, res, next) {

  var destinationForm = req.body.destination;
  var arrivalForm = req.body.arrival;
  var dateForm = req.body.date;
  var journeyList = await journeyModel.find({
    departure: destinationForm
  });
  var newDate = new Date(dateForm);


  for (var i = 0; i < journeyList.length; i++) {
    if (journeyList[i].arrival == arrivalForm && journeyList[i].date.getDate() == newDate.getDate()) {
      res.render('journeyList');
      break;
    } else {
      res.redirect('/notrain')
      break;
    }
  }
});

router.get('/basket', function (req, res, next) {
  res.render('basket');
});

router.get('/lastTrips', function (req, res, next) {
  res.render('lastTrip');
});

module.exports = router;
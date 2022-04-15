var express = require('express');
var router = express.Router();
let journeyModel = require('../models/journey');

/* GET login page. */
router.get('/', function (req, res, next) {
  res.render('index');
});

/* GET home page. */
router.get('/home', function (req, res, next) {
  if(req.session.user == null){
    res.redirect('/')
  } else {
    res.render('homepage');
  }
});

router.get('/notrain', function (req, res, next) {
  if(req.session.user == null){
    res.redirect('/')
  } else {
    res.render('noTrain');
  }
});

router.post('/journey-list', async function (req, res, next) {

  var destinationForm = req.body.destination;
  var arrivalForm = req.body.arrival;
  var dateForm = req.body.date;
  var journeyList = await journeyModel.find({
    departure: destinationForm
  });
  var newDate = new Date(dateForm);
  let dayOfDate = newDate.getDate();
  let MonthOfDate = newDate.getMonth();
  let dateMonthDay = `${dayOfDate} / ${MonthOfDate +1}`;
  let listOfJourney = []


  for (var i = 0; i < journeyList.length; i++) {
    if (journeyList[i].arrival == arrivalForm && journeyList[i].date.getDate() == newDate.getDate()) {
      listOfJourney.push(journeyList[i])
    }
  }

  res.render('journeyList', { listOfJourney, dateMonthDay })
});

router.get('/basket', function (req, res, next) {
  if(req.session.user == null){
    res.redirect('/')
  } else {
    res.render('basket');
  }
});

router.get('/lastTrips', function (req, res, next) {
  if(req.session.user == null){
    res.redirect('/')
  } else {
    res.render('lastTrip');
  }
});

module.exports = router;
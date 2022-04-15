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
  let yearOfDate = newDate.getFullYear();
  let dateMonthDay = `${dayOfDate}/${MonthOfDate +1}`;
  let fullDate = `${dayOfDate}/${MonthOfDate +1}/${yearOfDate}`;
  let listOfJourney = []


  for (var i = 0; i < journeyList.length; i++) {
    if (journeyList[i].arrival == arrivalForm && journeyList[i].date.getDate() == newDate.getDate()) {
      listOfJourney.push(journeyList[i])
    }
  }

  res.render('journeyList', { listOfJourney, dateMonthDay, fullDate })
});

router.get('/basket', function (req, res, next) {
  if(req.session.user == null){
    res.redirect('/')
  } else {
    if(!req.session.basketList) req.session.basketList = [];
    var status = false;

    for (var i = 0; i < req.session.basketList.length; i++) {
      if (req.session.basketList[i].departureTime == req.query.time && req.session.basketList[i].date == req.query.date) {
        status = true;
        console.log('coucou');
      }
    }

    if (status == false) {
      req.session.basketList.push({
        departure: req.query.departure,
        arrival: req.query.arrival,
        date: req.query.date,
        departureTime: req.query.time,
        price: req.query.price
      });
    }
    res.render('basket', { basketList: req.session.basketList });
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
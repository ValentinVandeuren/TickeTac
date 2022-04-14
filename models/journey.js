let mongoose = require('mongoose');

let journeySchema = mongoose.Schema({
    departure: String,
    arrival: String,
    date: Date,
    departureTime: String,
    price: Number,
});

let journeyModel = mongoose.model('journey', journeySchema);

module.exports = journeyModel;
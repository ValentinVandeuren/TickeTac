let mongoose = require('mongoose');

let lastTripSchema = mongoose.Schema({
    departure: String,
    arrival: String,
    date: String,
    departureTime: String,
    price: String
})

let usersSchema = mongoose.Schema({
    userName: String,
    userFirstName: String,
    emailAddress: String,
    password: String,
    lastTrips: [lastTripSchema]
});
let usersModel = mongoose.model('users', usersSchema);

module.exports = usersModel;
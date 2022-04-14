let mongoose = require('mongoose');

let usersSchema = mongoose.Schema({
    userName: String,
    userFirstName: String,
    emailAddress: String,
    password: String
});
let usersModel = mongoose.model('users', usersSchema);

module.exports = usersModel;
const mongoose = require('mongoose');

var usersSchema = mongoose.Schema({
    name: String,
    price: Number,
    quantity:Number,
    warranty: String,
    date: { type : Date, default: Date.now },
})

var users = mongoose.model('users', usersSchema);

module.exports = { users };
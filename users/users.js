const mongoose = require('mongoose');

var usersSchema = mongoose.Schema({
    name: String,
    mobile:String,
    neck: Number,
    shoulder:Number,
    hlafChest: Number,
    fullChest: Number,
    sleeveLength: Number,
    kameezLength: Number,
    kameezWidth: Number,
    wristWidth: Number,
    shalwarInseam:Number,
    shalwarLength:Number,
    shalwarPancha:Number,
    noOfOrders:Number,
    paid:Number,
    remaining:Number,
    dateofjoining: { type : Date, default: Date.now },
})

var users = mongoose.model('users', usersSchema);

module.exports = { users };
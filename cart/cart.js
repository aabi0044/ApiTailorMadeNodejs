const mongoose = require('mongoose');

var cartSchema = mongoose.Schema({
    orderArray: Array,
    date: { type: Date, default: Date.now },
    totalActual: Number,
    totalSale: Number,
    totalSave: Number
})

var Cart = mongoose.model('cart', cartSchema);

module.exports = { Cart };
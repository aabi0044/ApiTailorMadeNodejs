const mongoose = require('mongoose');
const timeZone = require('mongoose-timezone');

var cartSchema = mongoose.Schema({
    
    orderArray: Array,
    date:Number,
    totalActual: Number,
    totalSale: Number,
    totalSave: Number,
    totalQuantity:Number
    
})

var Cart = mongoose.model('cart', cartSchema);

module.exports = { Cart };
const mongoose = require('mongoose');

var productSchema = mongoose.Schema({
    name: String,
    price: Number,
    warranty: String,
    date: { type : Date, default: Date.now },
})

var Product = mongoose.model('products', productSchema);

module.exports = { Product };
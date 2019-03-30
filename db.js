const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/tailorMade', (err) => {
    if (err) {
        console.log(err.message);
    }else{
        console.log('Successfully connected to mongodb');
    }
});

module.exports = mongoose;
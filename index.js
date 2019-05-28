const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const { mongoose } = require('./db.js');
const orderController = require('./orders/ordersController');
const usersController = require('./users/usersController');
const moment = require('moment-timezone');
const pakistan = moment.tz(Date.now(), "Asia/Karachi");


const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
});

app.listen(port, ()=> {
    console.log('Listening on port 3000');
    console.log(pakistan); 
})

app.use('/orders', orderController);
app.use('/users', usersController);
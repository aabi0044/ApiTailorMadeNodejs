const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const { mongoose } = require('./db.js');
const productController = require('./product/productController');
const usersController = require('./users/usersController');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors({origin: 'http://localhost:4200'}));

app.listen(port, ()=> {
    console.log('Listening on port 3000');
})

app.use('/product', productController);
app.use('/users', usersController);
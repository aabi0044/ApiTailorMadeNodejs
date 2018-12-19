const express = require('express');
const bodyParser = require('body-parser');
const { mongoose } = require('./db.js');
const productController = require('./product/productController');
const cartController = require('./cart/cartController');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/product', productController);
app.use('/cart', cartController);

app.get('/', (req, res) => {
    res.send('Homepage');
});

app.listen(port, ()=> {
    console.log('Listening on port 3000');
})
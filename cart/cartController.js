const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const { Cart } = require('./cart');

router.get('/', (req, res) => {

    Cart.find((err, doc) => {
        if (err) {
            console.log(err.message);
        } else if (doc) {
            console.log(doc);
            res.send(doc);
        }
    });

});

router.get('/:id', (req, res) => {

    console.log(req.params.id);

    Cart.findById(req.params.id, (err, doc) => {
        if (err) {
            console.log(err.message);
        } else if (doc) {
            console.log(doc);
            res.send(doc);
        }
    });

});

router.post('/', (req, res) => {
    console.log(req.body.orderArray);
    let c = new Cart({
        orderArray: req.body.orderArray,
        date: Date.now(),
        totalActual: Number,
        totalSale: Number,
        totalSave: Number
    })

    c.save((err, doc) => {
        if (err) {
            console.log(err.message);
        } else if (doc) {
            console.log(doc);
            res.send(doc);
        }
    })

})

router.delete('/:id', (req, res) => {

    console.log(req.params.id);

    Cart.findByIdAndRemove(req.params.id, (err, resp) => {
        if (resp) {
            console.log(resp);
            res.send(resp)
        } else if (err) {
            console.log(err.message);
        }
    })
});

router.put('/:id', (req, res) => {
    let c = new Cart({
        orderArray: req.body.orderArray,
        date: Date.now(),
        totalActual: Number,
        totalSale: Number,
        totalSave: Number
    })
    Cart.findByIdAndUpdate(req.params.id, {
        $set: c
    }, (err, doc) => {
        if (err) {
            console.log(err);
        } else {
            console.log("updated");
            res.send(doc);
        }
    })
})
module.exports = router;

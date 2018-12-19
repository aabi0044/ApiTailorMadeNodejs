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
    
    let c = new Cart({
        orderArray: req.body.orderArray,
        date: Date.now(),
        totalActual: req.body.totalActual,
        totalSale: req.body.totalSale,
        totalSave: req.body.totalSave
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
    
    let c = {
        _id: req.body.id,
        orderArray: req.body.orderArray,
        date: Date.now(),
        totalActual: req.body.totalActual,
        totalSale: req.body.totalSale,
        totalSave: req.body.totalSave
    };
    
    Cart.findOneAndUpdate(req.params.id, { $set: c }, (err, doc) =>{
        if (err) {
            console.log(err);
        } else {
            console.log(doc);
            res.send(doc);
        }
    })
})

module.exports = router;

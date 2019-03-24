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
console.log(req.params.id)
    Cart.findById(req.params.id, (err, doc) => {
        if (err) {
            console.log(err.message);
        } else if (doc) {
            console.log(doc);
            res.send(doc);
        }
    });

});

router.post('/:id', (req, res) => {

    console.log(req.body);
    
    let c = new Cart({
        
        orderArray: req.body.orderArray,
        date:req.body.date,
        totalActual: req.body.totalActual,
        totalSale: req.body.totalSale,
        totalSave: req.body.totalSave,
        totalQuantity:req.body.totalQuantity
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
        if (err) {
            console.log(err.message);
        } else {
            console.log(resp);
            res.send(resp)
        }
    })
});

router.put('/:id', (req, res) => {
    
    let c = {
    
        _id: req.body.id,
        orderArray: req.body.orderArray,
        date: req.body.date,
        totalActual: req.body.totalActual,
        totalSale: req.body.totalSale,
        totalSave: req.body.totalSave,
        totalQuantity:req.body.totalQuantity
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

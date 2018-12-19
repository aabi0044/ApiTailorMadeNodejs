const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const { Product } = require('./product');

router.get('/', (req, res) => {

    Product.find((err, doc)=> {
        if (err) {
            console.log(err.message);
        }else if (doc) {
            console.log(doc);
            res.send(doc);
        }
    });

});

router.get('/:id', (req, res) => {

    Product.findById(req.params.id, (err, doc) => {
        if (err) {
            console.log(err.message);
        } else if (doc) {
            console.log(doc);
            res.send(doc);
        }
    });

});

router.post('/', (req, res)=> {
    
    let p = new Product({
        name: req.body.name,
        price: req.body.price,
        date: Date.now()
    })

    p.save((err, doc) => {
        if (err) {
            console.log(err.message);
        }else if (doc) {
            console.log(doc);
            res.send(doc);
        }
    });

});

router.delete('/:id', (req, res) => {

    Product.findByIdAndRemove(req.params.id, (err, resp)=> {
        if (resp) {
            console.log(resp);
            res.send(resp)
        }else if (err) {
            console.log(err.message);
        }
    });
});

router.put('/:id',(req,res)=>{

    let p = {
        name: req.body.name,
        price: req.body.price,
        date: Date.now()
    };

    Product.findByIdAndUpdate(req.params.id, {$set:p} ,(err,doc)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log("updated");
            res.send(doc);
        }
    });
});

module.exports = router;


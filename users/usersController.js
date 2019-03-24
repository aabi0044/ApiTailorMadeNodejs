const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const { users } = require('./users');

router.get('/', (req, res) => {

    users.find((err, doc)=> {
        if (err) {
            console.log(err.message);
        }else if (doc) {
            console.log(doc);
            res.send(doc);
        }
    });

});

router.get('/:id', (req, res) => {

    users.findById(req.params.id, (err, doc) => {
        if (err) {
            console.log(err.message);
        } else if (doc) {
            console.log(doc);
            res.send(doc);
        }
    });

});

router.post('/', (req, res)=> {
    
    let p = new users({
        name: req.body.name,
        price: req.body.price,
        quantity:req.body.quantity,
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

    users.findByIdAndRemove(req.params.id, (err, resp)=> {
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
        quantity:req.body.quantity,
        date: Date.now()
    };

    users.findByIdAndUpdate(req.params.id, {$set:p} ,(err,doc)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log(doc);
            res.send(doc);
        }
    });
});

module.exports = router;
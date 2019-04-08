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
        mobile:req.body.mobile,
        neck: req.body.neck,
        shoulder:req.body.shoulder,
        hlafChest: req.body.hlafChest,
        fullChest: req.body.fullChest,
        sleeveLength: req.body.sleeveLength,
        kameezLength: req.body.kameezLength,
        kameezWidth: req.body.kameezWidth,
        wristWidth: req.body.wristWidth,
        shalwarInseam:req.body.shalwarInseam,
        shalwarLength:req.body.shalwarLength,
        shalwarPancha:req.body.shalwarPancha,
        noOfOrders:req.body.noOfOrders,
       
        dateofjoining: req.body.dateofjoining,
        paid:req.body.paid,
        remaining:req.body.remaining
    })
console.log(p);
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

    users.findByIdAndDelete(req.params.id, (err, resp)=> {
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
        mobile:req.body.mobile,
        neck: req.body.neck,
        shoulder:req.body.shoulder,
        hlafChest: req.body.hlafChest,
        fullChest: req.body.fullChest,
        sleeveLength: req.body.sleeveLength,
        kameezLength: req.body.kameezLength,
        kameezWidth: req.body.kameezWidth,
        wristWidth: req.body.wristWidth,
        shalwarInseam:req.body.shalwarInseam,
        shalwarLength:req.body.shalwarLength,
        shalwarPancha:req.body.shalwarPancha,
        noOfOrders:req.body.noOfOrders,
       
        paid:req.body.paid,
        remaining:req.body.remaining,
        dateofjoining: req.body.dateofjoining
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
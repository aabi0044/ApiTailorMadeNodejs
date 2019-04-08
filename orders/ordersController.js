const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const { Order } = require('./orders');

router.get('/', (req, res) => {

    Order.find((err, doc)=> {
        if (err) {
            console.log(err.message);
        }else if (doc) {
            console.log(doc);
            res.send(doc);
        }
    });

});

router.get('/:id', (req, res) => {

    Order.findById(req.params.id, (err, doc) => {
        if (err) {
            console.log(err.message);
        } else if (doc) {
            console.log(doc);
            res.send(doc);
        }
    });

});

router.post('/', (req, res)=> {
    
    let p = new Order({
        shirtType: req.body.shirtType,
        wristType: req.body.wristType,
        collarType: req.body.collarType,
        rsp: req.body.rsp,
        lsp: req.body.lsp,
        fsp: req.body.fsp,
        shp: req.body.shp,
        refName: req.body.refName,
        refColor: req.body.refColor,
        clothPrice: req.body.clothPrice,
        totalPrice:req.body.totalPrice,
        stitchingPrice: req.body.stitchingPrice,
        customerName: req.body.customerName,
        customerId: req.body.customerId,
        customerMobile: req.body.customerMobile,
        status:req.body.status,
        deliveryDate: req.body.deliveryDate,
        creationDate:req.body.creationDate,
        paid:req.body.paid,
        remaining:req.body.remaining,
        orderNo:req.body.orderNo
        
        // date: Date.now()
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

    Order.findByIdAndDelete(req.params.id, (err, resp)=> {
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
        shirtType: req.body.shirtType,
        wristType: req.body.wristType,
        collarType: req.body.collarType,
        rsp: req.body.rsp,
        lsp: req.body.lsp,
        fsp: req.body.fsp,
        shp: req.body.shp,
        refName: req.body.refName,
        refColor: req.body.refColor,
        clothPrice: req.body.clothPrice,
        totalPrice:req.body.totalPrice,
        stitchingPrice: req.body.stitchingPrice,
        customerName: req.body.customerName,
        customerId: req.body.customerId,
        customerMobile: req.body.customerMobile,
        status:'delivered',
        deliveryDate: req.body.deliveryDate,
        creationDate:req.body.creationDate,
        delivered:req.body.delivered,
        paid:req.body.paid,
        remaining:req.body.remaining
    };

    Order.findByIdAndUpdate(req.params.id, {$set:p} ,(err,doc)=>{
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


const mongoose = require('mongoose');
// const moment = require('moment-timezone');
// const pakistan = moment.tz(Date.now(), "Asia/Karachi");
const timeZone = require('mongoose-timezone');

var orderSchema = mongoose.Schema({
    shirtType: String,
      wristType: String,
      collarType: String,
      rsp: String,
      lsp: String,
      fsp: String,
      shp: String,
      refName: String,
      refColor: String,
      clothPrice:{type: Number},
      stitchingPrice:{type: Number},
      totalPrice:{type: Number},
      customerName: String,
      customerId: String,
      customerMobile: String,
      status:String,
      deliveryDate: String,
      creationDate:Number,
      delivered:String,
      paid:Number,
      remaining:Number,
      orderNo:Number
    //   neck:Number,
    //   shoulder:Number,
    //   hlafChest: Number,
    //   fullChest: Number,
    //   sleeveLength:Number,
    //   kameezLength: Number,
    //   kameezWidth: Number,
    //   wristWidth: Number,
    //   shalwarInseam:Number,
    //   shalwarLength:Number,
    //   shalwarPancha:Number,
    // date: { type : Date, default: Date.now },
})

var Order = mongoose.model('orders', orderSchema);
// orderSchema.plugin(timeZone, { paths: ['creationDate'] });

module.exports = { Order };
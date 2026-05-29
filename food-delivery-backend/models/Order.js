const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
 user:{
  type:mongoose.Schema.Types.ObjectId,
  ref:"User"
 },
 restaurant:{
  type:mongoose.Schema.Types.ObjectId,
  ref:"Restaurant"
 },
 items:[
  {
   menuItem:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"MenuItem"
   },
   quantity:Number
  }
 ],
 totalPrice:Number,
 status:{
  type:String,
  default:"Pending"
 }
});

module.exports = mongoose.model("Order",orderSchema);
const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema({
 user:{
  type:mongoose.Schema.Types.ObjectId,
  ref:"User"
 },
 restaurant:{
  type:mongoose.Schema.Types.ObjectId,
  ref:"Restaurant"
 },
 date:String,
 time:String,
 guests:Number
});

module.exports = mongoose.model("Reservation",reservationSchema);
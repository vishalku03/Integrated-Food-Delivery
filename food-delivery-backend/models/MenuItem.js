const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
 name:String,
 price:Number,
 category:String,
 restaurant:{
  type:mongoose.Schema.Types.ObjectId,
  ref:"Restaurant"
 }
});

module.exports = mongoose.model("MenuItem",menuSchema);
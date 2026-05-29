const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
 name:String,
 cuisine:String,
 rating:{
  type:Number,
  default:0
 },
location:{
 type:{
  type:String,
  enum:["Point"],
  default:"Point"
 },
 coordinates:{
  type:[Number],
  required:true
 }
}
});

restaurantSchema.index({ location: "2dsphere" });

module.exports = mongoose.model("Restaurant",restaurantSchema);
const Review = require("../models/Review");

// Create review
exports.createReview = async (req, res) => {
 try {

  let points = 0;

  if (req.body.comment && req.body.comment.length > 100) {
   points = 10;
  }

  const review = await Review.create({
   ...req.body,
   points
  });

  res.status(201).json(review);

 } catch (error) {
  res.status(500).json({ message: error.message });
 }
};


// Get reviews for restaurant
exports.getReviews = async (req, res) => {
 try {

  const reviews = await Review.find({
   restaurant: req.params.restaurantId
  }).populate("user", "name");

  res.json(reviews);

 } catch (error) {
  res.status(500).json({ message: error.message });
 }
};


// Delete review
exports.deleteReview = async (req, res) => {
 try {

  await Review.findByIdAndDelete(req.params.id);

  res.json({ message: "Review deleted" });

 } catch (error) {
  res.status(500).json({ message: error.message });
 }
};
const Reservation = require("../models/Reservation");

// Create reservation
exports.createReservation = async (req, res) => {
 try {

  const reservation = await Reservation.create(req.body);

  res.status(201).json(reservation);

 } catch (error) {
  res.status(500).json({ message: error.message });
 }
};


// Get reservations
exports.getReservations = async (req, res) => {
 try {

  const reservations = await Reservation.find()
   .populate("user", "name email")
   .populate("restaurant", "name");

  res.json(reservations);

 } catch (error) {
  res.status(500).json({ message: error.message });
 }
};


// Delete reservation
exports.deleteReservation = async (req, res) => {
 try {

  await Reservation.findByIdAndDelete(req.params.id);

  res.json({ message: "Reservation cancelled" });

 } catch (error) {
  res.status(500).json({ message: error.message });
 }
};
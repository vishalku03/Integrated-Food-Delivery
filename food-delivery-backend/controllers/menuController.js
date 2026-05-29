const MenuItem = require("../models/MenuItem");

// Create menu item
exports.createMenuItem = async (req, res) => {
 try {

  const item = await MenuItem.create(req.body);

  res.status(201).json(item);

 } catch (error) {
  res.status(500).json({ message: error.message });
 }
};


// Get menu items by restaurant
exports.getMenuItems = async (req, res) => {
 try {

  const items = await MenuItem.find({
   restaurant: req.params.restaurantId
  });

  res.json(items);

 } catch (error) {
  res.status(500).json({ message: error.message });
 }
};


// Update menu item
exports.updateMenuItem = async (req, res) => {
 try {

  const item = await MenuItem.findByIdAndUpdate(
   req.params.id,
   req.body,
   { new: true }
  );

  res.json(item);

 } catch (error) {
  res.status(500).json({ message: error.message });
 }
};


// Delete menu item
exports.deleteMenuItem = async (req, res) => {
 try {

  await MenuItem.findByIdAndDelete(req.params.id);

  res.json({ message: "Menu item deleted" });

 } catch (error) {
  res.status(500).json({ message: error.message });
 }
};
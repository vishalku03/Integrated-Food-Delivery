

const express = require("express");
const router = express.Router();

const { protect, authorize } = require("../middleware/authMiddleware");

const {
 getRestaurants,
 createRestaurant
} = require("../controllers/restaurantController");


router.get("/", getRestaurants);
router.get("/nearby", getNearbyRestaurants);

router.post(
 "/",
 protect,
 authorize("restaurant"),
 createRestaurant
);

module.exports = router;
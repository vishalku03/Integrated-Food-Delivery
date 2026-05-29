const express = require("express");
const router = express.Router();

const {
 createMenuItem,
 getMenuItems,
 updateMenuItem,
 deleteMenuItem
} = require("../controllers/menuController");

router.post("/", createMenuItem);

router.get("/:restaurantId", getMenuItems);

router.put("/:id", updateMenuItem);

router.delete("/:id", deleteMenuItem);

module.exports = router;
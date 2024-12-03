const express = require("express");
const {
  createItem,
  getItems,
  updateItem,
  deleteItem,
} = require("../controllers/Itemcontroller");

const router = express.Router();

// CRUD routes
router.post("/", createItem); // Create
router.get("/", getItems); // Read
router.put("/:id", updateItem); // Update
router.delete("/:id", deleteItem); // Delete

module.exports = router;

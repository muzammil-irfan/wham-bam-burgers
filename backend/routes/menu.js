const express = require('express');
const router = express.Router();
const MenuItem = require('../models/MenuItem');

// Get all menu items
router.get('/', async (req, res) => {
  try {
    const items = await MenuItem.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Add new menu item
router.post('/', async (req, res) => {
  const { name, price, description } = req.body;
  const newItem = new MenuItem({ name, price, description });

  try {
    const savedItem = await newItem.save();
    res.json(savedItem);
  } catch (error) {
    res.status(400).json({ message: 'Error saving item' });
  }
});

module.exports = router;

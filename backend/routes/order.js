const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// Get all orders
router.get('/', async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Place new order
router.post('/', async (req, res) => {
  const { items, totalAmount, customerName, deliveryAddress } = req.body;
  const newOrder = new Order({ items, totalAmount, customerName, deliveryAddress });

  try {
    const savedOrder = await newOrder.save();
    res.json(savedOrder);
  } catch (error) {
    res.status(400).json({ message: 'Error saving order' });
  }
});

// Update order status
router.patch('/:id', async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ message: 'Order not found' });

    order.status = req.body.status;
    const updatedOrder = await order.save();
    res.json(updatedOrder);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;

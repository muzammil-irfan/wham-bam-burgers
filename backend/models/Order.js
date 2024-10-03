const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  items: [{ name: String, price: Number }],
  totalAmount: { type: Number, required: true },
  customerName: { type: String, required: true },
  deliveryAddress: { type: String, required: true },
  status: { type: String, default: 'Pending' }, // Status: Pending, Completed
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Order', OrderSchema);

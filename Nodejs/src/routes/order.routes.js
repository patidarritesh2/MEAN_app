const express = require('express');
const Order = require('../models/order.model');
const router = express.Router();

// Create
router.post('/', async (req, res) => {
    const order = await Order.create(req.body);
    res.json(order);
});

// Get by ID
router.get('/:id', async (req, res) => {
    const order = await Order.findById(req.params.id);
    res.json(order);
});

// Update
router.put('/:id', async (req, res) => {
    const updated = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
});

// Delete
router.delete('/:id', async (req, res) => {
    await Order.findByIdAndDelete(req.params.id);
    res.json({ message: "Order deleted" });
});

module.exports = router;
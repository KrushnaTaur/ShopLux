// routes/orderRoutes.js
const express = require('express');
const router = express.Router();
const {
  placeOrder,
  getMyOrders,
  getOrderById,
  getAllOrders,
  updateOrderStatus,
} = require('../controllers/orderController');
const { protect, adminOnly } = require('../middleware/auth');

router.post('/', protect, placeOrder);                              // Place an order
router.get('/my', protect, getMyOrders);                           // Get my orders
router.get('/admin/all', protect, adminOnly, getAllOrders);         // Admin: all orders
router.get('/:id', protect, getOrderById);                         // Get order by ID
router.put('/:id/status', protect, adminOnly, updateOrderStatus);  // Admin: update status

module.exports = router;

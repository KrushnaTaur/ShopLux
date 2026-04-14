// routes/productRoutes.js
const express = require('express');
const router = express.Router();
const {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/productController');
const { protect, adminOnly } = require('../middleware/auth');

router.get('/', getAllProducts);                              // Public
router.get('/:id', getProductById);                          // Public
router.post('/', protect, adminOnly, createProduct);         // Admin only
router.put('/:id', protect, adminOnly, updateProduct);       // Admin only
router.delete('/:id', protect, adminOnly, deleteProduct);    // Admin only

module.exports = router;

// models/Product.js - Product schema
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Product name is required'],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: 0,
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
  },
  image: {
    type: String,
    default: 'https://placehold.co/400x300/1a1a2e/ffffff?text=Product', // Default placeholder
  },
  category: {
    type: String,
    default: 'General',
  },
  stock: {
    type: Number,
    default: 100,
    min: 0,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the admin who created it
  },
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);

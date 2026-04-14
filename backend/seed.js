// seed.js - Creates demo users and products in MongoDB
// Run with: node seed.js

const mongoose = require('mongoose');
const bcrypt   = require('bcryptjs');
const dotenv   = require('dotenv');

dotenv.config();

const User    = require('./models/User');
const Product = require('./models/Product');

const seed = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  console.log('✅ Connected to MongoDB');

  // Clear existing data
  await User.deleteMany({});
  await Product.deleteMany({});
  console.log('🗑️  Cleared existing data');

  // Create admin user
  const admin = await User.create({
    name: 'Admin User',
    email: 'admin@shop.com',
    password: 'admin123',
    role: 'admin',
  });

  // Create regular user
  await User.create({
    name: 'Jane Customer',
    email: 'user@shop.com',
    password: 'user1234',
    role: 'user',
  });

  // Create sample products
  await Product.insertMany([
    {
      name: 'Wireless Noise-Cancelling Headphones',
      price: 8999,
      description: 'Premium over-ear headphones with 30-hour battery life and active noise cancellation.',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop',
      category: 'Electronics',
      stock: 50,
      createdBy: admin._id,
    },
    {
      name: 'Minimalist Leather Wallet',
      price: 1499,
      description: 'Slim bifold wallet crafted from genuine leather. Holds up to 8 cards with an RFID-blocking layer.',
      image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=300&fit=crop',
      category: 'Accessories',
      stock: 120,
      createdBy: admin._id,
    },
    {
      name: 'Ceramic Pour-Over Coffee Set',
      price: 2299,
      description: 'Handcrafted ceramic dripper with a matching mug and reusable stainless steel filter.',
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop',
      category: 'Kitchen',
      stock: 75,
      createdBy: admin._id,
    },
    {
      name: 'Mechanical Keyboard (TKL)',
      price: 5499,
      description: 'Tenkeyless mechanical keyboard with Cherry MX Brown switches and white backlight.',
      image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=300&fit=crop',
      category: 'Electronics',
      stock: 30,
      createdBy: admin._id,
    },
    {
      name: 'Yoga Mat — 6mm Premium',
      price: 1799,
      description: 'Non-slip premium TPE yoga mat with alignment lines and carrying strap. Eco-friendly.',
      image: 'https://images.unsplash.com/photo-1601925228036-8a8d1b1e6e4f?w=400&h=300&fit=crop',
      category: 'Fitness',
      stock: 90,
      createdBy: admin._id,
    },
    {
      name: 'Stainless Steel Water Bottle 1L',
      price: 999,
      description: 'Double-walled insulated bottle keeps drinks cold for 24 hours and hot for 12 hours.',
      image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=300&fit=crop',
      category: 'Kitchen',
      stock: 200,
      createdBy: admin._id,
    },
  ]);

  console.log('🌱 Seeded 2 users and 6 products');
  console.log('\n📧 Admin:  admin@shop.com  / admin123');
  console.log('📧 User:   user@shop.com   / user1234\n');
  process.exit(0);
};

seed().catch(err => { console.error(err); process.exit(1); });

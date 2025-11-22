import mongoose from 'mongoose'
import Product from '../models/Product.js'

const products = [
  {
    name: 'Wireless Headphones',
    description: 'High-quality wireless headphones with noise cancellation',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
    category: 'Electronics'
  },
  {
    name: 'Smart Watch',
    description: 'Fitness tracker with heart rate monitor and GPS',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400',
    category: 'Electronics'
  },
  {
    name: 'Coffee Maker',
    description: 'Programmable coffee maker with thermal carafe',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=400',
    category: 'Home & Kitchen'
  },
  {
    name: 'Yoga Mat',
    description: 'Non-slip exercise mat perfect for yoga and fitness',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400',
    category: 'Sports'
  },
  {
    name: 'Backpack',
    description: 'Durable travel backpack with laptop compartment',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400',
    category: 'Accessories'
  },
  {
    name: 'Desk Lamp',
    description: 'LED desk lamp with adjustable brightness',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400',
    category: 'Home & Office'
  },
  {
    name: 'Water Bottle',
    description: 'Stainless steel insulated water bottle',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400',
    category: 'Sports'
  },
  {
    name: 'Sunglasses',
    description: 'Polarized sunglasses with UV protection',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400',
    category: 'Accessories'
  },
  {
    name: 'Bluetooth Speaker',
    description: 'Portable speaker with 12-hour battery life',
    price: 69.99,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400',
    category: 'Electronics'
  },
  {
    name: 'Running Shoes',
    description: 'Lightweight running shoes with cushioned sole',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
    category: 'Sports'
  },
  {
    name: 'Notebook Set',
    description: 'Premium notebook set with 3 hardcover journals',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?w=400',
    category: 'Stationery'
  },
  {
    name: 'Phone Stand',
    description: 'Adjustable phone holder for desk and table',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400',
    category: 'Accessories'
  },
  {
    name: 'Travel Mug',
    description: 'Vacuum insulated travel mug keeps drinks hot or cold',
    price: 22.99,
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400',
    category: 'Home & Kitchen'
  },
  {
    name: 'Canvas Tote Bag',
    description: 'Eco-friendly reusable shopping bag',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400',
    category: 'Accessories'
  },
  {
    name: 'Wall Clock',
    description: 'Modern minimalist wall clock with silent movement',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=400',
    category: 'Home & Office'
  },
  {
    name: 'Plant Pot Set',
    description: 'Ceramic plant pots with drainage holes, set of 3',
    price: 27.99,
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400',
    category: 'Home & Garden'
  },
  {
    name: 'Wireless Mouse',
    description: 'Ergonomic wireless mouse with precision tracking',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400',
    category: 'Electronics'
  },
  {
    name: 'Scented Candles',
    description: 'Aromatherapy candles set with lavender and vanilla',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1602874801006-2f87c49fb8d8?w=400',
    category: 'Home & Living'
  },
  {
    name: 'Kitchen Knife Set',
    description: 'Professional chef knife set with wooden block',
    price: 119.99,
    image: 'https://images.unsplash.com/photo-1593618998160-e34014e67546?w=400',
    category: 'Home & Kitchen'
  },
  {
    name: 'Resistance Bands',
    description: 'Exercise resistance bands set with 5 different levels',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=400',
    category: 'Sports'
  }
]

const seedProducts = async () => {
  try {
    const mongoUri = `mongodb+srv://priyadharshan023_db_user:${process.env.MONGODB_PASSWORD}@cluster0.em0f43b.mongodb.net/?appName=Cluster0`
    await mongoose.connect(mongoUri)
    console.log('MongoDB Connected')

    await Product.deleteMany()
    console.log('Existing products deleted')

    await Product.insertMany(products)
    console.log('20 products seeded successfully')

    process.exit(0)
  } catch (error) {
    console.error('Error seeding products:', error)
    process.exit(1)
  }
}

seedProducts()

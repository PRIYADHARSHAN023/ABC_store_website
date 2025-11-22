import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  image: {
    type: String,
    required: true
  },
  category: {
    type: String,
    default: 'General'
  },
  stock: {
    type: Number,
    default: 100
  }
}, {
  timestamps: true
})

const Product = mongoose.model('Product', productSchema)

export default Product

import express from 'express'
import Cart from '../models/Cart.js'

const router = express.Router()

router.post('/', async (req, res) => {
  try {
    const { sessionId, items } = req.body
    
    let cart = await Cart.findOne({ sessionId })
    
    if (cart) {
      cart.items = items
      cart.totalAmount = items.reduce((total, item) => total + (item.price * item.quantity), 0)
      await cart.save()
    } else {
      cart = new Cart({
        sessionId,
        items,
        totalAmount: items.reduce((total, item) => total + (item.price * item.quantity), 0)
      })
      await cart.save()
    }
    
    res.json(cart)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

router.get('/:sessionId', async (req, res) => {
  try {
    const cart = await Cart.findOne({ sessionId: req.params.sessionId }).populate('items.productId')
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' })
    }
    res.json(cart)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

export default router

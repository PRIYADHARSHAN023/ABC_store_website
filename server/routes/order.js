import express from 'express'
import Order from '../models/Order.js'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 })
    res.json(orders)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

router.get('/:orderNumber', async (req, res) => {
  try {
    const order = await Order.findOne({ orderNumber: req.params.orderNumber })
    if (!order) {
      return res.status(404).json({ message: 'Order not found' })
    }
    res.json(order)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

router.patch('/:orderNumber/status', async (req, res) => {
  try {
    const { paymentStatus } = req.body
    const order = await Order.findOne({ orderNumber: req.params.orderNumber })
    
    if (!order) {
      return res.status(404).json({ message: 'Order not found' })
    }

    order.paymentStatus = paymentStatus
    await order.save()
    
    res.json(order)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

export default router

import express from "express";
import Stripe from "stripe";
import Order from "../models/Order.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { customer, items, totalAmount } = req.body;

    const newOrder = new Order({
      customer,
      items,
      totalAmount,
      paymentStatus: "pending"
    });

    await newOrder.save();

    res.json({ success: true, orderId: newOrder._id });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Checkout failed" });
  }
});

export default router;

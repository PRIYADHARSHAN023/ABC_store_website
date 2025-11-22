import express from "express";
import Stripe from "stripe";

const router = express.Router();

const stripe = new Stripe(
  "sk_test_51SUSldRJnJ0Do0Sou9XPzGpfXvB35zwirffpVtYfZZd5B8GFoQEuAXwoJaq7zNJrv3KUml8TOGAhJWpfMvKa2eFZ00ssGHiBMO"
);

router.post("/create-checkout-session", async (req, res) => {
  try {
    const { cartItems } = req.body;

    if (!cartItems || cartItems.length === 0) {
      return res.status(400).json({ error: "Cart is empty" });
    }

    const lineItems = cartItems.map(item => ({
      price_data: {
        currency: "inr",
        product_data: { name: item.name },
        unit_amount: item.price * 100,
      },
      quantity: item.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: lineItems,
      success_url: "http://localhost:5173/success",
      cancel_url: "http://localhost:5173/cancel",
    });

    res.json({
      id: session.id,
      url: session.url
    });

  } catch (error) {
    console.error("Stripe Error:", error);
    res.status(500).json({ error: error.message });
  }
});

export default router;

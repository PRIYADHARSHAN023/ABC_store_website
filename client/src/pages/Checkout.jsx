import React, { useState, useEffect } from "react";

function Checkout() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    pincode: "",
  });

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);

    let totalAmount = savedCart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotal(totalAmount);
  }, []);

  const handleCheckout = async () => {
    if (cart.length === 0) {
      alert("Cart is empty!");
      return;
    }

    try {
      const res = await fetch(
        "http://localhost:3000/api/stripe/create-checkout-session",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ cartItems: cart }),
        }
      );

      const data = await res.json();
      console.log("Stripe Response:", data);

      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Payment failed!");
      }
    } catch (err) {
      console.error("Checkout error:", err);
      alert("Payment error");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Checkout</h2>

      <h3>Total: ₹{total}</h3>

      <button
        onClick={handleCheckout}
        style={{ padding: 10, background: "black", color: "white" }}
      >
        Confirm Order & Pay
      </button>
    </div>
  );
}

export default Checkout;

import React from "react";

function Cart({ items, totalPrice, onClose }) {
  return (
    <div
      style={{
        position: "fixed",
        right: 0,
        top: 0,
        width: "350px",
        height: "100%",
        background: "#fff",
        padding: "20px",
        boxShadow: "-3px 0 10px rgba(0,0,0,0.2)",
        overflowY: "auto",
        zIndex: 9999,
      }}
    >
      <h2>Your Cart</h2>
      <button onClick={onClose}>Close</button>

      <hr />

      {items.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          {items.map((item) => (
            <div key={item._id} style={{ marginBottom: "15px" }}>
              <h4>{item.name}</h4>
              <p>Qty: {item.quantity}</p>
              <p>Price: ₹{item.price}</p>
            </div>
          ))}

          <h3>Total: ₹{totalPrice}</h3>

          <button
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "10px",
              background: "black",
              color: "white",
            }}
            onClick={() => window.print()}
          >
            Print Bill
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;

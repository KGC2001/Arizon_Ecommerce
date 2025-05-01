import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./CartPage.css";

function CartPage() {
  const {
    cartItems,
    updateQuantity,
    removeFromCart,
    subtotal,
  } = useContext(CartContext);

  const shipping = subtotal > 0 ? 20 : 0;
  const total = subtotal + shipping;

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-container">
          <div className="cart-items">
            {cartItems.map((item) => (
              <div className="cart-row" key={item.id}>
                <img src={item.image} alt={item.title} />
                <div className="details">
                  <h4>{item.title}</h4>
                  <p>${item.price.toFixed(2)}</p>
                  <div className="quantity-controls">
                    <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                  </div>
                  <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="summary">
            <h3>Order Summary</h3>
            <p>Subtotal: ${subtotal.toFixed(2)}</p>
            <p>Shipping: ${shipping.toFixed(2)}</p>
            <hr />
            <h4>Total: ${total.toFixed(2)}</h4>
            <button className="checkout-btn" disabled={cartItems.length === 0}>Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;

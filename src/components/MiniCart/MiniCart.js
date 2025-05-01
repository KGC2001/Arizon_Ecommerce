// MiniCart.jsx
import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import "./MiniCart.css";

function MiniCart() {
  const { cartItems, subtotal } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div className="mini-cart">
      <h4>Cart Summary</h4>
      {cartItems.length === 0 ? (
        <p className="empty">Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart-items">
            {cartItems.map(item => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} />
                <div className="details">
                  <h5>{item.title.slice(0, 30)}...</h5>
                  <p>Qty: {item.quantity}</p>
                  <p>${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="subtotal">
            <strong>Subtotal:</strong> ${subtotal.toFixed(2)}
          </div>
          <div className="cart-actions">
            <button className="view-btn" onClick={() => navigate("/cart")}>
              View Cart
            </button>
            <button className="checkout-btn" disabled>Checkout</button>
          </div>
        </>
      )}
    </div>
  );
}

export default MiniCart;

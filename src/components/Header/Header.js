import React, { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../../context/CartContext";
import MiniCart from "../MiniCart/MiniCart";
import "./Header.css";

function Header() {
  const { toggleCart, isCartOpen, cartItems } = useContext(CartContext);

  const totalQty = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="header">
      <div className="logo"><a href="/" className="main-logo">Arizon</a></div>
      <nav className="nav-links">
        <a href="/">Home</a>
        <a href="/products">Shop</a>
        <a href="#">Contact</a>
      </nav>
      <div className="cart-icon" onClick={toggleCart}>
        <FaShoppingCart size={24} />
        {totalQty > 0 && <span className="cart-count">{totalQty}</span>}
        {isCartOpen && <MiniCart />}
      </div>
    </header>
  );
}

export default Header;

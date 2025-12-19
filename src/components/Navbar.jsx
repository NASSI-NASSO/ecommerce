import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import "./Navbar.css";

export default function Navbar({ onCartClick }) {
  const cart = useSelector(state => state.cart);

  // total quantité
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="navbar">
      <div className="nav-logo">
        🌸 FleursShop
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/catalogue">Catalogue</Link>
      </div>  
      
          <Link to="/wishlist">
            <FaHeart />
          </Link>
        
        <div className="cart-icon" onClick={onCartClick}>
          <FaShoppingCart />
          {totalItems > 0 && (
            <span className="cart-badge">{totalItems}</span>
          )}
        </div>
      
    </nav>
  );
}
import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        VISORA
      </div>

      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/products">Products</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>

      <div className="nav-actions">
      <a href="/wishlist">♡</a>
        <a href="/cart">🛒</a>
        <a href="/login" className="login-btn">
          Login
        </a>
        </div>
    </nav>
    
  );
}

export default Navbar;
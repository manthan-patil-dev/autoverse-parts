import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = ({ cartCount }) => {
  return (
    <nav className="navbar">
      <div className="container nav-container">
        <Link to="/" className="nav-logo">
          AutoVerse<span>Parts</span>
        </Link>

        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="#shop">Shop</a>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <div className="nav-icons">
          <span className="search-icon">🔍</span>
          <div className="cart-icon-wrapper">
            <span className="cart-icon">🛒</span>
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
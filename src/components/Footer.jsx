import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h3>AutoVerse Parts</h3>
          <p>Modern automotive parts and accessories for performance, style, and reliability.</p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#shop">Shop</a></li>
            <li><a href="#categories">Categories</a></li>
            <li><a href="#home">Home</a></li>
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <ul>
            <li>support@autoverseparts.com</li>
            <li>+91 98765 43210</li>
            <li>Mumbai, India</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 AutoVerse Parts. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
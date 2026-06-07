import  'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container footer-container">
        <div>
          <h3>AutoVerse Parts</h3>
          <p>Your destination for premium parts, upgrades, and garage essentials.</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#shop">Shop</a></li>
            <li><a href="#offers">Offers</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <p>Email: support@autoverseparts.com</p>
          <p>Phone: +91 98765 43210</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
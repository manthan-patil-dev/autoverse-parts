import 'react';
import '../styles/PromoBanner.css';

const PromoBanner = () => {
  return (
    <section className="promo-banner" id="offers">
      <div className="container promo-container">
        <div>
          <h4>Free Shipping</h4>
          <p>On all orders above ₹4,999</p>
        </div>
        <div>
          <h4>Performance Deals</h4>
          <p>Save up to 30% on selected parts</p>
        </div>
        <div>
          <h4>Expert Support</h4>
          <p>Get help choosing exact-fit parts</p>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
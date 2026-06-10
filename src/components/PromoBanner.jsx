import React from 'react';
import '../styles/PromoBanner.css';

const PromoBanner = () => {
  return (
    <section className="promo-banner">
      <div className="container promo-inner">
        <p>Free shipping on orders above ₹5,000</p>
        <p>Premium quality parts with fast support</p>
        <p>New arrivals added every week</p>
      </div>
    </section>
  );
};

export default PromoBanner;
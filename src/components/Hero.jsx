import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <span className="hero-tag">Premium Automotive Parts</span>
          <h1>Upgrade Your Ride with Performance Parts</h1>
          <p>
            Discover premium brakes, lighting, suspension, tools, and accessories built for car lovers who want style and performance.
          </p>

          <div className="hero-actions">
            <a href="#shop" className="btn btn-primary">Shop Now</a>
            <a href="#categories" className="btn btn-outline">Browse Categories</a>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1200&q=80"
            alt="Car showcase"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
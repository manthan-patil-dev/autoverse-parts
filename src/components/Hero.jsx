import  'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <h1>Upgrade Your <span className="highlight">Drive</span></h1>
        <p>Premium aftermarket parts, performance upgrades, and professional tools for your vehicle.</p>
        <div className="hero-btns">
          <button className="btn btn-primary">Shop Now</button>
          <button className="btn btn-outline">View Catalog</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
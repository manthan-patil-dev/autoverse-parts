import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VehicleFinder from './components/VehicleFinder';
import PromoBanner from './components/PromoBanner';
import CategorySection from './components/CategorySection';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';

const Home = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <>
      <Hero />
      <VehicleFinder />
      <PromoBanner />
      <CategorySection
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <ProductGrid selectedCategory={selectedCategory} />
    </>
  );
};

const Blog = () => (
  <main className="container" style={{ padding: '60px 0' }}>
    <h1>Blog</h1>
    <p>Tips, maintenance guides, upgrade ideas, and product advice for car lovers.</p>
  </main>
);

const Contact = () => (
  <main className="container" style={{ padding: '60px 0' }}>
    <h1>Contact</h1>
    <p>Email: support@autoverseparts.com</p>
    <p>Phone: +91 98765 43210</p>
    <p>Mumbai, India</p>
  </main>
);

const NotFound = () => (
  <main className="container" style={{ padding: '60px 0' }}>
    <h1>404</h1>
    <p>The page you are looking for does not exist.</p>
  </main>
);

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount((prev) => prev + 1);
  };

  return (
    <>
      <Navbar cartCount={cartCount} />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              onAddToCart={handleAddToCart}
            />
          }
        />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
import  { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VehicleFinder from './components/VehicleFinder';
import PromoBanner from './components/PromoBanner';
import CategorySection from './components/CategorySection';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';

const App = () => {
  const [cartCount, setCartCount] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const addToCart = () => {
    setCartCount((prev) => prev + 1);
  };

  return (
    <>
      <Navbar cartCount={cartCount} />
      <Hero />
      <VehicleFinder />
      <PromoBanner />
      <CategorySection
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <ProductGrid
        selectedCategory={selectedCategory}
        addToCart={addToCart}
      />
      <Footer />
    </>
  );
};

export default App;
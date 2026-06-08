import 'react';
import Hero from '../components/Hero';
import VehicleFinder from '../components/VehicleFinder';
import PromoBanner from '../components/PromoBanner';
import CategorySection from '../components/CategorySection';
import ProductGrid from '../components/ProductGrid';

const Home = ({ selectedCategory, setSelectedCategory, addToCart }) => {
  return (
    <>
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
    </>
  );
};

export default Home;
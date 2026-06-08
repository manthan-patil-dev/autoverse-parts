import 'react';
import CategorySection from '../components/CategorySection';
import ProductGrid from '../components/ProductGrid';

const Shop = ({ selectedCategory, setSelectedCategory, addToCart }) => {
  return (
    <main style={{ padding: '40px 0' }}>
      <CategorySection
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <ProductGrid
        selectedCategory={selectedCategory}
        addToCart={addToCart}
      />
    </main>
  );
};

export default Shop;
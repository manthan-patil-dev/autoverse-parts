import  'react';
import ProductCard from './ProductCard';
import { productsData } from '../data/products';
import '../styles/ProductGrid.css';

const ProductGrid = ({ selectedCategory, addToCart }) => {
  const filteredProducts =
    selectedCategory === 'All'
      ? productsData
      : productsData.filter((product) => product.category === selectedCategory);

  return (
    <section className="product-grid-section">
      <div className="container">
        <div className="section-header">
          <h2>Featured Products</h2>
          <p>Premium automotive parts and accessories for every build.</p>
        </div>

        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
import React from 'react';
import '../styles/CategorySection.css';

const categories = [
  'All',
  'Brakes',
  'Lighting',
  'Suspension',
  'Interior',
  'Performance',
  'Tools',
  'Accessories'
];

const CategorySection = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <section className="category-section" id="categories">
      <div className="container">
        <div className="section-header">
          <h2>Browse by Category</h2>
          <p>Filter products by the part type you need.</p>
        </div>

        <div className="category-list">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
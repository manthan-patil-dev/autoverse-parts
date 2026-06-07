import  'react';
import '../styles/CategorySection.css';

const categories = [
  'Brakes',
  'Lighting',
  'Suspension',
  'Performance',
  'Interior',
  'Exterior',
  'Tools',
];

const CategorySection = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <section className="category-section">
      <div className="container">
        <h2>Shop by Category</h2>
        <div className="category-list">
          {categories.map((category) => (
            <button
              key={category}
              className={selectedCategory === category ? 'category-btn active' : 'category-btn'}
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
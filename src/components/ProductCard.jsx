import  'react';
import '../styles/ProductCard.css';

const ProductCard = ({ product, onAddClick, onDeleteClick }) => {
  return (
    <article className="product-card">
      <div className="product-card-actions">
        <button
          className="action-circle add"
          onClick={() => onAddClick(product)}
          title="Edit item"
        >
          +
        </button>
        <button
          className="action-circle delete"
          onClick={() => onDeleteClick(product.id)}
          title="Delete item"
        >
          −
        </button>
      </div>

      <img src={product.image} alt={product.name} className="product-image" />

      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <h3>{product.name}</h3>
        <p className="product-price">₹{Number(product.price).toLocaleString('en-IN')}</p>
      </div>
    </article>
  );
};

export default ProductCard;
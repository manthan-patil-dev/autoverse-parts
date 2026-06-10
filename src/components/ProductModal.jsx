import { useEffect, useState } from 'react';
import '../styles/ProductModal.css';

const emptyForm = {
  name: '',
  category: '',
  price: '',
  image: ''
};

const ProductModal = ({ isOpen, onClose, onSubmit, initialData = null, mode = 'add' }) => {
  const [form, setForm] = useState(emptyForm);

  useEffect(() => {
    if (isOpen) {
      setForm(
        initialData
          ? {
              name: initialData.name || '',
              category: initialData.category || '',
              price: initialData.price?.toString?.() ?? '',
              image: initialData.image || ''
            }
          : emptyForm
      );
    }
  }, [isOpen, initialData]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>{mode === 'edit' ? 'Edit Item' : 'Add New Item'}</h3>
          <button className="icon-btn" onClick={onClose}>×</button>
        </div>

        <form className="product-form" onSubmit={handleSubmit}>
          <label>
            Product Name
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="e.g. Brembo Brake Kit"
              required
            />
          </label>

          <label>
            Category
            <input
              type="text"
              name="category"
              value={form.category}
              onChange={handleChange}
              placeholder="e.g. Brakes"
              required
            />
          </label>

          <label>
            Price (INR)
            <input
              type="number"
              name="price"
              value={form.price}
              onChange={handleChange}
              placeholder="12500"
              min="0"
              required
            />
          </label>

          <label>
            Image Link
            <input
              type="url"
              name="image"
              value={form.image}
              onChange={handleChange}
              placeholder="https://..."
              required
            />
          </label>

          <div className="modal-actions">
            <button type="button" className="btn btn-outline" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              {mode === 'edit' ? 'Save Changes' : 'Create Item'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductModal;
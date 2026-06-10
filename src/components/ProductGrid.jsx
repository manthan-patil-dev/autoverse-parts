import  { useEffect, useMemo, useState } from 'react';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';
import { supabase } from '../lib/supabaseClient';
import '../styles/ProductGrid.css';

const ProductGrid = ({ selectedCategory }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [mode, setMode] = useState('add');
  const [activeProduct, setActiveProduct] = useState(null);

  const fetchProducts = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .order('id', { ascending: false });

    if (!error) setProducts(data || []);
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    if (!selectedCategory || selectedCategory === 'All') return products;
    return products.filter((p) => p.category === selectedCategory);
  }, [products, selectedCategory]);

  const handleOpenAdd = () => {
    setMode('add');
    setActiveProduct(null);
    setModalOpen(true);
  };

  const handleOpenEdit = (product) => {
    setMode('edit');
    setActiveProduct(product);
    setModalOpen(true);
  };

  const handleSubmit = async (form) => {
    const payload = {
      name: form.name.trim(),
      category: form.category.trim(),
      price: Number(form.price),
      image: form.image.trim()
    };

    if (mode === 'add') {
      const { error } = await supabase.from('products').insert([payload]);
      if (!error) await fetchProducts();
    } else if (activeProduct?.id) {
      const { error } = await supabase
        .from('products')
        .update(payload)
        .eq('id', activeProduct.id);

      if (!error) await fetchProducts();
    }

    setModalOpen(false);
    setActiveProduct(null);
  };

  const handleDelete = async (id) => {
    const ok = window.confirm('Delete this item?');
    if (!ok) return;

    const { error } = await supabase.from('products').delete().eq('id', id);
    if (!error) setProducts((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <section className="product-grid-section" id="shop">
      <div className="container">
        <div className="grid-header">
          <div>
            <h2>Manage Products</h2>
            <p>Use the + button to create a new card and the − button to remove one.</p>
          </div>
          <button className="btn btn-primary" onClick={handleOpenAdd}>
            + Add Product
          </button>
        </div>

        {loading ? (
          <p>Loading products...</p>
        ) : (
          <div className="product-grid">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddClick={handleOpenEdit}
                onDeleteClick={handleDelete}
              />
            ))}
          </div>
        )}
      </div>

      <ProductModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleSubmit}
        initialData={activeProduct}
        mode={mode}
      />
    </section>
  );
};

export default ProductGrid;
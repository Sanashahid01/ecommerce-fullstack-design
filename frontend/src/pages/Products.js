import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'products'));
        const productsList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setProducts(productsList);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const categories = ['All', ...new Set(products.map(p => p.category))];

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  if (loading) return <div style={styles.loading}>Loading products...</div>;

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>🛍️ VENDOORA Products</h1>
        <p style={styles.subtitle}>Dynamic data from Firebase | Free Delivery over Rs. 2000</p>
      </div>

      <div style={styles.filterContainer}>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            style={{
              ...styles.filterBtn,
              backgroundColor: selectedCategory === cat ? '#7B1FA2' : 'white',
              color: selectedCategory === cat ? 'white' : '#333',
              borderColor: selectedCategory === cat ? '#7B1FA2' : '#FF7043',
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div style={styles.grid}>
        {filteredProducts.map(product => (
          <div key={product.id} style={styles.card}>
            <div style={styles.discountBadge}>
              -{Math.round((1 - product.price/product.originalPrice) * 100)}%
            </div>
            <img 
              src={product.image} 
              alt={product.name} 
              style={styles.image} 
              onError={(e) => {e.target.src = 'https://placehold.co/400x300/7B1FA2/FFFFFF?text=' + encodeURIComponent(product.name)}}
            />
            <div style={styles.info}>
              <span style={styles.category}>{product.category}</span>
              <h3 style={styles.name}>{product.name}</h3>
              <div style={styles.rating}>⭐ {product.rating} ({product.reviews} reviews)</div>
              <div style={styles.priceRow}>
                <span style={styles.price}>Rs. {product.price?.toLocaleString()}</span>
                <span style={styles.originalPrice}>Rs. {product.originalPrice?.toLocaleString()}</span>
              </div>
              <Link to={`/product/${product.id}`} style={styles.button}>
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  loading: {
    textAlign: 'center',
    padding: '50px',
    fontSize: '20px',
  },
  container: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '40px 20px',
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  title: {
    fontSize: '36px',
    color: '#4A148C',
    marginBottom: '10px',
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#666',
    fontSize: '16px',
  },
  filterContainer: {
    display: 'flex',
    gap: '10px',
    marginBottom: '30px',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  filterBtn: {
    padding: '10px 20px',
    border: '2px solid',
    borderRadius: '25px',
    cursor: 'pointer',
    fontSize: '13px',
    fontWeight: '600',
    transition: 'all 0.3s',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '25px',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 2px 15px rgba(0,0,0,0.08)',
    position: 'relative',
  },
  discountBadge: {
    position: 'absolute',
    top: '10px',
    left: '10px',
    backgroundColor: '#FF7043',
    color: 'white',
    padding: '5px 12px',
    borderRadius: '20px',
    fontSize: '14px',
    fontWeight: 'bold',
    zIndex: 10,
  },
  image: {
    width: '100%',
    height: '220px',
    objectFit: 'cover',
    backgroundColor: '#f0f0f0',
  },
  info: {
    padding: '15px',
  },
  category: {
    color: '#7B1FA2',
    fontSize: '11px',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  name: {
    fontSize: '16px',
    fontWeight: '600',
    margin: '6px 0',
    color: '#1A1A2E',
    height: '40px',
    overflow: 'hidden',
  },
  rating: {
    color: '#FF7043',
    fontSize: '13px',
    marginBottom: '8px',
  },
  priceRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '12px',
  },
  price: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#7B1FA2',
  },
  originalPrice: {
    fontSize: '14px',
    color: '#999',
    textDecoration: 'line-through',
  },
  button: {
    display: 'block',
    padding: '10px',
    backgroundColor: '#7B1FA2',
    color: 'white',
    textAlign: 'center',
    textDecoration: 'none',
    borderRadius: '6px',
    fontWeight: '500',
    fontSize: '14px',
  },
};

export default Products;
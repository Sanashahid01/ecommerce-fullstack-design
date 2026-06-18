import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Products() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const allProducts = [
    // Makeup & Beauty (4 products)
    { id: 1, name: 'Lakme Foundation', price: 1299, originalPrice: 1899, rating: 4.6, reviews: 342, category: 'Makeup & Beauty', image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=300&fit=crop' },
    { id: 2, name: 'Maybelline Lipstick Set', price: 899, originalPrice: 1499, rating: 4.7, reviews: 567, category: 'Makeup & Beauty', image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=300&fit=crop' },
    { id: 3, name: 'Garnier Face Wash', price: 499, originalPrice: 799, rating: 4.5, reviews: 234, category: 'Makeup & Beauty', image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=300&fit=crop' },
    { id: 4, name: 'Huda Beauty Eyeshadow', price: 2499, originalPrice: 3999, rating: 4.8, reviews: 189, category: 'Makeup & Beauty', image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&h=300&fit=crop' },

    // Jewelry (4 products)
    { id: 5, name: 'Gold Plated Earrings', price: 899, originalPrice: 1499, rating: 4.8, reviews: 567, category: 'Jewelry', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=300&fit=crop' },
    { id: 6, name: 'Silver Bracelet Set', price: 1299, originalPrice: 2199, rating: 4.6, reviews: 432, category: 'Jewelry', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220e?w=400&h=300&fit=crop' },
    { id: 7, name: 'Artificial Necklace', price: 699, originalPrice: 1199, rating: 4.5, reviews: 123, category: 'Jewelry', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=300&fit=crop' },
    { id: 8, name: 'Bridal Jewelry Set', price: 3499, originalPrice: 5999, rating: 4.9, reviews: 89, category: 'Jewelry', image: 'https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?w=400&h=300&fit=crop' },

    // Women Fashion (4 products)
    { id: 9, name: 'Ladies Cardigan', price: 1599, originalPrice: 2499, rating: 4.5, reviews: 234, category: 'Women Fashion', image: 'https://images.unsplash.com/photo-1434389677669-e08b4dba3a65?w=400&h=300&fit=crop' },
    { id: 10, name: 'Printed Kurti', price: 1299, originalPrice: 1999, rating: 4.6, reviews: 567, category: 'Women Fashion', image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=300&fit=crop' },
    { id: 11, name: 'Women Jeans', price: 1899, originalPrice: 2999, rating: 4.4, reviews: 189, category: 'Women Fashion', image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=300&fit=crop' },
    { id: 12, name: 'Ladies Jacket', price: 2499, originalPrice: 3999, rating: 4.7, reviews: 432, category: 'Women Fashion', image: 'https://images.unsplash.com/photo-1551488852-0801751ac367?w=400&h=300&fit=crop' },

    // Men Fashion (4 products)
    { id: 13, name: 'Men Casual Shirt', price: 1199, originalPrice: 1899, rating: 4.5, reviews: 342, category: 'Men Fashion', image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=300&fit=crop' },
    { id: 14, name: 'Men Denim Jacket', price: 2999, originalPrice: 4499, rating: 4.7, reviews: 234, category: 'Men Fashion', image: 'https://images.unsplash.com/photo-1520975661595-6453be3f7070?w=400&h=300&fit=crop' },
    { id: 15, name: 'Polo T-Shirt', price: 799, originalPrice: 1299, rating: 4.4, reviews: 567, category: 'Men Fashion', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop' },
    { id: 16, name: 'Men Chinos', price: 1499, originalPrice: 2299, rating: 4.6, reviews: 189, category: 'Men Fashion', image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&h=300&fit=crop' },

    // Home & Kitchen (4 products)
    { id: 17, name: 'Kitchen Storage Set', price: 1599, originalPrice: 2499, rating: 4.7, reviews: 432, category: 'Home & Kitchen', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop' },
    { id: 18, name: 'Non-Stick Cookware', price: 3499, originalPrice: 5499, rating: 4.8, reviews: 234, category: 'Home & Kitchen', image: 'https://images.unsplash.com/photo-1556911220-e15b30be8a8d?w=400&h=300&fit=crop' },
    { id: 19, name: 'Bedsheet Set', price: 1299, originalPrice: 1999, rating: 4.5, reviews: 567, category: 'Home & Kitchen', image: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=400&h=300&fit=crop' },
    { id: 20, name: 'LED Table Lamp', price: 899, originalPrice: 1499, rating: 4.6, reviews: 189, category: 'Home & Kitchen', image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=300&fit=crop' },

    // Shoes & Bags (4 products)
    { id: 21, name: 'Men Sneakers', price: 2499, originalPrice: 3999, rating: 4.5, reviews: 342, category: 'Shoes & Bags', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop' },
    { id: 22, name: 'Women Heels', price: 1899, originalPrice: 2999, rating: 4.6, reviews: 234, category: 'Shoes & Bags', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=300&fit=crop' },
    { id: 23, name: 'Ladies Handbag', price: 1599, originalPrice: 2499, rating: 4.7, reviews: 567, category: 'Shoes & Bags', image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=300&fit=crop' },
    { id: 24, name: 'School Backpack', price: 1299, originalPrice: 1999, rating: 4.4, reviews: 189, category: 'Shoes & Bags', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop' },
  ];

  const categories = ['All', 'Makeup & Beauty', 'Jewelry', 'Women Fashion', 'Men Fashion', 'Home & Kitchen', 'Shoes & Bags'];

  const filteredProducts = selectedCategory === 'All' 
    ? allProducts 
    : allProducts.filter(p => p.category === selectedCategory);

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>🛍️ VENDOORA Products</h1>
        <p style={styles.subtitle}>24+ categories | Free Delivery over Rs. 2000 | Cash on Delivery</p>
      </div>

      {/* Category Filter */}
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

      {/* Products Grid */}
      <div style={styles.grid}>
        {filteredProducts.map(product => (
          <div key={product.id} style={styles.card}>
            <div style={styles.discountBadge}>
              -{Math.round((1 - product.price/product.originalPrice) * 100)}%
            </div>
            <img src={product.image} alt={product.name} style={styles.image} />
            <div style={styles.info}>
              <span style={styles.category}>{product.category}</span>
              <h3 style={styles.name}>{product.name}</h3>
              <div style={styles.rating}>⭐ {product.rating} ({product.reviews} reviews)</div>
              <div style={styles.priceRow}>
                <span style={styles.price}>Rs. {product.price.toLocaleString()}</span>
                <span style={styles.originalPrice}>Rs. {product.originalPrice.toLocaleString()}</span>
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
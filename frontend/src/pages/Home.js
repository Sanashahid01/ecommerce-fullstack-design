import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const announcements = [
    "Free Delivery on Orders Above Rs. 2000",
    "Cash on Delivery Available Nationwide",
    "New Customers: 10% Off with Code VENDOORA10",
    "Flash Sale Every Friday - Up to 70% Off",
    "Easy 7-Day Return Policy"
  ];

  const featuredProducts = [
    { id: 1, name: 'Lakme Foundation', price: 1299, originalPrice: 1899, image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=300&fit=crop' },
    { id: 2, name: 'Gold Plated Earrings', price: 899, originalPrice: 1499, image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=300&fit=crop' },
    { id: 3, name: 'Men Sneakers', price: 2499, originalPrice: 3999, image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop' },
    { id: 4, name: 'Kitchen Storage Set', price: 1599, originalPrice: 2499, image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop' },
  ];

  const categories = [
    { name: 'Makeup', image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=200&h=200&fit=crop' },
    { name: 'Jewelry', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=200&h=200&fit=crop' },
    { name: 'Women', image: 'https://images.unsplash.com/photo-1434389677669-e08b4dba3a65?w=200&h=200&fit=crop' },
    { name: 'Men', image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=200&h=200&fit=crop' },
    { name: 'Home', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=200&h=200&fit=crop' },
    { name: 'Shoes', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=200&h=200&fit=crop' },
  ];

  return (
    <div>
      {/* Announcement Bar */}
      <div style={styles.announcementBar}>
        <div style={styles.announcementTrack}>
          {[...announcements, ...announcements].map((text, index) => (
            <span key={index} style={styles.announcementItem}>{text} &nbsp;&nbsp;•&nbsp;&nbsp; </span>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <div style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>VENDOORA</h1>
          <p style={styles.heroSubtitle}>Premium Online Marketplace</p>
          <Link to="/products" style={styles.heroButton}>Shop Now</Link>
        </div>
      </div>

      {/* Categories */}
      <div style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Shop by Category</h2>
          <div style={styles.categoryGrid}>
            {categories.map((cat, index) => (
              <Link key={index} to="/products" style={{textDecoration: 'none'}}>
                <div style={styles.categoryCard}>
                  <img src={cat.image} alt={cat.name} style={styles.categoryImage} />
                  <span style={styles.categoryName}>{cat.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Featured Products</h2>
          <div style={styles.productGrid}>
            {featuredProducts.map(product => (
              <div key={product.id} style={styles.productCard}>
                <div style={styles.discountBadge}>
                  -{Math.round((1 - product.price/product.originalPrice) * 100)}%
                </div>
                <img src={product.image} alt={product.name} style={styles.productImage} />
                <div style={styles.productInfo}>
                  <h3 style={styles.productName}>{product.name}</h3>
                  <div style={styles.priceRow}>
                    <span style={styles.price}>Rs. {product.price.toLocaleString()}</span>
                    <span style={styles.originalPrice}>Rs. {product.originalPrice.toLocaleString()}</span>
                  </div>
                  <Link to={`/product/${product.id}`} style={styles.viewButton}>
                    Add to Cart
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  announcementBar: {
    backgroundColor: '#7B1FA2',
    color: 'white',
    padding: '8px 0',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
  announcementTrack: {
    display: 'inline-block',
    animation: 'scroll 25s linear infinite',
  },
  announcementItem: {
    display: 'inline-block',
    padding: '0 20px',
    fontSize: '13px',
  },
  hero: {
    backgroundColor: '#F8F8F8',
    padding: '80px 20px',
    textAlign: 'center',
  },
  heroContent: {
    maxWidth: '600px',
    margin: '0 auto',
  },
  heroTitle: {
    fontSize: '48px',
    fontWeight: 'bold',
    color: '#7B1FA2',
    letterSpacing: '4px',
    marginBottom: '10px',
  },
  heroSubtitle: {
    fontSize: '18px',
    color: '#666',
    marginBottom: '30px',
  },
  heroButton: {
    display: 'inline-block',
    padding: '12px 35px',
    backgroundColor: '#FF7043',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    fontWeight: '600',
  },
  section: {
    padding: '50px 20px',
    backgroundColor: 'white',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  sectionTitle: {
    fontSize: '24px',
    textAlign: 'center',
    color: '#333',
    marginBottom: '30px',
    fontWeight: '600',
  },
  categoryGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '20px',
  },
  categoryCard: {
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'transform 0.3s',
  },
  categoryImage: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '50%',
    marginBottom: '10px',
  },
  categoryName: {
    fontSize: '14px',
    color: '#333',
    fontWeight: '500',
  },
  productGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '25px',
  },
  productCard: {
    backgroundColor: 'white',
    borderRadius: '8px',
    overflow: 'hidden',
    border: '1px solid #eee',
    position: 'relative',
    transition: 'box-shadow 0.3s',
  },
  discountBadge: {
    position: 'absolute',
    top: '10px',
    left: '10px',
    backgroundColor: '#FF7043',
    color: 'white',
    padding: '4px 10px',
    borderRadius: '4px',
    fontSize: '12px',
    fontWeight: 'bold',
  },
  productImage: {
    width: '100%',
    height: '220px',
    objectFit: 'cover',
  },
  productInfo: {
    padding: '15px',
  },
  productName: {
    fontSize: '14px',
    color: '#333',
    marginBottom: '8px',
    fontWeight: '500',
  },
  priceRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '12px',
  },
  price: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#7B1FA2',
  },
  originalPrice: {
    fontSize: '14px',
    color: '#999',
    textDecoration: 'line-through',
  },
  viewButton: {
    display: 'block',
    padding: '10px',
    backgroundColor: '#7B1FA2',
    color: 'white',
    textAlign: 'center',
    textDecoration: 'none',
    borderRadius: '4px',
    fontSize: '14px',
  },
};

export default Home;
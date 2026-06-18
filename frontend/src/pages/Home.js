import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const announcements = [
    "🚚 Free Delivery on Orders Above Rs. 2000",
    "💰 Cash on Delivery Available Nationwide",
    "🎁 New Customers Get 10% Off - Use Code: VENDOORA10",
    "⚡ Flash Sale Every Friday - Up to 70% Off",
    "🔄 Easy 7-Day Return Policy"
  ];

  const featuredProducts = [
    { id: 1, name: 'Lakme Foundation', price: 1299, originalPrice: 1899, rating: 4.6, reviews: 342, image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=300&fit=crop' },
    { id: 2, name: 'Gold Plated Earrings', price: 899, originalPrice: 1499, rating: 4.8, reviews: 567, image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=300&fit=crop' },
    { id: 3, name: 'Men Casual Sneakers', price: 2499, originalPrice: 3999, rating: 4.5, reviews: 234, image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop' },
    { id: 4, name: 'Kitchen Storage Set', price: 1599, originalPrice: 2499, rating: 4.7, reviews: 189, image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop' },
  ];

  const categories = [
    { name: 'Makeup', icon: '💄', color: '#E91E63' },
    { name: 'Jewelry', icon: '💎', color: '#FFD700' },
    { name: 'Women', icon: '👗', color: '#9C27B0' },
    { name: 'Men', icon: '👔', color: '#2196F3' },
    { name: 'Home', icon: '🏠', color: '#795548' },
    { name: 'Shoes', icon: '👟', color: '#FF7043' },
  ];

  return (
    <div>
      {/* Scrolling Announcement Bar */}
      <div style={styles.announcementBar}>
        <div style={styles.announcementTrack}>
          {[...announcements, ...announcements].map((text, index) => (
            <span key={index} style={styles.announcementItem}>{text}</span>
          ))}
        </div>
      </div>

      {/* Hero Banner */}
      <div style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>VENDOORA</h1>
          <p style={styles.heroSubtitle}>Premium Online Marketplace</p>
          <p style={styles.heroText}>Quality products delivered to your doorstep</p>
          <div style={styles.heroBadges}>
            <span style={styles.badge}>Free Shipping Rs. 2000+</span>
            <span style={styles.badge}>Cash on Delivery</span>
            <span style={styles.badge}>7-Day Returns</span>
          </div>
          <Link to="/products" style={styles.heroButton}>Shop Now →</Link>
        </div>
      </div>

      {/* Categories */}
      <div style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Shop by Category</h2>
          <div style={styles.categoryGrid}>
            {categories.map((cat, index) => (
              <Link key={index} to="/products" style={{textDecoration: 'none'}}>
                <div style={{...styles.categoryCard, backgroundColor: cat.color + '15', borderColor: cat.color}}>
                  <span style={styles.categoryIcon}>{cat.icon}</span>
                  <span style={{...styles.categoryName, color: cat.color}}>{cat.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div style={styles.section}>
        <div style={styles.container}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>Flash Deals</h2>
            <Link to="/products" style={styles.viewAll}>View All →</Link>
          </div>
          <div style={styles.productGrid}>
            {featuredProducts.map(product => (
              <div key={product.id} style={styles.productCard}>
                <div style={styles.discountBadge}>
                  -{Math.round((1 - product.price/product.originalPrice) * 100)}%
                </div>
                <img src={product.image} alt={product.name} style={styles.productImage} />
                <div style={styles.productInfo}>
                  <h3 style={styles.productName}>{product.name}</h3>
                  <div style={styles.rating}>
                    ⭐ {product.rating} ({product.reviews})
                  </div>
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

      {/* Features Banner */}
      <div style={styles.featuresBanner}>
        <div style={styles.container}>
          <div style={styles.featuresGrid}>
            <div style={styles.featureItem}>
              <div style={styles.featureIcon}>🚚</div>
              <h4 style={styles.featureTitle}>Free Delivery</h4>
              <p style={styles.featureText}>On orders above Rs. 2000</p>
            </div>
            <div style={styles.featureItem}>
              <div style={styles.featureIcon}>💰</div>
              <h4 style={styles.featureTitle}>Cash on Delivery</h4>
              <p style={styles.featureText}>Pay when you receive</p>
            </div>
            <div style={styles.featureItem}>
              <div style={styles.featureIcon}>🔄</div>
              <h4 style={styles.featureTitle}>Easy Returns</h4>
              <p style={styles.featureText}>7-day return policy</p>
            </div>
            <div style={styles.featureItem}>
              <div style={styles.featureIcon}>🔒</div>
              <h4 style={styles.featureTitle}>Secure Payment</h4>
              <p style={styles.featureText}>100% secure checkout</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.container}>
          <div style={styles.footerGrid}>
            <div>
              <h3 style={styles.footerLogo}>🛍️ VENDOORA</h3>
              <p style={styles.footerText}>Your trusted online marketplace. Quality products, affordable prices, nationwide delivery.</p>
            </div>
            <div>
              <h4 style={styles.footerSubtitle}>Customer Care</h4>
              <p style={styles.footerLink}>📞 021-111-VENDOORA</p>
              <p style={styles.footerLink}>📧 support@vendoora.pk</p>
            </div>
            <div>
              <h4 style={styles.footerSubtitle}>Quick Links</h4>
              <p style={styles.footerLink}>Track Order</p>
              <p style={styles.footerLink}>Return Policy</p>
              <p style={styles.footerLink}>Privacy Policy</p>
            </div>
            <div>
              <h4 style={styles.footerSubtitle}>Payment</h4>
              <p style={styles.footerText}>💳 Visa / Mastercard</p>
              <p style={styles.footerText}>🏦 Bank Transfer</p>
              <p style={styles.footerText}>💵 Cash on Delivery</p>
            </div>
          </div>
          <div style={styles.copyright}>
            © 2026 VENDOORA. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

const styles = {
  announcementBar: {
    backgroundColor: '#FF7043',
    color: 'white',
    padding: '10px 0',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
  announcementTrack: {
    display: 'inline-block',
    animation: 'scroll 20s linear infinite',
  },
  announcementItem: {
    display: 'inline-block',
    padding: '0 50px',
    fontSize: '14px',
    fontWeight: '500',
  },
  hero: {
    background: 'linear-gradient(135deg, #7B1FA2 0%, #4A148C 100%)',
    padding: '80px 20px',
    textAlign: 'center',
    color: 'white',
  },
  heroContent: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  heroTitle: {
    fontSize: '56px',
    marginBottom: '10px',
    fontWeight: 'bold',
    letterSpacing: '4px',
  },
  heroSubtitle: {
    fontSize: '24px',
    marginBottom: '15px',
    color: '#FF7043',
    fontWeight: '600',
  },
  heroText: {
    fontSize: '16px',
    marginBottom: '25px',
    opacity: 0.9,
  },
  heroBadges: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    marginBottom: '30px',
    flexWrap: 'wrap',
  },
  badge: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    padding: '8px 16px',
    borderRadius: '20px',
    fontSize: '13px',
  },
  heroButton: {
    display: 'inline-block',
    padding: '15px 40px',
    backgroundColor: '#FF7043',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '30px',
    fontSize: '18px',
    fontWeight: 'bold',
  },
  section: {
    padding: '50px 20px',
    backgroundColor: '#F5F5F5',
  },
  container: {
    maxWidth: '1400px',
    margin: '0 auto',
  },
  sectionHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '30px',
  },
  viewAll: {
    color: '#7B1FA2',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: '600',
  },
  sectionTitle: {
    fontSize: '28px',
    color: '#4A148C',
    fontWeight: 'bold',
  },
  categoryGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '20px',
    marginBottom: '20px',
  },
  categoryCard: {
    padding: '30px 20px',
    borderRadius: '12px',
    textAlign: 'center',
    cursor: 'pointer',
    border: '2px solid',
    transition: 'transform 0.3s',
  },
  categoryIcon: {
    fontSize: '40px',
    display: 'block',
    marginBottom: '10px',
  },
  categoryName: {
    fontSize: '16px',
    fontWeight: '600',
  },
  productGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '25px',
  },
  productCard: {
    backgroundColor: 'white',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 2px 15px rgba(0,0,0,0.1)',
    position: 'relative',
    transition: 'transform 0.3s',
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
  productImage: {
    width: '100%',
    height: '250px',
    objectFit: 'cover',
  },
  productInfo: {
    padding: '20px',
  },
  productName: {
    fontSize: '18px',
    fontWeight: '600',
    marginBottom: '8px',
    color: '#1A1A2E',
  },
  rating: {
    color: '#FF7043',
    fontSize: '14px',
    marginBottom: '10px',
  },
  priceRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '15px',
  },
  price: {
    fontSize: '22px',
    fontWeight: 'bold',
    color: '#7B1FA2',
  },
  originalPrice: {
    fontSize: '16px',
    color: '#999',
    textDecoration: 'line-through',
  },
  viewButton: {
    display: 'block',
    padding: '12px',
    backgroundColor: '#7B1FA2',
    color: 'white',
    textAlign: 'center',
    textDecoration: 'none',
    borderRadius: '8px',
    fontWeight: '500',
  },
  featuresBanner: {
    backgroundColor: 'white',
    padding: '40px 20px',
    borderTop: '1px solid #eee',
    borderBottom: '1px solid #eee',
  },
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '30px',
    textAlign: 'center',
  },
  featureItem: {
    padding: '20px',
  },
  featureIcon: {
    fontSize: '40px',
    marginBottom: '15px',
  },
  featureTitle: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#4A148C',
    marginBottom: '5px',
  },
  featureText: {
    color: '#666',
    fontSize: '14px',
  },
  footer: {
    backgroundColor: '#4A148C',
    color: 'white',
    padding: '50px 20px 20px',
  },
  footerGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '40px',
    marginBottom: '40px',
  },
  footerLogo: {
    fontSize: '24px',
    color: '#FF7043',
    marginBottom: '15px',
  },
  footerSubtitle: {
    fontSize: '18px',
    marginBottom: '15px',
    color: '#FF7043',
    fontWeight: '600',
  },
  footerText: {
    color: '#ccc',
    lineHeight: '1.6',
    marginBottom: '8px',
  },
  footerLink: {
    color: '#ccc',
    marginBottom: '8px',
    cursor: 'pointer',
  },
  copyright: {
    textAlign: 'center',
    paddingTop: '20px',
    borderTop: '1px solid #7B1FA2',
    color: '#ccc',
  },
};

export default Home;
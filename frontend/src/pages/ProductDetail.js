import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const docRef = doc(db, 'products', id);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          setProduct({
            id: docSnap.id,
            ...docSnap.data()
          });
        } else {
          console.log('No such product!');
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product:', error);
        setLoading(false);
      }
    };
    
    fetchProduct();
  }, [id]);

  if (loading) return <div style={styles.loading}>Loading product...</div>;
  
  if (!product) return <div style={styles.container}>Product not found</div>;

  return (
    <div style={styles.container}>
      <div style={styles.breadcrumb}>
        <Link to="/" style={styles.breadLink}>Home</Link> / 
        <Link to="/products" style={styles.breadLink}>Products</Link> / 
        <span style={styles.breadCurrent}>{product.name}</span>
      </div>

      <div style={styles.productLayout}>
        <div style={styles.imageSection}>
          <img src={product.image} alt={product.name} style={styles.mainImage} onError={(e) => {e.target.src = 'https://placehold.co/600x400/7B1FA2/FFFFFF?text=' + encodeURIComponent(product.name)}} />
        </div>

        <div style={styles.detailsSection}>
          <span style={styles.category}>{product.category}</span>
          <h1 style={styles.name}>{product.name}</h1>
          
          <div style={styles.rating}>
            <span style={styles.stars}>⭐ {product.rating}</span>
            <span style={styles.reviews}>({product.reviews} reviews)</span>
          </div>

          <div style={styles.priceSection}>
            <span style={styles.price}>Rs. {product.price?.toLocaleString()}</span>
            <span style={styles.originalPrice}>Rs. {product.originalPrice?.toLocaleString()}</span>
            <span style={styles.discount}>
              Save Rs. {(product.originalPrice - product.price)?.toLocaleString()}
            </span>
          </div>

          <p style={styles.description}>{product.description}</p>

          <div style={styles.stockInfo}>
            <span style={product.stock > 10 ? styles.inStock : styles.lowStock}>
              ● {product.stock > 10 ? 'In Stock' : 'Low Stock - Only ' + product.stock + ' left'}
            </span>
          </div>

          <div style={styles.actions}>
            <div style={styles.quantity}>
              <button style={styles.qtyBtn}>-</button>
              <span style={styles.qtyValue}>1</span>
              <button style={styles.qtyBtn}>+</button>
            </div>
            <button style={styles.addToCart}>🛒 Add to Cart</button>
            <button style={styles.wishlist}>♡ Wishlist</button>
          </div>

          <div style={styles.features}>
            <div style={styles.feature}>✓ Cash on Delivery</div>
            <div style={styles.feature}>✓ 7-Day Returns</div>
            <div style={styles.feature}>✓ Free Shipping over Rs. 2000</div>
          </div>
        </div>
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
  breadcrumb: {
    marginBottom: '30px',
    color: '#666',
    fontSize: '14px',
  },
  breadLink: {
    color: '#7B1FA2',
    textDecoration: 'none',
    marginRight: '5px',
  },
  breadCurrent: {
    color: '#333',
    marginLeft: '5px',
  },
  productLayout: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '60px',
    alignItems: 'start',
  },
  imageSection: {
    backgroundColor: '#F5F5F5',
    borderRadius: '12px',
    padding: '20px',
  },
  mainImage: {
    width: '100%',
    height: '400px',
    objectFit: 'cover',
    borderRadius: '8px',
  },
  detailsSection: {
    padding: '20px',
  },
  category: {
    color: '#7B1FA2',
    fontSize: '14px',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  name: {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#4A148C',
    margin: '10px 0',
  },
  rating: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '20px',
  },
  stars: {
    color: '#FF7043',
    fontSize: '16px',
  },
  reviews: {
    color: '#666',
    fontSize: '14px',
  },
  priceSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    marginBottom: '20px',
    flexWrap: 'wrap',
  },
  price: {
    fontSize: '36px',
    fontWeight: 'bold',
    color: '#7B1FA2',
  },
  originalPrice: {
    fontSize: '24px',
    color: '#999',
    textDecoration: 'line-through',
  },
  discount: {
    backgroundColor: '#FF7043',
    color: 'white',
    padding: '5px 12px',
    borderRadius: '20px',
    fontSize: '14px',
    fontWeight: '600',
  },
  description: {
    fontSize: '16px',
    lineHeight: '1.8',
    color: '#555',
    marginBottom: '20px',
  },
  stockInfo: {
    marginBottom: '25px',
  },
  inStock: {
    color: '#2ecc71',
    fontWeight: '600',
    fontSize: '16px',
  },
  lowStock: {
    color: '#e74c3c',
    fontWeight: '600',
    fontSize: '16px',
  },
  actions: {
    display: 'flex',
    gap: '15px',
    marginBottom: '30px',
    flexWrap: 'wrap',
  },
  quantity: {
    display: 'flex',
    alignItems: 'center',
    border: '2px solid #ddd',
    borderRadius: '8px',
    overflow: 'hidden',
  },
  qtyBtn: {
    width: '40px',
    height: '40px',
    border: 'none',
    backgroundColor: '#F5F5F5',
    cursor: 'pointer',
    fontSize: '18px',
  },
  qtyValue: {
    width: '50px',
    textAlign: 'center',
    fontSize: '16px',
    fontWeight: '600',
  },
  addToCart: {
    padding: '12px 40px',
    backgroundColor: '#FF7043',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
  },
  wishlist: {
    padding: '12px 30px',
    backgroundColor: 'white',
    color: '#FF7043',
    border: '2px solid #FF7043',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
  },
  features: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    padding: '20px',
    backgroundColor: '#F5F5F5',
    borderRadius: '8px',
  },
  feature: {
    color: '#7B1FA2',
    fontSize: '14px',
    fontWeight: '500',
  },
};

export default ProductDetail;
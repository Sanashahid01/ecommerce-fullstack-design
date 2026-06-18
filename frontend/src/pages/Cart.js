import React from 'react';
import { Link } from 'react-router-dom';

function Cart() {
  const cartItems = [
    { id: 1, name: 'Lakme Foundation', price: 1299, quantity: 1, image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=100&h=100&fit=crop' },
    { id: 5, name: 'Gold Plated Earrings', price: 899, quantity: 2, image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=100&h=100&fit=crop' },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 2000 ? 0 : 150;
  const total = subtotal + shipping;

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🛍️ VENDOORA Shopping Cart ({cartItems.length} items)</h1>

      {cartItems.length === 0 ? (
        <div style={styles.emptyCart}>
          <div style={styles.emptyIcon}>🛒</div>
          <h2>Your cart is empty</h2>
          <p>Looks like you have not added anything yet.</p>
          <Link to="/products" style={styles.continueBtn}>Continue Shopping</Link>
        </div>
      ) : (
        <div style={styles.cartLayout}>
          <div style={styles.itemsSection}>
            {cartItems.map(item => (
              <div key={item.id} style={styles.cartItem}>
                <img src={item.image} alt={item.name} style={styles.itemImage} />
                <div style={styles.itemDetails}>
                  <h3 style={styles.itemName}>{item.name}</h3>
                  <p style={styles.itemPrice}>Rs. {item.price.toLocaleString()}</p>
                  <div style={styles.quantity}>
                    <button style={styles.qtyBtn}>-</button>
                    <span style={styles.qtyValue}>{item.quantity}</span>
                    <button style={styles.qtyBtn}>+</button>
                  </div>
                </div>
                <div style={styles.itemTotal}>
                  <p style={styles.totalPrice}>Rs. {(item.price * item.quantity).toLocaleString()}</p>
                  <button style={styles.removeBtn}>Remove</button>
                </div>
              </div>
            ))}
            <Link to="/products" style={styles.continueLink}>← Continue Shopping</Link>
          </div>

          <div style={styles.summarySection}>
            <h2 style={styles.summaryTitle}>Order Summary</h2>
            <div style={styles.summaryRow}>
              <span>Subtotal</span>
              <span>Rs. {subtotal.toLocaleString()}</span>
            </div>
            <div style={styles.summaryRow}>
              <span>Shipping</span>
              <span style={shipping === 0 ? styles.freeShipping : {}}>
                {shipping === 0 ? 'FREE' : 'Rs. ' + shipping}
              </span>
            </div>
            <div style={styles.summaryRow}>
              <span>Tax</span>
              <span>Calculated at checkout</span>
            </div>
            <div style={styles.divider}></div>
            <div style={styles.totalRow}>
              <span style={styles.totalLabel}>Total</span>
              <span style={styles.totalAmount}>Rs. {total.toLocaleString()}</span>
            </div>
            <button style={styles.checkoutBtn}>Proceed to Checkout →</button>
            <div style={styles.secure}>
              🔒 Cash on Delivery Available
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '40px 20px',
  },
  title: {
    fontSize: '28px',
    marginBottom: '30px',
    color: '#4A148C',
    fontWeight: 'bold',
  },
  emptyCart: {
    textAlign: 'center',
    padding: '80px 20px',
  },
  emptyIcon: {
    fontSize: '80px',
    marginBottom: '20px',
  },
  continueBtn: {
    display: 'inline-block',
    marginTop: '20px',
    padding: '15px 40px',
    backgroundColor: '#FF7043',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '600',
  },
  cartLayout: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    gap: '40px',
  },
  itemsSection: {
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '30px',
  },
  cartItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    padding: '20px 0',
    borderBottom: '1px solid #eee',
  },
  itemImage: {
    width: '100px',
    height: '100px',
    objectFit: 'cover',
    borderRadius: '8px',
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: '18px',
    fontWeight: '600',
    marginBottom: '8px',
    color: '#4A148C',
  },
  itemPrice: {
    color: '#7B1FA2',
    fontSize: '16px',
    fontWeight: '600',
    marginBottom: '10px',
  },
  quantity: {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid #ddd',
    borderRadius: '6px',
    width: 'fit-content',
  },
  qtyBtn: {
    width: '32px',
    height: '32px',
    border: 'none',
    backgroundColor: '#F5F5F5',
    cursor: 'pointer',
    fontSize: '16px',
  },
  qtyValue: {
    width: '40px',
    textAlign: 'center',
    fontSize: '14px',
    fontWeight: '600',
  },
  itemTotal: {
    textAlign: 'right',
  },
  totalPrice: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#4A148C',
    marginBottom: '10px',
  },
  removeBtn: {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#e74c3c',
    cursor: 'pointer',
    fontSize: '14px',
  },
  continueLink: {
    display: 'block',
    marginTop: '20px',
    color: '#7B1FA2',
    textDecoration: 'none',
    fontSize: '14px',
  },
  summarySection: {
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '30px',
    height: 'fit-content',
    position: 'sticky',
    top: '100px',
  },
  summaryTitle: {
    fontSize: '20px',
    marginBottom: '25px',
    color: '#4A148C',
  },
  summaryRow: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '15px',
    color: '#666',
    fontSize: '15px',
  },
  freeShipping: {
    color: '#2ecc71',
    fontWeight: '600',
  },
  divider: {
    height: '1px',
    backgroundColor: '#eee',
    margin: '20px 0',
  },
  totalRow: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '25px',
  },
  totalLabel: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#4A148C',
  },
  totalAmount: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#FF7043',
  },
  checkoutBtn: {
    width: '100%',
    padding: '15px',
    backgroundColor: '#FF7043',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    marginBottom: '15px',
  },
  secure: {
    textAlign: 'center',
    color: '#666',
    fontSize: '14px',
  },
};

export default Cart;
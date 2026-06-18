import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${searchQuery}`);
    }
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.container}>
        <Link to="/" style={styles.logo}>
          <span style={styles.logoIcon}>🛍️</span>
          <span style={styles.logoText}>VENDOORA</span>
        </Link>

        <form onSubmit={handleSearch} style={styles.searchForm}>
          <input
            type="text"
            placeholder="Search products, brands and more..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={styles.searchInput}
          />
          <button type="submit" style={styles.searchButton}>🔍</button>
        </form>

        <div style={styles.navLinks}>
          <Link to="/" style={styles.link}>Home</Link>
          <Link to="/products" style={styles.link}>Products</Link>
          <Link to="/cart" style={styles.cartLink}>
            🛒 <span style={styles.cartBadge}>2</span>
          </Link>
          <Link to="/login" style={styles.loginBtn}>Login</Link>
        </div>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    backgroundColor: '#7B1FA2',
    padding: '12px 0',
    boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
  container: {
    maxWidth: '1400px',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 20px',
    gap: '20px',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
  },
  logoIcon: {
    fontSize: '28px',
  },
  logoText: {
    color: '#FF7043',
    fontSize: '24px',
    fontWeight: 'bold',
    letterSpacing: '2px',
  },
  searchForm: {
    display: 'flex',
    flex: 1,
    maxWidth: '600px',
    margin: '0 20px',
  },
  searchInput: {
    flex: 1,
    padding: '12px 15px',
    border: 'none',
    borderRadius: '4px 0 0 4px',
    fontSize: '14px',
    outline: 'none',
  },
  searchButton: {
    padding: '12px 20px',
    backgroundColor: '#FF7043',
    border: 'none',
    borderRadius: '0 4px 4px 0',
    cursor: 'pointer',
    fontSize: '16px',
  },
  navLinks: {
    display: 'flex',
    alignItems: 'center',
    gap: '25px',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '15px',
    fontWeight: '500',
  },
  cartLink: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '18px',
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
  },
  cartBadge: {
    backgroundColor: '#FF7043',
    color: 'white',
    borderRadius: '50%',
    padding: '2px 8px',
    fontSize: '12px',
    fontWeight: 'bold',
  },
  loginBtn: {
    backgroundColor: '#FF7043',
    color: 'white',
    padding: '10px 25px',
    borderRadius: '4px',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: '600',
  },
};

export default Navbar;
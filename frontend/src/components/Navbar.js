import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [allProducts, setAllProducts] = useState([]);
  const navigate = useNavigate();
  const searchRef = useRef(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, 'products'));
      const products = querySnapshot.docs.map(doc => doc.data().name);
      setAllProducts(products);
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    if (searchQuery.length > 0) {
      const filtered = allProducts.filter(name => 
        name.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5);
      setSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [searchQuery, allProducts]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
      setShowSuggestions(false);
    }
  };

  const clearSearch = () => {
    setSearchQuery('');
    setSuggestions([]);
    setShowSuggestions(false);
    navigate('/products');
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    setShowSuggestions(false);
    navigate(`/products?search=${encodeURIComponent(suggestion)}`);
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.container}>
        <Link to="/" style={styles.logo}>
          <span style={styles.logoIcon}>🛍️</span>
          <span style={styles.logoText}>VENDOORA</span>
        </Link>

        <div style={styles.searchWrapper} ref={searchRef}>
          <form onSubmit={handleSearch} style={styles.searchForm}>
            <input
              type="text"
              placeholder="Search products, brands and more..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => searchQuery.length > 0 && setShowSuggestions(true)}
              style={styles.searchInput}
            />
            {searchQuery && (
              <button type="button" onClick={clearSearch} style={styles.clearBtn}>
                ❌
              </button>
            )}
            <button type="submit" style={styles.searchButton}>🔍</button>
          </form>

          {showSuggestions && suggestions.length > 0 && (
            <div style={styles.suggestionsDropdown}>
              {suggestions.map((suggestion, index) => (
                <div 
                  key={index} 
                  style={styles.suggestionItem}
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  🔍 {suggestion}
                </div>
              ))}
            </div>
          )}
        </div>

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
  searchWrapper: {
    position: 'relative',
    flex: 1,
    maxWidth: '600px',
    margin: '0 20px',
  },
  searchForm: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  searchInput: {
    flex: 1,
    padding: '12px 15px',
    border: 'none',
    borderRadius: '4px 0 0 4px',
    fontSize: '14px',
    outline: 'none',
  },
  clearBtn: {
    padding: '12px 10px',
    backgroundColor: 'white',
    border: 'none',
    cursor: 'pointer',
    fontSize: '14px',
    color: '#999',
  },
  searchButton: {
    padding: '12px 20px',
    backgroundColor: '#FF7043',
    border: 'none',
    borderRadius: '0 4px 4px 0',
    cursor: 'pointer',
    fontSize: '16px',
  },
  suggestionsDropdown: {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    backgroundColor: 'white',
    borderRadius: '0 0 8px 8px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
    zIndex: 1001,
    overflow: 'hidden',
  },
  suggestionItem: {
    padding: '12px 15px',
    cursor: 'pointer',
    borderBottom: '1px solid #eee',
    fontSize: '14px',
    color: '#333',
    transition: 'background-color 0.2s',
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
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Search, Menu, X, User, Heart, Bell } from 'lucide-react';

const Navbar = ({ cartCount = 0 }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  const categories = ['All category', 'Hot offers', 'Gift boxes', 'Projects', 'Menu item', 'Help'];

  return (
    <div className="bg-white border-b">
      {/* Top bar */}
      <div className="bg-gray-50 text-xs text-gray-500 py-2 border-b">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-4">
            <span>Hi, User</span>
            <span>USD</span>
            <span>Ship to</span>
          </div>
          <div className="flex gap-4">
            <Link to="/login" className="hover:text-blue-500">Sign in</Link>
            <Link to="/signup" className="hover:text-blue-500">Register</Link>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">B</span>
            </div>
            <span className="text-xl font-bold text-blue-500">Brand</span>
          </Link>

          {/* Search bar */}
          <form onSubmit={handleSearch} className="flex-1 max-w-2xl flex">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4 pr-4 py-2.5 border border-gray-300 rounded-l-md focus:outline-none focus:border-blue-500 text-sm"
              />
            </div>
            <select className="border-y border-r border-gray-300 px-3 py-2.5 text-sm text-gray-600 bg-gray-50 focus:outline-none">
              <option>All category</option>
            </select>
            <button type="submit" className="bg-blue-500 text-white px-6 py-2.5 rounded-r-md hover:bg-blue-600 font-medium">
              Search
            </button>
          </form>

          {/* Right icons */}
          <div className="flex items-center gap-5">
            <Link to="/" className="flex flex-col items-center text-gray-500 hover:text-blue-500">
              <User size={20} />
              <span className="text-xs mt-0.5">Profile</span>
            </Link>
            <Link to="/" className="flex flex-col items-center text-gray-500 hover:text-blue-500">
              <Heart size={20} />
              <span className="text-xs mt-0.5">Wishlist</span>
            </Link>
            <Link to="/cart" className="flex flex-col items-center text-gray-500 hover:text-blue-500 relative">
              <ShoppingCart size={20} />
              <span className="text-xs mt-0.5">My cart</span>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            <Link to="/" className="flex flex-col items-center text-gray-500 hover:text-blue-500">
              <Bell size={20} />
              <span className="text-xs mt-0.5">Message</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Category nav */}
      <div className="border-t bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="hidden md:flex items-center gap-6 py-2 text-sm">
            <button className="flex items-center gap-2 font-medium text-gray-700 hover:text-blue-500">
              <Menu size={16} /> All category
            </button>
            {categories.slice(1).map((cat) => (
              <Link key={cat} to="/products" className="text-gray-600 hover:text-blue-500">
                {cat}
              </Link>
            ))}
            <div className="ml-auto flex items-center gap-4 text-sm text-gray-500">
              <span>English, USD</span>
              <span>Ship to</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t p-4">
          {categories.map((cat) => (
            <Link key={cat} to="/products" className="block py-2 text-gray-700" onClick={() => setIsMenuOpen(false)}>
              {cat}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
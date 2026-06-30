import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart } from 'lucide-react';

const ProductCard = ({ product, onAddToCart, view = 'grid' }) => {
  if (view === 'list') {
    return (
      <div className="bg-white rounded-lg border p-4 flex gap-4 hover:shadow-md transition-shadow">
        <Link to={`/product/${product.id}`} className="w-48 flex-shrink-0">
          <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-lg" />
        </Link>
        <div className="flex-1 py-2">
          <h3 className="font-medium text-gray-900 mb-1">{product.name}</h3>
          <div className="flex items-center gap-2 mb-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-sm">★</span>
              ))}
            </div>
            <span className="text-gray-400 text-xs">7.5</span>
            <span className="text-gray-400 text-xs">154 orders</span>
            <span className="text-green-500 text-xs">Free Shipping</span>
          </div>
          <p className="text-gray-500 text-sm mb-3 line-clamp-2">{product.description}</p>
          <Link to={`/product/${product.id}`} className="text-blue-500 text-sm hover:underline">View details</Link>
        </div>
        <div className="text-right py-2">
          <p className="text-lg font-bold text-gray-900">${product.price}</p>
          <button
            onClick={() => onAddToCart(product)}
            className="mt-2 text-blue-500 hover:bg-blue-50 p-2 rounded-full"
          >
            <Heart size={20} />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg border p-3 hover:shadow-md transition-shadow group">
      <div className="relative">
        <Link to={`/product/${product.id}`}>
          <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-lg" />
        </Link>
        <button
          onClick={() => onAddToCart(product)}
          className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Heart size={16} className="text-gray-400 hover:text-red-500" />
        </button>
      </div>
      
      <div className="mt-3">
        <div className="flex items-center gap-1 mb-1">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-xs">★</span>
            ))}
          </div>
          <span className="text-gray-400 text-xs">7.5</span>
        </div>
        <Link to={`/product/${product.id}`}>
          <h3 className="font-medium text-sm text-gray-900 mb-1 hover:text-blue-500 line-clamp-2">{product.name}</h3>
        </Link>
        <div className="flex items-center gap-2 mb-2">
          <span className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded">154 sold</span>
          <span className="text-green-500 text-xs">Free Shipping</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-bold text-gray-900">${product.price}</span>
          <button
            onClick={() => onAddToCart(product)}
            className="bg-blue-500 text-white px-3 py-1.5 rounded-md text-sm hover:bg-blue-600 flex items-center gap-1"
          >
            <ShoppingCart size={14} />
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
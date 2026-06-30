import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { LayoutGrid, List, ChevronDown, Filter } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const allProducts = [
  { id: 1, name: "Canon Cmera EOS 2000, Black 10x zoom", price: 998.00, image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore", category: "Electronics", stock: 15 },
  { id: 2, name: "GoPro HERO6 4K Action Camera - Black", price: 998.00, image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore", category: "Electronics", stock: 8 },
  { id: 3, name: "GoPro HERO6 4K Action Camera - Black", price: 998.00, image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore", category: "Electronics", stock: 20 },
  { id: 4, name: "GoPro HERO6 4K Action Camera - Black", price: 998.00, image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore", category: "Electronics", stock: 12 },
  { id: 5, name: "GoPro HERO6 4K Action Camera - Black", price: 998.00, image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore", category: "Electronics", stock: 5 },
  { id: 6, name: "GoPro HERO6 4K Action Camera - Black", price: 998.00, image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore", category: "Electronics", stock: 18 },
  { id: 7, name: "GoPro HERO6 4K Action Camera - Black", price: 998.00, image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore", category: "Electronics", stock: 25 },
  { id: 8, name: "GoPro HERO6 4K Action Camera - Black", price: 998.00, image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore", category: "Electronics", stock: 30 },
];

const sidebarFilters = {
  Category: ['Mobile accessory', 'Electronics', 'Smartphones', 'Modern tech'],
  Brands: ['Samsung', 'Apple', 'Huawei', 'Pocco', 'Lenovo'],
  Features: ['Metallic', 'Plastic cover', '8GB Ram', 'Super power', 'Large Memory'],
  'Price range': [],
  Condition: ['Any', 'Refurbished', 'Brand new', 'Old Items'],
  Ratings: [5, 4, 3, 2, 1],
};

const ProductsPage = ({ onAddToCart }) => {
  const [viewMode, setViewMode] = useState('grid');
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get('search') || '';

  let filtered = allProducts;
  if (searchQuery) {
    filtered = filtered.filter(p => 
      p.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-4">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-4">
        Home <span className="mx-2">›</span> Clothing <span className="mx-2">›</span> Menswear <span className="mx-2">›</span> Summer clothing
      </div>

      <div className="flex gap-6">
        {/* Sidebar */}
        <div className="hidden lg:block w-64 flex-shrink-0">
          <div className="bg-white rounded-lg border p-4">
            {Object.entries(sidebarFilters).map(([filterName, options]) => (
              <div key={filterName} className="mb-6">
                <h4 className="font-bold text-sm mb-3">{filterName}</h4>
                {filterName === 'Price range' ? (
                  <div className="space-y-2">
                    <div className="flex gap-2">
                      <input type="number" placeholder="Min" className="w-full border rounded px-2 py-1 text-sm" />
                      <input type="number" placeholder="Max" className="w-full border rounded px-2 py-1 text-sm" />
                    </div>
                    <button className="bg-blue-500 text-white px-4 py-1 rounded text-sm w-full hover:bg-blue-600">Apply</button>
                  </div>
                ) : filterName === 'Ratings' ? (
                  <div className="space-y-2">
                    {options.map((rating) => (
                      <label key={rating} className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="rounded" />
                        <div className="flex">
                          {[...Array(rating)].map((_, i) => (
                            <span key={i} className="text-yellow-400 text-sm">★</span>
                          ))}
                        </div>
                      </label>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-2">
                    {options.map((option) => (
                      <label key={option} className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm text-gray-600">{option}</span>
                      </label>
                    ))}
                    {options.length > 3 && (
                      <button className="text-blue-500 text-sm hover:underline">See all</button>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1">
          {/* Header */}
          <div className="bg-white rounded-lg border p-4 mb-4 flex items-center justify-between">
            <div>
              <span className="text-gray-500 text-sm">12,911 items in </span>
              <span className="font-medium">Mobile accessory</span>
            </div>
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" className="rounded" />
                Verified only
              </label>
              <select className="border rounded px-3 py-1.5 text-sm">
                <option>Featured</option>
              </select>
              <div className="flex border rounded">
                <button 
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-gray-100' : ''}`}
                >
                  <LayoutGrid size={16} />
                </button>
                <button 
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-gray-100' : ''}`}
                >
                  <List size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Active filters */}
          <div className="flex gap-2 mb-4 flex-wrap">
            {['Huawei', 'Apple', '64GB'].map((filter) => (
              <span key={filter} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                {filter} <button className="hover:text-blue-900">×</button>
              </span>
            ))}
          </div>

          {/* Products */}
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} view="list" />
              ))}
            </div>
          )}

          {/* Pagination */}
          <div className="flex items-center justify-between mt-8 bg-white rounded-lg border p-4">
            <select className="border rounded px-3 py-1.5 text-sm">
              <option>Show 10</option>
            </select>
            <div className="flex gap-2">
              {[1, 2, 3, '...', 9].map((page, i) => (
                <button key={i} className={`w-8 h-8 rounded flex items-center justify-center text-sm ${page === 1 ? 'bg-blue-500 text-white' : 'border hover:bg-gray-50'}`}>
                  {page}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
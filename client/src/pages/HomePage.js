import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const sampleProducts = [
  { id: 1, name: "Canon Cmera EOS 2000, Black 10x zoom", price: 998.00, image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore", category: "Electronics", stock: 15 },
  { id: 2, name: "GoPro HERO6 4K Action Camera - Black", price: 998.00, image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore", category: "Electronics", stock: 8 },
  { id: 3, name: "GoPro HERO6 4K Action Camera - Black", price: 998.00, image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore", category: "Electronics", stock: 20 },
  { id: 4, name: "GoPro HERO6 4K Action Camera - Black", price: 998.00, image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore", category: "Electronics", stock: 12 },
];

const deals = [
  { id: 1, name: "Smart watches", price: 19.00, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200", discount: "-25%" },
  { id: 2, name: "Smart watches", price: 19.00, image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=200", discount: "-25%" },
  { id: 3, name: "Smart watches", price: 19.00, image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=200", discount: "-25%" },
];

const categories = [
  { name: "Soft chairs", price: "From USD 19", image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=150" },
  { name: "Sofa & chair", price: "From USD 19", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=150" },
  { name: "Kitchen dishes", price: "From USD 19", image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=150" },
  { name: "Smart watches", price: "From USD 19", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=150" },
  { name: "Kitchen mixer", price: "From USD 100", image: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=150" },
  { name: "Blenders", price: "From USD 39", image: "https://images.unsplash.com/photo-1570222094114-28a9d88a27e6?w=150" },
  { name: "Home appliance", price: "From USD 19", image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=150" },
  { name: "Coffee maker", price: "From USD 10", image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=150" },
];

const HomePage = ({ onAddToCart }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-4">
      {/* Main banner area */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-8">
        {/* Sidebar categories */}
        <div className="hidden lg:block bg-white rounded-lg border p-4">
          <ul className="space-y-3 text-sm">
            {['Automobiles', 'Clothes and wear', 'Home interiors', 'Computer and tech', 'Tools, equipments', 'Sports and outdoor', 'Animal and pets', 'Machinery tools', 'More category'].map((cat) => (
              <li key={cat} className="text-gray-600 hover:text-blue-500 cursor-pointer flex items-center justify-between">
                {cat}
                <ChevronRight size={14} />
              </li>
            ))}
          </ul>
        </div>

        {/* Main banner */}
        <div className="lg:col-span-2 bg-teal-100 rounded-lg p-8 relative overflow-hidden">
          <div className="relative z-10">
            <p className="text-gray-600 text-sm mb-2">Latest trending</p>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">Electronic items</h2>
            <Link to="/products" className="inline-flex items-center bg-white text-gray-900 px-4 py-2 rounded-md text-sm font-medium mt-4 hover:bg-gray-50">
              Learn more
            </Link>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400" 
            alt="Headphones"
            className="absolute right-0 top-0 h-full w-1/2 object-cover opacity-80"
          />
        </div>

        {/* Right side boxes */}
        <div className="space-y-4">
          <div className="bg-orange-100 rounded-lg p-4">
            <p className="text-sm text-gray-600">Hi, let's get stated</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm mt-2 hover:bg-blue-600">Join now</button>
          </div>
          <div className="bg-blue-500 rounded-lg p-4 text-white">
            <p className="font-medium">Get US $10 off with a new supplier</p>
          </div>
          <div className="bg-teal-500 rounded-lg p-4 text-white">
            <p className="font-medium">Send quotes with supplier preferences</p>
          </div>
        </div>
      </div>

      {/* Deals and offers */}
      <div className="bg-white rounded-lg border p-4 mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-bold text-lg">Deals and offers</h3>
            <p className="text-gray-500 text-sm">Electronic equipments</p>
          </div>
          <div className="flex gap-2">
            {['13', '34', '56'].map((num, i) => (
              <div key={i} className="bg-gray-800 text-white rounded-lg p-2 text-center min-w-[50px]">
                <div className="text-lg font-bold">{num}</div>
                <div className="text-xs text-gray-400">{['Days', 'Hr', 'Min'][i]}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {deals.map((deal) => (
            <div key={deal.id} className="text-center p-3 border rounded-lg hover:shadow-md transition-shadow">
              <img src={deal.image} alt={deal.name} className="w-20 h-20 object-cover mx-auto rounded-lg mb-2" />
              <p className="text-sm font-medium">{deal.name}</p>
              <span className="inline-block bg-red-100 text-red-600 text-xs px-2 py-0.5 rounded mt-1">{deal.discount}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Home and outdoor */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-lg border p-4">
          <h3 className="font-bold text-lg mb-1">Home and outdoor</h3>
          <Link to="/products" className="text-blue-500 text-sm hover:underline">Source now</Link>
        </div>
        {categories.slice(0, 4).map((cat, i) => (
          <div key={i} className="bg-white rounded-lg border p-4 flex items-center justify-between hover:shadow-md transition-shadow">
            <div>
              <p className="font-medium text-sm">{cat.name}</p>
              <p className="text-gray-500 text-xs">{cat.price}</p>
            </div>
            <img src={cat.image} alt={cat.name} className="w-16 h-16 object-cover rounded" />
          </div>
        ))}
      </div>

      {/* Consumer electronics */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-lg border p-4">
          <h3 className="font-bold text-lg mb-1">Consumer electronics and gadgets</h3>
          <Link to="/products" className="text-blue-500 text-sm hover:underline">Source now</Link>
        </div>
        {categories.slice(4).map((cat, i) => (
          <div key={i} className="bg-white rounded-lg border p-4 flex items-center justify-between hover:shadow-md transition-shadow">
            <div>
              <p className="font-medium text-sm">{cat.name}</p>
              <p className="text-gray-500 text-xs">{cat.price}</p>
            </div>
            <img src={cat.image} alt={cat.name} className="w-16 h-16 object-cover rounded" />
          </div>
        ))}
      </div>

      {/* Send quote section */}
      <div className="bg-blue-500 rounded-lg p-8 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-white">
          <h3 className="text-xl font-bold mb-2">An easy way to send requests to all suppliers</h3>
          <p className="text-blue-100">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
        </div>
        <button className="bg-white text-blue-500 px-6 py-3 rounded-md font-medium hover:bg-gray-100">
          Send inquiry
        </button>
      </div>

      {/* Recommended items */}
      <div className="mb-8">
        <h3 className="font-bold text-lg mb-4">Recommended items</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {sampleProducts.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
          {sampleProducts.map((product) => (
            <ProductCard key={`dup-${product.id}`} product={{...product, id: product.id + 100}} onAddToCart={onAddToCart} />
          ))}
        </div>
      </div>

      {/* Extra services */}
      <div className="mb-8">
        <h3 className="font-bold text-lg mb-4">Our extra services</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { title: "Source from Industry Hubs", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=300" },
            { title: "Customize Your Products", image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=300" },
            { title: "Fast, reliable shipping by ocean or air", image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=300" },
            { title: "Product monitoring and inspection", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=300" },
          ].map((service, i) => (
            <div key={i} className="bg-white rounded-lg border overflow-hidden hover:shadow-md transition-shadow">
              <img src={service.image} alt={service.title} className="w-full h-32 object-cover" />
              <div className="p-4">
                <p className="font-medium text-sm">{service.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Suppliers */}
      <div className="mb-8">
        <h3 className="font-bold text-lg mb-4">Suppliers by region</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            { country: "Germany", flag: "🇩🇪" },
            { country: "France", flag: "🇫🇷" },
            { country: "United Kingdom", flag: "🇬🇧" },
            { country: "Italy", flag: "🇮🇹" },
            { country: "Canada", flag: "🇨🇦" },
          ].map((supplier, i) => (
            <div key={i} className="flex items-center gap-3 bg-white rounded-lg border p-3">
              <span className="text-2xl">{supplier.flag}</span>
              <div>
                <p className="font-medium text-sm">{supplier.country}</p>
                <p className="text-gray-500 text-xs">shopname.ae</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
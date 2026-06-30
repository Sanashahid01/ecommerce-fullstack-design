import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t mt-12">
      {/* Newsletter */}
      <div className="bg-blue-500 py-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-white">
            <h3 className="font-bold text-lg">Subscribe on our newsletter</h3>
            <p className="text-blue-100 text-sm">Get daily news on upcoming offers from many suppliers all over the world</p>
          </div>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Email" 
              className="px-4 py-2 rounded-md w-64 text-sm focus:outline-none"
            />
            <button className="bg-blue-700 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-800">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <span className="text-xl font-bold text-blue-500">Brand</span>
            </div>
            <p className="text-gray-500 text-sm mb-4">Best information about the company goes here but now lorem ipsum is</p>
            <div className="flex gap-3">
              {['facebook', 'twitter', 'linkedin', 'instagram', 'youtube'].map((social) => (
                <div key={social} className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-gray-500 text-xs">●</span>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-sm">About</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-blue-500">About Us</a></li>
              <li><a href="#" className="hover:text-blue-500">Find store</a></li>
              <li><a href="#" className="hover:text-blue-500">Categories</a></li>
              <li><a href="#" className="hover:text-blue-500">Blogs</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-sm">Partnership</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-blue-500">About Us</a></li>
              <li><a href="#" className="hover:text-blue-500">Find store</a></li>
              <li><a href="#" className="hover:text-blue-500">Categories</a></li>
              <li><a href="#" className="hover:text-blue-500">Blogs</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-sm">Information</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-blue-500">Help Center</a></li>
              <li><a href="#" className="hover:text-blue-500">Money Refund</a></li>
              <li><a href="#" className="hover:text-blue-500">Shipping</a></li>
              <li><a href="#" className="hover:text-blue-500">Contact us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-sm">For users</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-blue-500">Login</a></li>
              <li><a href="#" className="hover:text-blue-500">Register</a></li>
              <li><a href="#" className="hover:text-blue-500">Settings</a></li>
              <li><a href="#" className="hover:text-blue-500">My Orders</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2023 Ecommerce.</p>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <span>English</span>
            <span>▼</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
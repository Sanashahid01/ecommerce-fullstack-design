import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, Heart, ChevronRight } from 'lucide-react';

const CartPage = ({ cart, onUpdateQuantity, onRemoveFromCart }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 10.00;
  const tax = 7.00;
  const finalTotal = total + shipping + tax;

  const savedItems = [
    { id: 201, name: "Regular Fit Resort Shirt", price: 57.70, image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=200" },
    { id: 202, name: "Regular Fit Resort Shirt", price: 57.70, image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=200" },
    { id: 203, name: "Regular Fit Resort Shirt", price: 57.70, image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=200" },
    { id: 204, name: "Regular Fit Resort Shirt", price: 57.70, image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=200" },
  ];

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg border p-12 text-center">
          <h2 className="text-xl font-bold mb-2">Your cart is empty</h2>
          <p className="text-gray-500 mb-4">Add some items to get started</p>
          <Link to="/products" className="bg-blue-500 text-white px-6 py-2 rounded-lg inline-block hover:bg-blue-600">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-4">
      <h1 className="text-xl font-bold mb-4">My cart ({cart.length})</h1>
      
      <div className="flex gap-6">
        <div className="flex-1">
          {/* Cart items */}
          <div className="space-y-4">
            {cart.map(item => (
              <div key={item.id} className="bg-white rounded-lg border p-4">
                <div className="flex gap-4">
                  <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-lg" />
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <h3 className="font-medium text-sm">{item.name}</h3>
                      <span className="font-bold">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                    <p className="text-gray-500 text-xs mb-2">Size: medium, Color: blue, Material: Plastic<br/>Seller: Artel Market</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border rounded-lg">
                        <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)} className="p-2 hover:bg-gray-50">
                          <Minus size={14} />
                        </button>
                        <span className="px-3 text-sm">{item.quantity}</span>
                        <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)} className="p-2 hover:bg-gray-50">
                          <Plus size={14} />
                        </button>
                      </div>
                      <div className="flex gap-3">
                        <button className="text-blue-500 text-sm hover:underline">Move to wishlist</button>
                        <button onClick={() => onRemoveFromCart(item.id)} className="text-red-500 text-sm hover:underline">Remove</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Back to shop */}
          <div className="mt-4">
            <Link to="/products" className="flex items-center gap-2 text-blue-500 hover:underline">
              <ChevronRight size={16} className="rotate-180" /> Back to shop
            </Link>
          </div>

          {/* Saved for later */}
          <div className="mt-8">
            <h3 className="font-bold mb-4">Saved for later</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {savedItems.map((item) => (
                <div key={item.id} className="bg-white rounded-lg border p-3">
                  <img src={item.image} alt={item.name} className="w-full h-32 object-cover rounded-lg mb-2" />
                  <p className="text-sm font-medium">${item.price}</p>
                  <p className="text-gray-500 text-xs mb-2">{item.name}</p>
                  <div className="flex gap-2">
                    <button className="text-blue-500 text-xs hover:underline">Move to cart</button>
                    <button className="text-red-500 text-xs hover:underline">Remove</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Order summary */}
        <div className="w-80 flex-shrink-0">
          <div className="bg-white rounded-lg border p-4 mb-4">
            <h3 className="font-bold mb-4">Have a coupon?</h3>
            <div className="flex gap-2">
              <input type="text" placeholder="Add coupon" className="flex-1 border rounded-lg px-3 py-2 text-sm" />
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-600">Apply</button>
            </div>
          </div>

          <div className="bg-white rounded-lg border p-4">
            <h3 className="font-bold mb-4">Checkout</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-gray-500">
                <span>Subtotal:</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-500">
                <span>Discount:</span>
                <span className="text-red-500">- $0.00</span>
              </div>
              <div className="flex justify-between text-gray-500">
                <span>Tax:</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-500">
                <span>Shipping:</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="border-t pt-3 flex justify-between font-bold text-lg">
                <span>Total:</span>
                <span className="text-green-600">${finalTotal.toFixed(2)}</span>
              </div>
            </div>
            <button className="w-full bg-green-500 text-white py-3 rounded-lg font-medium mt-4 hover:bg-green-600">
              Checkout ({cart.length} items)
            </button>
            <div className="flex justify-center gap-4 mt-4 text-xs text-gray-500">
              <span>💳 Secure payment</span>
              <span>🎧 Customer support</span>
              <span>🚚 Free delivery</span>
            </div>
          </div>
        </div>
      </div>

      {/* Discount banner */}
      <div className="mt-8 bg-blue-500 rounded-lg p-6 flex items-center justify-between">
        <div className="text-white">
          <h3 className="font-bold text-lg">Super discount on more than 100 USD</h3>
          <p className="text-blue-100 text-sm">Have you ever finally just write dummy info</p>
        </div>
        <button className="bg-orange-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-orange-600">
          Shop now
        </button>
      </div>
    </div>
  );
};

export default CartPage;
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Heart, Share2, Flag, ChevronRight, Star } from 'lucide-react';

const allProducts = [
  { id: 1, name: "Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle", price: 98.00, originalPrice: 120.00, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", category: "Electronics", stock: 15, supplier: "Guanjoi Trading LLC", rating: 4.5, reviews: 32 },
];

const relatedProducts = [
  { id: 101, name: "Apple Watch Series", price: 120.00, image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=200" },
  { id: 102, name: "Apple Watch Series", price: 120.00, image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=200" },
  { id: 103, name: "Apple Watch Series", price: 120.00, image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=200" },
  { id: 104, name: "Apple Watch Series", price: 120.00, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200" },
  { id: 105, name: "Apple Watch Series", price: 120.00, image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=200" },
];

const ProductDetailPage = ({ onAddToCart }) => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  
  const product = allProducts[0]; // For demo, using first product

  const images = [
    product.image,
    "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=200",
    "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=200",
    "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=200",
    "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=200",
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-4">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-4">
        Home <ChevronRight size={14} className="inline" /> Clothing <ChevronRight size={14} className="inline" /> Menswear <ChevronRight size={14} className="inline" /> Summer clothing
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left - Images */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg border p-4">
            <div className="flex gap-4">
              <div className="flex flex-col gap-2">
                {images.map((img, i) => (
                  <button 
                    key={i} 
                    onClick={() => setSelectedImage(i)}
                    className={`w-16 h-16 border-2 rounded-lg overflow-hidden ${selectedImage === i ? 'border-blue-500' : 'border-gray-200'}`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
              <div className="flex-1">
                <img src={images[selectedImage]} alt={product.name} className="w-full h-96 object-contain" />
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="bg-white rounded-lg border mt-4">
            <div className="flex border-b">
              {['Description', 'Reviews', 'Shipping', 'About seller'].map((tab, i) => (
                <button key={tab} className={`px-6 py-3 text-sm font-medium ${i === 0 ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'}`}>
                  {tab}
                </button>
              ))}
            </div>
            <div className="p-6">
              <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
              <div className="mt-4 space-y-2 text-sm">
                <div className="flex"><span className="w-32 text-gray-500">Model</span><span>Shirt 5407X</span></div>
                <div className="flex"><span className="w-32 text-gray-500">Certificate</span><span>ISO-8984212</span></div>
                <div className="flex"><span className="w-32 text-gray-500">Size</span><span>34mm x 450mm x 19mm</span></div>
                <div className="flex"><span className="w-32 text-gray-500">Memory</span><span>36GB</span></div>
              </div>
            </div>
          </div>

          {/* You may like */}
          <div className="mt-6">
            <h3 className="font-bold mb-4">You may also like</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {relatedProducts.map((item) => (
                <div key={item.id} className="bg-white rounded-lg border p-3">
                  <img src={item.image} alt={item.name} className="w-full h-32 object-cover rounded-lg mb-2" />
                  <p className="text-sm font-medium">{item.name}</p>
                  <p className="text-gray-500 text-xs">From USD {item.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right - Details */}
        <div className="space-y-4">
          <div className="bg-white rounded-lg border p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-green-500 text-white text-xs px-2 py-0.5 rounded">✓ In stock</span>
            </div>
            <h1 className="text-xl font-bold mb-2">{product.name}</h1>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="text-blue-500 text-sm">{product.reviews} reviews</span>
              <span className="text-gray-400 text-sm">154 sold</span>
              <button className="ml-auto"><Heart size={20} className="text-gray-400 hover:text-red-500" /></button>
            </div>

            <div className="bg-orange-50 rounded-lg p-4 mb-4">
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                <span className="text-gray-400 line-through">${product.originalPrice}</span>
                <span className="text-orange-500 text-sm">50-100 pcs</span>
              </div>
              <div className="text-sm text-gray-500 mt-1">$90.00 / 100+ pcs</div>
            </div>

            <div className="space-y-3 mb-4 text-sm">
              <div className="flex justify-between"><span className="text-gray-500">Price:</span><span>Negotiable</span></div>
              <div className="flex justify-between"><span className="text-gray-500">Type:</span><span>Classic shoes</span></div>
              <div className="flex justify-between"><span className="text-gray-500">Material:</span><span>Plastic material</span></div>
              <div className="flex justify-between"><span className="text-gray-500">Design:</span><span>Modern nice</span></div>
            </div>

            <div className="border-t pt-4 mb-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center text-lg font-bold text-gray-500">R</div>
                <div>
                  <p className="font-medium text-sm">{product.supplier}</p>
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <span>🇩🇪 Germany</span>
                    <span>✓ Verified</span>
                    <span>🚢 Shipping</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => onAddToCart({ ...product, quantity })}
                className="flex-1 bg-blue-500 text-white py-3 rounded-lg font-medium hover:bg-blue-600"
              >
                Send inquiry
              </button>
            </div>
            <button className="w-full mt-2 text-blue-500 py-2 hover:bg-blue-50 rounded-lg">
              Seller's profile
            </button>
          </div>

          <div className="bg-white rounded-lg border p-4">
            <button className="flex items-center gap-2 text-sm text-gray-600 w-full py-2 hover:text-blue-500">
              <Heart size={16} /> Save for later
            </button>
          </div>
        </div>
      </div>

      {/* Related products */}
      <div className="mt-8">
        <h3 className="font-bold mb-4">Related products</h3>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {relatedProducts.map((item) => (
            <div key={item.id} className="bg-white rounded-lg border p-3">
              <img src={item.image} alt={item.name} className="w-full h-32 object-cover rounded-lg mb-2" />
              <p className="text-sm font-medium">{item.name}</p>
              <p className="text-gray-500 text-xs">From USD {item.price}</p>
            </div>
          ))}
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

export default ProductDetailPage;
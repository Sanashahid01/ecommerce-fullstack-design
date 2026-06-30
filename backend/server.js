const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Products with working image URLs
let products = [
  { 
    id: 1, 
    name: 'Lakme Foundation', 
    price: 1299, 
    originalPrice: 1899, 
    image: 'https://via.placeholder.com/400x300/0066cc/ffffff?text=Lakme+Foundation',
    description: 'Long-lasting matte foundation with SPF 15. Provides full coverage and natural finish.',
    category: 'Makeup & Beauty', 
    stock: 45 
  },
  { 
    id: 2, 
    name: 'Gold Plated Earrings', 
    price: 899, 
    originalPrice: 1499, 
    image: 'https://via.placeholder.com/400x300/e94560/ffffff?text=Gold+Earrings',
    description: 'Elegant 18K gold plated earrings with intricate design.',
    category: 'Jewelry', 
    stock: 28 
  },
  { 
    id: 3, 
    name: 'Wireless Bluetooth Headphones', 
    price: 2499, 
    originalPrice: 3999, 
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop',
    description: 'Premium wireless headphones with active noise cancellation.',
    category: 'Electronics', 
    stock: 15 
  },
  { 
    id: 4, 
    name: 'Men\'s Casual Shirt', 
    price: 1199, 
    originalPrice: 1999, 
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=300&fit=crop',
    description: 'Comfortable cotton casual shirt with modern fit.',
    category: 'Fashion', 
    stock: 50 
  },
  { 
    id: 5, 
    name: 'Running Shoes', 
    price: 3499, 
    originalPrice: 4999, 
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop',
    description: 'Lightweight running shoes with cushioned sole.',
    category: 'Footwear', 
    stock: 32 
  },
  { 
    id: 6, 
    name: 'Smart Watch', 
    price: 4999, 
    originalPrice: 6999, 
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop',
    description: 'Feature-rich smartwatch with heart rate monitor.',
    category: 'Electronics', 
    stock: 20 
  },
  { 
    id: 7, 
    name: 'Leather Handbag', 
    price: 2999, 
    originalPrice: 4499, 
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=300&fit=crop',
    description: 'Genuine leather handbag with multiple compartments.',
    category: 'Fashion', 
    stock: 18 
  },
  { 
    id: 8, 
    name: 'Organic Face Cream', 
    price: 799, 
    originalPrice: 1299, 
    image: 'https://images.unsplash.com/photo-1556228720-195a1e7f4e2e?w=400&h=300&fit=crop',
    description: 'Natural organic face cream with aloe vera.',
    category: 'Makeup & Beauty', 
    stock: 60 
  },
  { 
    id: 9, 
    name: 'Silver Necklace', 
    price: 1599, 
    originalPrice: 2499, 
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop',
    description: 'Sterling silver necklace with pendant.',
    category: 'Jewelry', 
    stock: 25 
  },
  { 
    id: 10, 
    name: 'Yoga Mat', 
    price: 1299, 
    originalPrice: 1999, 
    image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&h=300&fit=crop',
    description: 'Non-slip yoga mat with extra cushioning.',
    category: 'Sports', 
    stock: 40 
  },
  { 
    id: 11, 
    name: 'Laptop Backpack', 
    price: 1899, 
    originalPrice: 2999, 
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64e6e72?w=400&h=300&fit=crop',
    description: 'Water-resistant laptop backpack fits up to 15.6 inch.',
    category: 'Accessories', 
    stock: 35 
  },
  { 
    id: 12, 
    name: 'Ceramic Coffee Mug Set', 
    price: 699, 
    originalPrice: 1199, 
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&h=300&fit=crop',
    description: 'Set of 4 ceramic coffee mugs with modern design.',
    category: 'Home & Living', 
    stock: 45 
  }
];

// READ all products
app.get('/api/products', (req, res) => {
  res.json(products);
});

// SEARCH products
app.get('/api/products/search', (req, res) => {
  const { q, category } = req.query;
  let results = products;
  
  if (q) {
    results = results.filter(p => 
      p.name.toLowerCase().includes(q.toLowerCase()) ||
      p.description.toLowerCase().includes(q.toLowerCase())
    );
  }
  
  if (category) {
    results = results.filter(p => p.category === category);
  }
  
  res.json(results);
});

// READ single product
app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ message: 'Product not found' });
  res.json(product);
});

// CREATE product
app.post('/api/products', (req, res) => {
  const { name, price, image, description, category, stock } = req.body;
  
  if (!name || !price || !image || !description || !category || !stock) {
    return res.status(400).json({ message: 'All fields required' });
  }
  
  const newProduct = {
    id: products.length + 1,
    name,
    price: parseFloat(price),
    originalPrice: parseFloat(price) * 1.5,
    image,
    description,
    category,
    stock: parseInt(stock)
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// UPDATE product
app.put('/api/products/:id', (req, res) => {
  const index = products.findIndex(p => p.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: 'Product not found' });
  
  products[index] = { ...products[index], ...req.body };
  res.json(products[index]);
});

// DELETE product
app.delete('/api/products/:id', (req, res) => {
  const index = products.findIndex(p => p.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: 'Product not found' });
  
  products.splice(index, 1);
  res.json({ message: 'Product deleted successfully' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// In-memory products (for demo - in real app, use Firebase)
let products = [
  { id: 1, name: 'Lakme Foundation', price: 1299, originalPrice: 1899, category: 'Makeup & Beauty', stock: 45 },
  { id: 2, name: 'Gold Plated Earrings', price: 899, originalPrice: 1499, category: 'Jewelry', stock: 28 },
];

// READ all products
app.get('/api/products', (req, res) => {
  res.json(products);
});

// READ single product
app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ message: 'Product not found' });
  res.json(product);
});

// CREATE product
app.post('/api/products', (req, res) => {
  const newProduct = {
    id: products.length + 1,
    ...req.body
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
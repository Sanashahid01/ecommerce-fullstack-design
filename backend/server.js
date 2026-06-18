const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Sample API route
app.get('/api/products', (req, res) => {
  res.json([
    { id: 1, name: 'Sample Product', price: 29.99, category: 'Electronics', stock: 10 }
  ]);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Server running on port ' + PORT));
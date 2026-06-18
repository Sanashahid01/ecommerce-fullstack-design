import React from 'react';
import { useParams, Link } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams();

  const products = [
    // Makeup & Beauty
    { id: 1, name: 'Lakme Foundation', price: 1299, originalPrice: 1899, rating: 4.6, reviews: 342, stock: 45, category: 'Makeup & Beauty', description: 'Long-lasting matte foundation with SPF 15. Perfect for Pakistani skin tones. Provides full coverage and natural finish.', image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=400&fit=crop' },
    { id: 2, name: 'Maybelline Lipstick Set', price: 899, originalPrice: 1499, rating: 4.7, reviews: 567, stock: 32, category: 'Makeup & Beauty', description: 'Set of 5 vibrant lipsticks. Long-lasting, moisturizing formula with rich pigmentation. Perfect for daily wear and parties.', image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=600&h=400&fit=crop' },
    { id: 3, name: 'Garnier Face Wash', price: 499, originalPrice: 799, rating: 4.5, reviews: 234, stock: 67, category: 'Makeup & Beauty', description: 'Deep cleansing face wash with natural extracts. Removes dirt, oil and impurities. Suitable for all skin types.', image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&h=400&fit=crop' },
    { id: 4, name: 'Huda Beauty Eyeshadow', price: 2499, originalPrice: 3999, rating: 4.8, reviews: 189, stock: 15, category: 'Makeup & Beauty', description: '18-color eyeshadow palette with highly pigmented shades. Matte and shimmer finishes for versatile looks.', image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&h=400&fit=crop' },

    // Jewelry
    { id: 5, name: 'Gold Plated Earrings', price: 899, originalPrice: 1499, rating: 4.8, reviews: 567, stock: 28, category: 'Jewelry', description: 'Elegant gold-plated earrings with intricate design. Perfect for weddings and special occasions. Anti-tarnish coating.', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=400&fit=crop' },
    { id: 6, name: 'Silver Bracelet Set', price: 1299, originalPrice: 2199, rating: 4.6, reviews: 432, stock: 34, category: 'Jewelry', description: 'Set of 3 sterling silver bracelets. Adjustable size, hypoallergenic. Perfect for daily wear and gifting.', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220e?w=600&h=400&fit=crop' },
    { id: 7, name: 'Artificial Necklace', price: 699, originalPrice: 1199, rating: 4.5, reviews: 123, stock: 56, category: 'Jewelry', description: 'Stunning artificial necklace with matching earrings. Kundan style design. Perfect for traditional Pakistani outfits.', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=400&fit=crop' },
    { id: 8, name: 'Bridal Jewelry Set', price: 3499, originalPrice: 5999, rating: 4.9, reviews: 89, stock: 8, category: 'Jewelry', description: 'Complete bridal jewelry set including necklace, earrings, maang tikka and bangles. Premium quality with gold plating.', image: 'https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?w=600&h=400&fit=crop' },

    // Women Fashion
    { id: 9, name: 'Ladies Cardigan', price: 1599, originalPrice: 2499, rating: 4.5, reviews: 234, stock: 42, category: 'Women Fashion', description: 'Soft knit cardigan with button closure. Available in multiple colors. Perfect for winter and AC environments.', image: 'https://images.unsplash.com/photo-1434389677669-e08b4dba3a65?w=600&h=400&fit=crop' },
    { id: 10, name: 'Printed Kurti', price: 1299, originalPrice: 1999, rating: 4.6, reviews: 567, stock: 38, category: 'Women Fashion', description: 'Cotton printed kurti with traditional Pakistani designs. Comfortable for daily wear. Machine washable.', image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&h=400&fit=crop' },
    { id: 11, name: 'Women Jeans', price: 1899, originalPrice: 2999, rating: 4.4, reviews: 189, stock: 45, category: 'Women Fashion', description: 'High-waisted skinny jeans with stretch fabric. Comfortable fit, durable denim. Available in multiple sizes.', image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&h=400&fit=crop' },
    { id: 12, name: 'Ladies Jacket', price: 2499, originalPrice: 3999, rating: 4.7, reviews: 432, stock: 22, category: 'Women Fashion', description: 'Stylish bomber jacket with quilted lining. Wind-resistant, warm and fashionable. Perfect for winter season.', image: 'https://images.unsplash.com/photo-1551488852-0801751ac367?w=600&h=400&fit=crop' },

    // Men Fashion
    { id: 13, name: 'Men Casual Shirt', price: 1199, originalPrice: 1899, rating: 4.5, reviews: 342, stock: 54, category: 'Men Fashion', description: '100% cotton casual shirt with modern fit. Breathable fabric, perfect for Pakistani weather. Easy iron.', image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&h=400&fit=crop' },
    { id: 14, name: 'Men Denim Jacket', price: 2999, originalPrice: 4499, rating: 4.7, reviews: 234, stock: 18, category: 'Men Fashion', description: 'Classic denim jacket with vintage wash. Durable stitching, multiple pockets. Perfect for casual outings.', image: 'https://images.unsplash.com/photo-1520975661595-6453be3f7070?w=600&h=400&fit=crop' },
    { id: 15, name: 'Polo T-Shirt', price: 799, originalPrice: 1299, rating: 4.4, reviews: 567, stock: 67, category: 'Men Fashion', description: 'Premium cotton polo t-shirt with collar. Soft pique fabric, comfortable fit. Available in 10 colors.', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=400&fit=crop' },
    { id: 16, name: 'Men Chinos', price: 1499, originalPrice: 2299, rating: 4.6, reviews: 189, stock: 43, category: 'Men Fashion', description: 'Slim-fit chino pants with stretch fabric. Wrinkle-resistant, perfect for office and casual wear.', image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&h=400&fit=crop' },

    // Home & Kitchen
    { id: 17, name: 'Kitchen Storage Set', price: 1599, originalPrice: 2499, rating: 4.7, reviews: 432, stock: 29, category: 'Home & Kitchen', description: 'Set of 6 airtight storage containers. BPA-free plastic, stackable design. Keep food fresh longer.', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop' },
    { id: 18, name: 'Non-Stick Cookware', price: 3499, originalPrice: 5499, rating: 4.8, reviews: 234, stock: 15, category: 'Home & Kitchen', description: '5-piece non-stick cookware set. Includes kadai, tawa, and pans. Induction compatible, easy to clean.', image: 'https://images.unsplash.com/photo-1556911220-e15b30be8a8d?w=600&h=400&fit=crop' },
    { id: 19, name: 'Bedsheet Set', price: 1299, originalPrice: 1999, rating: 4.5, reviews: 567, stock: 38, category: 'Home & Kitchen', description: 'King-size bedsheet set with 2 pillow covers. 100% cotton, floral prints. Soft and comfortable for all seasons.', image: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=600&h=400&fit=crop' },
    { id: 20, name: 'LED Table Lamp', price: 899, originalPrice: 1499, rating: 4.6, reviews: 189, stock: 47, category: 'Home & Kitchen', description: 'Adjustable LED table lamp with 3 color modes. USB charging, touch control. Perfect for study and work.', image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&h=400&fit=crop' },

    // Shoes & Bags
    { id: 21, name: 'Men Sneakers', price: 2499, originalPrice: 3999, rating: 4.5, reviews: 342, stock: 33, category: 'Shoes & Bags', description: 'Comfortable running sneakers with cushioned sole. Breathable mesh upper, durable rubber outsole. Size 7-11.', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=400&fit=crop' },
    { id: 22, name: 'Women Heels', price: 1899, originalPrice: 2999, rating: 4.6, reviews: 234, stock: 27, category: 'Shoes & Bags', description: 'Elegant block heels with cushioned insole. Anti-slip sole, comfortable for long wear. Perfect for parties.', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&h=400&fit=crop' },
    { id: 23, name: 'Ladies Handbag', price: 1599, originalPrice: 2499, rating: 4.7, reviews: 567, stock: 31, category: 'Shoes & Bags', description: 'Stylish tote bag with multiple compartments. PU leather, water-resistant. Perfect for daily use and office.', image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&h=400&fit=crop' },
    { id: 24, name: 'School Backpack', price: 1299, originalPrice: 1999, rating: 4.4, reviews: 189, stock: 44, category: 'Shoes & Bags', description: 'Durable backpack with laptop compartment. Water-resistant, padded straps. Perfect for students and travel.', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=400&fit=crop' },
  ];

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div style={styles.container}>Product not found</div>;
  }

  return (
    <div style={styles.container}>
      <div style={styles.breadcrumb}>
        <Link to="/" style={styles.breadLink}>Home</Link> / 
        <Link to="/products" style={styles.breadLink}>Products</Link> / 
        <span style={styles.breadCurrent}>{product.name}</span>
      </div>

      <div style={styles.productLayout}>
        <div style={styles.imageSection}>
          <img src={product.image} alt={product.name} style={styles.mainImage} />
        </div>

        <div style={styles.detailsSection}>
          <span style={styles.category}>{product.category}</span>
          <h1 style={styles.name}>{product.name}</h1>
          
          <div style={styles.rating}>
            <span style={styles.stars}>⭐ {product.rating}</span>
            <span style={styles.reviews}>({product.reviews} reviews)</span>
          </div>

          <div style={styles.priceSection}>
            <span style={styles.price}>Rs. {product.price.toLocaleString()}</span>
            <span style={styles.originalPrice}>Rs. {product.originalPrice.toLocaleString()}</span>
            <span style={styles.discount}>
              Save Rs. {(product.originalPrice - product.price).toLocaleString()}
            </span>
          </div>

          <p style={styles.description}>{product.description}</p>

          <div style={styles.stockInfo}>
            <span style={product.stock > 10 ? styles.inStock : styles.lowStock}>
              ● {product.stock > 10 ? 'In Stock' : 'Low Stock - Only ' + product.stock + ' left'}
            </span>
          </div>

          <div style={styles.actions}>
            <div style={styles.quantity}>
              <button style={styles.qtyBtn}>-</button>
              <span style={styles.qtyValue}>1</span>
              <button style={styles.qtyBtn}>+</button>
            </div>
            <button style={styles.addToCart}>🛒 Add to Cart</button>
            <button style={styles.wishlist}>♡ Wishlist</button>
          </div>

          <div style={styles.features}>
            <div style={styles.feature}>✓ Cash on Delivery</div>
            <div style={styles.feature}>✓ 7-Day Returns</div>
            <div style={styles.feature}>✓ Free Shipping over Rs. 2000</div>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '40px 20px',
  },
  breadcrumb: {
    marginBottom: '30px',
    color: '#666',
    fontSize: '14px',
  },
  breadLink: {
    color: '#7B1FA2',
    textDecoration: 'none',
    marginRight: '5px',
  },
  breadCurrent: {
    color: '#333',
    marginLeft: '5px',
  },
  productLayout: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '60px',
    alignItems: 'start',
  },
  imageSection: {
    backgroundColor: '#F5F5F5',
    borderRadius: '12px',
    padding: '20px',
  },
  mainImage: {
    width: '100%',
    height: '400px',
    objectFit: 'cover',
    borderRadius: '8px',
  },
  detailsSection: {
    padding: '20px',
  },
  category: {
    color: '#7B1FA2',
    fontSize: '14px',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  name: {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#4A148C',
    margin: '10px 0',
  },
  rating: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '20px',
  },
  stars: {
    color: '#FF7043',
    fontSize: '16px',
  },
  reviews: {
    color: '#666',
    fontSize: '14px',
  },
  priceSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    marginBottom: '20px',
    flexWrap: 'wrap',
  },
  price: {
    fontSize: '36px',
    fontWeight: 'bold',
    color: '#7B1FA2',
  },
  originalPrice: {
    fontSize: '24px',
    color: '#999',
    textDecoration: 'line-through',
  },
  discount: {
    backgroundColor: '#FF7043',
    color: 'white',
    padding: '5px 12px',
    borderRadius: '20px',
    fontSize: '14px',
    fontWeight: '600',
  },
  description: {
    fontSize: '16px',
    lineHeight: '1.8',
    color: '#555',
    marginBottom: '20px',
  },
  stockInfo: {
    marginBottom: '25px',
  },
  inStock: {
    color: '#2ecc71',
    fontWeight: '600',
    fontSize: '16px',
  },
  lowStock: {
    color: '#e74c3c',
    fontWeight: '600',
    fontSize: '16px',
  },
  actions: {
    display: 'flex',
    gap: '15px',
    marginBottom: '30px',
    flexWrap: 'wrap',
  },
  quantity: {
    display: 'flex',
    alignItems: 'center',
    border: '2px solid #ddd',
    borderRadius: '8px',
    overflow: 'hidden',
  },
  qtyBtn: {
    width: '40px',
    height: '40px',
    border: 'none',
    backgroundColor: '#F5F5F5',
    cursor: 'pointer',
    fontSize: '18px',
  },
  qtyValue: {
    width: '50px',
    textAlign: 'center',
    fontSize: '16px',
    fontWeight: '600',
  },
  addToCart: {
    padding: '12px 40px',
    backgroundColor: '#FF7043',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
  },
  wishlist: {
    padding: '12px 30px',
    backgroundColor: 'white',
    color: '#FF7043',
    border: '2px solid #FF7043',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
  },
  features: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    padding: '20px',
    backgroundColor: '#F5F5F5',
    borderRadius: '8px',
  },
  feature: {
    color: '#7B1FA2',
    fontSize: '14px',
    fontWeight: '500',
  },
};

export default ProductDetail;
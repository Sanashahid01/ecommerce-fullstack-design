import { db } from './firebase';
import { collection, addDoc } from 'firebase/firestore';

const products = [
  { name: 'Lakme Foundation', price: 1299, originalPrice: 1899, rating: 4.6, reviews: 342, category: 'Makeup & Beauty', image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=300&fit=crop', stock: 45, description: 'Long-lasting matte foundation with SPF 15.' },
  { name: 'Maybelline Lipstick Set', price: 899, originalPrice: 1499, rating: 4.7, reviews: 567, category: 'Makeup & Beauty', image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=300&fit=crop', stock: 32, description: 'Set of 5 vibrant lipsticks.' },
  { name: 'Garnier Face Wash', price: 499, originalPrice: 799, rating: 4.5, reviews: 234, category: 'Makeup & Beauty', image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=300&fit=crop', stock: 67, description: 'Deep cleansing face wash.' },
  { name: 'Huda Beauty Eyeshadow', price: 2499, originalPrice: 3999, rating: 4.8, reviews: 189, category: 'Makeup & Beauty', image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&h=300&fit=crop', stock: 15, description: '18-color eyeshadow palette.' },
  { name: 'Gold Plated Earrings', price: 899, originalPrice: 1499, rating: 4.8, reviews: 567, category: 'Jewelry', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=300&fit=crop', stock: 28, description: 'Elegant gold-plated earrings.' },
  { name: 'Silver Bracelet Set', price: 1299, originalPrice: 2199, rating: 4.6, reviews: 432, category: 'Jewelry', image: 'https://images.pexels.com/photos/1191710/pexels-photo-1191710.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop', stock: 34, description: 'Set of 3 sterling silver bracelets.' },
  { name: 'Artificial Necklace', price: 699, originalPrice: 1199, rating: 4.5, reviews: 123, category: 'Jewelry', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=300&fit=crop', stock: 56, description: 'Stunning artificial necklace.' },
  { name: 'Bridal Jewelry Set', price: 3499, originalPrice: 5999, rating: 4.9, reviews: 89, category: 'Jewelry', image: 'https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?w=400&h=300&fit=crop', stock: 8, description: 'Complete bridal jewelry set.' },
  { name: 'Ladies Cardigan', price: 1599, originalPrice: 2499, rating: 4.5, reviews: 234, category: 'Women Fashion', image: 'https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop', stock: 42, description: 'Soft knit cardigan.' },
  { name: 'Printed Kurti', price: 1299, originalPrice: 1999, rating: 4.6, reviews: 567, category: 'Women Fashion', image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=300&fit=crop', stock: 38, description: 'Cotton printed kurti.' },
  { name: 'Women Jeans', price: 1899, originalPrice: 2999, rating: 4.4, reviews: 189, category: 'Women Fashion', image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=300&fit=crop', stock: 45, description: 'High-waisted skinny jeans.' },
  { name: 'Ladies Jacket', price: 2499, originalPrice: 3999, rating: 4.7, reviews: 432, category: 'Women Fashion', image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop', stock: 22, description: 'Stylish bomber jacket.' },
  { name: 'Men Casual Shirt', price: 1199, originalPrice: 1899, rating: 4.5, reviews: 342, category: 'Men Fashion', image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=300&fit=crop', stock: 54, description: '100% cotton casual shirt.' },
  { name: 'Men Denim Jacket', price: 2999, originalPrice: 4499, rating: 4.7, reviews: 234, category: 'Men Fashion', image: 'https://images.unsplash.com/photo-1520975661595-6453be3f7070?w=400&h=300&fit=crop', stock: 18, description: 'Classic denim jacket.' },
  { name: 'Polo T-Shirt', price: 799, originalPrice: 1299, rating: 4.4, reviews: 567, category: 'Men Fashion', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop', stock: 67, description: 'Premium cotton polo t-shirt.' },
  { name: 'Men Chinos', price: 1499, originalPrice: 2299, rating: 4.6, reviews: 189, category: 'Men Fashion', image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&h=300&fit=crop', stock: 43, description: 'Slim-fit chino pants.' },
  { name: 'Kitchen Storage Set', price: 1599, originalPrice: 2499, rating: 4.7, reviews: 432, category: 'Home & Kitchen', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop', stock: 29, description: 'Set of 6 airtight containers.' },
  { name: 'Non-Stick Cookware', price: 3499, originalPrice: 5499, rating: 4.8, reviews: 234, category: 'Home & Kitchen', image: 'https://images.pexels.com/photos/2281546/pexels-photo-2281546.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop', stock: 15, description: '5-piece non-stick cookware.' },
  { name: 'Bedsheet Set', price: 1299, originalPrice: 1999, rating: 4.5, reviews: 567, category: 'Home & Kitchen', image: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=400&h=300&fit=crop', stock: 38, description: 'King-size bedsheet set.' },
  { name: 'LED Table Lamp', price: 899, originalPrice: 1499, rating: 4.6, reviews: 189, category: 'Home & Kitchen', image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=300&fit=crop', stock: 47, description: 'Adjustable LED table lamp.' },
  { name: 'Men Sneakers', price: 2499, originalPrice: 3999, rating: 4.5, reviews: 342, category: 'Shoes & Bags', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop', stock: 33, description: 'Comfortable running sneakers.' },
  { name: 'Women Heels', price: 1899, originalPrice: 2999, rating: 4.6, reviews: 234, category: 'Shoes & Bags', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=300&fit=crop', stock: 27, description: 'Elegant block heels.' },
  { name: 'Ladies Handbag', price: 1599, originalPrice: 2499, rating: 4.7, reviews: 567, category: 'Shoes & Bags', image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=300&fit=crop', stock: 31, description: 'Stylish tote bag.' },
  { name: 'School Backpack', price: 1299, originalPrice: 1999, rating: 4.4, reviews: 189, category: 'Shoes & Bags', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop', stock: 44, description: 'Durable school backpack.' }
];

export const addProductsToFirebase = async () => {
  try {
    for (const product of products) {
      await addDoc(collection(db, 'products'), product);
      console.log(`Added: ${product.name}`);
    }
    console.log('All products added successfully!');
    alert('All 24 products added to Firebase!');
  } catch (error) {
    console.error('Error adding products:', error);
    alert('Error: ' + error.message);
  }
};
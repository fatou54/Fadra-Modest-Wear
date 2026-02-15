import { addProduct } from './firestore';
import { collection, getDocs, deleteDoc } from 'firebase/firestore';
import { db } from './firebase';

// Initial products to seed the database
const initialProducts = [
  {
    name: "Classic Black Abaya",
    price: "RM 195",
    image: "https://picsum.photos/seed/abaya1/600/800",
    description: "Elegant and comfortable everyday abaya",
    category: "Apparel",
    inStock: true,
  },
  {
    name: "Elegant Hijab",
    price: "RM 65",
    image: "https://picsum.photos/seed/hijab1/600/600",
    description: "Soft and breathable hijab in premium fabric",
    category: "Hijabs",
    inStock: true,
  },
  {
    name: "Modest Maxi Dress",
    price: "RM 240",
    image: "https://picsum.photos/seed/dress1/600/800",
    description: "Flowy maxi dress perfect for any occasion",
    category: "Dresses",
    inStock: true,
  },
  {
    name: "Embroidered Abaya",
    price: "RM 285",
    image: "https://picsum.photos/seed/abaya2/600/800",
    description: "Beautiful embroidered details for special events",
    category: "Apparel",
    inStock: true,
  },
  {
    name: "Jersey Hijab Set",
    price: "RM 110",
    image: "https://picsum.photos/seed/hijab2/600/600",
    description: "Pack of 3 jersey hijabs in neutral colors",
    category: "Hijabs",
    inStock: true,
  },
  {
    name: "Casual Tunic",
    price: "RM 150",
    image: "https://picsum.photos/seed/tunic1/600/800",
    description: "Versatile tunic for everyday modest wear",
    category: "Apparel",
    inStock: true,
  },
];

// Function to clear all existing products
const clearAllProducts = async () => {
  console.log('Clearing existing products...');
  try {
    const querySnapshot = await getDocs(collection(db, 'products'));
    const deletePromises = querySnapshot.docs.map(doc => deleteDoc(doc.ref));
    await Promise.all(deletePromises);
    console.log(`Deleted ${querySnapshot.docs.length} existing products`);
  } catch (error) {
    console.error('Error clearing products:', error);
  }
};

// Function to seed products into Firestore
export const seedProducts = async () => {
  console.log('Starting to seed products...');
  
  // Clear existing products first
  await clearAllProducts();
  
  // Add new products
  for (const product of initialProducts) {
    const result = await addProduct(product);
    if (result.success) {
      console.log(`Added product: ${product.name}`);
    } else {
      console.error(`Failed to add product: ${product.name}`, result.error);
    }
  }
  
  console.log('Finished seeding products!');
};

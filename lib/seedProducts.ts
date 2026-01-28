import { addProduct } from './firestore';

// Initial products to seed the database
const initialProducts = [
  {
    name: "Classic Black Abaya",
    price: "RM 195",
    image: "/abaya.jpg",
    description: "Elegant and comfortable everyday abaya",
    category: "Apparel",
    inStock: true,
  },
  {
    name: "Elegant Hijab",
    price: "RM 65",
    image: "/hijab.jpg",
    description: "Soft and breathable hijab in premium fabric",
    category: "Hijabs",
    inStock: true,
  },
  {
    name: "Modest Maxi Dress",
    price: "RM 240",
    image: "/dress.jpg",
    description: "Flowy maxi dress perfect for any occasion",
    category: "Dresses",
    inStock: true,
  },
  {
    name: "Embroidered Abaya",
    price: "RM 285",
    image: "/abaya2.jpg",
    description: "Beautiful embroidered details for special events",
    category: "Apparel",
    inStock: true,
  },
  {
    name: "Jersey Hijab Set",
    price: "RM 110",
    image: "/hijab-set.jpg",
    description: "Pack of 3 jersey hijabs in neutral colors",
    category: "Hijabs",
    inStock: true,
  },
  {
    name: "Casual Tunic",
    price: "RM 150",
    image: "/tunic.jpg",
    description: "Versatile tunic for everyday modest wear",
    category: "Apparel",
    inStock: true,
  },
];

// Function to seed products into Firestore
export const seedProducts = async () => {
  console.log('Starting to seed products...');
  
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

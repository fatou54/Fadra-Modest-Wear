const { initializeApp } = require('firebase/app');
const { getFirestore, collection, getDocs } = require('firebase/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyBP3oQOfEA5o5kZVO2zOYpd2F6EZxLkq5w",
  authDomain: "fadra-modest-wear.firebaseapp.com",
  projectId: "fadra-modest-wear",
  storageBucket: "fadra-modest-wear.firebasestorage.app",
  messagingSenderId: "444046044803",
  appId: "1:444046044803:web:e309421d8060fc6de3f5b6"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function checkProducts() {
  try {
    const querySnapshot = await getDocs(collection(db, 'products'));
    console.log('\n=== PRODUCTS IN DATABASE ===');
    console.log('Total products:', querySnapshot.size);
    console.log('');
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      console.log('Product:', data.name);
      console.log('Image URL:', data.image);
      console.log('---');
    });
  } catch (error) {
    console.error('Error:', error);
  }
  process.exit(0);
}

checkProducts();

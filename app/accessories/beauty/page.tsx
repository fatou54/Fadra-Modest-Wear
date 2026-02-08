'use client';

import { useState } from 'react';

const beautyProducts = [
  {
    id: 1,
    name: 'Matte Liquid Lipstick - Rose',
    price: 'RM 45',
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800',
    type: 'Lip Gloss',
    brand: 'FADRA Beauty'
  },
  {
    id: 2,
    name: 'Hydrating Lip Gloss - Nude',
    price: 'RM 38',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800',
    type: 'Lip Gloss',
    brand: 'FADRA Beauty'
  },
  {
    id: 3,
    name: 'Long-Wear Lipstick - Coral',
    price: 'RM 52',
    image: 'https://images.unsplash.com/photo-1601924357840-3e7c403c9243?w=800',
    type: 'Lipstick',
    brand: 'Luxury Line'
  },
  {
    id: 4,
    name: 'Glowing Serum',
    price: 'RM 120',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800',
    type: 'Skincare',
    brand: 'FADRA Skin'
  },
  {
    id: 5,
    name: 'Moisturizing Face Cream',
    price: 'RM 95',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800',
    type: 'Skincare',
    brand: 'FADRA Skin'
  },
  {
    id: 6,
    name: 'Makeup Brush Set',
    price: 'RM 180',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800',
    type: 'Accessories',
    brand: 'Professional'
  },
  {
    id: 7,
    name: 'Signature Perfume',
    price: 'RM 280',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=800',
    type: 'Fragrance',
    brand: 'FADRA Essence'
  },
  {
    id: 8,
    name: 'Velvet Lipstick - Berry',
    price: 'RM 48',
    image: 'https://images.unsplash.com/photo-1631214524020-7e18db7f654d?w=800',
    type: 'Lipstick',
    brand: 'FADRA Beauty'
  }
];

const categories = ['All', 'Lip Gloss', 'Lipstick', 'Skincare', 'Accessories', 'Fragrance'];
const priceRanges = ['All Prices', 'Under RM 50', 'RM 50-100', 'RM 100-200', 'Above RM 200'];

export default function AccessoriesBeautyPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState('All Prices');

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="relative h-96 w-full">
        <img
          src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1600"
          alt="Beauty Collection"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-5xl md:text-6xl font-light mb-4" style={{ letterSpacing: '0.1em' }}>BEAUTY</h1>
          <p className="text-lg md:text-xl font-light">Modest beauty essentials</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 text-center">
        <p className="text-gray-600 text-lg">Beauty products coming soon...</p>
      </div>
    </div>
  );
}

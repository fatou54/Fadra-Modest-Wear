'use client';

import { useState } from 'react';

const jewelry = [
  {
    id: 1,
    name: 'Elegant Gold Ring',
    price: 'RM 180',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800',
    type: 'Rings',
    material: 'Gold'
  },
  {
    id: 2,
    name: 'Pearl Bracelet Set',
    price: 'RM 220',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800',
    type: 'Bracelets',
    material: 'Pearl'
  },
  {
    id: 3,
    name: 'Diamond Stud Earrings',
    price: 'RM 350',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800',
    type: 'Earrings',
    material: 'Diamond'
  },
  {
    id: 4,
    name: 'Delicate Gold Necklace',
    price: 'RM 420',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800',
    type: 'Necklaces',
    material: 'Gold'
  },
  {
    id: 5,
    name: 'Silver Ring Band',
    price: 'RM 150',
    image: 'https://images.unsplash.com/photo-1603561596112-0a132b757442?w=800',
    type: 'Rings',
    material: 'Silver'
  },
  {
    id: 6,
    name: 'Crystal Drop Earrings',
    price: 'RM 280',
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800',
    type: 'Earrings',
    material: 'Crystal'
  },
  {
    id: 7,
    name: 'Layered Necklace Set',
    price: 'RM 320',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800',
    type: 'Necklaces',
    material: 'Gold'
  },
  {
    id: 8,
    name: 'Charm Bracelet',
    price: 'RM 250',
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800',
    type: 'Bracelets',
    material: 'Silver'
  }
];

const types = ['All Types', 'Rings', 'Bracelets', 'Earrings', 'Necklaces'];
const materials = ['All Materials', 'Gold', 'Silver', 'Pearl', 'Diamond', 'Crystal'];
const priceRanges = ['All Prices', 'Under RM 200', 'RM 200-300', 'Above RM 300'];

export default function JewelryPage() {
  const [selectedType, setSelectedType] = useState('All Types');
  const [selectedMaterial, setSelectedMaterial] = useState('All Materials');
  const [priceRange, setPriceRange] = useState('All Prices');

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="relative h-96 w-full">
        <img
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1600"
          alt="Jewelry Collection"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-5xl md:text-6xl font-light mb-4" style={{ letterSpacing: '0.1em' }}>JEWELRY</h1>
          <p className="text-lg md:text-xl font-light">Modest elegance in every piece</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 text-center">
        <p className="text-gray-600 text-lg">Jewelry collection coming soon...</p>
      </div>
    </div>
  );
}

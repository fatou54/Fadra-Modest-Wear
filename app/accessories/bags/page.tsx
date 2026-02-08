'use client';

import { useState } from 'react';

const handbags = [
  {
    id: 1,
    name: 'Classic Leather Tote',
    price: 'RM 420',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800',
    type: 'Tote',
    color: 'Black'
  },
  {
    id: 2,
    name: 'Structured Shoulder Bag',
    price: 'RM 380',
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800',
    type: 'Shoulder',
    color: 'Beige'
  },
  {
    id: 3,
    name: 'Elegant Crossbody',
    price: 'RM 290',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800',
    type: 'Crossbody',
    color: 'Brown'
  },
  {
    id: 4,
    name: 'Luxury Mini Bag',
    price: 'RM 350',
    image: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=800',
    type: 'Mini',
    color: 'Black'
  },
  {
    id: 5,
    name: 'Spacious Work Tote',
    price: 'RM 480',
    image: 'https://images.unsplash.com/photo-1547949003-9792a18a2601?w=800',
    type: 'Tote',
    color: 'Navy'
  },
  {
    id: 6,
    name: 'Chic Evening Clutch',
    price: 'RM 220',
    image: 'https://images.unsplash.com/photo-1564422167509-4f66e448e8a0?w=800',
    type: 'Clutch',
    color: 'Gold'
  },
  {
    id: 7,
    name: 'Casual Shoulder Bag',
    price: 'RM 320',
    image: 'https://images.unsplash.com/photo-1591561954555-607968c989ab?w=800',
    type: 'Shoulder',
    color: 'Tan'
  },
  {
    id: 8,
    name: 'Designer Crossbody',
    price: 'RM 450',
    image: 'https://images.unsplash.com/photo-1613744275252-aa5950b0e206?w=800',
    type: 'Crossbody',
    color: 'Black'
  }
];

const types = ['All Types', 'Tote', 'Shoulder', 'Crossbody', 'Mini', 'Clutch'];
const colors = ['All Colors', 'Black', 'Brown', 'Beige', 'Tan', 'Navy', 'Gold'];
const priceRanges = ['All Prices', 'Under RM 300', 'RM 300-400', 'Above RM 400'];

export default function HandbagsPage() {
  const [selectedType, setSelectedType] = useState('All Types');
  const [selectedColor, setSelectedColor] = useState('All Colors');
  const [priceRange, setPriceRange] = useState('All Prices');

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="relative h-96 w-full">
        <img
          src="https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=1600"
          alt="Handbags Collection"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-5xl md:text-6xl font-light mb-4" style={{ letterSpacing: '0.1em' }}>HANDBAGS</h1>
          <p className="text-lg md:text-xl font-light">Elegant bags for every occasion</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 text-center">
        <p className="text-gray-600 text-lg">Handbag collection coming soon...</p>
      </div>
    </div>
  );
}

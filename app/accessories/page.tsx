'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navigation from '../components/Navigation';

const tabs = ['All Accessories', 'Handbags', 'Jewelry', 'Sunglasses', 'Watches', 'Beauty', 'Scarves'];

const accessoryCategories = [
  {
    name: 'Handbags',
    description: 'Elegant bags for every occasion',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800',
    link: '/accessories/bags',
    count: '120+ styles'
  },
  {
    name: 'Jewelry',
    description: 'Modest & elegant pieces',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800',
    link: '/accessories/jewelry',
    count: '200+ pieces'
  },
  {
    name: 'Belts',
    description: 'Style & definition',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800',
    link: '/products/accessories/belts',
    count: '45+ designs'
  },
  {
    name: 'Scarves',
    description: 'Luxurious silk & cotton',
    image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=800',
    link: '/products/accessories/scarves',
    count: '80+ patterns'
  },
  {
    name: 'Sunglasses',
    description: 'Chic & protective eyewear',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800',
    link: '/products/accessories/sunglasses',
    count: '60+ styles'
  },
  {
    name: 'Watches',
    description: 'Timeless timepieces',
    image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800',
    link: '/products/men/watches',
    count: '90+ models'
  },
  {
    name: 'Beauty',
    description: 'Makeup & fragrances',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800',
    link: '/accessories/beauty',
    count: '150+ products'
  },
  {
    name: 'Fragrances',
    description: 'Signature scents',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=800',
    link: '/products/men/fragrances',
    count: '75+ perfumes'
  }
];

export default function AccessoriesPage() {
  const [activeTab, setActiveTab] = useState('All Accessories');

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Hero Banner */}
      <div className="relative h-96 w-full">
        <img
          src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=1600"
          alt="Fashion Accessories Collection"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-5xl md:text-6xl font-light mb-4" style={{ letterSpacing: '0.1em' }}>ACCESSORIES</h1>
          <p className="text-lg md:text-xl font-light max-w-2xl">Complete your look with elegant finishing touches</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex overflow-x-auto gap-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-2 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                  activeTab === tab
                    ? 'border-black text-black'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Tab Content */}
        <div className="text-center py-16">
          <h2 className="text-2xl font-light mb-4" style={{ letterSpacing: '0.05em' }}>
            {activeTab}
          </h2>
          <p className="text-gray-600">Fashion add-ons collection coming soon...</p>
        </div>

        {/* Categories Grid (Only show on All Accessories tab) */}
        {activeTab === 'All Accessories' && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {accessoryCategories.map((category) => (
            <Link
              key={category.name}
              href={category.link}
              className="group cursor-pointer"
            >
              <div className="relative aspect-square mb-4 overflow-hidden bg-gray-100">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-semibold mb-1">{category.name}</h3>
                  <p className="text-sm opacity-90">{category.description}</p>
                  <p className="text-xs mt-2 opacity-75">{category.count}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Featured Section */}
        <div className="mt-20 border-t pt-16">
          <h2 className="text-3xl font-light text-center mb-12" style={{ letterSpacing: '0.05em' }}>
            TRENDING NOW
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Featured 1 */}
            <div className="relative h-[500px] overflow-hidden group cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=1000"
                alt="Handbag Collection"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/30"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-8">
                <h3 className="text-4xl font-light mb-4" style={{ letterSpacing: '0.1em' }}>NEW HANDBAGS</h3>
                <p className="text-lg mb-6">Explore the latest collection</p>
                <Link
                  href="/accessories/bags"
                  className="bg-white text-black px-8 py-3 hover:bg-gray-100 transition-colors"
                >
                  SHOP NOW
                </Link>
              </div>
            </div>

            {/* Featured 2 */}
            <div className="relative h-[500px] overflow-hidden group cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=1000"
                alt="Jewelry Collection"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/30"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-8">
                <h3 className="text-4xl font-light mb-4" style={{ letterSpacing: '0.1em' }}>FINE JEWELRY</h3>
                <p className="text-lg mb-6">Modest elegance redefined</p>
                <Link
                  href="/accessories/jewelry"
                  className="bg-white text-black px-8 py-3 hover:bg-gray-100 transition-colors"
                >
                  DISCOVER
                </Link>
              </div>
            </div>
          </div>
        </div>
          </>
        )}

        {/* Info Boxes */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 border">
            <h3 className="font-semibold mb-2">✨ Curated Selection</h3>
            <p className="text-sm text-gray-600">Every accessory chosen for modest style</p>
          </div>
          <div className="p-6 border">
            <h3 className="font-semibold mb-2">🎁 Gift Wrapping</h3>
            <p className="text-sm text-gray-600">Complimentary elegant packaging</p>
          </div>
          <div className="p-6 border">
            <h3 className="font-semibold mb-2">📦 Free Shipping</h3>
            <p className="text-sm text-gray-600">On orders over RM 250</p>
          </div>
        </div>
      </div>
    </div>
  );
}

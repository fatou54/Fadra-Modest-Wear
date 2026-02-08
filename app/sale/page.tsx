'use client';

import { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';

const tabs = ['All Sale Items', 'Women Sale', 'Men Sale', 'Accessories Sale', 'Under RM100', 'Clearance'];

const saleProducts = [
  {
    id: 1,
    name: 'Elegant Black Abaya',
    oldPrice: 'RM 450',
    newPrice: 'RM 360',
    discount: 20,
    image: 'https://images.unsplash.com/photo-1583292650898-7d22cd27ca6f?w=800',
    category: 'Abayas',
    stock: 'Limited'
  },
  {
    id: 2,
    name: 'Floral Maxi Dress',
    oldPrice: 'RM 380',
    newPrice: 'RM 190',
    discount: 50,
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800',
    category: 'Dresses',
    stock: 'Last Pieces'
  },
  {
    id: 3,
    name: 'Silk Hijab Set',
    oldPrice: 'RM 120',
    newPrice: 'RM 96',
    discount: 20,
    image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=800',
    category: 'Hijabs',
    stock: 'Limited'
  },
  {
    id: 4,
    name: 'Designer Handbag',
    oldPrice: 'RM 650',
    newPrice: 'RM 325',
    discount: 50,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800',
    category: 'Handbags',
    stock: 'Clearance'
  },
  {
    id: 5,
    name: 'Modest Suit Set',
    oldPrice: 'RM 520',
    newPrice: 'RM 416',
    discount: 20,
    image: 'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=800',
    category: 'Suits',
    stock: 'Limited'
  },
  {
    id: 6,
    name: 'Embroidered Abaya',
    oldPrice: 'RM 580',
    newPrice: 'RM 290',
    discount: 50,
    image: 'https://images.unsplash.com/photo-1601924357840-3e7c403c9243?w=800',
    category: 'Abayas',
    stock: 'Last Pieces'
  },
  {
    id: 7,
    name: 'Casual Dress',
    oldPrice: 'RM 280',
    newPrice: 'RM 224',
    discount: 20,
    image: 'https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?w=800',
    category: 'Dresses',
    stock: 'Limited'
  },
  {
    id: 8,
    name: 'Jewelry Set',
    oldPrice: 'RM 450',
    newPrice: 'RM 225',
    discount: 50,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800',
    category: 'Jewelry',
    stock: 'Clearance'
  },
  {
    id: 9,
    name: 'Premium Hijab',
    oldPrice: 'RM 95',
    newPrice: 'RM 76',
    discount: 20,
    image: 'https://images.unsplash.com/photo-1583293907395-8b6dc510078b?w=800',
    category: 'Hijabs',
    stock: 'Limited'
  },
  {
    id: 10,
    name: 'Leather Shoes',
    oldPrice: 'RM 320',
    newPrice: 'RM 160',
    discount: 50,
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800',
    category: 'Shoes',
    stock: 'Last Pieces'
  },
  {
    id: 11,
    name: 'Lounge Set',
    oldPrice: 'RM 290',
    newPrice: 'RM 232',
    discount: 20,
    image: 'https://images.unsplash.com/photo-1578932750294-f5075e85f44a?w=800',
    category: 'Sets',
    stock: 'Limited'
  },
  {
    id: 12,
    name: 'Signature Perfume',
    oldPrice: 'RM 380',
    newPrice: 'RM 190',
    discount: 50,
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=800',
    category: 'Fragrances',
    stock: 'Clearance'
  }
];

const discountFilters = ['All Discounts', 'Up to 20% Off', 'Up to 50% Off', 'Clearance'];
const categoryFilters = ['All Categories', 'Abayas', 'Dresses', 'Hijabs', 'Handbags', 'Suits', 'Jewelry', 'Shoes', 'Sets', 'Fragrances'];

export default function SalePage() {
  const [activeTab, setActiveTab] = useState('All Sale Items');
  const [timeLeft, setTimeLeft] = useState({ hours: 47, minutes: 23, seconds: 45 });

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Hero Banner with Countdown */}
      <div className="relative h-[500px] w-full">
        <img
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1600"
          alt="Limited Time Sale"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <div className="bg-red-600 text-white px-6 py-2 text-sm font-semibold mb-4 animate-pulse">
            LIMITED TIME SALE
          </div>
          <h1 className="text-6xl md:text-7xl font-light mb-4" style={{ letterSpacing: '0.1em' }}>WINTER SALE</h1>
          <p className="text-xl md:text-2xl font-light mb-8">Up to 50% Off Selected Items</p>
          
          {/* Countdown Timer */}
          <div className="flex gap-6 mb-8">
            <div className="text-center">
              <div className="bg-white text-black text-3xl font-bold px-6 py-4 rounded">
                {timeLeft.hours.toString().padStart(2, '0')}
              </div>
              <p className="text-sm mt-2">HOURS</p>
            </div>
            <div className="text-center">
              <div className="bg-white text-black text-3xl font-bold px-6 py-4 rounded">
                {timeLeft.minutes.toString().padStart(2, '0')}
              </div>
              <p className="text-sm mt-2">MINUTES</p>
            </div>
            <div className="text-center">
              <div className="bg-white text-black text-3xl font-bold px-6 py-4 rounded">
                {timeLeft.seconds.toString().padStart(2, '0')}
              </div>
              <p className="text-sm mt-2">SECONDS</p>
            </div>
          </div>

          <p className="text-lg">⏰ Sale ends soon - Don't miss out!</p>
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
                    ? 'border-red-600 text-red-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Tab Content */}
        <div className="text-center py-16">
          <h2 className="text-2xl font-light mb-4" style={{ letterSpacing: '0.05em' }}>
            {activeTab}
          </h2>
          <p className="text-gray-600">Discounted products coming soon...</p>
        </div>

        {/* Sale Banner Info */}
        <div className="mb-12 bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-lg text-center">
          <h2 className="text-2xl font-semibold mb-2">🔥 Flash Sale Coming Soon</h2>
          <p className="text-gray-600">Check back soon for amazing deals • Free shipping • Easy returns</p>
        </div>

        {/* Bottom Info */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center border-t pt-12">
          <div>
            <h3 className="font-semibold mb-2">💝 Best Prices Guaranteed</h3>
            <p className="text-sm text-gray-600">Our lowest prices of the season</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">🚚 Free Shipping</h3>
            <p className="text-sm text-gray-600">On all sale items - no minimum</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">↩️ Easy Returns</h3>
            <p className="text-sm text-gray-600">14-day return policy on sale items</p>
          </div>
        </div>
      </div>
    </div>
  );
}

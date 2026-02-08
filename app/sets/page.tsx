'use client';

import { useState } from 'react';
import Navigation from '../components/Navigation';

const tabs = ['All Sets', 'Abaya Sets', 'Dress Sets', 'Casual Sets', 'Occasion Sets', 'New Sets'];

export default function SetsPage() {
  const [activeTab, setActiveTab] = useState('All Sets');

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Hero Banner */}
      <div className="relative h-96 w-full">
        <img
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1600"
          alt="Complete Modest Outfit Sets"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-5xl md:text-6xl font-light mb-4" style={{ letterSpacing: '0.1em' }}>OUTFIT SETS</h1>
          <p className="text-lg md:text-xl font-light max-w-2xl">Complete modest outfit combinations - perfectly coordinated for effortless style</p>
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

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Tab Content */}
        <div className="text-center py-16">
          <h2 className="text-2xl font-light mb-4" style={{ letterSpacing: '0.05em' }}>
            {activeTab}
          </h2>
          <p className="text-gray-600">Complete matching outfits coming soon...</p>
        </div>

        {/* Info Section */}
        <div className="mt-16 border-t pt-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="font-semibold mb-2">✨ Complete Coordination</h3>
              <p className="text-sm text-gray-600">Every piece perfectly matched - no styling stress</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">💰 Better Value</h3>
              <p className="text-sm text-gray-600">Save up to 15% compared to buying separately</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">🎁 Gift Ready</h3>
              <p className="text-sm text-gray-600">Beautiful packaging perfect for gifting</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

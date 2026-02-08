"use client";

import { useEffect, useState } from "react";

export default function SubscribeSuccessPage() {
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setTimeout(() => setShowSuccess(true), 100);
  }, []);

  const suggestedProducts = [
    { name: "Elegant Dress", price: 299, image: "dress" },
    { name: "Premium Hijab", price: 59, image: "hijab" },
    { name: "Luxury Handbag", price: 499, image: "bag" },
    { name: "Classic Abaya", price: 399, image: "abaya" }
  ];

  return (
    <main className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#fafafa" }}>
      <div className="max-w-2xl w-full mx-auto px-8 py-16">
        {/* Success Animation */}
        <div className={`text-center transition-all duration-700 ${showSuccess ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Checkmark Animation */}
          <div className="mb-8 flex justify-center">
            <div 
              className="w-24 h-24 rounded-full flex items-center justify-center animate-bounce"
              style={{ backgroundColor: "#22c55e" }}
            >
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
          </div>

          {/* Success Card */}
          <div className="bg-white rounded-lg shadow-xl p-12 mb-12">
            <h1 
              className="text-4xl md:text-5xl mb-4"
              style={{ fontFamily: "serif", color: "#1a1a1a" }}
            >
              Welcome to the Inner Circle
            </h1>
            <p className="text-lg mb-6" style={{ color: "#666", lineHeight: 1.8 }}>
              You'll now receive early access to new collections, exclusive offers, and curated fashion inspiration.
            </p>
            <div className="flex justify-center gap-4">
              <a 
                href="/"
                className="px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "#1a1a1a", color: "#ffffff" }}
              >
                Continue Shopping
              </a>
              <a 
                href="/products"
                className="px-8 py-3 rounded-lg font-medium border hover:bg-gray-50 transition-colors"
                style={{ borderColor: "#e5e5e5", color: "#1a1a1a" }}
              >
                Browse Collections
              </a>
            </div>
          </div>

          {/* Suggested Products */}
          <div>
            <h2 className="text-2xl font-semibold mb-6" style={{ fontFamily: "serif", color: "#1a1a1a" }}>
              You Might Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {suggestedProducts.map((product, i) => (
                <a 
                  key={i}
                  href="/products"
                  className="bg-white rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <div className="bg-gray-100 aspect-square rounded-lg mb-3 flex items-center justify-center text-4xl">
                    {product.image === "dress" && "👗"}
                    {product.image === "hijab" && "🧕"}
                    {product.image === "bag" && "👜"}
                    {product.image === "abaya" && "👘"}
                  </div>
                  <h3 className="font-medium text-sm mb-1" style={{ color: "#1a1a1a" }}>
                    {product.name}
                  </h3>
                  <p className="font-semibold text-sm" style={{ color: "#1a1a1a" }}>
                    RM {product.price}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

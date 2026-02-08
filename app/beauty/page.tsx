"use client";

import { useCart } from "@/lib/cartContext";
import { useState } from "react";

export default function BeautyPage() {
  const { addToCart } = useCart();
  const [selectedSubcategory, setSelectedSubcategory] = useState("All");

  return (
    <main className="min-h-screen" style={{ backgroundColor: "#ffffff" }}>
      {/* Hero Banner */}
      <div 
        className="relative h-96 w-full"
      >
        <img 
          src="https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=1920&h=600&fit=crop"
          alt="Beauty Collection"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-40" />
        <div className="relative h-full flex flex-col items-center justify-center px-8 z-10">
          <h1 
            className="text-5xl md:text-6xl mb-4 text-center"
            style={{ fontFamily: "serif", color: "#ffffff", fontWeight: 400 }}
          >
            Beauty Collection
          </h1>
          <p 
            className="text-lg text-center max-w-3xl"
            style={{ color: "#e5e5e5", lineHeight: 1.8 }}
          >
            Premium beauty essentials for the modern modest woman.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Subcategories */}
        <div className="mb-8">
          <h3 className="text-sm font-semibold mb-4 tracking-wider" style={{ color: "#1a1a1a", letterSpacing: "0.1em" }}>BEAUTY CATEGORIES</h3>
          <div className="flex flex-wrap gap-3">
            {["All", "Lip Gloss", "Lipstick", "Skincare", "Makeup Accessories"].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedSubcategory(category)}
                className="px-6 py-2 text-sm rounded-full border transition-all"
                style={{ 
                  borderColor: selectedSubcategory === category ? "#d4a574" : "#e5e5e5",
                  backgroundColor: selectedSubcategory === category ? "#d4a574" : "transparent",
                  color: selectedSubcategory === category ? "#ffffff" : "#666"
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative overflow-hidden mb-4 bg-gray-100 aspect-square rounded-lg">
                <img 
                  src={`https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=400&h=400&fit=crop&q=80`}
                  alt={`Beauty Product ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                <button 
                  className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
                  title="Add to wishlist"
                >
                  ❤️
                </button>
              </div>
              
              <h3 className="font-medium mb-1" style={{ color: "#1a1a1a" }}>
                {["Velvet", "Matte", "Glossy", "Shimmer"][i % 4]} {["Lip Gloss", "Lipstick", "Serum"][i % 3]}
              </h3>
              
              <p className="text-sm mb-2" style={{ color: "#666" }}>
                {["Rose", "Nude", "Berry", "Coral"][i % 4]} Shade
              </p>

              <p className="font-semibold mb-2" style={{ color: "#1a1a1a" }}>
                RM {(45 + i * 15).toFixed(2)}
              </p>
              <button 
                onClick={() => {
                  const productId = `beauty-${i + 1}`;
                  const productName = `${["Velvet", "Matte", "Glossy", "Shimmer"][i % 4]} Beauty Product`;
                  const productPrice = 45 + i * 15;
                  const productImage = `https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=400&h=400&fit=crop&q=80`;
                  addToCart({ id: productId, name: productName, price: productPrice, image: productImage });
                  alert(`${productName} added to cart!`);
                }}
                className="w-full py-2 text-sm rounded-lg border-2 transition-all hover:bg-black hover:text-white hover:border-black"
                style={{ borderColor: "#1a1a1a", color: "#1a1a1a", fontWeight: "500" }}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

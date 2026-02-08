"use client";

import { useCart } from "@/lib/cartContext";
import { useState } from "react";

export default function AbayasPage() {
  const { addToCart } = useCart();
  const [selectedSubcategory, setSelectedSubcategory] = useState("All");
  const [selectedColor, setSelectedColor] = useState("All");
  const [selectedSize, setSelectedSize] = useState("All");
  const [selectedFabric, setSelectedFabric] = useState("All");
  const [priceRange, setPriceRange] = useState("All");

  return (
    <main className="min-h-screen" style={{ backgroundColor: "#ffffff" }}>
      {/* Hero Banner */}
      <div 
        className="relative h-96 w-full"
      >
        <img 
          src="https://images.unsplash.com/photo-1583846833110-8816f6e56f8b?w=1920&h=600&fit=crop"
          alt="Luxury Abaya Collection"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-40" />
        <div className="relative h-full flex flex-col items-center justify-center px-8 z-10">
          <h1 
            className="text-5xl md:text-6xl mb-4 text-center"
            style={{ fontFamily: "serif", color: "#ffffff", fontWeight: 400 }}
          >
            Luxury Abaya Collection
          </h1>
          <p 
            className="text-lg text-center max-w-3xl"
            style={{ color: "#e5e5e5", lineHeight: 1.8 }}
          >
            Graceful silhouettes crafted for elegance, modesty, and everyday sophistication.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Subcategories */}
        <div className="mb-8">
          <h3 className="text-sm font-semibold mb-4 tracking-wider" style={{ color: "#1a1a1a", letterSpacing: "0.1em" }}>ABAYA STYLES</h3>
          <div className="flex flex-wrap gap-3">
            {["All", "Open Abaya", "Closed Abaya", "Kimono Abaya", "Occasion Abaya"].map((category) => (
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

        {/* Filters Section */}
        <div className="mb-8 pb-6 border-b border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Color Filter */}
            <div>
              <label className="text-xs font-semibold mb-2 block tracking-wider" style={{ color: "#666", letterSpacing: "0.05em" }}>COLOR</label>
              <select 
                value={selectedColor}
                onChange={(e) => setSelectedColor(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg text-sm"
                style={{ borderColor: "#e5e5e5" }}
              >
                <option>All</option>
                <option>Black</option>
                <option>Navy</option>
                <option>Beige</option>
                <option>Grey</option>
                <option>Burgundy</option>
                <option>Emerald</option>
              </select>
            </div>

            {/* Size Filter */}
            <div>
              <label className="text-xs font-semibold mb-2 block tracking-wider" style={{ color: "#666", letterSpacing: "0.05em" }}>SIZE</label>
              <select 
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg text-sm"
                style={{ borderColor: "#e5e5e5" }}
              >
                <option>All</option>
                <option>XS</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
                <option>XXL</option>
              </select>
            </div>

            {/* Fabric Filter */}
            <div>
              <label className="text-xs font-semibold mb-2 block tracking-wider" style={{ color: "#666", letterSpacing: "0.05em" }}>FABRIC</label>
              <select 
                value={selectedFabric}
                onChange={(e) => setSelectedFabric(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg text-sm"
                style={{ borderColor: "#e5e5e5" }}
              >
                <option>All</option>
                <option>Crepe</option>
                <option>Nida</option>
                <option>Georgette</option>
                <option>Silk</option>
                <option>Jersey</option>
                <option>Cotton</option>
              </select>
            </div>

            {/* Price Range Filter */}
            <div>
              <label className="text-xs font-semibold mb-2 block tracking-wider" style={{ color: "#666", letterSpacing: "0.05em" }}>PRICE</label>
              <select 
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg text-sm"
                style={{ borderColor: "#e5e5e5" }}
              >
                <option>All</option>
                <option>Under RM 200</option>
                <option>RM 200 - RM 400</option>
                <option>RM 400 - RM 600</option>
                <option>Above RM 600</option>
              </select>
            </div>
          </div>
        </div>

        {/* Product Grid - Full Length Model Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative overflow-hidden mb-4 bg-gray-100 aspect-[2/3] rounded-lg">
                <img 
                  src={`https://images.unsplash.com/photo-1583846833110-8816f6e56f8b?w=400&h=600&fit=crop&q=80`}
                  alt={`Abaya ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Fabric Texture Zoom Button */}
                <button 
                  className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
                  title="View fabric texture"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.35-4.35"></path>
                    <path d="M11 8v6"></path>
                    <path d="M8 11h6"></path>
                  </svg>
                </button>

                {/* Occasion Tag */}
                <div className="absolute bottom-4 left-4">
                  <span className="text-xs px-3 py-1 rounded-full backdrop-blur-sm" style={{ backgroundColor: "rgba(255,255,255,0.9)", color: "#333" }}>
                    {["Daily", "Evening", "Formal"][i % 3]}
                  </span>
                </div>
              </div>
              
              <h3 className="font-medium mb-1" style={{ color: "#1a1a1a" }}>
                {["Classic", "Elegant", "Modern", "Luxe"][i % 4]} Abaya
              </h3>
              
              <p className="text-sm mb-2" style={{ color: "#666" }}>
                {["Crepe", "Nida", "Georgette", "Silk"][i % 4]} Fabric
              </p>

              <p className="font-semibold mb-2" style={{ color: "#1a1a1a" }}>
                RM {(299 + i * 80).toFixed(2)}
              </p>
              <button 
                onClick={() => {
                  const productId = `abaya-${i + 1}`;
                  const productName = `${["Classic", "Elegant", "Modern", "Luxe"][i % 4]} Abaya`;
                  const productPrice = 299 + i * 80;
                  const productImage = `https://images.unsplash.com/photo-1583846833110-8816f6e56f8b?w=400&h=600&fit=crop&q=80`;
                  addToCart({ id: productId, name: productName, price: productPrice, image: productImage });
                  alert(`${productName} added to cart!`);
                }}
                className="w-full py-2 text-xs font-medium border rounded hover:bg-black hover:text-white transition-all"
                style={{ borderColor: "#e5e5e5", color: "#333" }}
              >
                Quick Add
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

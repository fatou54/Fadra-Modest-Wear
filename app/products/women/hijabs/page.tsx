"use client";

import { useState } from "react";
import { useCart } from "@/lib/cartContext";

export default function HijabsPage() {
  const [selectedFabric, setSelectedFabric] = useState("");
  const { addToCart } = useCart();

  const colors = [
    { name: "Black", hex: "#000000" },
    { name: "White", hex: "#ffffff" },
    { name: "Beige", hex: "#d4a574" },
    { name: "Navy", hex: "#001f3f" },
    { name: "Gray", hex: "#808080" },
    { name: "Burgundy", hex: "#800020" },
    { name: "Olive", hex: "#808000" },
    { name: "Brown", hex: "#8B4513" }
  ];

  return (
    <main className="min-h-screen" style={{ backgroundColor: "#ffffff" }}>
      {/* Hero Banner */}
      <div 
        className="relative h-96 w-full"
      >
        <img 
          src="https://images.unsplash.com/photo-1583221123999-e8f1677b726d?w=1920&h=600&fit=crop"
          alt="Hijab Collection"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-40" />
        <div className="relative h-full flex flex-col items-center justify-center px-8 z-10">
          <h1 
            className="text-5xl md:text-6xl mb-4 text-center"
            style={{ fontFamily: "serif", color: "#ffffff", fontWeight: 400 }}
          >
            Premium Hijab Collection
          </h1>
          <p 
            className="text-lg text-center max-w-3xl"
            style={{ color: "#e5e5e5", lineHeight: 1.8 }}
          >
            Explore breathable, stylish hijabs crafted for everyday elegance and effortless styling. Available in a variety of textures, colors, and finishes.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Color Filter Circles */}
        <div className="mb-8">
          <h3 className="font-semibold mb-4 text-center" style={{ color: "#1a1a1a" }}>
            Shop by Color
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {colors.map((color) => (
              <div key={color.name} className="flex flex-col items-center gap-2">
                <button
                  className="w-16 h-16 rounded-full border-2 hover:scale-110 transition-transform"
                  style={{
                    backgroundColor: color.hex,
                    borderColor: "#e5e5e5",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
                  }}
                />
                <span className="text-xs" style={{ color: "#666" }}>{color.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Fabric Type Filter */}
        <div className="mb-8 flex justify-center gap-4">
          {["Chiffon", "Jersey", "Silk", "Cotton", "Georgette"].map((fabric) => (
            <button
              key={fabric}
              onClick={() => setSelectedFabric(selectedFabric === fabric ? "" : fabric)}
              className="px-6 py-2 rounded-full border transition-all"
              style={{
                backgroundColor: selectedFabric === fabric ? "#1a1a1a" : "transparent",
                color: selectedFabric === fabric ? "#ffffff" : "#1a1a1a",
                borderColor: "#e5e5e5"
              }}
            >
              {fabric}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative overflow-hidden mb-4 bg-gray-100 aspect-square rounded-lg">
                <img 
                  src={`https://images.unsplash.com/photo-1591027863217-e40d65f2503c?w=400&h=400&fit=crop&q=80`}
                  alt={`Hijab ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-medium mb-1 text-sm" style={{ color: "#1a1a1a" }}>
                Premium {["Chiffon", "Jersey", "Silk"][i % 3]} Hijab
              </h3>
              <p className="text-xs mb-2" style={{ color: "#666" }}>
                {colors[i % colors.length].name}
              </p>
              <p className="font-semibold text-sm mb-2" style={{ color: "#1a1a1a" }}>
                RM {(45 + i * 5).toFixed(2)}
              </p>
              <button 
                onClick={() => {
                  const productId = `hijab-${i + 1}`;
                  const productName = `Premium ${["Chiffon", "Jersey", "Silk"][i % 3]} Hijab`;
                  const productPrice = 45 + i * 5;
                  const productImage = `https://images.unsplash.com/photo-1591027863217-e40d65f2503c?w=400&h=400&fit=crop&q=80`;
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

        {/* Style Inspiration Section */}
        <div className="mt-16">
          <h2 className="text-3xl text-center mb-8" style={{ fontFamily: "serif", color: "#1a1a1a" }}>
            Style Inspiration
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Casual Everyday", "Office Ready", "Evening Elegance"].map((style, i) => (
              <div key={style} className="relative h-80 rounded-lg overflow-hidden group">
                <img 
                  src={`https://images.unsplash.com/photo-1591027863217-e40d65f2503c?w=600&h=800&fit=crop&q=80`}
                  alt={style}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end p-6">
                  <h3 className="text-xl font-medium" style={{ color: "#ffffff" }}>{style}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

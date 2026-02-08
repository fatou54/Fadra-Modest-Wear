"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/lib/cartContext";

export default function DressesPage() {
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedOccasion, setSelectedOccasion] = useState("");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const { addToCart } = useCart();

  return (
    <main className="min-h-screen" style={{ backgroundColor: "#ffffff" }}>
      {/* Hero Banner */}
      <div 
        className="relative h-96 w-full"
      >
        <img 
          src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=1920&h=600&fit=crop"
          alt="Modest Dresses"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-40" />
        <div className="relative h-full flex flex-col items-center justify-center px-8 z-10">
          <h1 
            className="text-5xl md:text-6xl mb-4 text-center"
            style={{ 
              fontFamily: "serif", 
              color: "#ffffff",
              fontWeight: 400
            }}
          >
            Modest Dresses Collection
          </h1>
          <p 
            className="text-lg text-center max-w-3xl"
            style={{ color: "#e5e5e5", lineHeight: 1.8 }}
          >
            Discover elegant modest dresses designed for comfort, confidence, and timeless style. From everyday wear to special occasions, each piece is crafted with premium fabrics and refined details.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <aside className="w-64 flex-shrink-0">
            <div className="sticky top-24 space-y-6">
              <div>
                <h3 className="font-semibold mb-3" style={{ color: "#1a1a1a" }}>Size</h3>
                <div className="space-y-2">
                  {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                    <label key={size} className="flex items-center gap-2 cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={selectedSize === size}
                        onChange={() => setSelectedSize(selectedSize === size ? "" : size)}
                        className="w-4 h-4"
                      />
                      <span style={{ color: "#666" }}>{size}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-3" style={{ color: "#1a1a1a" }}>Color</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    { name: "Black", hex: "#000000" },
                    { name: "White", hex: "#ffffff" },
                    { name: "Navy", hex: "#001f3f" },
                    { name: "Beige", hex: "#d4a574" },
                    { name: "Green", hex: "#3d9970" },
                    { name: "Pink", hex: "#ffb6c1" }
                  ].map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(selectedColor === color.name ? "" : color.name)}
                      className="w-10 h-10 rounded-full border-2 transition-all"
                      style={{
                        backgroundColor: color.hex,
                        borderColor: selectedColor === color.name ? "#d4a574" : "#e5e5e5"
                      }}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-3" style={{ color: "#1a1a1a" }}>Occasion</h3>
                <div className="space-y-2">
                  {["Everyday", "Work", "Evening", "Formal", "Wedding"].map((occasion) => (
                    <label key={occasion} className="flex items-center gap-2 cursor-pointer">
                      <input 
                        type="checkbox"
                        checked={selectedOccasion === occasion}
                        onChange={() => setSelectedOccasion(selectedOccasion === occasion ? "" : occasion)}
                        className="w-4 h-4"
                      />
                      <span style={{ color: "#666" }}>{occasion}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-3" style={{ color: "#1a1a1a" }}>Price Range</h3>
                <div className="space-y-2">
                  <input 
                    type="range" 
                    min="0" 
                    max="1000" 
                    step="50"
                    className="w-full"
                  />
                  <p className="text-sm" style={{ color: "#666" }}>RM 0 - RM 1000</p>
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <p style={{ color: "#666" }}>Showing 12 products</p>
              <select className="px-4 py-2 border rounded" style={{ borderColor: "#e5e5e5" }}>
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest First</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 9 }).map((_, i) => {
                const productId = `dress-${i + 1}`;
                const productName = `Elegant Modest Dress ${i + 1}`;
                const productPrice = 299 + i * 50;
                const productImage = `https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=600&fit=crop&q=80`;
                
                return (
                  <div key={i} className="group cursor-pointer">
                    <div className="relative overflow-hidden mb-4 bg-gray-100 aspect-[3/4]">
                      <img 
                        src={productImage}
                        alt={productName}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <button 
                        onClick={() => {
                          addToCart({
                            id: productId,
                            name: productName,
                            price: productPrice,
                            image: productImage,
                            size: selectedSize || "M",
                            color: selectedColor || "Black"
                          });
                          alert(`${productName} added to cart!`);
                        }}
                        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity hover:opacity-100"
                        style={{ backgroundColor: "#1a1a1a", color: "#ffffff" }}
                      >
                        Quick Add
                      </button>
                    </div>
                    <h3 className="font-medium mb-1" style={{ color: "#1a1a1a" }}>
                      {productName}
                    </h3>
                    <p className="text-sm mb-2" style={{ color: "#666" }}>
                      Premium Cotton Blend
                    </p>
                    <p className="font-semibold" style={{ color: "#1a1a1a" }}>
                      RM {productPrice.toFixed(2)}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

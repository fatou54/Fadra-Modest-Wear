"use client";

import { useCart } from "@/lib/cartContext";

export default function MenShirtsPage() {
  const { addToCart } = useCart();
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#ffffff" }}>
      {/* Hero Banner */}
      <div 
        className="relative h-96 w-full"
      >
        <img 
          src="https://images.unsplash.com/photo-1602810319428-019690571b5b?w=1920&h=600&fit=crop"
          alt="Men's Shirts"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-40" />
        <div className="relative h-full flex flex-col items-center justify-center px-8 z-10">
          <h1 
            className="text-5xl md:text-6xl mb-4 text-center"
            style={{ fontFamily: "serif", color: "#ffffff", fontWeight: 400 }}
          >
            Men's Shirts Collection
          </h1>
          <p 
            className="text-lg text-center max-w-3xl"
            style={{ color: "#e5e5e5", lineHeight: 1.8 }}
          >
            Clean, versatile shirts designed for comfort, prayer-friendly wear, and everyday elegance.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Sleeve Length Filter */}
        <div className="mb-8 flex justify-center gap-4">
          {["Short Sleeve", "Long Sleeve", "3/4 Sleeve"].map((length) => (
            <button
              key={length}
              className="px-8 py-3 rounded-full border font-medium hover:border-black hover:bg-black hover:text-white transition-all"
              style={{ borderColor: "#e5e5e5", color: "#333" }}
            >
              {length}
            </button>
          ))}
        </div>

        {/* Collar Style Options */}
        <div className="mb-8">
          <h3 className="text-center mb-4 font-medium" style={{ color: "#1a1a1a" }}>Collar Style</h3>
          <div className="flex justify-center gap-3">
            {["Classic", "Button-Down", "Mandarin", "Spread", "Cutaway"].map((collar) => (
              <button
                key={collar}
                className="px-6 py-2 text-sm rounded-full border hover:border-black transition-all"
                style={{ borderColor: "#e5e5e5", color: "#666" }}
              >
                {collar}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative overflow-hidden mb-4 bg-gray-100 aspect-[3/4] rounded-lg">
                <img 
                  src={`https://images.unsplash.com/photo-1602810319428-019690571b5b?w=400&h=500&fit=crop&q=80`}
                  alt={`Shirt ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <h3 className="font-medium mb-1" style={{ color: "#1a1a1a" }}>
                {["Classic", "Oxford", "Linen"][i % 3]} Shirt
              </h3>
              
              <p className="text-sm mb-2" style={{ color: "#666" }}>
                {["White", "Blue", "Black", "Gray"][i % 4]} • {["Long", "Short"][i % 2]} Sleeve
              </p>

              <p className="font-semibold mb-2" style={{ color: "#1a1a1a" }}>
                RM {(129 + i * 20).toFixed(2)}
              </p>
              <button 
                onClick={() => {
                  const productId = `shirt-${i + 1}`;
                  const productName = `${["Classic", "Oxford", "Linen"][i % 3]} Shirt`;
                  const productPrice = 129 + i * 20;
                  const productImage = `https://images.unsplash.com/photo-1602810319428-019690571b5b?w=400&h=500&fit=crop&q=80`;
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

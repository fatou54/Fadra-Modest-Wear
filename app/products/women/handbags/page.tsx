"use client";

import { useCart } from "@/lib/cartContext";

export default function HandbagsPage() {
  const { addToCart } = useCart();
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#ffffff" }}>
      {/* Hero Banner */}
      <div 
        className="relative h-96 w-full"
      >
        <img 
          src="https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=1920&h=600&fit=crop"
          alt="Handbag Collection"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-40" />
        <div className="relative h-full flex flex-col items-center justify-center px-8 z-10">
          <h1 
            className="text-5xl md:text-6xl mb-4 text-center"
            style={{ fontFamily: "serif", color: "#ffffff", fontWeight: 400 }}
          >
            Luxury Handbags for Modern Modesty
          </h1>
          <p 
            className="text-lg text-center max-w-3xl"
            style={{ color: "#e5e5e5", lineHeight: 1.8 }}
          >
            Elegant bags designed for daily wear, events, and travel — combining functionality with timeless fashion.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Size Filter */}
        <div className="mb-8 flex justify-center gap-4">
          {[
            { name: "Small", icon: "👝" },
            { name: "Medium", icon: "👜" },
            { name: "Large", icon: "👛" },
            { name: "Tote", icon: "🛍️" }
          ].map((size) => (
            <button
              key={size.name}
              className="px-6 py-3 rounded-lg border hover:border-black transition-colors"
              style={{ borderColor: "#e5e5e5" }}
            >
              <span className="text-2xl mb-1 block">{size.icon}</span>
              <span className="text-sm" style={{ color: "#333" }}>{size.name}</span>
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="group cursor-pointer">
              {/* Lifestyle Image */}
              <div className="relative overflow-hidden mb-4 bg-gray-100 aspect-[4/5] rounded-lg">
                <img 
                  src={`https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=500&h=600&fit=crop&q=80`}
                  alt={`Handbag ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="font-semibold mb-1" style={{ color: "#1a1a1a" }}>
                    Elegant {["Crossbody", "Tote", "Shoulder"][i % 3]} Bag
                  </h3>
                  <p className="text-sm mb-2" style={{ color: "#666" }}>
                    Premium Leather • Multiple Compartments
                  </p>
                  
                  {/* Capacity Description */}
                  <div className="flex items-center gap-2 mb-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    </svg>
                    <span className="text-xs" style={{ color: "#666" }}>
                      Fits: Wallet, Phone, Essentials
                    </span>
                  </div>

                  <p className="text-lg font-bold mb-2" style={{ color: "#1a1a1a" }}>
                    RM {(399 + i * 100).toFixed(2)}
                  </p>
                  <button 
                    onClick={() => {
                      const productId = `handbag-${i + 1}`;
                      const productName = `Elegant ${["Crossbody", "Tote", "Shoulder"][i % 3]} Bag`;
                      const productPrice = 399 + i * 100;
                      const productImage = `https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=500&h=600&fit=crop&q=80`;
                      addToCart({ id: productId, name: productName, price: productPrice, image: productImage });
                      alert(`${productName} added to cart!`);
                    }}
                    className="w-full py-2 text-xs font-medium border rounded hover:bg-black hover:text-white transition-all"
                    style={{ borderColor: "#e5e5e5", color: "#333" }}
                  >
                    Quick Add
                  </button>
                </div>
                
                {/* Size Icon */}
                <div className="text-2xl opacity-60">
                  {["👝", "👜", "🛍️"][i % 3]}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

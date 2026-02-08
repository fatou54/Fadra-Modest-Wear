"use client";

import { useCart } from "@/lib/cartContext";

export default function MenBlazersPage() {
  const { addToCart } = useCart();
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#ffffff" }}>
      {/* Hero Banner */}
      <div 
        className="relative h-96 w-full"
      >
        <img 
          src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=1920&h=600&fit=crop"
          alt="Men's Blazers"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-40" />
        <div className="relative h-full flex flex-col items-center justify-center px-8 z-10">
          <h1 
            className="text-5xl md:text-6xl mb-4 text-center"
            style={{ fontFamily: "serif", color: "#ffffff", fontWeight: 400 }}
          >
            Blazers Collection
          </h1>
          <p 
            className="text-lg text-center max-w-3xl"
            style={{ color: "#e5e5e5", lineHeight: 1.8 }}
          >
            Structured blazers perfect for work, events, and polished everyday wear.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Fit Preview */}
        <div className="mb-8 flex justify-center gap-4">
          {["Slim Fit", "Regular Fit", "Relaxed Fit"].map((fit) => (
            <button
              key={fit}
              className="px-8 py-3 rounded-full border font-medium hover:border-black hover:bg-black hover:text-white transition-all"
              style={{ borderColor: "#e5e5e5", color: "#333" }}
            >
              {fit}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative overflow-hidden mb-4 bg-gray-100 aspect-[3/4] rounded-lg">
                <img 
                  src={`https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=500&fit=crop&q=80`}
                  alt={`Blazer ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <h3 className="font-medium mb-2" style={{ color: "#1a1a1a" }}>
                {["Classic", "Modern", "Casual"][i % 3]} Blazer
              </h3>
              
              <p className="text-sm mb-3" style={{ color: "#666" }}>
                {["Navy", "Charcoal", "Black"][i % 3]} • Wool Blend
              </p>

              {/* Outfit Pairing Suggestion */}
              <div className="mb-3 p-3 rounded" style={{ backgroundColor: "#f9f9f9" }}>
                <p className="text-xs mb-1" style={{ color: "#666" }}>Pairs well with:</p>
                <p className="text-xs font-medium" style={{ color: "#333" }}>
                  {["White Shirt + Gray Trousers", "Blue Shirt + Khaki Pants", "Black Turtleneck + Jeans"][i % 3]}
                </p>
              </div>

              <p className="text-lg font-bold mb-3" style={{ color: "#1a1a1a" }}>
                RM {(599 + i * 80).toFixed(2)}
              </p>
              <button 
                onClick={() => {
                  const productId = `blazer-${i + 1}`;
                  const productName = `${["Classic", "Modern", "Casual"][i % 3]} Blazer`;
                  const productPrice = 599 + i * 80;
                  const productImage = `https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=500&fit=crop&q=80`;
                  addToCart({ id: productId, name: productName, price: productPrice, image: productImage });
                  alert(`${productName} added to cart!`);
                }}
                className="w-full py-2 text-sm font-medium border rounded hover:bg-black hover:text-white transition-all"
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

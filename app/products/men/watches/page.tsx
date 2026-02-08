"use client";

import { useCart } from "@/lib/cartContext";

export default function MenWatchesPage() {
  const { addToCart } = useCart();
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#fafafa" }}>
      {/* Hero Banner */}
      <div 
        className="relative h-96 w-full"
      >
        <img 
          src="https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=1920&h=600&fit=crop"
          alt="Men's Watches"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-40" />
        <div className="relative h-full flex flex-col items-center justify-center px-8 z-10">
          <h1 
            className="text-5xl md:text-6xl mb-4 text-center"
            style={{ fontFamily: "serif", color: "#ffffff", fontWeight: 400 }}
          >
            Timeless Watches
          </h1>
          <p 
            className="text-lg text-center max-w-3xl"
            style={{ color: "#e5e5e5", lineHeight: 1.8 }}
          >
            Timeless watches designed to complement modest luxury fashion.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8 py-12">
        {/* Strap Filter */}
        <div className="mb-8 flex justify-center gap-4">
          {["Leather", "Metal", "Nylon", "Rubber"].map((strap) => (
            <button
              key={strap}
              className="px-8 py-3 rounded-full border font-medium hover:border-black hover:bg-black hover:text-white transition-all"
              style={{ borderColor: "#e5e5e5", color: "#333" }}
            >
              {strap}
            </button>
          ))}
        </div>

        {/* Product Grid with Close-up Wrist Shots */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="group cursor-pointer bg-white rounded-lg p-6 hover:shadow-xl transition-shadow">
              <div className="relative overflow-hidden mb-4 bg-gradient-to-br from-gray-50 to-blue-50 aspect-square rounded-lg flex items-center justify-center">
                <img 
                  src={`https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=400&h=400&fit=crop&q=80`}
                  alt={`Watch ${i + 1}`}
                  className="w-3/4 h-3/4 object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <h3 className="font-semibold mb-2" style={{ color: "#1a1a1a" }}>
                {["Classic", "Sport", "Dress", "Chronograph"][i % 4]} Watch
              </h3>
              
              <p className="text-sm mb-3" style={{ color: "#666" }}>
                {["Leather", "Metal", "Nylon"][i % 3]} Strap • Water Resistant
              </p>

              <p className="text-lg font-bold mb-3" style={{ color: "#1a1a1a" }}>
                RM {(599 + i * 150).toFixed(2)}
              </p>
              <button 
                onClick={() => {
                  const productId = `watch-${i + 1}`;
                  const productName = `${["Classic", "Sport", "Dress", "Chronograph"][i % 4]} Watch`;
                  const productPrice = 599 + i * 150;
                  const productImage = `https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=400&h=400&fit=crop&q=80`;
                  addToCart({ id: productId, name: productName, price: productPrice, image: productImage });
                  alert(`${productName} added to cart!`);
                }}
                className="w-full py-2 text-sm font-medium rounded"
                style={{ backgroundColor: "#1a1a1a", color: "#ffffff" }}
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

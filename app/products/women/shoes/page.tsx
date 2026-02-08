"use client";

import { useCart } from "@/lib/cartContext";

export default function ShoesPage() {
  const { addToCart } = useCart();
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#ffffff" }}>
      {/* Hero Banner */}
      <div 
        className="relative h-96 w-full"
      >
        <img 
          src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=1920&h=600&fit=crop"
          alt="Women's Shoes"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-40" />
        <div className="relative h-full flex flex-col items-center justify-center px-8 z-10">
          <h1 
            className="text-5xl md:text-6xl mb-4 text-center"
            style={{ fontFamily: "serif", color: "#ffffff", fontWeight: 400 }}
          >
            Comfort Meets Style
          </h1>
          <p 
            className="text-lg text-center max-w-3xl"
            style={{ color: "#e5e5e5", lineHeight: 1.8 }}
          >
            Step confidently with shoes designed for modest fashion lovers — elegant, durable, and comfortable.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Size Selector Preview */}
        <div className="mb-8 flex justify-center gap-2">
          <span className="text-sm mr-4" style={{ color: "#666" }}>Select Size:</span>
          {[35, 36, 37, 38, 39, 40, 41, 42].map((size) => (
            <button
              key={size}
              className="w-12 h-12 rounded border hover:border-black hover:bg-black hover:text-white transition-all"
              style={{ borderColor: "#e5e5e5", color: "#333" }}
            >
              {size}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="group cursor-pointer">
              {/* Side View Product Card */}
              <div className="relative overflow-hidden mb-4 bg-gray-50 aspect-square rounded-lg p-4">
                <img 
                  src={`https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=400&fit=crop&q=80`}
                  alt={`Shoe ${i + 1}`}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <h3 className="font-medium mb-1 text-sm" style={{ color: "#1a1a1a" }}>
                {["Classic Flats", "Elegant Heels", "Comfort Loafers", "Ankle Boots"][i % 4]}
              </h3>
              
              {/* Walking Comfort Icons */}
              <div className="flex items-center gap-1 mb-2">
                <span className="text-xs" style={{ color: "#666" }}>Comfort:</span>
                {Array.from({ length: 5 }).map((_, star) => (
                  <svg key={star} width="12" height="12" viewBox="0 0 24 24" fill={star < 4 ? "#fbbf24" : "none"} stroke="#fbbf24" strokeWidth="2">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>

              <p className="font-semibold text-sm mb-2" style={{ color: "#1a1a1a" }}>
                RM {(189 + i * 30).toFixed(2)}
              </p>

              <button 
                onClick={() => {
                  const productId = `women-shoe-${i + 1}`;
                  const productName = ["Classic Flats", "Elegant Heels", "Comfort Loafers", "Ankle Boots"][i % 4];
                  const productPrice = 189 + i * 30;
                  const productImage = `https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=400&fit=crop&q=80`;
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

"use client";

import { useCart } from "@/lib/cartContext";

export default function JewelryPage() {
  const { addToCart } = useCart();
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#fafafa" }}>
      {/* Hero Banner */}
      <div 
        className="relative h-96 w-full"
      >
        <img 
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&h=600&fit=crop"
          alt="Jewelry Collection"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-40" />
        <div className="relative h-full flex flex-col items-center justify-center px-8 z-10">
          <h1 
            className="text-5xl md:text-6xl mb-4 text-center"
            style={{ fontFamily: "serif", color: "#ffffff", fontWeight: 400 }}
          >
            Refined Accessories
          </h1>
          <p 
            className="text-lg text-center max-w-3xl"
            style={{ color: "#e5e5e5", lineHeight: 1.8 }}
          >
            Delicate jewelry pieces that complement modest fashion while maintaining sophistication.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8 py-12">
        {/* Gold/Silver Toggle */}
        <div className="mb-8 flex justify-center gap-4">
          <button className="px-8 py-3 rounded-full font-medium transition-all" style={{ backgroundColor: "#1a1a1a", color: "#ffffff" }}>
            Gold
          </button>
          <button className="px-8 py-3 rounded-full font-medium border transition-all" style={{ borderColor: "#e5e5e5", color: "#333" }}>
            Silver
          </button>
          <button className="px-8 py-3 rounded-full font-medium border transition-all" style={{ borderColor: "#e5e5e5", color: "#333" }}>
            Rose Gold
          </button>
        </div>

        {/* Occasion Filter */}
        <div className="mb-12 flex justify-center gap-3">
          {["All", "Daily", "Wedding", "Formal", "Casual"].map((occasion) => (
            <button
              key={occasion}
              className="px-6 py-2 text-sm rounded-full border hover:border-black transition-all"
              style={{ borderColor: "#e5e5e5", color: "#666" }}
            >
              {occasion}
            </button>
          ))}
        </div>

        {/* Product Grid with Close-up Photography */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="group cursor-pointer bg-white rounded-lg p-4 hover:shadow-lg transition-shadow">
              <div className="relative overflow-hidden mb-4 bg-gradient-to-br from-amber-50 to-yellow-50 aspect-square rounded-lg flex items-center justify-center">
                <img 
                  src={`https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop&q=80`}
                  alt={`Jewelry ${i + 1}`}
                  className="w-3/4 h-3/4 object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <div className="mb-2">
                <span className="text-xs px-2 py-1 rounded-full" style={{ backgroundColor: "#f3f4f6", color: "#666" }}>
                  {["Daily", "Wedding", "Formal"][i % 3]}
                </span>
              </div>

              <h3 className="font-medium mb-1 text-sm" style={{ color: "#1a1a1a" }}>
                {["Elegant Necklace", "Delicate Earrings", "Refined Bracelet", "Classic Ring"][i % 4]}
              </h3>
              
              <p className="text-xs mb-2" style={{ color: "#666" }}>
                18K Gold Plated
              </p>

              <p className="font-semibold text-sm mb-2" style={{ color: "#1a1a1a" }}>
                RM {(149 + i * 50).toFixed(2)}
              </p>
              <button 
                onClick={() => {
                  const productId = `jewelry-${i + 1}`;
                  const productName = ["Elegant Necklace", "Delicate Earrings", "Refined Bracelet", "Classic Ring"][i % 4];
                  const productPrice = 149 + i * 50;
                  const productImage = `https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop&q=80`;
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

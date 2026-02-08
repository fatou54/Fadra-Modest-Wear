"use client";

import { useCart } from "@/lib/cartContext";

export default function MenSuitsPage() {
  const { addToCart } = useCart();
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#ffffff" }}>
      {/* Hero Banner */}
      <div 
        className="relative h-96 w-full"
      >
        <img 
          src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1920&h=600&fit=crop"
          alt="Men's Suits"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-40" />
        <div className="relative h-full flex flex-col items-center justify-center px-8 z-10">
          <h1 
            className="text-5xl md:text-6xl mb-4 text-center"
            style={{ fontFamily: "serif", color: "#ffffff", fontWeight: 400 }}
          >
            Modern Modest Suits
          </h1>
          <p 
            className="text-lg text-center max-w-3xl"
            style={{ color: "#e5e5e5", lineHeight: 1.8 }}
          >
            Tailored suits blending tradition and contemporary style for professional and formal occasions.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Fit Selector */}
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

        {/* Color Swatches */}
        <div className="mb-8">
          <h3 className="text-center mb-4 font-medium" style={{ color: "#1a1a1a" }}>Select Color</h3>
          <div className="flex justify-center gap-3">
            {[
              { name: "Navy", color: "#001f3f" },
              { name: "Charcoal", color: "#36454F" },
              { name: "Black", color: "#000000" },
              { name: "Gray", color: "#808080" },
              { name: "Brown", color: "#8B4513" }
            ].map((swatch) => (
              <div key={swatch.name} className="flex flex-col items-center gap-2">
                <button
                  className="w-14 h-14 rounded-full border-2 hover:scale-110 transition-transform"
                  style={{ backgroundColor: swatch.color, borderColor: "#e5e5e5" }}
                />
                <span className="text-xs" style={{ color: "#666" }}>{swatch.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Occasion Labels */}
        <div className="mb-8 flex justify-center gap-3">
          {["All", "Business", "Wedding", "Formal", "Interview"].map((occasion) => (
            <button
              key={occasion}
              className="px-6 py-2 text-sm rounded-full border hover:border-black transition-all"
              style={{ borderColor: "#e5e5e5", color: "#666" }}
            >
              {occasion}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative overflow-hidden mb-4 bg-gray-100 aspect-[2/3] rounded-lg">
                <img 
                  src={`https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=600&fit=crop&q=80`}
                  alt={`Suit ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <h3 className="font-medium mb-1" style={{ color: "#1a1a1a" }}>
                {["Classic", "Modern", "Executive"][i % 3]} Suit
              </h3>
              
              <p className="text-sm mb-2" style={{ color: "#666" }}>
                Wool Blend • Tailored Fit
              </p>

              <p className="font-semibold mb-2" style={{ color: "#1a1a1a" }}>
                RM {(899 + i * 100).toFixed(2)}
              </p>
              <button 
                onClick={() => {
                  const productId = `suit-${i + 1}`;
                  const productName = `${["Classic", "Modern", "Executive"][i % 3]} Suit`;
                  const productPrice = 899 + i * 100;
                  const productImage = `https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=600&fit=crop&q=80`;
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

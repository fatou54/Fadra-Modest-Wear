"use client";

import { useCart } from "@/lib/cartContext";

export default function LipGlossPage() {
  const { addToCart } = useCart();
  const shades = [
    { name: "Nude Blush", color: "#F5C1B8" },
    { name: "Rose Petal", color: "#D88A9A" },
    { name: "Berry Kiss", color: "#A84464" },
    { name: "Coral Dream", color: "#FF7F7F" },
    { name: "Mauve Magic", color: "#C39BD3" },
    { name: "Plum Perfect", color: "#8E44AD" }
  ];

  return (
    <main className="min-h-screen" style={{ backgroundColor: "#faf8f5" }}>
      {/* Hero Banner */}
      <div 
        className="relative h-96 w-full"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1920&h=600&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-black opacity-30" />
        <div className="relative h-full flex flex-col items-center justify-center px-8 z-10">
          <h1 
            className="text-5xl md:text-6xl mb-4 text-center"
            style={{ fontFamily: "serif", color: "#ffffff", fontWeight: 400 }}
          >
            Beauty Essentials
          </h1>
          <p 
            className="text-lg text-center max-w-3xl"
            style={{ color: "#e5e5e5", lineHeight: 1.8 }}
          >
            Enhance your natural beauty with our halal-friendly lip gloss collection designed for long-lasting shine and comfort.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8 py-12">
        {/* Shade Swatches */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-center" style={{ fontFamily: "serif", color: "#1a1a1a" }}>
            Find Your Perfect Shade
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {shades.map((shade) => (
              <div key={shade.name} className="flex flex-col items-center gap-3">
                <div 
                  className="w-20 h-20 rounded-full border-4 border-white shadow-lg cursor-pointer hover:scale-110 transition-transform"
                  style={{ backgroundColor: shade.color }}
                />
                <span className="text-sm font-medium" style={{ color: "#333" }}>{shade.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow">
              <div className="relative overflow-hidden mb-4 bg-gradient-to-br from-pink-50 to-purple-50 aspect-square rounded-lg flex items-center justify-center">
                <img 
                  src={`https://images.unsplash.com/photo-1631730486572-226d1f595b68?w=400&h=400&fit=crop&q=80`}
                  alt={`Lip Gloss ${i + 1}`}
                  className="w-3/4 h-3/4 object-contain"
                />
              </div>
              
              {/* Try-on Preview */}
              <div className="mb-4 p-3 rounded" style={{ backgroundColor: "#f9f5f1" }}>
                <p className="text-xs mb-2" style={{ color: "#666" }}>Try this shade:</p>
                <div className="flex gap-2">
                  {shades.slice(i % 3, (i % 3) + 3).map((shade) => (
                    <div 
                      key={shade.name}
                      className="w-8 h-8 rounded-full border-2 border-white shadow cursor-pointer"
                      style={{ backgroundColor: shade.color }}
                      title={shade.name}
                    />
                  ))}
                </div>
              </div>

              <h3 className="font-semibold mb-2" style={{ color: "#1a1a1a" }}>
                {shades[i].name} Lip Gloss
              </h3>
              <p className="text-sm mb-3" style={{ color: "#666" }}>
                Halal-certified • Long-lasting • Hydrating
              </p>
              <div className="flex items-center justify-between">
                <p className="text-lg font-bold" style={{ color: "#1a1a1a" }}>
                  RM {(59 + i * 10).toFixed(2)}
                </p>
                <button 
                  onClick={() => {
                    const productId = `lipgloss-${i + 1}`;
                    const productName = `${shades[i].name} Lip Gloss`;
                    const productPrice = 59 + i * 10;
                    const productImage = `https://images.unsplash.com/photo-1631730486572-226d1f595b68?w=400&h=400&fit=crop&q=80`;
                    addToCart({ id: productId, name: productName, price: productPrice, image: productImage });
                    alert(`${productName} added to cart!`);
                  }}
                  className="px-4 py-2 text-sm font-medium rounded"
                  style={{ backgroundColor: "#1a1a1a", color: "#ffffff" }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Complete the Look Section */}
        <div className="mt-16 p-8 rounded-lg" style={{ backgroundColor: "#fff" }}>
          <h3 className="text-2xl font-semibold mb-6 text-center" style={{ fontFamily: "serif", color: "#1a1a1a" }}>
            Complete the Look
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Makeup Remover", "Lip Liner", "Lip Balm", "Setting Spray"].map((product) => (
              <div key={product} className="text-center p-4 rounded hover:bg-gray-50 cursor-pointer transition-colors">
                <div className="w-full h-32 bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg mb-3" />
                <p className="text-sm font-medium" style={{ color: "#333" }}>{product}</p>
                <p className="text-xs mt-1" style={{ color: "#666" }}>From RM 39</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

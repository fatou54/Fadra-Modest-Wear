"use client";

import { useCart } from "@/lib/cartContext";

export default function MenFragrancesPage() {
  const { addToCart } = useCart();
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#fafafa" }}>
      {/* Hero Banner */}
      <div 
        className="relative h-96 w-full"
      >
        <img 
          src="https://images.unsplash.com/photo-1541643600914-78b084683601?w=1920&h=600&fit=crop"
          alt="Men's Fragrances"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-30" />
        <div className="relative h-full flex flex-col items-center justify-center px-8 z-10">
          <h1 
            className="text-5xl md:text-6xl mb-4 text-center"
            style={{ fontFamily: "serif", color: "#ffffff", fontWeight: 400 }}
          >
            Men's Fragrances
          </h1>
          <p 
            className="text-lg text-center max-w-3xl"
            style={{ color: "#e5e5e5", lineHeight: 1.8 }}
          >
            Signature halal-friendly fragrances inspired by elegance and confidence.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8 py-12">
        {/* Notes Filter */}
        <div className="mb-12">
          <h3 className="text-center mb-4 font-medium" style={{ color: "#1a1a1a" }}>Filter by Notes</h3>
          <div className="flex justify-center gap-3">
            {["All", "Woody", "Floral", "Musk", "Citrus", "Oriental", "Fresh"].map((note) => (
              <button
                key={note}
                className="px-6 py-2 text-sm rounded-full border hover:border-black transition-all"
                style={{ borderColor: "#e5e5e5", color: "#666" }}
              >
                {note}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="group cursor-pointer bg-white rounded-lg p-6 hover:shadow-xl transition-shadow">
              <div className="relative overflow-hidden mb-4 bg-gradient-to-br from-amber-50 to-orange-50 aspect-[3/4] rounded-lg flex items-center justify-center">
                <img 
                  src={`https://images.unsplash.com/photo-1541643600914-78b084683601?w=300&h=400&fit=crop&q=80`}
                  alt={`Fragrance ${i + 1}`}
                  className="w-2/3 h-2/3 object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <h3 className="font-semibold mb-2" style={{ color: "#1a1a1a" }}>
                {["Oud Royal", "Amber Nights", "Cedar Woods", "Musk Noir", "Sandalwood", "Ocean Breeze"][i % 6]}
              </h3>
              
              {/* Scent Notes */}
              <p className="text-sm mb-3" style={{ color: "#666" }}>
                Top: {["Bergamot", "Lemon", "Lavender"][i % 3]} • Heart: {["Oud", "Amber", "Cedar"][i % 3]}
              </p>

              {/* Scent Intensity Scale */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs" style={{ color: "#666" }}>Intensity</span>
                  <span className="text-xs font-medium" style={{ color: "#333" }}>{["Light", "Medium", "Strong"][i % 3]}</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full rounded-full"
                    style={{ 
                      width: `${[40, 60, 90][i % 3]}%`,
                      backgroundColor: "#1a1a1a"
                    }}
                  />
                </div>
              </div>

              <p className="text-lg font-bold mb-3" style={{ color: "#1a1a1a" }}>
                RM {(199 + i * 50).toFixed(2)}
              </p>

              <button 
                onClick={() => {
                  const productId = `fragrance-${i + 1}`;
                  const productName = ["Oud Royal", "Amber Nights", "Cedar Woods", "Musk Noir", "Sandalwood", "Ocean Breeze"][i % 6];
                  const productPrice = 199 + i * 50;
                  const productImage = `https://images.unsplash.com/photo-1541643600914-78b084683601?w=300&h=400&fit=crop&q=80`;
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

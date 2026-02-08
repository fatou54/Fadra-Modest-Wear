"use client";

import { useCart } from "@/lib/cartContext";

export default function MenShoesPage() {
  const { addToCart } = useCart();
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#ffffff" }}>
      {/* Hero Banner */}
      <div 
        className="relative h-96 w-full"
      >
        <img 
          src="https://images.unsplash.com/photo-1449505278894-297fdb3edbc1?w=1920&h=600&fit=crop"
          alt="Men's Shoes"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-40" />
        <div className="relative h-full flex flex-col items-center justify-center px-8 z-10">
          <h1 
            className="text-5xl md:text-6xl mb-4 text-center"
            style={{ fontFamily: "serif", color: "#ffffff", fontWeight: 400 }}
          >
            Men's Footwear
          </h1>
          <p 
            className="text-lg text-center max-w-3xl"
            style={{ color: "#e5e5e5", lineHeight: 1.8 }}
          >
            Classic and contemporary footwear crafted for durability and refined style.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Size Grid */}
        <div className="mb-8 flex justify-center gap-2">
          <span className="text-sm mr-4" style={{ color: "#666" }}>UK Size:</span>
          {[6, 7, 8, 9, 10, 11, 12].map((size) => (
            <button
              key={size}
              className="w-12 h-12 rounded border hover:border-black hover:bg-black hover:text-white transition-all"
              style={{ borderColor: "#e5e5e5", color: "#333" }}
            >
              {size}
            </button>
          ))}
        </div>

        {/* Material Tags */}
        <div className="mb-8 flex justify-center gap-3">
          {["All", "Leather", "Suede", "Canvas", "Synthetic"].map((material) => (
            <button
              key={material}
              className="px-6 py-2 text-sm rounded-full border hover:border-black transition-all"
              style={{ borderColor: "#e5e5e5", color: "#666" }}
            >
              {material}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative overflow-hidden mb-4 bg-gray-50 aspect-square rounded-lg p-4">
                <img 
                  src={`https://images.unsplash.com/photo-1449505278894-297fdb3edbc1?w=400&h=400&fit=crop&q=80`}
                  alt={`Shoe ${i + 1}`}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <h3 className="font-medium mb-1" style={{ color: "#1a1a1a" }}>
                {["Oxford Dress", "Derby Classic", "Loafers", "Brogues"][i % 4]}
              </h3>
              
              <p className="text-sm mb-2" style={{ color: "#666" }}>
                {["Leather", "Suede", "Patent"][i % 3]} • {["Black", "Brown", "Tan"][i % 3]}
              </p>

              <p className="font-semibold mb-2" style={{ color: "#1a1a1a" }}>
                RM {(349 + i * 40).toFixed(2)}
              </p>
              <button 
                onClick={() => {
                  const productId = `men-shoe-${i + 1}`;
                  const productName = ["Oxford Dress", "Derby Classic", "Loafers", "Brogues"][i % 4];
                  const productPrice = 349 + i * 40;
                  const productImage = `https://images.unsplash.com/photo-1449505278894-297fdb3edbc1?w=400&h=400&fit=crop&q=80`;
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

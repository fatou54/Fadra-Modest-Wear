"use client";

import { useCart } from "@/lib/cartContext";

export default function MenAccessoriesPage() {
  const { addToCart } = useCart();
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#ffffff" }}>
      {/* Hero Banner */}
      <div 
        className="relative h-96 w-full"
      >
        <img 
          src="https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=1920&h=600&fit=crop"
          alt="Men's Accessories"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-40" />
        <div className="relative h-full flex flex-col items-center justify-center px-8 z-10">
          <h1 
            className="text-5xl md:text-6xl mb-4 text-center"
            style={{ fontFamily: "serif", color: "#ffffff", fontWeight: 400 }}
          >
            Men's Accessories
          </h1>
          <p 
            className="text-lg text-center max-w-3xl"
            style={{ color: "#e5e5e5", lineHeight: 1.8 }}
          >
            Minimal accessories that enhance your modest fashion style without overpowering it.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            { name: "Leather Wallet", price: 149 },
            { name: "Classic Belt", price: 89 },
            { name: "Tie Collection", price: 79 },
            { name: "Pocket Square", price: 39 },
            { name: "Cufflinks Set", price: 129 },
            { name: "Tie Clip", price: 49 },
            { name: "Leather Gloves", price: 169 },
            { name: "Scarf", price: 99 },
            { name: "Sunglasses", price: 199 },
            { name: "Card Holder", price: 89 },
            { name: "Key Chain", price: 59 },
            { name: "Belt Bag", price: 179 }
          ].map((item, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative overflow-hidden mb-4 bg-gray-50 aspect-square rounded-lg p-4">
                <img 
                  src={`https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=400&h=400&fit=crop&q=80`}
                  alt={item.name}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <h3 className="font-medium mb-2 text-sm" style={{ color: "#1a1a1a" }}>
                {item.name}
              </h3>

              <div className="flex items-center justify-between">
                <p className="font-semibold text-sm" style={{ color: "#1a1a1a" }}>
                  RM {item.price.toFixed(2)}
                </p>
                
                {/* Quick Add Button */}
                <button 
                  onClick={() => {
                    const productId = `accessory-${i + 1}`;
                    const productName = item.name;
                    const productPrice = item.price;
                    const productImage = `https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=400&h=400&fit=crop&q=80`;
                    addToCart({ id: productId, name: productName, price: productPrice, image: productImage });
                    alert(`${productName} added to cart!`);
                  }}
                  className="px-3 py-1 text-xs font-medium rounded border hover:bg-black hover:text-white transition-all"
                  style={{ borderColor: "#e5e5e5", color: "#333" }}
                >
                  Add
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bundle Suggestions */}
        <div className="mt-16 p-8 rounded-lg" style={{ backgroundColor: "#f9f9f9" }}>
          <h3 className="text-2xl font-semibold mb-6 text-center" style={{ fontFamily: "serif", color: "#1a1a1a" }}>
            Bundle & Save
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Essential Kit", items: "Wallet + Belt + Tie", price: 289, save: 28 },
              { name: "Professional Set", items: "Tie + Cufflinks + Pocket Square", price: 219, save: 28 },
              { name: "Travel Bundle", items: "Wallet + Sunglasses + Card Holder", price: 399, save: 38 }
            ].map((bundle, i) => (
              <div key={i} className="bg-white rounded-lg p-6 border hover:shadow-lg transition-shadow" style={{ borderColor: "#e5e5e5" }}>
                <h4 className="font-semibold mb-2" style={{ color: "#1a1a1a" }}>{bundle.name}</h4>
                <p className="text-sm mb-4" style={{ color: "#666" }}>{bundle.items}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-lg font-bold" style={{ color: "#1a1a1a" }}>RM {bundle.price}</p>
                    <p className="text-xs" style={{ color: "#22c55e" }}>Save RM {bundle.save}</p>
                  </div>
                  <button 
                    onClick={() => {
                      const productId = `bundle-${i + 1}`;
                      const productName = bundle.name;
                      const productPrice = bundle.price;
                      const productImage = `https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=400&h=400&fit=crop&q=80`;
                      addToCart({ id: productId, name: productName, price: productPrice, image: productImage });
                      alert(`${productName} added to cart!`);
                    }}
                    className="px-4 py-2 text-sm font-medium rounded"
                    style={{ backgroundColor: "#1a1a1a", color: "#ffffff" }}
                  >
                    Add Bundle
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

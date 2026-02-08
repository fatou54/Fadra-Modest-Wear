"use client";

import Link from "next/link";
import { useCart } from "@/lib/cartContext";

export default function NewArrivalsPage() {
  const { addToCart } = useCart();

  const products = [
    // Women's
    { id: "new-1", name: "Embroidered Evening Abaya", price: 480, category: "Women", image: "https://images.unsplash.com/photo-1583391733981-5242f8c1b6ce?w=600&h=800&fit=crop", isNew: true },
    { id: "new-2", name: "Silk Floral Hijab", price: 75, category: "Women", image: "https://images.unsplash.com/photo-1601924287776-ae1a44683945?w=600&h=800&fit=crop", isNew: true },
    { id: "new-3", name: "Modest Maxi Dress - Navy", price: 320, category: "Women", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=800&fit=crop", isNew: true },
    { id: "new-4", name: "Rose Gold Lip Gloss", price: 35, category: "Women", image: "https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=600&h=800&fit=crop", isNew: true },
    { id: "new-5", name: "Leather Crossbody Bag", price: 280, category: "Women", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&h=800&fit=crop", isNew: true },
    { id: "new-6", name: "Pearl Statement Earrings", price: 95, category: "Women", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=800&fit=crop", isNew: true },
    // Men's
    { id: "new-7", name: "Charcoal Wool Suit", price: 1050, category: "Men", image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=800&fit=crop", isNew: true },
    { id: "new-8", name: "Italian Leather Loafers", price: 380, category: "Men", image: "https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=600&h=800&fit=crop", isNew: true },
    { id: "new-9", name: "Premium Cotton Shirt", price: 165, category: "Men", image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&h=800&fit=crop", isNew: true },
    { id: "new-10", name: "Minimalist Chronograph", price: 890, category: "Men", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=800&fit=crop", isNew: true },
    { id: "new-11", name: "Navy Blazer - Slim Fit", price: 520, category: "Men", image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=800&fit=crop", isNew: true },
    { id: "new-12", name: "Oud Noir Fragrance", price: 185, category: "Men", image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&h=800&fit=crop", isNew: true }
  ];

  return (
    <main className="min-h-screen" style={{ backgroundColor: "#ffffff" }}>
      {/* Hero Banner */}
      <div 
        className="relative h-[60vh] w-full"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&h=800&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50" />
        
        <div className="relative h-full flex flex-col items-center justify-center px-8 text-center z-20">
          <p 
            className="text-xs md:text-sm tracking-widest mb-4"
            style={{ 
              color: "#d4a574",
              fontWeight: 400, 
              letterSpacing: "0.3em" 
            }}
          >
            JUST DROPPED
          </p>
          <h1 
            className="text-6xl md:text-7xl lg:text-8xl mb-6"
            style={{ 
              fontFamily: "serif", 
              color: "#ffffff",
              fontWeight: 400,
              lineHeight: 1.1
            }}
          >
            New Arrivals
          </h1>
          <p 
            className="text-base md:text-lg max-w-2xl"
            style={{ 
              color: "#e5e5e5", 
              fontWeight: 300,
              lineHeight: 1.8
            }}
          >
            Discover the latest additions to our curated collection of modest luxury fashion.
          </p>
        </div>
      </div>

      {/* Products Section */}
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <p className="text-sm" style={{ color: "#666" }}>
              {products.length} Products
            </p>
            <select 
              className="px-4 py-2 border rounded text-sm"
              style={{ borderColor: "#e5e5e5", color: "#1a1a1a" }}
            >
              <option>Sort by: Newest First</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Alphabetical</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="group cursor-pointer">
                <div className="relative bg-gray-100 mb-4 overflow-hidden aspect-[3/4]">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.isNew && (
                    <span 
                      className="absolute top-3 left-3 text-xs px-3 py-1"
                      style={{ 
                        backgroundColor: "#d4a574", 
                        color: "#1a1a1a", 
                        letterSpacing: "0.1em", 
                        fontWeight: 600 
                      }}
                    >
                      JUST DROPPED
                    </span>
                  )}
                  <button 
                    onClick={() => {
                      addToCart({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        image: product.image
                      });
                      alert(`${product.name} added to cart!`);
                    }}
                    className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ backgroundColor: "#1a1a1a", color: "#ffffff" }}
                  >
                    Quick Add
                  </button>
                </div>
                <p className="text-xs mb-2" style={{ color: "#999", letterSpacing: "0.1em" }}>
                  {product.category.toUpperCase()}
                </p>
                <h3 className="text-base font-medium mb-2" style={{ color: "#1a1a1a" }}>
                  {product.name}
                </h3>
                <p className="text-lg font-semibold" style={{ color: "#d4a574" }}>
                  RM {product.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-8" style={{ backgroundColor: "#f8f8f8" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl mb-6" style={{ color: "#1a1a1a", fontFamily: "serif", fontWeight: 400 }}>
            Explore Our Collections
          </h2>
          <p className="text-base mb-8" style={{ color: "#666" }}>
            Browse our complete range of modest fashion for women and men.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/women"
              className="px-8 py-4 text-sm tracking-widest font-medium hover:opacity-90 transition-all duration-300 text-center"
              style={{ 
                backgroundColor: "#d4a574",
                color: "#1a1a1a",
                letterSpacing: "0.2em",
                fontWeight: 600
              }}
            >
              SHOP WOMEN
            </Link>
            <Link
              href="/men"
              className="px-8 py-4 text-sm tracking-widest font-medium hover:bg-opacity-90 transition-all duration-300 text-center"
              style={{ 
                backgroundColor: "#1a1a1a",
                color: "#ffffff",
                letterSpacing: "0.2em",
                fontWeight: 600
              }}
            >
              SHOP MEN
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

"use client";

import Link from "next/link";

export default function MenPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#ffffff" }}>
      {/* Hero Banner */}
      <div 
        className="relative h-screen w-full"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1488161628813-04466f872be2?w=1920&h=1080&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40" />
        
        <div className="relative h-full flex flex-col items-start justify-center px-8 md:px-16 lg:px-24 z-20">
          <div className="max-w-2xl">
            <h1 
              className="text-6xl md:text-7xl lg:text-8xl mb-6"
              style={{ 
                fontFamily: "serif", 
                color: "#ffffff",
                fontWeight: 400,
                lineHeight: 1.1
              }}
            >
              Men's Collection
            </h1>
            
            <p 
              className="text-base md:text-lg mb-10 leading-relaxed max-w-xl"
              style={{ 
                color: "#e5e5e5", 
                fontWeight: 300,
                lineHeight: 1.8
              }}
            >
              Refined modest fashion designed for comfort, confidence, and timeless style.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/new-arrivals"
                className="px-8 py-4 text-sm tracking-widest font-medium hover:opacity-90 transition-all duration-300 text-center"
                style={{ 
                  backgroundColor: "#d4a574",
                  color: "#1a1a1a",
                  letterSpacing: "0.2em",
                  fontWeight: 600
                }}
              >
                NEW ARRIVALS
              </Link>
              <Link
                href="/products/men/suits"
                className="px-8 py-4 text-sm tracking-widest font-medium hover:bg-white hover:bg-opacity-10 transition-all duration-300 text-center"
                style={{ 
                  backgroundColor: "transparent",
                  color: "#ffffff",
                  letterSpacing: "0.2em",
                  border: "2px solid #ffffff",
                  fontWeight: 500
                }}
              >
                SUITS
              </Link>
              <Link
                href="/products/men/shirts"
                className="px-8 py-4 text-sm tracking-widest font-medium hover:bg-white hover:bg-opacity-10 transition-all duration-300 text-center"
                style={{ 
                  backgroundColor: "transparent",
                  color: "#ffffff",
                  letterSpacing: "0.2em",
                  border: "2px solid #ffffff",
                  fontWeight: 500
                }}
              >
                SHIRTS
              </Link>
              <Link
                href="/products/men/accessories"
                className="px-8 py-4 text-sm tracking-widest font-medium hover:bg-white hover:bg-opacity-10 transition-all duration-300 text-center"
                style={{ 
                  backgroundColor: "transparent",
                  color: "#ffffff",
                  letterSpacing: "0.2em",
                  border: "2px solid #ffffff",
                  fontWeight: 500
                }}
              >
                ACCESSORIES
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Category Cards Section */}
      <section className="py-20 px-8" style={{ backgroundColor: "#f8f8f8" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs tracking-widest mb-4" style={{ color: "#d4a574", letterSpacing: "0.3em" }}>
              SHOP BY CATEGORY
            </p>
            <h2 className="text-5xl md:text-6xl" style={{ color: "#1a1a1a", fontFamily: "serif", fontWeight: 400 }}>
              Find Your Style
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Suits */}
            <Link 
              href="/products/men/suits"
              className="group relative overflow-hidden h-[400px] rounded-lg"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&h=800&fit=crop')",
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            >
              <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-40 transition-opacity" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 
                  className="text-3xl text-white transform group-hover:scale-110 transition-transform duration-300"
                  style={{ fontFamily: "serif", textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}
                >
                  Suits
                </h3>
              </div>
            </Link>

            {/* Shirts */}
            <Link 
              href="/products/men/shirts"
              className="group relative overflow-hidden h-[400px] rounded-lg"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&h=800&fit=crop')",
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            >
              <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-40 transition-opacity" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 
                  className="text-3xl text-white transform group-hover:scale-110 transition-transform duration-300"
                  style={{ fontFamily: "serif", textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}
                >
                  Shirts
                </h3>
              </div>
            </Link>

            {/* Shoes */}
            <Link 
              href="/products/men/shoes"
              className="group relative overflow-hidden h-[400px] rounded-lg"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=800&h=800&fit=crop')",
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            >
              <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-40 transition-opacity" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 
                  className="text-3xl text-white transform group-hover:scale-110 transition-transform duration-300"
                  style={{ fontFamily: "serif", textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}
                >
                  Shoes
                </h3>
              </div>
            </Link>

            {/* Watches */}
            <Link 
              href="/products/men/watches"
              className="group relative overflow-hidden h-[400px] rounded-lg"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=800&fit=crop')",
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            >
              <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-40 transition-opacity" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 
                  className="text-3xl text-white transform group-hover:scale-110 transition-transform duration-300"
                  style={{ fontFamily: "serif", textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}
                >
                  Watches
                </h3>
              </div>
            </Link>

            {/* Blazers */}
            <Link 
              href="/products/men/blazers"
              className="group relative overflow-hidden h-[400px] rounded-lg"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&h=800&fit=crop')",
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            >
              <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-40 transition-opacity" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 
                  className="text-3xl text-white transform group-hover:scale-110 transition-transform duration-300"
                  style={{ fontFamily: "serif", textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}
                >
                  Blazers
                </h3>
              </div>
            </Link>

            {/* Fragrances */}
            <Link 
              href="/products/men/fragrances"
              className="group relative overflow-hidden h-[400px] rounded-lg"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&h=800&fit=crop')",
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            >
              <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-40 transition-opacity" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 
                  className="text-3xl text-white transform group-hover:scale-110 transition-transform duration-300"
                  style={{ fontFamily: "serif", textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}
                >
                  Fragrances
                </h3>
              </div>
            </Link>

            {/* Accessories */}
            <Link 
              href="/products/men/accessories"
              className="group relative overflow-hidden h-[400px] rounded-lg md:col-span-2 lg:col-span-1"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=800&h=800&fit=crop')",
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            >
              <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-40 transition-opacity" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 
                  className="text-3xl text-white transform group-hover:scale-110 transition-transform duration-300"
                  style={{ fontFamily: "serif", textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}
                >
                  Accessories
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Looks Section */}
      <section className="py-20 px-8" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs tracking-widest mb-4" style={{ color: "#d4a574", letterSpacing: "0.3em" }}>
              CURATED SELECTION
            </p>
            <h2 className="text-5xl md:text-6xl" style={{ color: "#1a1a1a", fontFamily: "serif", fontWeight: 400 }}>
              Modern Gentleman Essentials
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Navy Wool Suit", price: 980, image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=800&fit=crop", badge: "BESTSELLER" },
              { name: "Premium Oxford Shirt", price: 180, image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&h=800&fit=crop", badge: null },
              { name: "Leather Oxford Shoes", price: 420, image: "https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=600&h=800&fit=crop", badge: "NEW" },
              { name: "Swiss Chronograph", price: 1250, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=800&fit=crop", badge: null }
            ].map((product, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative bg-gray-100 mb-4 overflow-hidden aspect-[3/4]">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.badge && (
                    <span 
                      className="absolute top-3 left-3 text-xs px-3 py-1"
                      style={{ backgroundColor: "#d4a574", color: "#1a1a1a", letterSpacing: "0.1em", fontWeight: 600 }}
                    >
                      {product.badge}
                    </span>
                  )}
                  <button className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    ❤️
                  </button>
                </div>
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

      {/* Outfit Bundles Section */}
      <section className="py-20 px-8" style={{ backgroundColor: "#f8f8f8" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs tracking-widest mb-4" style={{ color: "#d4a574", letterSpacing: "0.3em" }}>
              COMPLETE THE LOOK
            </p>
            <h2 className="text-5xl md:text-6xl mb-6" style={{ color: "#1a1a1a", fontFamily: "serif", fontWeight: 400 }}>
              Signature Looks
            </h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: "#666" }}>
              Expertly curated outfit combinations for the modern gentleman.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Business Professional */}
            <div 
              className="relative overflow-hidden h-[500px] rounded-lg group"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&h=1000&fit=crop')",
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white z-10">
                <h3 className="text-3xl mb-3" style={{ fontFamily: "serif", fontWeight: 400 }}>
                  Business Professional
                </h3>
                <p className="text-sm opacity-90 mb-4">
                  Suit + Watch + Shoes + Accessories
                </p>
                <Link
                  href="/products/men/suits"
                  className="inline-block px-6 py-3 text-xs tracking-widest hover:bg-opacity-90 transition-all"
                  style={{ backgroundColor: "#d4a574", color: "#1a1a1a", letterSpacing: "0.2em", fontWeight: 600 }}
                >
                  SHOP THE LOOK
                </Link>
              </div>
            </div>

            {/* Smart Casual */}
            <div 
              className="relative overflow-hidden h-[500px] rounded-lg group"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1488161628813-04466f872be2?w=800&h=1000&fit=crop')",
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white z-10">
                <h3 className="text-3xl mb-3" style={{ fontFamily: "serif", fontWeight: 400 }}>
                  Smart Casual
                </h3>
                <p className="text-sm opacity-90 mb-4">
                  Blazer + Shirt + Accessories
                </p>
                <Link
                  href="/products/men/blazers"
                  className="inline-block px-6 py-3 text-xs tracking-widest hover:bg-opacity-90 transition-all"
                  style={{ backgroundColor: "#d4a574", color: "#1a1a1a", letterSpacing: "0.2em", fontWeight: 600 }}
                >
                  EXPLORE BLAZERS
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

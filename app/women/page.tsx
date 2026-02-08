"use client";

import Link from "next/link";

export default function WomenPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#ffffff" }}>
      {/* Hero Banner */}
      <div className="relative h-screen w-full">
        <img 
          src="https://images.unsplash.com/photo-1583391733981-5242f8c1b6ce?w=1920&h=1080&fit=crop" 
          alt="Women's Collection"
          className="absolute inset-0 w-full h-full object-cover"
        />
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
              Women's Collection
            </h1>
            
            <p 
              className="text-base md:text-lg mb-10 leading-relaxed max-w-xl"
              style={{ 
                color: "#e5e5e5", 
                fontWeight: 300,
                lineHeight: 1.8
              }}
            >
              Elegant, modest fashion curated for the modern woman — from everyday essentials to luxury statement pieces.
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
                href="/products/women/abayas"
                className="px-8 py-4 text-sm tracking-widest font-medium hover:bg-white hover:bg-opacity-10 transition-all duration-300 text-center"
                style={{ 
                  backgroundColor: "transparent",
                  color: "#ffffff",
                  letterSpacing: "0.2em",
                  border: "2px solid #ffffff",
                  fontWeight: 500
                }}
              >
                ABAYAS
              </Link>
              <Link
                href="/products/women/dresses"
                className="px-8 py-4 text-sm tracking-widest font-medium hover:bg-white hover:bg-opacity-10 transition-all duration-300 text-center"
                style={{ 
                  backgroundColor: "transparent",
                  color: "#ffffff",
                  letterSpacing: "0.2em",
                  border: "2px solid #ffffff",
                  fontWeight: 500
                }}
              >
                DRESSES
              </Link>
              <Link
                href="/products/women/hijabs"
                className="px-8 py-4 text-sm tracking-widest font-medium hover:bg-white hover:bg-opacity-10 transition-all duration-300 text-center"
                style={{ 
                  backgroundColor: "transparent",
                  color: "#ffffff",
                  letterSpacing: "0.2em",
                  border: "2px solid #ffffff",
                  fontWeight: 500
                }}
              >
                HIJABS
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
            {/* Abayas */}
            <Link 
              href="/products/women/abayas"
              className="group relative overflow-hidden h-[400px] rounded-lg"
            >
              <img 
                src="https://images.unsplash.com/photo-1583391733981-5242f8c1b6ce?w=800&h=800&fit=crop" 
                alt="Abayas"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-40 transition-opacity" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 
                  className="text-3xl text-white transform group-hover:scale-110 transition-transform duration-300"
                  style={{ fontFamily: "serif", textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}
                >
                  Abayas
                </h3>
              </div>
            </Link>

            {/* Dresses */}
            <Link 
              href="/products/women/dresses"
              className="group relative overflow-hidden h-[400px] rounded-lg"
            >
              <img 
                src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&h=800&fit=crop" 
                alt="Dresses"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-40 transition-opacity" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 
                  className="text-3xl text-white transform group-hover:scale-110 transition-transform duration-300"
                  style={{ fontFamily: "serif", textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}
                >
                  Dresses
                </h3>
              </div>
            </Link>

            {/* Hijabs */}
            <Link 
              href="/products/women/hijabs"
              className="group relative overflow-hidden h-[400px] rounded-lg"
            >
              <img 
                src="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&h=800&fit=crop"
                alt="Hijabs Collection"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-40 transition-opacity" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 
                  className="text-3xl text-white transform group-hover:scale-110 transition-transform duration-300"
                  style={{ fontFamily: "serif", textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}
                >
                  Hijabs
                </h3>
              </div>
            </Link>

            {/* Handbags */}
            <Link 
              href="/products/women/handbags"
              className="group relative overflow-hidden h-[400px] rounded-lg"
            >
              <img 
                src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&h=800&fit=crop"
                alt="Handbags Collection"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-40 transition-opacity" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 
                  className="text-3xl text-white transform group-hover:scale-110 transition-transform duration-300"
                  style={{ fontFamily: "serif", textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}
                >
                  Handbags
                </h3>
              </div>
            </Link>

            {/* Shoes */}
            <Link 
              href="/products/women/shoes"
              className="group relative overflow-hidden h-[400px] rounded-lg"
            >
              <img 
                src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&h=800&fit=crop"
                alt="Shoes Collection"
                className="absolute inset-0 w-full h-full object-cover"
              />
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

            {/* Jewelry */}
            <Link 
              href="/products/women/jewelry"
              className="group relative overflow-hidden h-[400px] rounded-lg"
            >
              <img 
                src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=800&fit=crop"
                alt="Jewelry Collection"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-40 transition-opacity" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 
                  className="text-3xl text-white transform group-hover:scale-110 transition-transform duration-300"
                  style={{ fontFamily: "serif", textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}
                >
                  Jewelry
                </h3>
              </div>
            </Link>

            {/* Beauty - Lip Gloss */}
            <Link 
              href="/products/women/lipgloss"
              className="group relative overflow-hidden h-[400px] rounded-lg md:col-span-2 lg:col-span-1"
            >
              <img 
                src="https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=800&h=800&fit=crop"
                alt="Beauty & Lip Gloss Collection"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-40 transition-opacity" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 
                  className="text-3xl text-white transform group-hover:scale-110 transition-transform duration-300"
                  style={{ fontFamily: "serif", textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}
                >
                  Beauty
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Collection Section */}
      <section className="py-20 px-8" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs tracking-widest mb-4" style={{ color: "#d4a574", letterSpacing: "0.3em" }}>
              CURATED SELECTION
            </p>
            <h2 className="text-5xl md:text-6xl" style={{ color: "#1a1a1a", fontFamily: "serif", fontWeight: 400 }}>
              Spring / Summer Essentials
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Silk Evening Abaya", price: 420, image: "https://images.unsplash.com/photo-1583391733981-5242f8c1b6ce?w=600&h=800&fit=crop" },
              { name: "Floral Modest Dress", price: 280, image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=800&fit=crop" },
              { name: "Premium Chiffon Hijab", price: 65, image: "https://images.unsplash.com/photo-1601924287776-ae1a44683945?w=600&h=800&fit=crop" },
              { name: "Rose Lip Gloss Set", price: 45, image: "https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=600&h=800&fit=crop" }
            ].map((product, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative bg-gray-100 mb-4 overflow-hidden aspect-[3/4]">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
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

      {/* Style Inspiration Section */}
      <section className="py-20 px-8" style={{ backgroundColor: "#f8f8f8" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs tracking-widest mb-4" style={{ color: "#d4a574", letterSpacing: "0.3em" }}>
              GET INSPIRED
            </p>
            <h2 className="text-5xl md:text-6xl mb-6" style={{ color: "#1a1a1a", fontFamily: "serif", fontWeight: 400 }}>
              Curated Looks
            </h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: "#666" }}>
              Curated outfit ideas designed to elevate your modest wardrobe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Everyday Modest Wear */}
            <div 
              className="relative overflow-hidden h-[500px] rounded-lg group"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&h=1000&fit=crop')",
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white z-10">
                <h3 className="text-3xl mb-3" style={{ fontFamily: "serif", fontWeight: 400 }}>
                  Everyday Modest Wear
                </h3>
                <p className="text-sm opacity-90 mb-4">
                  Effortless elegance for your daily style
                </p>
                <Link
                  href="/products/women/dresses"
                  className="inline-block px-6 py-3 text-xs tracking-widest hover:bg-opacity-90 transition-all"
                  style={{ backgroundColor: "#d4a574", color: "#1a1a1a", letterSpacing: "0.2em", fontWeight: 600 }}
                >
                  SHOP NOW
                </Link>
              </div>
            </div>

            {/* Luxury Event Wear */}
            <div 
              className="relative overflow-hidden h-[500px] rounded-lg group"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=1000&fit=crop')",
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white z-10">
                <h3 className="text-3xl mb-3" style={{ fontFamily: "serif", fontWeight: 400 }}>
                  Luxury Event Wear
                </h3>
                <p className="text-sm opacity-90 mb-4">
                  Statement pieces for special occasions
                </p>
                <Link
                  href="/products/women/abayas"
                  className="inline-block px-6 py-3 text-xs tracking-widest hover:bg-opacity-90 transition-all"
                  style={{ backgroundColor: "#d4a574", color: "#1a1a1a", letterSpacing: "0.2em", fontWeight: 600 }}
                >
                  EXPLORE ABAYAS
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

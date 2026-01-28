"use client";

import { useState } from "react";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="relative">
      {/* Announcement Bar */}
      <div 
        className="flex items-center justify-between px-8 py-3 text-white text-sm"
        style={{ backgroundColor: "#4a3f5c" }}
      >
        <button className="text-white text-2xl">&lt;</button>
        <span>A PORTION OF ALL SALES SUPPORT MUSLIM COMMUNITIES WORLDWIDE</span>
        <button className="text-white text-2xl">&gt;</button>
      </div>

      {/* Header/Navigation */}
      <header 
        className="flex items-center justify-between px-6 py-6"
        style={{ backgroundColor: "#fdf5f7" }}
      >
        <div className="flex items-center gap-6">
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl"
            style={{ color: "#4a3f5c" }}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
          <button className="text-xl" style={{ color: "#4a3f5c" }}>
            🔍
          </button>
        </div>

        <h1 
          className="text-xl tracking-wide"
          style={{ fontFamily: "serif", color: "#4a3f5c" }}
        >
          Fadra Modest Wear
        </h1>

        <button className="text-xl" style={{ color: "#4a3f5c" }}>
          🛍
        </button>
      </header>

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-full md:w-96 z-50 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ backgroundColor: "#fdf5f7" }}
      >
        <div className="flex flex-col h-full">
          {/* Menu Header */}
          <div className="flex items-center justify-between px-6 py-6 border-b" style={{ borderColor: "#e5d5d8" }}>
            <button 
              onClick={() => setMenuOpen(false)}
              className="text-2xl"
              style={{ color: "#4a3f5c" }}
            >
              ✕
            </button>
            <button className="text-xl" style={{ color: "#4a3f5c" }}>
              🔍
            </button>
            <h2 
              className="text-xl tracking-wide"
              style={{ fontFamily: "serif", color: "#4a3f5c" }}
            >
              Fadra Modest Wear
            </h2>
            <button className="text-xl" style={{ color: "#4a3f5c" }}>
              🛍
            </button>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 overflow-y-auto px-6 py-8">
            <ul className="space-y-6" style={{ fontFamily: "serif", fontSize: "1.75rem" }}>
              <li>
                <a href="/" className="flex items-center justify-between" style={{ color: "#2c2c2c" }}>
                  Home
                </a>
              </li>
              <li>
                <a href="/products" className="flex items-center justify-between" style={{ color: "#2c2c2c" }}>
                  New
                </a>
              </li>
              <li>
                <a href="/coming-soon" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between" style={{ color: "#2c2c2c" }}>
                  Best Sellers <span>→</span>
                </a>
              </li>
              <li>
                <a href="/coming-soon" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between" style={{ color: "#2c2c2c" }}>
                  Hijabs <span>→</span>
                </a>
              </li>
              <li>
                <a href="/coming-soon" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between" style={{ color: "#2c2c2c" }}>
                  Apparel <span>→</span>
                </a>
              </li>
              <li>
                <a href="/coming-soon" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between" style={{ color: "#2c2c2c" }}>
                  Dresses <span>→</span>
                </a>
              </li>
              <li>
                <a href="/coming-soon" target="_blank" rel="noopener noreferrer" className="flex items-center" style={{ color: "#2c2c2c" }}>
                  Mens
                </a>
              </li>
              <li>
                <a href="/coming-soon" target="_blank" rel="noopener noreferrer" className="flex items-center" style={{ color: "#2c2c2c" }}>
                  Girls
                </a>
              </li>
              <li>
                <a href="/coming-soon" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between" style={{ color: "#2c2c2c" }}>
                  Accessories <span>→</span>
                </a>
              </li>
              <li>
                <a href="/coming-soon" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between" style={{ color: "#2c2c2c" }}>
                  Gifts & Sets <span>→</span>
                </a>
              </li>
              <li>
                <a href="/coming-soon" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between" style={{ color: "#2c2c2c" }}>
                  Clearance <span>→</span>
                </a>
              </li>
            </ul>
          </nav>

          {/* Account Button */}
          <div className="px-6 py-4 border-t" style={{ borderColor: "#e5d5d8" }}>
            <button 
              className="w-full flex items-center justify-center gap-2 py-3"
              style={{ color: "#2c2c2c" }}
            >
              <span>👤</span>
              <span className="font-medium">ACCOUNT</span>
            </button>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Hero Section */}
      <div className="relative h-screen w-full" 
        style={{ 
          backgroundImage: "url('/hero-models.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black bg-opacity-30" />
        
        <div className="relative h-full flex flex-col items-center justify-center text-center z-10">
          <div style={{ backgroundColor: "rgba(253, 245, 247, 0.95)", padding: "3rem 4rem", borderRadius: "1rem", boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)" }}>
            <h1 
              className="text-5xl md:text-6xl mb-8 tracking-wide"
              style={{ fontFamily: "serif", color: "#4a3f5c" }}
            >
              Welcome to Fadra Modest Wear
            </h1>
            
            <button 
              onClick={() => setMenuOpen(true)}
              className="px-12 py-3 rounded-full text-white text-sm font-medium tracking-wider hover:opacity-90 transition-all duration-300"
              style={{ 
                backgroundColor: "#7d6b8f",
                border: "1px solid rgba(255, 255, 255, 0.3)"
              }}
            >
              SHOP NOW
            </button>
          </div>
        </div>
      </div>

      {/* Additional Sections */}
      <section className="py-16 px-8" style={{ backgroundColor: "#fdf5f7" }}>
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl mb-4" style={{ color: "#7d6b8f", fontFamily: "serif" }}>
            Modest Fashion for Every Occasion
          </h2>
          <p className="text-lg mb-8" style={{ color: "#9e8fb2" }}>
            Discover timeless elegance in our carefully curated collection
          </p>
          <a 
            href="/products"
            className="inline-block px-8 py-3 rounded-full text-white transition-all duration-300"
            style={{ backgroundColor: "#c5b9d4", color: "#4a3f5c" }}
          >
            Browse Collection
          </a>
        </div>
      </section>

      {/* Free Shipping Section */}
      <section className="py-12 text-center border-b" style={{ backgroundColor: "#fdf5f7", borderColor: "#e5d5d8" }}>
        <div className="text-4xl mb-4">🚚</div>
        <h3 className="text-xl font-semibold mb-2" style={{ color: "#2c2c2c" }}>Free Shipping</h3>
        <p className="text-sm" style={{ color: "#6b6b6b" }}>Fast & free delivery on Malaysia orders over RM 430</p>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: "#fdf5f7" }}>
        <div className="max-w-7xl mx-auto px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Customer Care */}
            <div>
              <h4 className="font-bold mb-4 text-sm" style={{ color: "#2c2c2c" }}>CUSTOMER CARE</h4>
              <ul className="space-y-2 text-sm" style={{ color: "#6b6b6b" }}>
                <li><a href="#" className="hover:underline">Account</a></li>
                <li><a href="#" className="hover:underline">Help & FAQs</a></li>
                <li><a href="#" className="hover:underline">Shipping & Delivery</a></li>
                <li><a href="#" className="hover:underline">Returns & Exchanges</a></li>
                <li><a href="#" className="hover:underline">Size Guide</a></li>
                <li><a href="#" className="hover:underline">Hijab Quiz</a></li>
              </ul>
            </div>

            {/* Brand */}
            <div>
              <h4 className="font-bold mb-4 text-sm" style={{ color: "#2c2c2c" }}>BRAND</h4>
              <ul className="space-y-2 text-sm" style={{ color: "#6b6b6b" }}>
                <li><a href="#" className="hover:underline">About Us</a></li>
                <li><a href="#" className="hover:underline">Rewards</a></li>
                <li><a href="#" className="hover:underline">Affiliate Program</a></li>
                <li><a href="#" className="hover:underline">Giving Back</a></li>
                <li><a href="#" className="hover:underline">Blog</a></li>
              </ul>
            </div>

            {/* Visit Us */}
            <div>
              <h4 className="font-bold mb-4 text-sm" style={{ color: "#2c2c2c" }}>VISIT US</h4>
              <p className="font-semibold mb-1 text-sm" style={{ color: "#2c2c2c" }}>Fadra Modest Wear</p>
              <a href="#" className="underline text-sm" style={{ color: "#6b6b6b" }}>Kuala Lumpur, Malaysia</a>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-bold mb-4 text-sm" style={{ color: "#2c2c2c" }}>NEWSLETTER</h4>
              <p className="mb-4 text-sm" style={{ color: "#6b6b6b" }}>Join the VIP crew to get exclusive first access to sales, drops & more.</p>
              <div className="flex flex-col gap-3 mb-3">
                <input 
                  type="email" 
                  placeholder="E-MAIL"
                  className="px-4 py-2 border rounded-full text-sm"
                  style={{ borderColor: "#d0d0d0", backgroundColor: "#ffffff" }}
                />
                <button 
                  className="px-6 py-2 rounded-full text-white text-sm font-medium hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: "#2c2c2c" }}
                >
                  SUBSCRIBE
                </button>
              </div>
              <p className="text-xs" style={{ color: "#6b6b6b" }}>By signing up to our newsletter, you agree with our privacy policy.</p>
            </div>
          </div>

          {/* About Section */}
          <div className="border-t pt-8 mb-8" style={{ borderColor: "#e5d5d8" }}>
            <h4 className="font-bold mb-4 text-sm" style={{ color: "#2c2c2c" }}>ABOUT</h4>
            <p className="text-sm leading-relaxed max-w-3xl" style={{ color: "#6b6b6b" }}>
              Fadra Modest Wear is a modern modest fashion brand dedicated to timeless, sustainable 
              designs that empower women to feel confident, beautiful, and authentic. Each 
              piece is thoughtfully crafted with ethical practices and elevated simplicity at its 
              core.
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center justify-center gap-8 pb-8">
            {/* Facebook */}
            <a href="#" title="Facebook" className="hover:opacity-70 transition-opacity">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="#1877F2">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            {/* Instagram */}
            <a href="#" title="Instagram" className="hover:opacity-70 transition-opacity">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="url(#instagram-gradient-footer)">
                <defs>
                  <linearGradient id="instagram-gradient-footer" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: '#FD5949', stopOpacity: 1 }} />
                    <stop offset="50%" style={{ stopColor: '#D6249F', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#285AEB', stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            {/* TikTok */}
            <a href="#" title="TikTok" className="hover:opacity-70 transition-opacity">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="#000000">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
            {/* WhatsApp */}
            <a href="#" title="WhatsApp" className="hover:opacity-70 transition-opacity">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="#25D366">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

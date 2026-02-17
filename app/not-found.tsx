"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#fafafa" }}>
      <div className="max-w-2xl mx-auto px-8 py-16 text-center">
        <div className="mb-8">
          <h1 
            className="text-9xl font-light mb-4"
            style={{ fontFamily: "serif", color: "#d4a574" }}
          >
            404
          </h1>
          <h2 
            className="text-3xl md:text-4xl mb-4"
            style={{ fontFamily: "serif", color: "#1a1a1a", fontWeight: 400 }}
          >
            Page Not Found
          </h2>
          <p className="text-lg mb-8" style={{ color: "#666", lineHeight: 1.8 }}>
            We couldn't find the page you're looking for. The item may have been moved or is no longer available.
          </p>
        </div>

        <div className="space-y-4">
          <Link 
            href="/"
            className="inline-block px-8 py-4 text-white rounded-lg transition-all hover:opacity-90"
            style={{ backgroundColor: "#1a1a1a" }}
          >
            Return to Homepage
          </Link>
          
          <div className="flex justify-center gap-4 mt-6">
            <Link 
              href="/products"
              className="text-sm hover:underline"
              style={{ color: "#d4a574" }}
            >
              Shop All Products
            </Link>
            <span style={{ color: "#ccc" }}>•</span>
            <Link 
              href="/women"
              className="text-sm hover:underline"
              style={{ color: "#d4a574" }}
            >
              Women's Collection
            </Link>
            <span style={{ color: "#ccc" }}>•</span>
            <Link 
              href="/men"
              className="text-sm hover:underline"
              style={{ color: "#d4a574" }}
            >
              Men's Collection
            </Link>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="mt-16 grid grid-cols-3 gap-4">
          <Link href="/new-arrivals" className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="text-3xl mb-2">✨</div>
            <h3 className="font-semibold mb-1" style={{ color: "#1a1a1a" }}>New Arrivals</h3>
            <p className="text-sm" style={{ color: "#666" }}>Latest collection</p>
          </Link>
          
          <Link href="/sale" className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="text-3xl mb-2">🏷️</div>
            <h3 className="font-semibold mb-1" style={{ color: "#1a1a1a" }}>Sale Items</h3>
            <p className="text-sm" style={{ color: "#666" }}>Special offers</p>
          </Link>
          
          <Link href="/contact" className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="text-3xl mb-2">💬</div>
            <h3 className="font-semibold mb-1" style={{ color: "#1a1a1a" }}>Need Help?</h3>
            <p className="text-sm" style={{ color: "#666" }}>Contact us</p>
          </Link>
        </div>
      </div>
    </main>
  );
}

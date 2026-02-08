"use client";

export default function ShippingInfoPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#ffffff" }}>
      {/* Hero Section */}
      <div className="py-20 px-8" style={{ backgroundColor: "#f8f8f8" }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 flex justify-center">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#d4a574" strokeWidth="1.5">
              <rect x="1" y="3" width="15" height="13"></rect>
              <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
              <circle cx="5.5" cy="18.5" r="2.5"></circle>
              <circle cx="18.5" cy="18.5" r="2.5"></circle>
            </svg>
          </div>
          <h1 className="text-5xl md:text-6xl mb-6" style={{ fontFamily: "serif", color: "#1a1a1a", fontWeight: 400 }}>
            Shipping Information
          </h1>
          <p className="text-lg" style={{ color: "#666", lineHeight: 1.8 }}>
            Enjoy complimentary delivery on qualifying orders and fast worldwide shipping options.
          </p>
        </div>
      </div>

      {/* Free Shipping Policy */}
      <section className="py-16 px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 rounded-lg" style={{ backgroundColor: "#f8f8f8" }}>
              <div className="text-4xl mb-4">📦</div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: "#1a1a1a" }}>Free Shipping</h3>
              <p style={{ color: "#666" }}>On orders over RM 250</p>
            </div>
            <div className="text-center p-8 rounded-lg" style={{ backgroundColor: "#f8f8f8" }}>
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: "#1a1a1a" }}>Fast Delivery</h3>
              <p style={{ color: "#666" }}>3–7 business days</p>
            </div>
            <div className="text-center p-8 rounded-lg" style={{ backgroundColor: "#f8f8f8" }}>
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: "#1a1a1a" }}>Track Your Order</h3>
              <p style={{ color: "#666" }}>Real-time tracking</p>
            </div>
          </div>

          {/* Delivery Timeline */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl mb-8 text-center" style={{ fontFamily: "serif", color: "#1a1a1a", fontWeight: 400 }}>
              Delivery Timeline
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold" style={{ backgroundColor: "#d4a574" }}>
                  1
                </div>
                <h4 className="font-semibold mb-2" style={{ color: "#1a1a1a" }}>Order Placed</h4>
                <p className="text-sm" style={{ color: "#666" }}>Confirmation sent instantly</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold" style={{ backgroundColor: "#d4a574" }}>
                  2
                </div>
                <h4 className="font-semibold mb-2" style={{ color: "#1a1a1a" }}>Processing</h4>
                <p className="text-sm" style={{ color: "#666" }}>24–48 hours</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold" style={{ backgroundColor: "#d4a574" }}>
                  3
                </div>
                <h4 className="font-semibold mb-2" style={{ color: "#1a1a1a" }}>Shipped</h4>
                <p className="text-sm" style={{ color: "#666" }}>Tracking number provided</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold" style={{ backgroundColor: "#d4a574" }}>
                  4
                </div>
                <h4 className="font-semibold mb-2" style={{ color: "#1a1a1a" }}>Delivered</h4>
                <p className="text-sm" style={{ color: "#666" }}>3–7 business days</p>
              </div>
            </div>
          </div>

          {/* Shipping Regions */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl mb-8 text-center" style={{ fontFamily: "serif", color: "#1a1a1a", fontWeight: 400 }}>
              Shipping Regions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border rounded-lg p-8" style={{ borderColor: "#e5e5e5" }}>
                <h3 className="text-xl font-semibold mb-4" style={{ color: "#1a1a1a" }}>Malaysia</h3>
                <ul className="space-y-3" style={{ color: "#666" }}>
                  <li>✓ Free shipping on orders over RM 250</li>
                  <li>✓ Standard delivery: 3–5 business days</li>
                  <li>✓ Express delivery available</li>
                  <li>✓ All major cities covered</li>
                </ul>
              </div>
              <div className="border rounded-lg p-8" style={{ borderColor: "#e5e5e5" }}>
                <h3 className="text-xl font-semibold mb-4" style={{ color: "#1a1a1a" }}>International</h3>
                <ul className="space-y-3" style={{ color: "#666" }}>
                  <li>✓ Worldwide shipping available</li>
                  <li>✓ Delivery: 7–14 business days</li>
                  <li>✓ Customs duties may apply</li>
                  <li>✓ DHL Express option</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Tracking Information */}
          <div className="text-center p-12 rounded-lg" style={{ backgroundColor: "#f8f8f8" }}>
            <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "serif", color: "#1a1a1a", fontWeight: 400 }}>
              Track Your Order
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: "#666" }}>
              Once your order ships, you'll receive a tracking number via email. Use it to monitor your delivery in real-time.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 text-sm tracking-widest hover:opacity-90 transition-all"
              style={{ backgroundColor: "#d4a574", color: "#1a1a1a", letterSpacing: "0.2em", fontWeight: 600 }}
            >
              CONTACT US
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

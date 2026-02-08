"use client";

export default function ReturnsPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#fafafa" }}>
      <div className="max-w-4xl mx-auto px-8 py-16">
        <h1 
          className="text-5xl mb-4 text-center"
          style={{ fontFamily: "serif", color: "#1a1a1a" }}
        >
          Returns & Exchanges
        </h1>
        <p className="text-center mb-12 text-lg" style={{ color: "#666" }}>
          We accept returns within 14 days for unused items in original condition.
        </p>

        {/* Step-by-step Process */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-lg p-6 text-center shadow-md">
            <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl" style={{ backgroundColor: "#1a1a1a", color: "#fff" }}>
              1
            </div>
            <h3 className="font-semibold mb-2" style={{ color: "#1a1a1a" }}>Contact Us</h3>
            <p className="text-sm" style={{ color: "#666" }}>
              Email us within 14 days of receiving your order
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 text-center shadow-md">
            <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl" style={{ backgroundColor: "#1a1a1a", color: "#fff" }}>
              2
            </div>
            <h3 className="font-semibold mb-2" style={{ color: "#1a1a1a" }}>Get Approval</h3>
            <p className="text-sm" style={{ color: "#666" }}>
              We'll send you a return authorization
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 text-center shadow-md">
            <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl" style={{ backgroundColor: "#1a1a1a", color: "#fff" }}>
              3
            </div>
            <h3 className="font-semibold mb-2" style={{ color: "#1a1a1a" }}>Ship It Back</h3>
            <p className="text-sm" style={{ color: "#666" }}>
              Package securely and ship to our returns address
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 text-center shadow-md">
            <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl" style={{ backgroundColor: "#1a1a1a", color: "#fff" }}>
              4
            </div>
            <h3 className="font-semibold mb-2" style={{ color: "#1a1a1a" }}>Get Refund</h3>
            <p className="text-sm" style={{ color: "#666" }}>
              Refund processed within 5-7 business days
            </p>
          </div>
        </div>

        {/* Policy Details */}
        <div className="bg-white rounded-lg p-8 shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-6" style={{ color: "#1a1a1a" }}>
            Return Policy
          </h2>

          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="text-green-600 text-xl">✓</div>
              <div>
                <h3 className="font-semibold mb-1" style={{ color: "#1a1a1a" }}>Eligible Items</h3>
                <p style={{ color: "#666" }}>
                  Items must be unused, unworn, unwashed, and in original condition with all tags attached.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-green-600 text-xl">✓</div>
              <div>
                <h3 className="font-semibold mb-1" style={{ color: "#1a1a1a" }}>14-Day Window</h3>
                <p style={{ color: "#666" }}>
                  Returns must be initiated within 14 days of receiving your order.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-green-600 text-xl">✓</div>
              <div>
                <h3 className="font-semibold mb-1" style={{ color: "#1a1a1a" }}>Original Packaging</h3>
                <p style={{ color: "#666" }}>
                  Items should be returned in their original packaging when possible.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-green-600 text-xl">✓</div>
              <div>
                <h3 className="font-semibold mb-1" style={{ color: "#1a1a1a" }}>Proof of Purchase</h3>
                <p style={{ color: "#666" }}>
                  Include your order number or receipt with the return.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Non-Returnable Items */}
        <div className="bg-white rounded-lg p-8 shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-6" style={{ color: "#1a1a1a" }}>
            Non-Returnable Items
          </h2>

          <div className="space-y-3">
            <div className="flex gap-4">
              <div className="text-red-600 text-xl">✕</div>
              <p style={{ color: "#666" }}>Beauty products and cosmetics (for hygiene reasons)</p>
            </div>

            <div className="flex gap-4">
              <div className="text-red-600 text-xl">✕</div>
              <p style={{ color: "#666" }}>Undergarments and intimate apparel</p>
            </div>

            <div className="flex gap-4">
              <div className="text-red-600 text-xl">✕</div>
              <p style={{ color: "#666" }}>Items marked as "Final Sale"</p>
            </div>

            <div className="flex gap-4">
              <div className="text-red-600 text-xl">✕</div>
              <p style={{ color: "#666" }}>Gift cards</p>
            </div>
          </div>
        </div>

        {/* Exchanges */}
        <div className="bg-white rounded-lg p-8 shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-6" style={{ color: "#1a1a1a" }}>
            Exchanges
          </h2>
          <p className="mb-4" style={{ color: "#666" }}>
            We're happy to exchange items for a different size or color, subject to availability.
          </p>
          <ul className="space-y-2 ml-6">
            <li style={{ color: "#666" }}>• Exchange requests must be made within 14 days</li>
            <li style={{ color: "#666" }}>• Original item must meet return conditions</li>
            <li style={{ color: "#666" }}>• We'll cover shipping for size exchanges</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="bg-black text-white rounded-lg p-8 text-center">
          <h3 className="text-xl font-semibold mb-4">Need Help with a Return?</h3>
          <p className="mb-6">Our customer service team is here to assist you</p>
          <a 
            href="/contact"
            className="inline-block px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#ffffff", color: "#1a1a1a" }}
          >
            Contact Support
          </a>
        </div>
      </div>
    </main>
  );
}

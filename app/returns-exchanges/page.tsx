"use client";

export default function ReturnsExchangesPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#ffffff" }}>
      {/* Hero Section */}
      <div className="py-20 px-8" style={{ backgroundColor: "#f8f8f8" }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 flex justify-center">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#d4a574" strokeWidth="1.5">
              <polyline points="1 4 1 10 7 10"></polyline>
              <polyline points="23 20 23 14 17 14"></polyline>
              <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>
            </svg>
          </div>
          <h1 className="text-5xl md:text-6xl mb-6" style={{ fontFamily: "serif", color: "#1a1a1a", fontWeight: 400 }}>
            Easy Returns & Exchanges
          </h1>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: "#666", lineHeight: 1.8 }}>
            We offer a 30-day hassle-free return policy for unused items in original condition.
          </p>
        </div>
      </div>

      {/* Return Process Steps */}
      <section className="py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-12 text-center" style={{ fontFamily: "serif", color: "#1a1a1a", fontWeight: 400 }}>
            How to Return or Exchange
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <div className="text-center p-6 rounded-lg" style={{ backgroundColor: "#f8f8f8" }}>
              <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold" style={{ backgroundColor: "#d4a574" }}>
                1
              </div>
              <h3 className="font-semibold mb-2" style={{ color: "#1a1a1a" }}>Contact Us</h3>
              <p className="text-sm" style={{ color: "#666" }}>Email us within 30 days of delivery</p>
            </div>
            <div className="text-center p-6 rounded-lg" style={{ backgroundColor: "#f8f8f8" }}>
              <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold" style={{ backgroundColor: "#d4a574" }}>
                2
              </div>
              <h3 className="font-semibold mb-2" style={{ color: "#1a1a1a" }}>Get Authorization</h3>
              <p className="text-sm" style={{ color: "#666" }}>Receive return label and instructions</p>
            </div>
            <div className="text-center p-6 rounded-lg" style={{ backgroundColor: "#f8f8f8" }}>
              <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold" style={{ backgroundColor: "#d4a574" }}>
                3
              </div>
              <h3 className="font-semibold mb-2" style={{ color: "#1a1a1a" }}>Ship Item</h3>
              <p className="text-sm" style={{ color: "#666" }}>Pack securely with original tags</p>
            </div>
            <div className="text-center p-6 rounded-lg" style={{ backgroundColor: "#f8f8f8" }}>
              <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold" style={{ backgroundColor: "#d4a574" }}>
                4
              </div>
              <h3 className="font-semibold mb-2" style={{ color: "#1a1a1a" }}>Get Refund</h3>
              <p className="text-sm" style={{ color: "#666" }}>Processed within 5–7 business days</p>
            </div>
          </div>

          {/* Return Policy Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="p-8 border rounded-lg" style={{ borderColor: "#e5e5e5" }}>
              <h3 className="text-2xl font-semibold mb-6" style={{ color: "#1a1a1a", fontFamily: "serif" }}>
                Eligible for Return
              </h3>
              <ul className="space-y-3" style={{ color: "#666" }}>
                <li className="flex items-start gap-3">
                  <span style={{ color: "#22c55e", fontSize: "20px" }}>✓</span>
                  <span>Unworn items with original tags</span>
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: "#22c55e", fontSize: "20px" }}>✓</span>
                  <span>Items in original packaging</span>
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: "#22c55e", fontSize: "20px" }}>✓</span>
                  <span>Returned within 30 days</span>
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: "#22c55e", fontSize: "20px" }}>✓</span>
                  <span>Items purchased at full price</span>
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: "#22c55e", fontSize: "20px" }}>✓</span>
                  <span>Defective or damaged items</span>
                </li>
              </ul>
            </div>

            <div className="p-8 border rounded-lg" style={{ borderColor: "#e5e5e5" }}>
              <h3 className="text-2xl font-semibold mb-6" style={{ color: "#1a1a1a", fontFamily: "serif" }}>
                Not Eligible for Return
              </h3>
              <ul className="space-y-3" style={{ color: "#666" }}>
                <li className="flex items-start gap-3">
                  <span style={{ color: "#ef4444", fontSize: "20px" }}>✕</span>
                  <span>Beauty products (hygiene reasons)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: "#ef4444", fontSize: "20px" }}>✕</span>
                  <span>Items worn or altered</span>
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: "#ef4444", fontSize: "20px" }}>✕</span>
                  <span>Final sale items</span>
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: "#ef4444", fontSize: "20px" }}>✕</span>
                  <span>Custom or personalized items</span>
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: "#ef4444", fontSize: "20px" }}>✕</span>
                  <span>Items without tags or packaging</span>
                </li>
              </ul>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl mb-8 text-center" style={{ fontFamily: "serif", color: "#1a1a1a", fontWeight: 400 }}>
              Common Questions
            </h2>
            <div className="space-y-4 max-w-3xl mx-auto">
              <details className="p-6 rounded-lg cursor-pointer" style={{ backgroundColor: "#f8f8f8" }}>
                <summary className="font-semibold text-lg" style={{ color: "#1a1a1a" }}>
                  How long does the refund take?
                </summary>
                <p className="mt-4" style={{ color: "#666" }}>
                  Once we receive your return, refunds are processed within 5–7 business days. The refund will appear in your account within 7–10 business days depending on your bank.
                </p>
              </details>
              <details className="p-6 rounded-lg cursor-pointer" style={{ backgroundColor: "#f8f8f8" }}>
                <summary className="font-semibold text-lg" style={{ color: "#1a1a1a" }}>
                  Who pays for return shipping?
                </summary>
                <p className="mt-4" style={{ color: "#666" }}>
                  For defective or incorrect items, we cover return shipping. For standard returns, customers are responsible for return shipping costs unless the order qualifies for free returns.
                </p>
              </details>
              <details className="p-6 rounded-lg cursor-pointer" style={{ backgroundColor: "#f8f8f8" }}>
                <summary className="font-semibold text-lg" style={{ color: "#1a1a1a" }}>
                  Can I exchange for a different size or color?
                </summary>
                <p className="mt-4" style={{ color: "#666" }}>
                  Yes! Contact us to arrange an exchange. We'll send the new item once we receive your return, subject to availability.
                </p>
              </details>
              <details className="p-6 rounded-lg cursor-pointer" style={{ backgroundColor: "#f8f8f8" }}>
                <summary className="font-semibold text-lg" style={{ color: "#1a1a1a" }}>
                  What if my item arrives damaged?
                </summary>
                <p className="mt-4" style={{ color: "#666" }}>
                  Please contact us immediately with photos. We'll arrange a replacement or full refund at no cost to you, including return shipping.
                </p>
              </details>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center p-12 rounded-lg" style={{ backgroundColor: "#1a1a1a" }}>
            <h2 className="text-3xl md:text-4xl mb-6 text-white" style={{ fontFamily: "serif", fontWeight: 400 }}>
              Need Help?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: "#e5e5e5" }}>
              Our customer service team is here to assist with returns and exchanges.
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

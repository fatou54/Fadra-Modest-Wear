"use client";

export default function AuthenticityPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#ffffff" }}>
      {/* Hero Section */}
      <div className="py-20 px-8" style={{ backgroundColor: "#f8f8f8" }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 flex justify-center">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#d4a574" strokeWidth="1.5">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          </div>
          <h1 className="text-5xl md:text-6xl mb-6" style={{ fontFamily: "serif", color: "#1a1a1a", fontWeight: 400 }}>
            Our Authenticity Promise
          </h1>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: "#666", lineHeight: 1.8 }}>
            Every item is verified by our quality assurance team to ensure premium craftsmanship and genuine materials.
          </p>
        </div>
      </div>

      {/* Quality Process Steps */}
      <section className="py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-12 text-center" style={{ fontFamily: "serif", color: "#1a1a1a", fontWeight: 400 }}>
            Our Quality Assurance Process
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Step 1 */}
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 rounded-full flex items-center justify-center text-white text-2xl font-bold" style={{ backgroundColor: "#d4a574" }}>
                  1
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4" style={{ color: "#1a1a1a" }}>
                Supplier Verification
              </h3>
              <p style={{ color: "#666", lineHeight: 1.8 }}>
                We partner exclusively with verified suppliers and designers who meet our strict authenticity standards.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 rounded-full flex items-center justify-center text-white text-2xl font-bold" style={{ backgroundColor: "#d4a574" }}>
                  2
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4" style={{ color: "#1a1a1a" }}>
                Quality Inspection
              </h3>
              <p style={{ color: "#666", lineHeight: 1.8 }}>
                Each piece undergoes thorough inspection for material quality, stitching, and craftsmanship before being approved.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 rounded-full flex items-center justify-center text-white text-2xl font-bold" style={{ backgroundColor: "#d4a574" }}>
                  3
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4" style={{ color: "#1a1a1a" }}>
                Ethical Sourcing
              </h3>
              <p style={{ color: "#666", lineHeight: 1.8 }}>
                We ensure all materials are ethically sourced and production follows fair labor practices.
              </p>
            </div>
          </div>

          {/* Verification Points */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="p-8 rounded-lg" style={{ backgroundColor: "#f8f8f8" }}>
              <h3 className="text-2xl font-semibold mb-6" style={{ color: "#1a1a1a", fontFamily: "serif" }}>
                What We Verify
              </h3>
              <ul className="space-y-4" style={{ color: "#666" }}>
                <li className="flex items-start gap-3">
                  <span style={{ color: "#d4a574" }}>✓</span>
                  <span>Premium fabric composition and authenticity</span>
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: "#d4a574" }}>✓</span>
                  <span>Craftsmanship quality and attention to detail</span>
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: "#d4a574" }}>✓</span>
                  <span>Designer signatures and authentication marks</span>
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: "#d4a574" }}>✓</span>
                  <span>Stitching integrity and construction</span>
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: "#d4a574" }}>✓</span>
                  <span>Hardware quality (zippers, buttons, clasps)</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-lg" style={{ backgroundColor: "#f8f8f8" }}>
              <h3 className="text-2xl font-semibold mb-6" style={{ color: "#1a1a1a", fontFamily: "serif" }}>
                Our Guarantee
              </h3>
              <ul className="space-y-4" style={{ color: "#666" }}>
                <li className="flex items-start gap-3">
                  <span style={{ color: "#d4a574" }}>✓</span>
                  <span>100% authentic designer pieces</span>
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: "#d4a574" }}>✓</span>
                  <span>Premium materials only</span>
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: "#d4a574" }}>✓</span>
                  <span>Certificate of authenticity available</span>
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: "#d4a574" }}>✓</span>
                  <span>Transparent sourcing information</span>
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: "#d4a574" }}>✓</span>
                  <span>Full refund if authenticity disputed</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Trust Statement */}
          <div className="text-center p-12 rounded-lg" style={{ backgroundColor: "#1a1a1a" }}>
            <h2 className="text-3xl md:text-4xl mb-6 text-white" style={{ fontFamily: "serif", fontWeight: 400 }}>
              Shop with Confidence
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: "#e5e5e5" }}>
              Every purchase at FADRA comes with our authenticity guarantee. If you have any concerns about your item, our team is here to help.
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

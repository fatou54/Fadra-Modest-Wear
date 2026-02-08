"use client";

export default function QualityPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#ffffff" }}>
      {/* Hero Section */}
      <div className="py-20 px-8" style={{ backgroundColor: "#f8f8f8" }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 flex justify-center">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#d4a574" strokeWidth="1.5">
              <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
              <path d="M2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
          </div>
          <h1 className="text-5xl md:text-6xl mb-6" style={{ fontFamily: "serif", color: "#1a1a1a", fontWeight: 400 }}>
            Premium Craftsmanship
          </h1>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: "#666", lineHeight: 1.8 }}>
            Our collections are curated from world-class designers using premium fabrics and meticulous detailing.
          </p>
        </div>
      </div>

      {/* Quality Standards */}
      <section className="py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 rounded-lg" style={{ backgroundColor: "#f8f8f8" }}>
              <div className="text-5xl mb-4">✨</div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: "#1a1a1a" }}>Premium Materials</h3>
              <p style={{ color: "#666", lineHeight: 1.8 }}>
                Only the finest fabrics including silk, premium cotton, cashmere, and Italian leather
              </p>
            </div>
            <div className="text-center p-8 rounded-lg" style={{ backgroundColor: "#f8f8f8" }}>
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: "#1a1a1a" }}>Expert Craftsmanship</h3>
              <p style={{ color: "#666", lineHeight: 1.8 }}>
                Hand-finished details and precision tailoring by skilled artisans
              </p>
            </div>
            <div className="text-center p-8 rounded-lg" style={{ backgroundColor: "#f8f8f8" }}>
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: "#1a1a1a" }}>Designer Partnerships</h3>
              <p style={{ color: "#666", lineHeight: 1.8 }}>
                Collaborations with renowned modest fashion designers worldwide
              </p>
            </div>
          </div>

          {/* Material Sourcing */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl mb-8 text-center" style={{ fontFamily: "serif", color: "#1a1a1a", fontWeight: 400 }}>
              Material Sourcing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1558769132-cb1aea3c4189?w=800&h=600&fit=crop"
                  alt="Premium fabrics"
                  className="w-full h-80 object-cover rounded-lg mb-6"
                />
                <h3 className="text-2xl font-semibold mb-4" style={{ color: "#1a1a1a", fontFamily: "serif" }}>
                  Luxury Fabrics
                </h3>
                <p style={{ color: "#666", lineHeight: 1.8 }}>
                  We source our materials from renowned mills in Italy, France, and Japan. Each fabric is selected for its superior quality, durability, and comfort.
                </p>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&h=600&fit=crop"
                  alt="Artisan craftsmanship"
                  className="w-full h-80 object-cover rounded-lg mb-6"
                />
                <h3 className="text-2xl font-semibold mb-4" style={{ color: "#1a1a1a", fontFamily: "serif" }}>
                  Sustainable Practices
                </h3>
                <p style={{ color: "#666", lineHeight: 1.8 }}>
                  We prioritize eco-friendly materials and sustainable production methods, ensuring our fashion choices don't compromise the environment.
                </p>
              </div>
            </div>
          </div>

          {/* Quality Checklist */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl mb-8 text-center" style={{ fontFamily: "serif", color: "#1a1a1a", fontWeight: 400 }}>
              Our Quality Standards
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="flex items-start gap-4 p-6 rounded-lg" style={{ backgroundColor: "#f8f8f8" }}>
                <span style={{ color: "#d4a574", fontSize: "24px" }}>✓</span>
                <div>
                  <h4 className="font-semibold mb-2" style={{ color: "#1a1a1a" }}>Fabric Quality</h4>
                  <p className="text-sm" style={{ color: "#666" }}>Premium, breathable materials with superior drape and feel</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 rounded-lg" style={{ backgroundColor: "#f8f8f8" }}>
                <span style={{ color: "#d4a574", fontSize: "24px" }}>✓</span>
                <div>
                  <h4 className="font-semibold mb-2" style={{ color: "#1a1a1a" }}>Stitch Precision</h4>
                  <p className="text-sm" style={{ color: "#666" }}>Reinforced seams and hand-finished edges</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 rounded-lg" style={{ backgroundColor: "#f8f8f8" }}>
                <span style={{ color: "#d4a574", fontSize: "24px" }}>✓</span>
                <div>
                  <h4 className="font-semibold mb-2" style={{ color: "#1a1a1a" }}>Color Fastness</h4>
                  <p className="text-sm" style={{ color: "#666" }}>Dyes that maintain vibrancy wash after wash</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 rounded-lg" style={{ backgroundColor: "#f8f8f8" }}>
                <span style={{ color: "#d4a574", fontSize: "24px" }}>✓</span>
                <div>
                  <h4 className="font-semibold mb-2" style={{ color: "#1a1a1a" }}>Perfect Fit</h4>
                  <p className="text-sm" style={{ color: "#666" }}>Pattern-making refined for modern modest silhouettes</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 rounded-lg" style={{ backgroundColor: "#f8f8f8" }}>
                <span style={{ color: "#d4a574", fontSize: "24px" }}>✓</span>
                <div>
                  <h4 className="font-semibold mb-2" style={{ color: "#1a1a1a" }}>Hardware Excellence</h4>
                  <p className="text-sm" style={{ color: "#666" }}>Premium zippers, buttons, and embellishments</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 rounded-lg" style={{ backgroundColor: "#f8f8f8" }}>
                <span style={{ color: "#d4a574", fontSize: "24px" }}>✓</span>
                <div>
                  <h4 className="font-semibold mb-2" style={{ color: "#1a1a1a" }}>Longevity</h4>
                  <p className="text-sm" style={{ color: "#666" }}>Designed to last for years with proper care</p>
                </div>
              </div>
            </div>
          </div>

          {/* Designer Partnerships */}
          <div className="text-center p-12 rounded-lg" style={{ backgroundColor: "#1a1a1a" }}>
            <h2 className="text-3xl md:text-4xl mb-6 text-white" style={{ fontFamily: "serif", fontWeight: 400 }}>
              Designer Collaborations
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: "#e5e5e5" }}>
              We work with established and emerging designers who share our vision for elegant, modest fashion that celebrates individuality and craftsmanship.
            </p>
            <a
              href="/women"
              className="inline-block px-8 py-4 text-sm tracking-widest hover:opacity-90 transition-all mr-4"
              style={{ backgroundColor: "#d4a574", color: "#1a1a1a", letterSpacing: "0.2em", fontWeight: 600 }}
            >
              SHOP WOMEN
            </a>
            <a
              href="/men"
              className="inline-block px-8 py-4 text-sm tracking-widest hover:bg-white hover:bg-opacity-10 transition-all"
              style={{ backgroundColor: "transparent", color: "#ffffff", letterSpacing: "0.2em", border: "2px solid #ffffff", fontWeight: 500 }}
            >
              SHOP MEN
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

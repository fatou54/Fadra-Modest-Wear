import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - FADRA Luxury Modest Fashion",
  description: "Learn about FADRA's mission to curate the finest luxury modest fashion. Discover our story, values, and commitment to quality and authenticity.",
  openGraph: {
    title: "About FADRA - Luxury Modest Fashion",
    description: "Learn about FADRA's mission to curate the finest luxury modest fashion for the modern world.",
    url: "https://fadra-modest-store.vercel.app/about",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-br from-stone-100 to-stone-50">
        <div className="text-center px-6">
          <h1 className="text-5xl md:text-7xl font-light tracking-wider mb-6">
            ABOUT FADRA
          </h1>
          <p className="text-xl md:text-2xl text-stone-600 max-w-2xl mx-auto font-light">
            Curating the finest in luxury modest fashion for the modern world
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-light mb-6">Our Story</h2>
            <div className="space-y-4 text-stone-600 leading-relaxed">
              <p>
                FADRA was born from a vision to redefine modest fashion as a celebration of elegance, 
                luxury, and personal expression. We understand that modesty is not a limitation but a 
                conscious choice that deserves the finest craftsmanship and design.
              </p>
              <p>
                Our curated collections bring together premium fabrics, timeless silhouettes, and 
                contemporary aesthetics. Each piece is carefully selected to empower individuals who 
                value both their personal style and their principles.
              </p>
              <p>
                From luxurious abayas to refined accessories, every item in our collection tells a 
                story of quality, authenticity, and sophistication.
              </p>
            </div>
          </div>
          <div className="bg-stone-100 h-96 flex items-center justify-center">
            <span className="text-6xl text-stone-300">✦</span>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-stone-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-light text-center mb-16">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="mb-4">
                <span className="text-4xl">◆</span>
              </div>
              <h3 className="text-2xl font-light mb-4">Authenticity</h3>
              <p className="text-stone-600">
                Every product is 100% authentic, sourced directly from verified luxury brands and 
                designers. We guarantee the legitimacy of every piece.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4">
                <span className="text-4xl">◆</span>
              </div>
              <h3 className="text-2xl font-light mb-4">Quality</h3>
              <p className="text-stone-600">
                We curate only the finest materials and craftsmanship. Each item undergoes rigorous 
                quality inspection before reaching you.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4">
                <span className="text-4xl">◆</span>
              </div>
              <h3 className="text-2xl font-light mb-4">Excellence</h3>
              <p className="text-stone-600">
                From customer service to packaging, we strive for excellence in every interaction. 
                Your experience matters to us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose FADRA */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-light text-center mb-16">Why Choose FADRA</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="border border-stone-200 p-8">
            <h3 className="text-xl font-light mb-4">Curated Selection</h3>
            <p className="text-stone-600">
              We handpick every item, ensuring our collection represents the pinnacle of modest 
              luxury fashion. No compromises on quality or style.
            </p>
          </div>
          <div className="border border-stone-200 p-8">
            <h3 className="text-xl font-light mb-4">Global Shipping</h3>
            <p className="text-stone-600">
              Premium packaging and secure worldwide delivery. Your luxury pieces arrive safely, 
              beautifully presented.
            </p>
          </div>
          <div className="border border-stone-200 p-8">
            <h3 className="text-xl font-light mb-4">Customer Care</h3>
            <p className="text-stone-600">
              Our dedicated team is here to assist with styling advice, sizing, and any questions 
              you may have about our products.
            </p>
          </div>
          <div className="border border-stone-200 p-8">
            <h3 className="text-xl font-light mb-4">Secure Shopping</h3>
            <p className="text-stone-600">
              Advanced encryption and secure payment processing ensure your information is always 
              protected.
            </p>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="bg-stone-900 text-white py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-light mb-8">Our Commitment</h2>
          <p className="text-xl text-stone-300 leading-relaxed mb-8">
            At FADRA, we are committed to providing an unparalleled shopping experience that honors 
            both your values and your desire for luxury. Every purchase is backed by our authenticity 
            guarantee, exceptional customer service, and a passion for modest fashion excellence.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center mt-12">
            <a
              href="/products"
              className="px-8 py-4 bg-white text-stone-900 hover:bg-stone-100 transition-colors"
            >
              SHOP THE COLLECTION
            </a>
            <a
              href="/contact"
              className="px-8 py-4 border border-white hover:bg-white hover:text-stone-900 transition-colors"
            >
              GET IN TOUCH
            </a>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <p className="text-stone-600">
          Questions about our brand or products?{" "}
          <a href="/contact" className="underline hover:text-stone-900">
            Contact us
          </a>{" "}
          or visit our{" "}
          <a href="/faq" className="underline hover:text-stone-900">
            FAQ page
          </a>
        </p>
      </section>
    </main>
  );
}

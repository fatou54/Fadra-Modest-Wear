"use client";

export default function ComingSoonPage() {
  return (
    <main className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#fdf5f7" }}>
      <div className="text-center px-8">
        <div className="mb-8">
          <h1 
            className="text-6xl md:text-8xl mb-4 tracking-wide"
            style={{ fontFamily: "serif", color: "#7d6b8f" }}
          >
            Coming Soon
          </h1>
          <p className="text-xl md:text-2xl mb-8" style={{ color: "#9e8fb2" }}>
            We're working on something special
          </p>
        </div>

        <div className="space-y-4">
          <p className="text-lg" style={{ color: "#4a3f5c" }}>
            This section is currently under development.
          </p>
          <p className="text-lg" style={{ color: "#4a3f5c" }}>
            Check back soon for updates!
          </p>
        </div>

        <div className="mt-12 space-x-4">
          <a 
            href="/"
            className="inline-block px-8 py-3 rounded-lg font-medium transition-all duration-300"
            style={{ backgroundColor: "#7d6b8f", color: "white" }}
          >
            Go to Home
          </a>
          <a 
            href="/products"
            className="inline-block px-8 py-3 rounded-lg font-medium transition-all duration-300"
            style={{ backgroundColor: "#c5b9d4", color: "#4a3f5c" }}
          >
            Shop Now
          </a>
        </div>
      </div>
    </main>
  );
}

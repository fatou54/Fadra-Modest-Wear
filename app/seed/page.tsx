"use client";

import { useState } from "react";
import { seedProducts } from "@/lib/seedProducts";

export default function SeedPage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSeed = async () => {
    setLoading(true);
    setMessage("Seeding products...");
    
    try {
      await seedProducts();
      setMessage("✅ Products seeded successfully! You can now go to /products to see them.");
    } catch (error) {
      console.error("Error seeding products:", error);
      setMessage("❌ Error seeding products. Check console for details.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen p-8 flex items-center justify-center" style={{ backgroundColor: "#fdf5f7" }}>
      <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center" style={{ color: "#7d6b8f" }}>
          Seed Products
        </h1>
        
        <p className="mb-6 text-gray-600">
          Click the button below to populate your database with initial products.
          Note: The product images reference placeholder paths. You&apos;ll need to add actual
          images through the admin panel.
        </p>
        
        <button
          onClick={handleSeed}
          disabled={loading}
          className="w-full py-3 px-6 rounded-lg font-semibold transition-colors disabled:opacity-50"
          style={{
            backgroundColor: loading ? "#ccc" : "#7d6b8f",
            color: "white"
          }}
        >
          {loading ? "Seeding..." : "Seed Products"}
        </button>
        
        {message && (
          <div className="mt-4 p-4 rounded-lg bg-gray-100">
            <p className="text-sm">{message}</p>
          </div>
        )}
      </div>
    </main>
  );
}

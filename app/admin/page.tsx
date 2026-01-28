"use client";

import { useState } from "react";
import { seedProducts } from "@/lib/seedProducts";

export default function AdminPage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSeedProducts = async () => {
    setLoading(true);
    setMessage("Adding products to Firestore...");
    
    try {
      await seedProducts();
      setMessage("✅ Successfully added all products to Firestore!");
    } catch (error) {
      setMessage("❌ Error adding products. Check console for details.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen p-8" style={{ backgroundColor: "#fdf5f7" }}>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-8" style={{ color: "#7d6b8f" }}>
          Admin Panel
        </h1>

        <div className="bg-white rounded-lg p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4" style={{ color: "#4a3f5c" }}>
            Seed Products
          </h2>
          <p className="mb-6" style={{ color: "#6b6b6b" }}>
            Click the button below to add initial products to your Firestore database.
          </p>

          <button
            onClick={handleSeedProducts}
            disabled={loading}
            className="px-8 py-3 rounded-lg font-medium transition-all duration-300"
            style={{
              backgroundColor: loading ? "#d0d0d0" : "#c5b9d4",
              color: "#4a3f5c",
              cursor: loading ? "not-allowed" : "pointer",
            }}
          >
            {loading ? "Adding Products..." : "Seed Products"}
          </button>

          {message && (
            <div
              className="mt-6 p-4 rounded-lg"
              style={{
                backgroundColor: message.includes("✅") ? "#d4edda" : "#f8d7da",
                color: message.includes("✅") ? "#155724" : "#721c24",
              }}
            >
              {message}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

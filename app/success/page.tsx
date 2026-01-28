"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (sessionId) {
      // You can verify the payment here if needed
      setLoading(false);
    }
  }, [sessionId]);

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#fdf5f7" }}>
        <p style={{ color: "#7d6b8f" }}>Loading...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-8" style={{ backgroundColor: "#fdf5f7" }}>
      <div className="max-w-2xl text-center">
        <div className="text-6xl mb-6">✅</div>
        <h1 className="text-4xl font-bold mb-4" style={{ color: "#7d6b8f" }}>
          Payment Successful!
        </h1>
        <p className="text-lg mb-8" style={{ color: "#9e8fb2" }}>
          Thank you for your purchase. Your order has been confirmed and will be processed shortly.
        </p>
        <a
          href="/"
          className="inline-block px-8 py-3 rounded-full transition-all duration-300"
          style={{ backgroundColor: "#c5b9d4", color: "#4a3f5c", textDecoration: "none" }}
        >
          Continue Shopping
        </a>
      </div>
    </main>
  );
}

"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Error occurred:", error);
  }, [error]);

  return (
    <main className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#fafafa" }}>
      <div className="max-w-2xl mx-auto px-8 py-16 text-center">
        <div className="mb-8">
          <div 
            className="text-8xl mb-6"
            style={{ color: "#d4a574" }}
          >
            ⚠️
          </div>
          <h1 
            className="text-4xl md:text-5xl mb-4"
            style={{ fontFamily: "serif", color: "#1a1a1a", fontWeight: 400 }}
          >
            Something Went Wrong
          </h1>
          <p className="text-lg mb-8" style={{ color: "#666", lineHeight: 1.8 }}>
            We're sorry, but something unexpected happened. Our team has been notified and we're working to fix the issue.
          </p>
        </div>

        <div className="space-y-4">
          <button
            onClick={reset}
            className="inline-block px-8 py-4 text-white rounded-lg transition-all hover:opacity-90 mr-4"
            style={{ backgroundColor: "#1a1a1a" }}
          >
            Try Again
          </button>
          
          <Link 
            href="/"
            className="inline-block px-8 py-4 rounded-lg transition-all hover:bg-gray-100 border-2"
            style={{ borderColor: "#1a1a1a", color: "#1a1a1a" }}
          >
            Return to Homepage
          </Link>
        </div>

        {/* Error Details (only in development) */}
        {process.env.NODE_ENV === 'development' && (
          <div className="mt-8 p-6 bg-red-50 rounded-lg text-left">
            <h3 className="font-semibold text-red-800 mb-2">Error Details (Dev Only):</h3>
            <pre className="text-sm text-red-600 overflow-auto">
              {error.message}
            </pre>
          </div>
        )}

        {/* Support Links */}
        <div className="mt-12 pt-8 border-t" style={{ borderColor: "#e5e5e5" }}>
          <p className="text-sm mb-4" style={{ color: "#666" }}>
            Need immediate assistance?
          </p>
          <div className="flex justify-center gap-6">
            <Link 
              href="/contact"
              className="text-sm hover:underline"
              style={{ color: "#d4a574" }}
            >
              Contact Support
            </Link>
            <Link 
              href="/faq"
              className="text-sm hover:underline"
              style={{ color: "#d4a574" }}
            >
              View FAQs
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

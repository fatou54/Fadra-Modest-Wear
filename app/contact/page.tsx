"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for contacting us! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <main className="min-h-screen" style={{ backgroundColor: "#fafafa" }}>
      <div className="max-w-6xl mx-auto px-8 py-16">
        <h1 
          className="text-5xl mb-4 text-center"
          style={{ fontFamily: "serif", color: "#1a1a1a" }}
        >
          Contact Us
        </h1>
        <p className="text-center mb-12 text-lg" style={{ color: "#666" }}>
          Need help? Our team is here to assist you with orders, styling advice, and general inquiries.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form Left */}
          <div className="bg-white rounded-lg p-8 shadow-md">
            <h2 className="text-2xl font-semibold mb-6" style={{ color: "#1a1a1a" }}>
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: "#333" }}>
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2"
                  style={{ borderColor: "#e5e5e5" }}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: "#333" }}>
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2"
                  style={{ borderColor: "#e5e5e5" }}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: "#333" }}>
                  Message
                </label>
                <textarea
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2"
                  style={{ borderColor: "#e5e5e5" }}
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "#1a1a1a", color: "#ffffff" }}
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Store Info Right */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-start gap-4">
                <div className="text-2xl">📍</div>
                <div>
                  <h3 className="font-semibold mb-2" style={{ color: "#1a1a1a" }}>Visit Our Store</h3>
                  <p style={{ color: "#666" }}>
                    123 Fashion Avenue<br />
                    Kuala Lumpur, 50450<br />
                    Malaysia
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-start gap-4">
                <div className="text-2xl">📧</div>
                <div>
                  <h3 className="font-semibold mb-2" style={{ color: "#1a1a1a" }}>Email Us</h3>
                  <p style={{ color: "#666" }}>
                    fadra.wear@gmail.com
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-start gap-4">
                <div className="text-2xl">📞</div>
                <div>
                  <h3 className="font-semibold mb-2" style={{ color: "#1a1a1a" }}>Call Us</h3>
                  <p style={{ color: "#666" }}>
                    +60 3-1234 5678<br />
                    Mon-Fri: 9AM - 6PM<br />
                    Sat: 10AM - 4PM
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-start gap-4">
                <div className="text-2xl">💬</div>
                <div>
                  <h3 className="font-semibold mb-2" style={{ color: "#1a1a1a" }}>Follow Us</h3>
                  <div className="flex gap-4 mt-3">
                    <a href="#" className="text-2xl hover:opacity-70 transition-opacity">📷</a>
                    <a href="#" className="text-2xl hover:opacity-70 transition-opacity">🐦</a>
                    <a href="#" className="text-2xl hover:opacity-70 transition-opacity">📘</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

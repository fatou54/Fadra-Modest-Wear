"use client";

export default function ShippingInfoPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#ffffff" }}>
      <div className="max-w-4xl mx-auto px-8 py-16">
        <h1 
          className="text-5xl mb-4 text-center"
          style={{ fontFamily: "serif", color: "#1a1a1a" }}
        >
          Shipping Information
        </h1>
        <p className="text-center mb-12 text-lg" style={{ color: "#666" }}>
          Everything you need to know about our shipping process
        </p>

        {/* Icon Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="text-center p-6 rounded-lg" style={{ backgroundColor: "#f9f9f9" }}>
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="font-semibold mb-2" style={{ color: "#1a1a1a" }}>Fast Processing</h3>
            <p className="text-sm" style={{ color: "#666" }}>Orders processed within 1-2 business days</p>
          </div>

          <div className="text-center p-6 rounded-lg" style={{ backgroundColor: "#f9f9f9" }}>
            <div className="text-4xl mb-3">🚚</div>
            <h3 className="font-semibold mb-2" style={{ color: "#1a1a1a" }}>Reliable Delivery</h3>
            <p className="text-sm" style={{ color: "#666" }}>3-7 days delivery across Malaysia</p>
          </div>

          <div className="text-center p-6 rounded-lg" style={{ backgroundColor: "#f9f9f9" }}>
            <div className="text-4xl mb-3">📦</div>
            <h3 className="font-semibold mb-2" style={{ color: "#1a1a1a" }}>Track Your Order</h3>
            <p className="text-sm" style={{ color: "#666" }}>Real-time tracking updates</p>
          </div>
        </div>

        {/* Timeline Diagram */}
        <div className="bg-white rounded-lg p-8 shadow-md mb-12">
          <h2 className="text-2xl font-semibold mb-8 text-center" style={{ color: "#1a1a1a" }}>
            Delivery Timeline
          </h2>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: "#1a1a1a", color: "#fff" }}>
                  1
                </div>
                <div className="w-0.5 h-full" style={{ backgroundColor: "#e5e5e5" }}></div>
              </div>
              <div className="flex-1 pb-6">
                <h3 className="font-semibold mb-2" style={{ color: "#1a1a1a" }}>Order Placed</h3>
                <p style={{ color: "#666" }}>You'll receive an order confirmation email immediately</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: "#1a1a1a", color: "#fff" }}>
                  2
                </div>
                <div className="w-0.5 h-full" style={{ backgroundColor: "#e5e5e5" }}></div>
              </div>
              <div className="flex-1 pb-6">
                <h3 className="font-semibold mb-2" style={{ color: "#1a1a1a" }}>Processing (1-2 Days)</h3>
                <p style={{ color: "#666" }}>We carefully prepare and package your order</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: "#1a1a1a", color: "#fff" }}>
                  3
                </div>
                <div className="w-0.5 h-full" style={{ backgroundColor: "#e5e5e5" }}></div>
              </div>
              <div className="flex-1 pb-6">
                <h3 className="font-semibold mb-2" style={{ color: "#1a1a1a" }}>Shipped</h3>
                <p style={{ color: "#666" }}>You'll receive tracking information via email</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: "#1a1a1a", color: "#fff" }}>
                  4
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-2" style={{ color: "#1a1a1a" }}>Delivered (3-7 Days)</h3>
                <p style={{ color: "#666" }}>Your order arrives at your doorstep</p>
              </div>
            </div>
          </div>
        </div>

        {/* Delivery Regions */}
        <div className="bg-white rounded-lg p-8 shadow-md mb-12">
          <h2 className="text-2xl font-semibold mb-6" style={{ color: "#1a1a1a" }}>
            Delivery Regions
          </h2>

          <div className="space-y-4">
            <div className="p-4 rounded-lg" style={{ backgroundColor: "#f9f9f9" }}>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold mb-1" style={{ color: "#1a1a1a" }}>West Malaysia (Central)</h3>
                  <p className="text-sm" style={{ color: "#666" }}>Kuala Lumpur, Selangor, Putrajaya</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold" style={{ color: "#1a1a1a" }}>RM 10</p>
                  <p className="text-sm" style={{ color: "#666" }}>2-3 days</p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg" style={{ backgroundColor: "#f9f9f9" }}>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold mb-1" style={{ color: "#1a1a1a" }}>West Malaysia (Others)</h3>
                  <p className="text-sm" style={{ color: "#666" }}>Penang, Johor, Perak, etc.</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold" style={{ color: "#1a1a1a" }}>RM 15</p>
                  <p className="text-sm" style={{ color: "#666" }}>3-5 days</p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg" style={{ backgroundColor: "#f9f9f9" }}>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold mb-1" style={{ color: "#1a1a1a" }}>East Malaysia</h3>
                  <p className="text-sm" style={{ color: "#666" }}>Sabah, Sarawak, Labuan</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold" style={{ color: "#1a1a1a" }}>RM 20</p>
                  <p className="text-sm" style={{ color: "#666" }}>5-7 days</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: "#e8f5e9" }}>
            <p className="text-sm font-medium" style={{ color: "#2e7d32" }}>
              ✓ Free shipping on orders over RM 200 within West Malaysia
            </p>
          </div>
        </div>

        {/* Tracking Orders */}
        <div className="bg-white rounded-lg p-8 shadow-md">
          <h2 className="text-2xl font-semibold mb-6" style={{ color: "#1a1a1a" }}>
            Tracking Your Order
          </h2>
          <p className="mb-4" style={{ color: "#666" }}>
            Once your order is shipped, you'll receive a tracking number via email. You can track your package using:
          </p>
          <ul className="space-y-2 ml-6">
            <li style={{ color: "#666" }}>• The tracking link in your shipping confirmation email</li>
            <li style={{ color: "#666" }}>• Your account dashboard on our website</li>
            <li style={{ color: "#666" }}>• Directly on the courier's website</li>
          </ul>
        </div>
      </div>
    </main>
  );
}

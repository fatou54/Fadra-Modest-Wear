"use client";

import { useCart } from "@/lib/cartContext";
import Link from "next/link";
import { useState } from "react";

export default function CartModal({ onClose }: { onClose: () => void }) {
  const { cart, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const handleCheckout = async () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    setIsCheckingOut(true);

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          items: cart.map(item => ({
            name: item.name,
            price: item.price,
            quantity: item.quantity
          }))
        }),
      });

      const { url } = await response.json();
      if (url) {
        window.location.href = url;
      }
    } catch (error) {
      console.error("Checkout error:", error);
      alert("Failed to process checkout. Please try again.");
      setIsCheckingOut(false);
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 z-[2000] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-semibold" style={{ color: "#1a1a1a" }}>
            Shopping Cart ({cart.length})
          </h2>
          <button
            onClick={onClose}
            className="text-2xl hover:opacity-70"
            style={{ color: "#666" }}
          >
            ×
          </button>
        </div>

        {/* Cart Items */}
        <div className="p-6">
          {cart.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl mb-4" style={{ color: "#666" }}>Your cart is empty</p>
              <Link href="/products">
                <button 
                  className="px-6 py-3 rounded"
                  style={{ backgroundColor: "#1a1a1a", color: "#ffffff" }}
                  onClick={onClose}
                >
                  Continue Shopping
                </button>
              </Link>
            </div>
          ) : (
            <>
              <div className="space-y-4 mb-6">
                {cart.map((item) => (
                  <div 
                    key={item.id} 
                    className="flex gap-4 p-4 border rounded"
                    style={{ borderColor: "#e5e5e5" }}
                  >
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1" style={{ color: "#1a1a1a" }}>
                        {item.name}
                      </h3>
                      <p className="text-sm mb-2" style={{ color: "#666" }}>
                        {item.size && `Size: ${item.size}`}
                        {item.size && item.color && " | "}
                        {item.color && `Color: ${item.color}`}
                      </p>
                      <p className="font-semibold" style={{ color: "#d4a574" }}>
                        RM {item.price.toFixed(2)}
                      </p>
                    </div>
                    <div className="flex flex-col items-end justify-between">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-sm hover:opacity-70"
                        style={{ color: "#999" }}
                      >
                        Remove
                      </button>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 border rounded"
                          style={{ borderColor: "#e5e5e5" }}
                        >
                          −
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 border rounded"
                          style={{ borderColor: "#e5e5e5" }}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="border-t pt-4" style={{ borderColor: "#e5e5e5" }}>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-semibold" style={{ color: "#1a1a1a" }}>
                    Total:
                  </span>
                  <span className="text-2xl font-bold" style={{ color: "#d4a574" }}>
                    RM {getTotalPrice().toFixed(2)}
                  </span>
                </div>
                
                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      clearCart();
                      onClose();
                    }}
                    className="flex-1 px-6 py-3 rounded border"
                    style={{ borderColor: "#e5e5e5", color: "#666" }}
                  >
                    Clear Cart
                  </button>
                  <button
                    onClick={handleCheckout}
                    disabled={isCheckingOut}
                    className="flex-1 px-6 py-3 rounded font-semibold"
                    style={{ 
                      backgroundColor: isCheckingOut ? "#999" : "#1a1a1a", 
                      color: "#ffffff" 
                    }}
                  >
                    {isCheckingOut ? "Processing..." : "Checkout"}
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

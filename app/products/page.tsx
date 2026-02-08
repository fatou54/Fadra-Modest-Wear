"use client";

import { useState, useEffect } from "react";
import { getAllProducts, Product } from "@/lib/firestore";
import { getStripe } from "@/lib/stripe";
import { calculateShipping, getAllStates } from "@/lib/shipping";

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState<Product[]>([]);
  const [checkoutLoading, setCheckoutLoading] = useState(false);
  const [showCartModal, setShowCartModal] = useState(false);
  const [selectedState, setSelectedState] = useState("Kuala Lumpur");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsData = await getAllProducts();
      setProducts(productsData);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  const removeFromCart = (index: number) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
  };

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => {
      const price = typeof item.price === 'string' 
        ? parseFloat(item.price.replace('RM ', '')) 
        : Number(item.price);
      return total + price;
    }, 0);
  };

  const subtotal = calculateSubtotal();
  const shippingInfo = calculateShipping(selectedState, subtotal);
  const total = subtotal + shippingInfo.shippingCost;

  const handleCheckout = async () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    setCheckoutLoading(true);

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ items: cart }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Checkout failed:', errorData);
        alert(`Checkout failed: ${errorData.error || 'Unknown error'}`);
        setCheckoutLoading(false);
        return;
      }

      const data = await response.json();
      console.log('Checkout response:', data);
      
      // Redirect directly to the Stripe checkout URL
      if (data.url) {
        window.location.href = data.url;
      } else {
        console.error('No URL returned from checkout');
        alert('Failed to get checkout URL. Please try again.');
        setCheckoutLoading(false);
      }
    } catch (error) {
      console.error('Checkout error:', error);
      alert('Error processing checkout. Please try again.');
      setCheckoutLoading(false);
    }
  };

  if (loading) {
    return (
      <main className="min-h-screen p-8" style={{ backgroundColor: "#fdf5f7" }}>
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-lg" style={{ color: "#7d6b8f" }}>Loading products...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen" style={{ backgroundColor: "#fdf5f7" }}>
      {/* Header/Navigation */}
      <header 
        className="flex items-center justify-between px-6 py-6"
        style={{ backgroundColor: "#fdf5f7" }}
      >
        <div className="flex items-center gap-4">
          <button 
            onClick={() => window.history.back()}
            className="text-xl"
            style={{ color: "#4a3f5c" }}
            title="Go Back"
          >
            ←
          </button>
        </div>

        <div className="flex items-center gap-6">
          <button 
            onClick={() => cart.length > 0 && setShowCartModal(true)}
            className="text-xl relative" 
            style={{ color: "#4a3f5c" }}
          >
            🛍
            {cart.length > 0 && (
              <span 
                className="absolute -top-2 -right-2 text-xs rounded-full px-2 py-1"
                style={{ backgroundColor: "#c5b9d4", color: "#4a3f5c" }}
              >
                {cart.length}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-full md:w-96 z-50 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ backgroundColor: "#fdf5f7" }}
      >
        <div className="flex flex-col h-full">
          {/* Menu Header */}
          <div className="flex items-center justify-between px-6 py-6 border-b" style={{ borderColor: "#e5d5d8" }}>
            <button 
              onClick={() => setMenuOpen(false)}
              className="text-2xl"
              style={{ color: "#4a3f5c" }}
            >
              ✕
            </button>
            <button className="text-xl" style={{ color: "#4a3f5c" }}>
              🔍
            </button>
            <h2 
              className="text-xl tracking-wide"
              style={{ fontFamily: "serif", color: "#4a3f5c" }}
            >
              FADRA
            </h2>
            <button className="text-xl" style={{ color: "#4a3f5c" }}>
              🛍
            </button>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 overflow-y-auto px-6 py-8">
            <ul className="space-y-6" style={{ fontFamily: "serif", fontSize: "1.75rem" }}>
              <li>
                <a href="/" className="flex items-center justify-between" style={{ color: "#2c2c2c" }}>
                  Home
                </a>
              </li>
              <li>
                <a href="/products" className="flex items-center justify-between" style={{ color: "#2c2c2c" }}>
                  New
                </a>
              </li>
              <li>
                <a href="/coming-soon" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between" style={{ color: "#2c2c2c" }}>
                  Best Sellers <span>→</span>
                </a>
              </li>
              <li>
                <a href="/coming-soon" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between" style={{ color: "#2c2c2c" }}>
                  Hijabs <span>→</span>
                </a>
              </li>
              <li>
                <a href="/coming-soon" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between" style={{ color: "#2c2c2c" }}>
                  Apparel <span>→</span>
                </a>
              </li>
              <li>
                <a href="/coming-soon" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between" style={{ color: "#2c2c2c" }}>
                  Dresses <span>→</span>
                </a>
              </li>
              <li>
                <a href="/coming-soon" target="_blank" rel="noopener noreferrer" className="flex items-center" style={{ color: "#2c2c2c" }}>
                  Mens
                </a>
              </li>
              <li>
                <a href="/coming-soon" target="_blank" rel="noopener noreferrer" className="flex items-center" style={{ color: "#2c2c2c" }}>
                  Girls
                </a>
              </li>
              <li>
                <a href="/coming-soon" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between" style={{ color: "#2c2c2c" }}>
                  Accessories <span>→</span>
                </a>
              </li>
              <li>
                <a href="/coming-soon" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between" style={{ color: "#2c2c2c" }}>
                  Gifts & Sets <span>→</span>
                </a>
              </li>
              <li>
                <a href="/coming-soon" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between" style={{ color: "#2c2c2c" }}>
                  Clearance <span>→</span>
                </a>
              </li>
            </ul>
          </nav>

          {/* Account Button */}
          <div className="px-6 py-4 border-t" style={{ borderColor: "#e5d5d8" }}>
            <button 
              className="w-full flex items-center justify-center gap-2 py-3"
              style={{ color: "#2c2c2c" }}
            >
              <span>👤</span>
              <span className="font-medium">ACCOUNT</span>
            </button>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Products Section */}
      <div className="p-8">
      <div className="max-w-7xl mx-auto">
        {cart.length > 0 && (
          <div className="flex justify-end mb-8">
            <button
              onClick={() => setShowCartModal(true)}
              className="px-6 py-3 rounded-lg font-medium transition-all duration-300"
              style={{
                backgroundColor: "#4a3f5c",
                color: "white",
              }}
            >
              View Cart ({cart.length} items)
            </button>
          </div>
        )}

        {products.length === 0 ? (
          <p style={{ color: "#9e8fb2" }}>No products available yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                style={{ backgroundColor: "#fff5f9" }}
              >
                <div className="h-64 flex items-center justify-center" style={{ backgroundColor: "#e8dff5" }}>
                  {product.image ? (
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-gray-400 text-sm">No image</span>
                  )}
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2" style={{ color: "#7d6b8f" }}>
                    {product.name}
                  </h2>
                  <p className="text-sm mb-4" style={{ color: "#9e8fb2" }}>{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold" style={{ color: "#7d6b8f" }}>
                      RM {Number(product.price).toFixed(2)}
                    </span>
                    <button
                      onClick={() => addToCart(product)}
                      className="px-4 py-2 rounded-lg transition-colors duration-200"
                      style={{ backgroundColor: "#c5b9d4", color: "#4a3f5c" }}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      </div>

      {/* Cart Modal */}
      {showCartModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto" style={{ backgroundColor: "#fdf5f7" }}>
            <div className="p-6 border-b" style={{ borderColor: "#e5d5d8" }}>
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold" style={{ color: "#7d6b8f" }}>Shopping Cart</h2>
                <button
                  onClick={() => setShowCartModal(false)}
                  className="text-2xl"
                  style={{ color: "#4a3f5c" }}
                >
                  ✕
                </button>
              </div>
            </div>

            <div className="p-6">
              {cart.length === 0 ? (
                <p style={{ color: "#9e8fb2" }}>Your cart is empty</p>
              ) : (
                <>
                  {/* Cart Items */}
                  <div className="space-y-4 mb-6">
                    {cart.map((item, index) => (
                      <div key={index} className="flex justify-between items-center p-4 rounded-lg" style={{ backgroundColor: "#fff5f9" }}>
                        <div>
                          <h3 className="font-semibold" style={{ color: "#7d6b8f" }}>{item.name}</h3>
                          <p className="text-sm" style={{ color: "#9e8fb2" }}>{item.description}</p>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="font-bold" style={{ color: "#7d6b8f" }}>RM {Number(item.price).toFixed(2)}</span>
                          <button
                            onClick={() => removeFromCart(index)}
                            className="text-red-500 hover:text-red-700"
                          >
                            🗑️
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Shipping Calculator */}
                  <div className="mb-6 p-4 rounded-lg" style={{ backgroundColor: "#e8dff5" }}>
                    <h3 className="font-semibold mb-3" style={{ color: "#7d6b8f" }}>Shipping Information</h3>
                    <div className="mb-3">
                      <label className="block text-sm mb-2" style={{ color: "#4a3f5c" }}>Select Your State:</label>
                      <select
                        value={selectedState}
                        onChange={(e) => setSelectedState(e.target.value)}
                        className="w-full p-2 rounded border"
                        style={{ borderColor: "#c5b9d4", backgroundColor: "white" }}
                      >
                        {getAllStates().map((state) => (
                          <option key={state} value={state}>
                            {state}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="text-sm space-y-1" style={{ color: "#4a3f5c" }}>
                      <p>Region: <strong>{shippingInfo.region}</strong></p>
                      <p>Shipping: <strong>{shippingInfo.isFreeShipping ? 'FREE' : `RM ${shippingInfo.shippingCost.toFixed(2)}`}</strong></p>
                      {!shippingInfo.isFreeShipping && (
                        <p className="text-xs mt-2" style={{ color: "#9e8fb2" }}>
                          💡 Add RM {(shippingInfo.shippingCost > 0 ? calculateShipping(selectedState, 999999).shippingCost : 0).toFixed(2)} more for free shipping!
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Order Summary */}
                  <div className="border-t pt-4 space-y-2" style={{ borderColor: "#e5d5d8" }}>
                    <div className="flex justify-between">
                      <span style={{ color: "#9e8fb2" }}>Subtotal:</span>
                      <span style={{ color: "#7d6b8f" }}>RM {subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span style={{ color: "#9e8fb2" }}>Shipping ({selectedState}):</span>
                      <span style={{ color: shippingInfo.isFreeShipping ? "#22c55e" : "#7d6b8f" }}>
                        {shippingInfo.isFreeShipping ? 'FREE' : `RM ${shippingInfo.shippingCost.toFixed(2)}`}
                      </span>
                    </div>
                    <div className="flex justify-between text-xl font-bold pt-2 border-t" style={{ borderColor: "#e5d5d8", color: "#4a3f5c" }}>
                      <span>Total:</span>
                      <span>RM {total.toFixed(2)}</span>
                    </div>
                  </div>

                  {/* Checkout Button */}
                  <button
                    onClick={handleCheckout}
                    disabled={checkoutLoading}
                    className="w-full mt-6 px-6 py-3 rounded-lg font-medium transition-all duration-300"
                    style={{
                      backgroundColor: checkoutLoading ? "#d0d0d0" : "#4a3f5c",
                      color: "white",
                      cursor: checkoutLoading ? "not-allowed" : "pointer",
                    }}
                  >
                    {checkoutLoading ? "Processing..." : "Proceed to Checkout"}
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

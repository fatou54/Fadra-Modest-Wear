"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/lib/cartContext";
import CartModal from "./CartModal";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [womenDropdown, setWomenDropdown] = useState(false);
  const [menDropdown, setMenDropdown] = useState(false);
  const [mobileWomenOpen, setMobileWomenOpen] = useState(false);
  const [mobileMenOpen, setMobileMenOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [accountDropdown, setAccountDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { getItemCount } = useCart();

  return (
    <>
      {/* Top Announcement Bar */}
      <div
        style={{
          backgroundColor: "#1a1a1a",
          color: "#ffffff",
          textAlign: "center",
          padding: "10px 20px",
          fontSize: "13px",
          letterSpacing: "0.05em"
        }}
      >
        ✨ Free Shipping on Orders Over RM 250 | Worldwide Delivery
      </div>

      {/* Main Header */}
      <nav
        style={{
          padding: "20px 30px",
          backgroundColor: "#ffffff",
          color: "#1a1a1a",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "sticky",
          top: 0,
          zIndex: 1000,
          boxShadow: "0 2px 4px rgba(0,0,0,0.08)"
        }}
      >
        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "8px",
            fontSize: "26px",
            color: "#1a1a1a"
          }}
          aria-label="Menu"
        >
          ☰
        </button>

        {/* Center - Logo */}
        <div style={{ flex: 1 }} className="flex justify-center">
          <Link
            href="/"
            style={{
              fontFamily: "serif",
              fontSize: "32px",
              fontWeight: "400",
              color: "#1a1a1a",
              textDecoration: "none",
              letterSpacing: "0.15em"
            }}
            className="hover:opacity-80 transition-opacity"
          >
            FADRA.
          </Link>
        </div>

        {/* Right Side - Icons */}
        <div style={{ display: "flex", gap: "24px", alignItems: "center", flex: 1, justifyContent: "flex-end" }}>
          {/* Search Icon 🔍 */}
          <button
            onClick={() => setShowSearch(true)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "0",
              fontSize: "22px",
              transition: "transform 0.2s"
            }}
            className="hover:scale-110 hidden sm:block"
            aria-label="Search"
          >
            🔍
          </button>

          {/* Wishlist Icon ❤️ */}
          <Link
            href="/wishlist"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "0",
              fontSize: "22px",
              transition: "transform 0.2s",
              textDecoration: "none"
            }}
            className="hover:scale-110 hidden sm:block"
            aria-label="Wishlist"
          >
            ❤️
          </Link>

          {/* Account Icon 👤 */}
          <div style={{ position: "relative" }}>
            <button
              onClick={() => setAccountDropdown(!accountDropdown)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "0",
                fontSize: "22px",
                transition: "transform 0.2s"
              }}
              className="hover:scale-110"
              aria-label="Account"
            >
              👤
            </button>

            {/* Account Dropdown */}
            {accountDropdown && (
              <>
                <div
                  style={{
                    position: "fixed",
                    inset: 0,
                    zIndex: 1998
                  }}
                  onClick={() => setAccountDropdown(false)}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "calc(100% + 12px)",
                    right: 0,
                    backgroundColor: "#ffffff",
                    border: "1px solid #e5e5e5",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
                    minWidth: "240px",
                    zIndex: 1999,
                    borderRadius: "8px",
                    overflow: "hidden"
                  }}
                >
                  <div style={{ padding: "16px 20px", borderBottom: "1px solid #f0f0f0", backgroundColor: "#f8f8f8" }}>
                    <p style={{ fontSize: "14px", fontWeight: "600", color: "#1a1a1a", margin: 0 }}>My Account</p>
                    <p style={{ fontSize: "12px", color: "#666", margin: "4px 0 0 0" }}>Manage your profile</p>
                  </div>
                  <Link href="/account" onClick={() => setAccountDropdown(false)} className="hover:bg-[#f8f8f8]" style={{ display: "block", padding: "12px 20px", color: "#1a1a1a", textDecoration: "none", fontSize: "14px", borderBottom: "1px solid #f5f5f5", transition: "background 0.2s" }}>👤 Profile Info</Link>
                  <Link href="/account/orders" onClick={() => setAccountDropdown(false)} className="hover:bg-[#f8f8f8]" style={{ display: "block", padding: "12px 20px", color: "#1a1a1a", textDecoration: "none", fontSize: "14px", borderBottom: "1px solid #f5f5f5", transition: "background 0.2s" }}>📦 My Orders</Link>
                  <Link href="/account/tracking" onClick={() => setAccountDropdown(false)} className="hover:bg-[#f8f8f8]" style={{ display: "block", padding: "12px 20px", color: "#1a1a1a", textDecoration: "none", fontSize: "14px", borderBottom: "1px solid #f5f5f5", transition: "background 0.2s" }}>📍 Order Tracking</Link>
                  <Link href="/account/addresses" onClick={() => setAccountDropdown(false)} className="hover:bg-[#f8f8f8]" style={{ display: "block", padding: "12px 20px", color: "#1a1a1a", textDecoration: "none", fontSize: "14px", borderBottom: "1px solid #f5f5f5", transition: "background 0.2s" }}>🏠 Addresses</Link>
                  <Link href="/account/payment" onClick={() => setAccountDropdown(false)} className="hover:bg-[#f8f8f8]" style={{ display: "block", padding: "12px 20px", color: "#1a1a1a", textDecoration: "none", fontSize: "14px", borderBottom: "1px solid #f5f5f5", transition: "background 0.2s" }}>💳 Payment Methods</Link>
                  <Link href="/wishlist" onClick={() => setAccountDropdown(false)} className="hover:bg-[#f8f8f8]" style={{ display: "block", padding: "12px 20px", color: "#1a1a1a", textDecoration: "none", fontSize: "14px", borderBottom: "1px solid #f5f5f5", transition: "background 0.2s" }}>❤️ Wishlist</Link>
                  <Link href="/account/returns" onClick={() => setAccountDropdown(false)} className="hover:bg-[#f8f8f8]" style={{ display: "block", padding: "12px 20px", color: "#1a1a1a", textDecoration: "none", fontSize: "14px", borderBottom: "1px solid #f5f5f5", transition: "background 0.2s" }}>↩️ Returns & Refunds</Link>
                  <Link href="/account/settings" onClick={() => setAccountDropdown(false)} className="hover:bg-[#f8f8f8]" style={{ display: "block", padding: "12px 20px", color: "#1a1a1a", textDecoration: "none", fontSize: "14px", borderBottom: "1px solid #f5f5f5", transition: "background 0.2s" }}>⚙️ Password Settings</Link>
                  <button onClick={() => setAccountDropdown(false)} className="hover:bg-[#f8f8f8]" style={{ width: "100%", display: "block", padding: "12px 20px", color: "#d4a574", textDecoration: "none", fontSize: "14px", fontWeight: "600", textAlign: "left", background: "none", border: "none", cursor: "pointer", transition: "background 0.2s" }}>🚪 Logout</button>
                </div>
              </>
            )}
          </div>

          {/* Shopping Cart Icon 🛒 */}
          <button
            onClick={() => setShowCart(true)}
            style={{
              position: "relative",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "0",
              fontSize: "22px",
              transition: "transform 0.2s"
            }}
            className="hover:scale-110"
            aria-label="Shopping Cart"
          >
            🛒
            {getItemCount() > 0 && (
              <span
                style={{
                  position: "absolute",
                  top: "-8px",
                  right: "-8px",
                  backgroundColor: "#d4a574",
                  color: "#ffffff",
                  borderRadius: "50%",
                  width: "20px",
                  height: "20px",
                  fontSize: "11px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "600"
                }}
              >
                {getItemCount()}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Desktop Navigation Menu Row */}
      <div 
        className="hidden md:block"
        style={{
          backgroundColor: "#ffffff",
          borderTop: "1px solid #e5e5e5",
          borderBottom: "1px solid #e5e5e5",
          position: "sticky",
          top: "72px",
          zIndex: 999
        }}
      >
        <div 
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "48px",
            padding: "16px 20px"
          }}
        >
          <Link
            href="/"
            style={{
              color: "#1a1a1a",
              textDecoration: "none",
              fontSize: "13px",
              fontWeight: "500",
              letterSpacing: "0.08em",
              transition: "color 0.3s"
            }}
            className="hover:text-[#d4a574]"
          >
            HOME
          </Link>

          <Link
            href="/new-arrivals"
            style={{
              color: "#1a1a1a",
              textDecoration: "none",
              fontSize: "13px",
              fontWeight: "500",
              letterSpacing: "0.08em",
              transition: "color 0.3s"
            }}
            className="hover:text-[#d4a574]"
          >
            NEW
          </Link>

          {/* Women Dropdown */}
          <div 
            style={{ position: "relative" }}
          >
            <button
              onClick={() => setWomenDropdown(!womenDropdown)}
              style={{
                color: "#1a1a1a",
                textDecoration: "none",
                fontSize: "13px",
                fontWeight: "500",
                letterSpacing: "0.08em",
                display: "flex",
                alignItems: "center",
                gap: "4px",
                transition: "color 0.3s",
                background: "none",
                border: "none",
                cursor: "pointer"
              }}
              className="hover:text-[#d4a574]"
            >
              WOMEN
              <span style={{ fontSize: "9px" }}>▼</span>
            </button>
            
            {womenDropdown && (
              <>
                <div
                  style={{
                    position: "fixed",
                    inset: 0,
                    zIndex: 1998
                  }}
                  onClick={() => setWomenDropdown(false)}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    marginTop: "16px",
                    backgroundColor: "#ffffff",
                    border: "1px solid #e5e5e5",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
                    minWidth: "220px",
                    zIndex: 1999
                  }}
                >
                  <Link href="/products/women/abayas" onClick={() => setWomenDropdown(false)} className="hover:bg-[#f8f8f8] hover:text-[#d4a574]" style={{ display: "block", padding: "14px 24px", color: "#1a1a1a", textDecoration: "none", fontSize: "13px", borderBottom: "1px solid #f5f5f5", letterSpacing: "0.05em", transition: "all 0.2s" }}>Abayas</Link>
                  <Link href="/products/women/hijabs" onClick={() => setWomenDropdown(false)} className="hover:bg-[#f8f8f8] hover:text-[#d4a574]" style={{ display: "block", padding: "14px 24px", color: "#1a1a1a", textDecoration: "none", fontSize: "13px", borderBottom: "1px solid #f5f5f5", letterSpacing: "0.05em", transition: "all 0.2s" }}>Hijabs</Link>
                  <Link href="/products/women/dresses" onClick={() => setWomenDropdown(false)} className="hover:bg-[#f8f8f8] hover:text-[#d4a574]" style={{ display: "block", padding: "14px 24px", color: "#1a1a1a", textDecoration: "none", fontSize: "13px", borderBottom: "1px solid #f5f5f5", letterSpacing: "0.05em", transition: "all 0.2s" }}>Dresses</Link>
                  <Link href="/products/women/handbags" onClick={() => setWomenDropdown(false)} className="hover:bg-[#f8f8f8] hover:text-[#d4a574]" style={{ display: "block", padding: "14px 24px", color: "#1a1a1a", textDecoration: "none", fontSize: "13px", borderBottom: "1px solid #f5f5f5", letterSpacing: "0.05em", transition: "all 0.2s" }}>Handbags</Link>
                  <Link href="/products/women/shoes" onClick={() => setWomenDropdown(false)} className="hover:bg-[#f8f8f8] hover:text-[#d4a574]" style={{ display: "block", padding: "14px 24px", color: "#1a1a1a", textDecoration: "none", fontSize: "13px", borderBottom: "1px solid #f5f5f5", letterSpacing: "0.05em", transition: "all 0.2s" }}>Shoes</Link>
                  <Link href="/products/women/jewelry" onClick={() => setWomenDropdown(false)} className="hover:bg-[#f8f8f8] hover:text-[#d4a574]" style={{ display: "block", padding: "14px 24px", color: "#1a1a1a", textDecoration: "none", fontSize: "13px", borderBottom: "1px solid #f5f5f5", letterSpacing: "0.05em", transition: "all 0.2s" }}>Jewelry</Link>
                  <Link href="/beauty" onClick={() => setWomenDropdown(false)} className="hover:bg-[#f8f8f8] hover:text-[#d4a574]" style={{ display: "block", padding: "14px 24px", color: "#1a1a1a", textDecoration: "none", fontSize: "13px", letterSpacing: "0.05em", transition: "all 0.2s" }}>Beauty</Link>
                </div>
              </>
            )}
          </div>

          {/* Men Dropdown */}
          <div 
            style={{ position: "relative" }}
          >
            <button
              onClick={() => setMenDropdown(!menDropdown)}
              style={{
                color: "#1a1a1a",
                textDecoration: "none",
                fontSize: "13px",
                fontWeight: "500",
                letterSpacing: "0.08em",
                display: "flex",
                alignItems: "center",
                gap: "4px",
                transition: "color 0.3s",
                background: "none",
                border: "none",
                cursor: "pointer"
              }}
              className="hover:text-[#d4a574]"
            >
              MEN
              <span style={{ fontSize: "9px" }}>▼</span>
            </button>
            
            {menDropdown && (
              <>
                <div
                  style={{
                    position: "fixed",
                    inset: 0,
                    zIndex: 1998
                  }}
                  onClick={() => setMenDropdown(false)}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    marginTop: "16px",
                    backgroundColor: "#ffffff",
                    border: "1px solid #e5e5e5",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
                    minWidth: "220px",
                    zIndex: 1999
                  }}
                >
                  <Link href="/products/men/suits" onClick={() => setMenDropdown(false)} className="hover:bg-[#f8f8f8] hover:text-[#d4a574]" style={{ display: "block", padding: "14px 24px", color: "#1a1a1a", textDecoration: "none", fontSize: "13px", borderBottom: "1px solid #f5f5f5", letterSpacing: "0.05em", transition: "all 0.2s" }}>Suits</Link>
                  <Link href="/products/men/blazers" onClick={() => setMenDropdown(false)} className="hover:bg-[#f8f8f8] hover:text-[#d4a574]" style={{ display: "block", padding: "14px 24px", color: "#1a1a1a", textDecoration: "none", fontSize: "13px", borderBottom: "1px solid #f5f5f5", letterSpacing: "0.05em", transition: "all 0.2s" }}>Blazers</Link>
                  <Link href="/products/men/shirts" onClick={() => setMenDropdown(false)} className="hover:bg-[#f8f8f8] hover:text-[#d4a574]" style={{ display: "block", padding: "14px 24px", color: "#1a1a1a", textDecoration: "none", fontSize: "13px", borderBottom: "1px solid #f5f5f5", letterSpacing: "0.05em", transition: "all 0.2s" }}>Shirts</Link>
                  <Link href="/products/men/shoes" onClick={() => setMenDropdown(false)} className="hover:bg-[#f8f8f8] hover:text-[#d4a574]" style={{ display: "block", padding: "14px 24px", color: "#1a1a1a", textDecoration: "none", fontSize: "13px", borderBottom: "1px solid #f5f5f5", letterSpacing: "0.05em", transition: "all 0.2s" }}>Shoes</Link>
                  <Link href="/products/men/watches" onClick={() => setMenDropdown(false)} className="hover:bg-[#f8f8f8] hover:text-[#d4a574]" style={{ display: "block", padding: "14px 24px", color: "#1a1a1a", textDecoration: "none", fontSize: "13px", borderBottom: "1px solid #f5f5f5", letterSpacing: "0.05em", transition: "all 0.2s" }}>Watches</Link>
                  <Link href="/products/men/accessories" onClick={() => setMenDropdown(false)} className="hover:bg-[#f8f8f8] hover:text-[#d4a574]" style={{ display: "block", padding: "14px 24px", color: "#1a1a1a", textDecoration: "none", fontSize: "13px", borderBottom: "1px solid #f5f5f5", letterSpacing: "0.05em", transition: "all 0.2s" }}>Accessories</Link>
                  <Link href="/products/men/fragrances" onClick={() => setMenDropdown(false)} className="hover:bg-[#f8f8f8] hover:text-[#d4a574]" style={{ display: "block", padding: "14px 24px", color: "#1a1a1a", textDecoration: "none", fontSize: "13px", letterSpacing: "0.05em", transition: "all 0.2s" }}>Fragrances</Link>
                </div>
              </>
            )}
          </div>

          <Link
            href="/products?category=sets"
            style={{
              color: "#1a1a1a",
              textDecoration: "none",
              fontSize: "13px",
              fontWeight: "500",
              letterSpacing: "0.08em",
              transition: "color 0.3s"
            }}
            className="hover:text-[#d4a574]"
          >
            SETS
          </Link>

          <Link
            href="/products?category=accessories"
            style={{
              color: "#1a1a1a",
              textDecoration: "none",
              fontSize: "13px",
              fontWeight: "500",
              letterSpacing: "0.08em",
              transition: "color 0.3s"
            }}
            className="hover:text-[#d4a574]"
          >
            ACCESSORIES
          </Link>

          <Link
            href="/products?sale=true"
            style={{
              color: "#d4a574",
              textDecoration: "none",
              fontSize: "13px",
              fontWeight: "600",
              letterSpacing: "0.08em",
              transition: "color 0.3s"
            }}
            className="hover:text-[#b8935f]"
          >
            SALE
          </Link>
        </div>
      </div>

      {/* Cart Modal */}
      {showCart && <CartModal onClose={() => setShowCart(false)} />}

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <>
          <div
            style={{
              position: "fixed",
              inset: 0,
              backgroundColor: "rgba(0,0,0,0.5)",
              zIndex: 1998
            }}
            onClick={() => setMenuOpen(false)}
          />
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              bottom: 0,
              width: "85%",
              maxWidth: "320px",
              backgroundColor: "#ffffff",
              zIndex: 1999,
              overflowY: "auto",
              boxShadow: "2px 0 10px rgba(0,0,0,0.1)"
            }}
          >
            {/* Mobile Menu Header */}
            <div style={{ padding: "20px", borderBottom: "1px solid #e5e5e5", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <h2 style={{ fontFamily: "serif", fontSize: "24px", color: "#1a1a1a", margin: 0 }}>FADRA.</h2>
              <button
                onClick={() => setMenuOpen(false)}
                style={{
                  background: "none",
                  border: "none",
                  fontSize: "28px",
                  cursor: "pointer",
                  color: "#1a1a1a",
                  padding: "0",
                  lineHeight: 1
                }}
              >
                ×
              </button>
            </div>

            {/* Mobile Menu Content */}
            <div style={{ padding: "20px" }}>
              {/* Women Section */}
              <div style={{ marginBottom: "20px" }}>
                <button
                  onClick={() => setMobileWomenOpen(!mobileWomenOpen)}
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    background: "none",
                    border: "none",
                    padding: "12px 0",
                    fontSize: "16px",
                    fontWeight: "500",
                    color: "#1a1a1a",
                    cursor: "pointer",
                    textAlign: "left"
                  }}
                >
                  WOMEN
                  <span style={{ fontSize: "12px" }}>{mobileWomenOpen ? "▲" : "▼"}</span>
                </button>
                {mobileWomenOpen && (
                  <div style={{ marginTop: "10px", paddingLeft: "15px" }}>
                    <Link href="/products/women/dresses" onClick={() => setMenuOpen(false)} style={{ display: "block", padding: "10px 0", color: "#666", textDecoration: "none", fontSize: "14px" }}>Dresses</Link>
                    <Link href="/products/women/hijabs" onClick={() => setMenuOpen(false)} style={{ display: "block", padding: "10px 0", color: "#666", textDecoration: "none", fontSize: "14px" }}>Hijabs</Link>
                    <Link href="/beauty" onClick={() => setMenuOpen(false)} style={{ display: "block", padding: "10px 0", color: "#666", textDecoration: "none", fontSize: "14px" }}>Beauty</Link>
                    <Link href="/products/women/handbags" onClick={() => setMenuOpen(false)} style={{ display: "block", padding: "10px 0", color: "#666", textDecoration: "none", fontSize: "14px" }}>Handbags</Link>
                    <Link href="/products/women/shoes" onClick={() => setMenuOpen(false)} style={{ display: "block", padding: "10px 0", color: "#666", textDecoration: "none", fontSize: "14px" }}>Shoes</Link>
                    <Link href="/products/women/jewelry" onClick={() => setMenuOpen(false)} style={{ display: "block", padding: "10px 0", color: "#666", textDecoration: "none", fontSize: "14px" }}>Jewelry</Link>
                    <Link href="/products/women/abayas" onClick={() => setMenuOpen(false)} style={{ display: "block", padding: "10px 0", color: "#666", textDecoration: "none", fontSize: "14px" }}>Abayas</Link>
                  </div>
                )}
              </div>

              {/* Men Section */}
              <div style={{ marginBottom: "20px" }}>
                <button
                  onClick={() => setMobileMenOpen(!mobileMenOpen)}
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    background: "none",
                    border: "none",
                    padding: "12px 0",
                    fontSize: "16px",
                    fontWeight: "500",
                    color: "#1a1a1a",
                    cursor: "pointer",
                    textAlign: "left"
                  }}
                >
                  MEN
                  <span style={{ fontSize: "12px" }}>{mobileMenOpen ? "▲" : "▼"}</span>
                </button>
                {mobileMenOpen && (
                  <div style={{ marginTop: "10px", paddingLeft: "15px" }}>
                    <Link href="/products/men/suits" onClick={() => setMenuOpen(false)} style={{ display: "block", padding: "10px 0", color: "#666", textDecoration: "none", fontSize: "14px" }}>Suits</Link>
                    <Link href="/products/men/shirts" onClick={() => setMenuOpen(false)} style={{ display: "block", padding: "10px 0", color: "#666", textDecoration: "none", fontSize: "14px" }}>Shirts</Link>
                    <Link href="/products/men/shoes" onClick={() => setMenuOpen(false)} style={{ display: "block", padding: "10px 0", color: "#666", textDecoration: "none", fontSize: "14px" }}>Shoes</Link>
                    <Link href="/products/men/watches" onClick={() => setMenuOpen(false)} style={{ display: "block", padding: "10px 0", color: "#666", textDecoration: "none", fontSize: "14px" }}>Watches</Link>
                    <Link href="/products/men/blazers" onClick={() => setMenuOpen(false)} style={{ display: "block", padding: "10px 0", color: "#666", textDecoration: "none", fontSize: "14px" }}>Blazers</Link>
                    <Link href="/products/men/accessories" onClick={() => setMenuOpen(false)} style={{ display: "block", padding: "10px 0", color: "#666", textDecoration: "none", fontSize: "14px" }}>Accessories</Link>
                    <Link href="/products/men/fragrances" onClick={() => setMenuOpen(false)} style={{ display: "block", padding: "10px 0", color: "#666", textDecoration: "none", fontSize: "14px" }}>Fragrances</Link>
                  </div>
                )}
              </div>

              {/* New Arrivals */}
              <Link
                href="/products?filter=new"
                onClick={() => setMenuOpen(false)}
                style={{
                  display: "block",
                  padding: "12px 0",
                  fontSize: "16px",
                  fontWeight: "500",
                  color: "#1a1a1a",
                  textDecoration: "none"
                }}
              >
                NEW ARRIVALS
              </Link>

              {/* Divider */}
              <div style={{ height: "1px", backgroundColor: "#e5e5e5", margin: "20px 0" }} />

              {/* Customer Care Links */}
              <div style={{ marginTop: "20px" }}>
                <h3 style={{ fontSize: "14px", fontWeight: "600", color: "#1a1a1a", marginBottom: "15px", textTransform: "uppercase", letterSpacing: "0.05em" }}>Customer Care</h3>
                <Link href="/contact" onClick={() => setMenuOpen(false)} style={{ display: "block", padding: "10px 0", color: "#666", textDecoration: "none", fontSize: "14px" }}>Contact Us</Link>
                <Link href="/shipping" onClick={() => setMenuOpen(false)} style={{ display: "block", padding: "10px 0", color: "#666", textDecoration: "none", fontSize: "14px" }}>Shipping Info</Link>
                <Link href="/returns" onClick={() => setMenuOpen(false)} style={{ display: "block", padding: "10px 0", color: "#666", textDecoration: "none", fontSize: "14px" }}>Returns & Exchanges</Link>
                <Link href="/faq" onClick={() => setMenuOpen(false)} style={{ display: "block", padding: "10px 0", color: "#666", textDecoration: "none", fontSize: "14px" }}>FAQ</Link>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Search Drawer */}
      {showSearch && (
        <>
          <div
            style={{
              position: "fixed",
              inset: 0,
              backgroundColor: "rgba(0,0,0,0.5)",
              zIndex: 2998,
              animation: "fadeIn 0.3s"
            }}
            onClick={() => setShowSearch(false)}
          />
          <div
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              bottom: 0,
              width: "100%",
              maxWidth: "500px",
              backgroundColor: "#ffffff",
              zIndex: 2999,
              overflowY: "auto",
              boxShadow: "-2px 0 20px rgba(0,0,0,0.15)",
              animation: "slideInRight 0.3s"
            }}
          >
            {/* Search Header */}
            <div style={{ padding: "24px", borderBottom: "1px solid #e5e5e5", display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#f8f8f8" }}>
              <h2 style={{ fontSize: "20px", fontWeight: "600", color: "#1a1a1a", margin: 0 }}>🔍 Search Products</h2>
              <button
                onClick={() => setShowSearch(false)}
                style={{
                  background: "none",
                  border: "none",
                  fontSize: "32px",
                  cursor: "pointer",
                  color: "#1a1a1a",
                  padding: "0",
                  lineHeight: 1
                }}
              >
                ×
              </button>
            </div>

            {/* Search Input */}
            <div style={{ padding: "20px" }}>
              <input
                type="text"
                placeholder="Search for products, categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                style={{
                  width: "100%",
                  padding: "14px 20px",
                  fontSize: "15px",
                  border: "2px solid #e5e5e5",
                  borderRadius: "8px",
                  outline: "none",
                  transition: "border-color 0.3s"
                }}
                onFocus={(e) => e.target.style.borderColor = "#d4a574"}
                onBlur={(e) => e.target.style.borderColor = "#e5e5e5"}
              />
            </div>

            {/* Recent Searches */}
            {!searchQuery && (
              <div style={{ padding: "0 20px 20px" }}>
                <h3 style={{ fontSize: "14px", fontWeight: "600", color: "#1a1a1a", marginBottom: "12px", letterSpacing: "0.05em" }}>RECENT SEARCHES</h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {["Hijabs", "Abayas", "Dresses", "Handbags", "Beauty"].map((term) => (
                    <button
                      key={term}
                      onClick={() => setSearchQuery(term)}
                      style={{
                        padding: "8px 16px",
                        backgroundColor: "#f8f8f8",
                        border: "1px solid #e5e5e5",
                        borderRadius: "20px",
                        fontSize: "13px",
                        color: "#666",
                        cursor: "pointer",
                        transition: "all 0.2s"
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#d4a574";
                        e.currentTarget.style.color = "#ffffff";
                        e.currentTarget.style.borderColor = "#d4a574";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "#f8f8f8";
                        e.currentTarget.style.color = "#666";
                        e.currentTarget.style.borderColor = "#e5e5e5";
                      }}
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quick Categories */}
            {!searchQuery && (
              <div style={{ padding: "0 20px 20px" }}>
                <h3 style={{ fontSize: "14px", fontWeight: "600", color: "#1a1a1a", marginBottom: "12px", letterSpacing: "0.05em" }}>SHOP BY CATEGORY</h3>
                <div style={{ display: "grid", gap: "8px" }}>
                  <Link href="/products/women/hijabs" onClick={() => setShowSearch(false)} className="hover:bg-[#f8f8f8]" style={{ padding: "12px 16px", border: "1px solid #e5e5e5", borderRadius: "8px", textDecoration: "none", color: "#1a1a1a", fontSize: "14px", display: "flex", justifyContent: "space-between", alignItems: "center", transition: "all 0.2s" }}>
                    <span>🧕 Hijabs</span>
                    <span style={{ fontSize: "12px", color: "#999" }}>→</span>
                  </Link>
                  <Link href="/products/women/abayas" onClick={() => setShowSearch(false)} className="hover:bg-[#f8f8f8]" style={{ padding: "12px 16px", border: "1px solid #e5e5e5", borderRadius: "8px", textDecoration: "none", color: "#1a1a1a", fontSize: "14px", display: "flex", justifyContent: "space-between", alignItems: "center", transition: "all 0.2s" }}>
                    <span>👗 Abayas</span>
                    <span style={{ fontSize: "12px", color: "#999" }}>→</span>
                  </Link>
                  <Link href="/products/women/dresses" onClick={() => setShowSearch(false)} className="hover:bg-[#f8f8f8]" style={{ padding: "12px 16px", border: "1px solid #e5e5e5", borderRadius: "8px", textDecoration: "none", color: "#1a1a1a", fontSize: "14px", display: "flex", justifyContent: "space-between", alignItems: "center", transition: "all 0.2s" }}>
                    <span>👔 Dresses</span>
                    <span style={{ fontSize: "12px", color: "#999" }}>→</span>
                  </Link>
                  <Link href="/products/women/handbags" onClick={() => setShowSearch(false)} className="hover:bg-[#f8f8f8]" style={{ padding: "12px 16px", border: "1px solid #e5e5e5", borderRadius: "8px", textDecoration: "none", color: "#1a1a1a", fontSize: "14px", display: "flex", justifyContent: "space-between", alignItems: "center", transition: "all 0.2s" }}>
                    <span>👜 Handbags</span>
                    <span style={{ fontSize: "12px", color: "#999" }}>→</span>
                  </Link>
                  <Link href="/beauty" onClick={() => setShowSearch(false)} className="hover:bg-[#f8f8f8]" style={{ padding: "12px 16px", border: "1px solid #e5e5e5", borderRadius: "8px", textDecoration: "none", color: "#1a1a1a", fontSize: "14px", display: "flex", justifyContent: "space-between", alignItems: "center", transition: "all 0.2s" }}>
                    <span>💄 Beauty</span>
                    <span style={{ fontSize: "12px", color: "#999" }}>→</span>
                  </Link>
                </div>
              </div>
            )}

            {/* Trending Products */}
            {!searchQuery && (
              <div style={{ padding: "0 20px 20px" }}>
                <h3 style={{ fontSize: "14px", fontWeight: "600", color: "#1a1a1a", marginBottom: "12px", letterSpacing: "0.05em" }}>🔥 TRENDING NOW</h3>
                <div style={{ display: "grid", gap: "12px" }}>
                  <div className="hover:bg-[#f8f8f8]" style={{ display: "flex", gap: "12px", padding: "12px", border: "1px solid #e5e5e5", borderRadius: "8px", cursor: "pointer", transition: "all 0.2s" }}>
                    <div style={{ width: "60px", height: "60px", backgroundColor: "#f0f0f0", borderRadius: "8px" }} />
                    <div style={{ flex: 1 }}>
                      <p style={{ fontSize: "14px", fontWeight: "500", color: "#1a1a1a", margin: "0 0 4px 0" }}>Premium Silk Hijab</p>
                      <p style={{ fontSize: "13px", color: "#d4a574", margin: 0, fontWeight: "600" }}>RM 89</p>
                    </div>
                  </div>
                  <div className="hover:bg-[#f8f8f8]" style={{ display: "flex", gap: "12px", padding: "12px", border: "1px solid #e5e5e5", borderRadius: "8px", cursor: "pointer", transition: "all 0.2s" }}>
                    <div style={{ width: "60px", height: "60px", backgroundColor: "#f0f0f0", borderRadius: "8px" }} />
                    <div style={{ flex: 1 }}>
                      <p style={{ fontSize: "14px", fontWeight: "500", color: "#1a1a1a", margin: "0 0 4px 0" }}>Elegant Abaya</p>
                      <p style={{ fontSize: "13px", color: "#d4a574", margin: 0, fontWeight: "600" }}>RM 299</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Search Results */}
            {searchQuery && (
              <div style={{ padding: "0 20px 20px" }}>
                <h3 style={{ fontSize: "14px", fontWeight: "600", color: "#1a1a1a", marginBottom: "12px", letterSpacing: "0.05em" }}>SEARCH RESULTS FOR "{searchQuery}"</h3>
                <p style={{ fontSize: "13px", color: "#666", padding: "20px", textAlign: "center", backgroundColor: "#f8f8f8", borderRadius: "8px" }}>
                  Start typing to see instant results...
                </p>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
}

"use client";

import { useState } from 'react';

export default function HomePage() {
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [selectedReview, setSelectedReview] = useState<any>(null);
  const [subscribeEmail, setSubscribeEmail] = useState('');
  const [subscribeSuccess, setSubscribeSuccess] = useState(false);

  const testimonials = [
    {
      id: 1,
      stars: 5,
      shortReview: "The hijab collection is absolutely divine. The silk feels so luxurious, unmatched and the packaging felt so luxurious.",
      fullReview: "I recently purchased three silk hijabs from FADRA's collection, and I am absolutely blown away by the quality. The silk is incredibly soft and drapes beautifully. The color stays vibrant even after washing. The packaging was stunning - it felt like opening a luxury gift. The attention to detail in every aspect, from the material to the presentation, shows how much care goes into each piece. I've received so many compliments! This is now my go-to brand for hijabs. Highly recommend to anyone looking for premium modest fashion.",
      name: "Aasim K.",
      location: "Kuala Lumpur",
      verified: true,
      purchaseDate: "January 2026",
      productName: "Silk Hijab - Emerald",
      productSlug: "silk-hijab-emerald",
      productImage: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=400&fit=crop"
    },
    {
      id: 2,
      stars: 5,
      shortReview: "Found my perfect blazer here. The tailoring is exceptional and leather detailing is a stunning touch.",
      fullReview: "As someone who values quality tailoring, I was thrilled to discover FADRA's men's collection. The navy blazer I purchased fits like it was custom-made for me. The fabric is premium wool blend that drapes perfectly, and the subtle leather detailing on the buttons adds a luxe touch. What impressed me most was the attention to construction - the stitching is impeccable, the lining is smooth, and the shoulders sit just right. I've worn it to several business meetings and formal events, and it never fails to make me feel confident. Worth every ringgit. This is investment dressing at its finest.",
      name: "James H.",
      location: "Penang, Malaysia",
      verified: true,
      purchaseDate: "December 2025",
      productName: "Navy Blazer",
      productSlug: "navy-blazer",
      productImage: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=400&fit=crop"
    },
    {
      id: 3,
      stars: 5,
      shortReview: "Their lip glosses are my new obsession. The rose gold packaging alone is fire, but the formula is truly luxurious.",
      fullReview: "I'm a beauty enthusiast with a collection that spans dozens of brands, and FADRA's lip gloss has earned a permanent spot in my everyday bag. The formula is non-sticky yet incredibly pigmented, and it lasts for hours without reapplication. But let's talk about that packaging - the rose gold tube is absolutely gorgeous and feels substantial in your hand. It's the kind of product you're proud to pull out in public. The shade range is curated perfectly, and the rose tint I chose complements every look. Plus, knowing it's enriched with nourishing oils means I'm treating my lips while looking fabulous. This is luxury beauty done right.",
      name: "Stella L.",
      location: "Johor, Malaysia",
      verified: true,
      purchaseDate: "January 2026",
      productName: "Rose Lip Gloss",
      productSlug: "rose-lip-gloss",
      productImage: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=400&fit=crop"
    }
  ];

  const openReviewModal = (review: any) => {
    setSelectedReview(review);
    setShowReviewModal(true);
  };

  const closeReviewModal = () => {
    setShowReviewModal(false);
    setSelectedReview(null);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!subscribeEmail || !emailRegex.test(subscribeEmail)) {
      alert('Please enter a valid email address');
      return;
    }

    // Show success message
    setSubscribeSuccess(true);
    setSubscribeEmail('');
    
    // Optionally redirect to welcome page after 3 seconds
    // setTimeout(() => {
    //   window.location.href = '/welcome';
    // }, 3000);
  };

  return (
    <main className="relative">
      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-neutral-100 to-neutral-50">
        {/* Background Image with Animation */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: "url('/hero-models.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            animation: "slowZoom 20s ease-in-out infinite alternate"
          }}
        />
        
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        
        {/* Content Container */}
        <div className="relative h-full flex items-center px-6 md:px-12 lg:px-20 xl:px-28 z-20">
          <div className="max-w-2xl lg:max-w-3xl">
            {/* Collection Tag */}
            <p 
              className="text-xs md:text-sm tracking-[0.3em] mb-6 animate-fadeIn"
              style={{ 
                color: "#d4a574",
                fontWeight: 400
              }}
            >
              SPRING / SUMMER COLLECTION
            </p>

            {/* Main Heading */}
            <h1 
              className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl mb-4 animate-fadeIn"
              style={{ 
                fontFamily: "Georgia, 'Times New Roman', serif", 
                color: "#ffffff",
                fontWeight: 400,
                lineHeight: 1,
                animationDelay: "0.2s"
              }}
            >
              Redefine
            </h1>
            
            <h1 
              className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl mb-8 animate-fadeIn"
              style={{ 
                fontFamily: "Georgia, 'Times New Roman', serif", 
                color: "#d4a574",
                fontStyle: "italic",
                fontWeight: 400,
                lineHeight: 1,
                animationDelay: "0.4s"
              }}
            >
              Elegance
            </h1>

            {/* Description */}
            <p 
              className="text-base md:text-lg lg:text-xl mb-10 leading-relaxed max-w-xl animate-fadeIn"
              style={{ 
                color: "#f5f5f5", 
                fontWeight: 300,
                lineHeight: 1.8,
                animationDelay: "0.6s"
              }}
            >
              Discover luxury modest fashion for men and women.<br className="hidden sm:block" />
              From everyday sophistication to statement looks.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fadeIn" style={{ animationDelay: "0.8s" }}>
              <a
                href="/women"
                className="group px-10 py-4 text-sm tracking-[0.2em] font-semibold transition-all duration-500 text-center relative overflow-hidden"
                style={{ 
                  backgroundColor: "#d4a574",
                  color: "#1a1a1a"
                }}
              >
                <span className="relative z-10">SHOP WOMEN</span>
                <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" style={{ opacity: 0.2 }} />
              </a>
              <a
                href="/men"
                className="group px-10 py-4 text-sm tracking-[0.2em] font-medium transition-all duration-500 text-center relative overflow-hidden"
                style={{ 
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  color: "#ffffff",
                  border: "2px solid rgba(255, 255, 255, 0.8)",
                  backdropFilter: "blur(10px)"
                }}
              >
                <span className="relative z-10">SHOP MEN</span>
                <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" style={{ opacity: 0.1 }} />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/70 rounded-full" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slowZoom {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.1);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
          opacity: 0;
        }
      `}</style>

      {/* Features Section */}
      <section className="py-16 px-8" style={{ backgroundColor: "#f8f8f8" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Free Shipping */}
            <a href="/shipping-info" className="text-center hover:opacity-80 transition-opacity cursor-pointer">
              <div className="mb-6 flex justify-center">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#d4a574" strokeWidth="1.5">
                  <rect x="1" y="3" width="15" height="13"></rect>
                  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                  <circle cx="5.5" cy="18.5" r="2.5"></circle>
                  <circle cx="18.5" cy="18.5" r="2.5"></circle>
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3" style={{ color: "#1a1a1a", fontFamily: "serif" }}>
                Free Shipping
              </h3>
              <p className="text-sm" style={{ color: "#666", lineHeight: 1.6 }}>
                Complimentary delivery on orders over $250
              </p>
            </a>

            {/* Authenticity */}
            <a href="/authenticity" className="text-center hover:opacity-80 transition-opacity cursor-pointer">
              <div className="mb-6 flex justify-center">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#d4a574" strokeWidth="1.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3" style={{ color: "#1a1a1a", fontFamily: "serif" }}>
                Authenticity
              </h3>
              <p className="text-sm" style={{ color: "#666", lineHeight: 1.6 }}>
                Every item verified & guaranteed authentic
              </p>
            </a>

            {/* Easy Returns */}
            <a href="/returns-exchanges" className="text-center hover:opacity-80 transition-opacity cursor-pointer">
              <div className="mb-6 flex justify-center">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#d4a574" strokeWidth="1.5">
                  <polyline points="1 4 1 10 7 10"></polyline>
                  <polyline points="23 20 23 14 17 14"></polyline>
                  <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3" style={{ color: "#1a1a1a", fontFamily: "serif" }}>
                Easy Returns
              </h3>
              <p className="text-sm" style={{ color: "#666", lineHeight: 1.6 }}>
                30-day hassle-free return policy
              </p>
            </a>

            {/* Premium Quality */}
            <a href="/quality" className="text-center hover:opacity-80 transition-opacity cursor-pointer">
              <div className="mb-6 flex justify-center">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#d4a574" strokeWidth="1.5">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3" style={{ color: "#1a1a1a", fontFamily: "serif" }}>
                Premium Quality
              </h3>
              <p className="text-sm" style={{ color: "#666", lineHeight: 1.6 }}>
                Handpicked luxury from world-class designers
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Shop by Category Section */}
      <section className="py-20 px-8" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <p className="text-xs tracking-widest mb-4" style={{ color: "#d4a574", letterSpacing: "0.3em" }}>
              EXPLORE
            </p>
            <h2 className="text-5xl md:text-6xl" style={{ color: "#1a1a1a", fontFamily: "serif", fontWeight: 400 }}>
              Shop by Category
            </h2>
          </div>

          {/* Category Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {/* Abayas - Large Featured */}
            <a 
              href="/products/women/abayas"
              className="relative group overflow-hidden col-span-1 md:col-span-2 lg:row-span-2 h-[400px] md:h-[500px]"
            >
              <img 
                src="https://images.unsplash.com/photo-1583391733981-5242f8c1b6ce?w=800&h=1000&fit=crop" 
                alt="Abayas"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white z-10">
                <h3 className="text-3xl font-medium mb-2" style={{ fontFamily: "serif" }}>
                  Abayas
                </h3>
                <p className="text-sm opacity-90">Timeless Elegance</p>
              </div>
            </a>

            {/* Suits - Tall Featured */}
            <a 
              href="/products/men/suits"
              className="relative group overflow-hidden col-span-1 md:col-span-1 lg:row-span-2 h-[400px] md:h-[500px]"
            >
              <img 
                src="https://images.unsplash.com/photo-1507680434567-5739c80be1ac?w=600&h=1000&fit=crop" 
                alt="Suits"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white z-10">
                <h3 className="text-3xl font-medium mb-2" style={{ fontFamily: "serif" }}>
                  Suits
                </h3>
                <p className="text-sm opacity-90">Refined Tailoring</p>
              </div>
            </a>

            {/* Dresses */}
            <a 
              href="/products/women/dresses"
              className="relative group overflow-hidden col-span-1 h-[240px]"
            >
              <img 
                src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop" 
                alt="Dresses"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center z-10">
                  <h3 className="text-2xl font-medium" style={{ fontFamily: "serif", color: "#ffffff", textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}>
                    Dresses
                  </h3>
                </div>
              </div>
            </a>

            {/* Handbags */}
            <a 
              href="/products/women/handbags"
              className="relative group overflow-hidden col-span-1 h-[240px]"
            >
              <img 
                src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop" 
                alt="Handbags"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center z-10">
                  <h3 className="text-2xl font-medium" style={{ fontFamily: "serif", color: "#ffffff", textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}>
                    Handbags
                  </h3>
                </div>
              </div>
            </a>

            {/* Fragrances */}
            <a 
              href="/products/men/fragrances"
              className="relative group overflow-hidden col-span-1 h-[240px]"
            >
              <img 
                src="https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop" 
                alt="Fragrances"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center z-10">
                  <h3 className="text-2xl font-medium" style={{ fontFamily: "serif", color: "#ffffff", textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}>
                    Fragrances
                  </h3>
                </div>
              </div>
            </a>

            {/* Hijabs */}
            <a 
              href="/products/women/hijabs"
              className="relative group overflow-hidden col-span-1 h-[240px]"
            >
              <img 
                src="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=400&fit=crop" 
                alt="Hijabs"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-black/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center z-10">
                  <h3 className="text-2xl font-medium" style={{ fontFamily: "serif", color: "#ffffff", textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}>
                    Hijabs
                  </h3>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Trending Now Section */}
      <section className="py-20 px-8" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex justify-between items-end mb-12">
            <div>
              <p className="text-xs tracking-widest mb-3" style={{ color: "#d4a574", letterSpacing: "0.3em" }}>
                CURATED FOR YOU
              </p>
              <h2 className="text-5xl md:text-6xl" style={{ color: "#1a1a1a", fontFamily: "serif", fontWeight: 400 }}>
                Trending Now
              </h2>
            </div>
            <a 
              href="/trending"
              className="text-sm tracking-wider hover:opacity-70 transition-opacity"
              style={{ color: "#d4a574", letterSpacing: "0.15em" }}
            >
              VIEW ALL →
            </a>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Product 1 - Nude Leather Tote */}
            <a href="/product/nude-leather-tote" className="group relative">
              <div className="relative bg-white mb-4 overflow-hidden aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&h=600&fit=crop" 
                  alt="Nude Leather Tote"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 text-white text-xs px-3 py-1 z-10" style={{ backgroundColor: '#ff6b35', letterSpacing: "0.1em" }}>
                  NEW
                </span>
                {/* Hover Actions */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  </button>
                  <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                  </button>
                </div>
              </div>
              <p className="text-xs mb-2" style={{ color: "#999", letterSpacing: "0.1em" }}>WOMEN</p>
              <h3 className="text-base font-medium mb-2" style={{ color: "#1a1a1a" }}>Nude Leather Tote</h3>
              <p className="text-lg font-medium" style={{ color: "#1a1a1a" }}>RM 580</p>
            </a>

            {/* Product 2 - Chronograph Watch */}
            <a href="/product/chronograph-watch" className="group relative">
              <div className="relative bg-white mb-4 overflow-hidden aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop" 
                  alt="Chronograph Watch"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 text-white text-xs px-3 py-1 z-10" style={{ backgroundColor: '#d4a574', letterSpacing: "0.1em" }}>
                  BESTSELLER
                </span>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  </button>
                  <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                  </button>
                </div>
              </div>
              <p className="text-xs mb-2" style={{ color: "#999", letterSpacing: "0.1em" }}>MEN</p>
              <h3 className="text-base font-medium mb-2" style={{ color: "#1a1a1a" }}>Chronograph Watch</h3>
              <p className="text-lg font-medium" style={{ color: "#1a1a1a" }}>RM 580</p>
            </a>

            {/* Product 3 - Silk Evening Dress */}
            <a href="/product/silk-evening-dress" className="group relative">
              <div className="relative bg-white mb-4 overflow-hidden aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=600&fit=crop" 
                  alt="Silk Evening Dress"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 text-white text-xs px-3 py-1 z-10" style={{ backgroundColor: '#2a9d8f', letterSpacing: "0.1em" }}>
                  FEATURED
                </span>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  </button>
                  <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                  </button>
                </div>
              </div>
              <p className="text-xs mb-2" style={{ color: "#999", letterSpacing: "0.1em" }}>WOMEN</p>
              <h3 className="text-base font-medium mb-2" style={{ color: "#1a1a1a" }}>Silk Evening Dress</h3>
              <p className="text-lg font-medium" style={{ color: "#1a1a1a" }}>RM 380</p>
            </a>

            {/* Product 4 - Italian Oxford Shoes */}
            <a href="/product/italian-oxford-shoes" className="group relative">
              <div className="relative bg-white mb-4 overflow-hidden aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=600&h=600&fit=crop" 
                  alt="Italian Oxford Shoes"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 text-white text-xs px-3 py-1 z-10" style={{ backgroundColor: '#ff6b35', letterSpacing: "0.1em" }}>
                  NEW
                </span>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  </button>
                  <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                  </button>
                </div>
              </div>
              <p className="text-xs mb-2" style={{ color: "#999", letterSpacing: "0.1em" }}>MEN</p>
              <h3 className="text-base font-medium mb-2" style={{ color: "#1a1a1a" }}>Italian Oxford Shoes</h3>
              <p className="text-lg font-medium" style={{ color: "#1a1a1a" }}>RM 280</p>
            </a>

            {/* Product 5 - Aviator Sunglasses */}
            <a href="/product/aviator-sunglasses" className="group relative">
              <div className="relative bg-white mb-4 overflow-hidden aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&h=600&fit=crop" 
                  alt="Aviator Sunglasses"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 text-white text-xs px-3 py-1 z-10" style={{ backgroundColor: '#2a9d8f', letterSpacing: "0.1em" }}>
                  FEATURED
                </span>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  </button>
                  <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                  </button>
                </div>
              </div>
              <p className="text-xs mb-2" style={{ color: "#999", letterSpacing: "0.1em" }}>UNISEX</p>
              <h3 className="text-base font-medium mb-2" style={{ color: "#1a1a1a" }}>Aviator Sunglasses</h3>
              <p className="text-lg font-medium" style={{ color: "#1a1a1a" }}>RM 180</p>
            </a>

            {/* Product 6 - Silk Hijab Emerald */}
            <a href="/product/silk-hijab-emerald" className="group relative">
              <div className="relative bg-white mb-4 overflow-hidden aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&h=600&fit=crop" 
                  alt="Silk Hijab Emerald"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 text-white text-xs px-3 py-1 z-10" style={{ backgroundColor: '#d4a574', letterSpacing: "0.1em" }}>
                  BESTSELLER
                </span>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  </button>
                  <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                  </button>
                </div>
              </div>
              <p className="text-xs mb-2" style={{ color: "#999", letterSpacing: "0.1em" }}>WOMEN</p>
              <h3 className="text-base font-medium mb-2" style={{ color: "#1a1a1a" }}>Silk Hijab - Emerald</h3>
              <p className="text-lg font-medium" style={{ color: "#1a1a1a" }}>RM 78</p>
            </a>

            {/* Product 7 - Rose Lip Gloss */}
            <a href="/product/rose-lip-gloss" className="group relative">
              <div className="relative bg-white mb-4 overflow-hidden aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=600&h=600&fit=crop" 
                  alt="Rose Lip Gloss"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 text-white text-xs px-3 py-1 z-10" style={{ backgroundColor: '#d4a574', letterSpacing: "0.1em" }}>
                  BESTSELLER
                </span>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  </button>
                  <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                  </button>
                </div>
              </div>
              <p className="text-xs mb-2" style={{ color: "#999", letterSpacing: "0.1em" }}>BEAUTY</p>
              <h3 className="text-base font-medium mb-2" style={{ color: "#1a1a1a" }}>Rose Lip Gloss</h3>
              <p className="text-lg font-medium" style={{ color: "#1a1a1a" }}>RM 25</p>
            </a>

            {/* Product 8 - Navy Blazer */}
            <a href="/product/navy-blazer" className="group relative">
              <div className="relative bg-white mb-4 overflow-hidden aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=600&fit=crop" 
                  alt="Navy Blazer"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 text-white text-xs px-3 py-1 z-10" style={{ backgroundColor: '#ff6b35', letterSpacing: "0.1em" }}>
                  NEW
                </span>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  </button>
                  <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                  </button>
                </div>
              </div>
              <p className="text-xs mb-2" style={{ color: "#999", letterSpacing: "0.1em" }}>MEN</p>
              <h3 className="text-base font-medium mb-2" style={{ color: "#1a1a1a" }}>Navy Blazer</h3>
              <p className="text-lg font-medium" style={{ color: "#1a1a1a" }}>RM 480</p>
            </a>
          </div>
        </div>
      </section>

      {/* Gender Collections Banner */}
      <section className="py-20 px-8" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Women's Collection */}
            <div 
              className="relative overflow-hidden h-[500px] group"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&h=1000&fit=crop')",
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-70" />
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white z-10">
                <p className="text-xs tracking-widest mb-3" style={{ letterSpacing: "0.3em" }}>
                  FOR HER
                </p>
                <h2 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: "serif", fontWeight: 400 }}>
                  Women's Collection
                </h2>
                <p className="text-sm mb-6 leading-relaxed max-w-md opacity-90">
                  From elegant dresses and silk hijabs to statement accessories and glosses — discover fashion that celebrates every woman.
                </p>
                <a
                  href="/products?category=women"
                  className="inline-block px-8 py-3 text-xs tracking-widest hover:bg-opacity-90 transition-all"
                  style={{ backgroundColor: "#d4a574", color: "#1a1a1a", letterSpacing: "0.2em", fontWeight: 600 }}
                >
                  EXPLORE WOMEN'S
                </a>
              </div>
            </div>

            {/* Men's Collection */}
            <div 
              className="relative overflow-hidden h-[500px] group"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1488161628813-04466f872be2?w=800&h=1000&fit=crop')",
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white z-10">
                <p className="text-xs tracking-widest mb-3" style={{ letterSpacing: "0.3em" }}>
                  FOR HIM
                </p>
                <h2 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: "serif", fontWeight: 400 }}>
                  Men's Collection
                </h2>
                <p className="text-sm mb-6 leading-relaxed max-w-md opacity-90">
                  Impeccably tailored suits, premium leather shoes, and refined accessories for the modern gentleman.
                </p>
                <a
                  href="/products?category=men"
                  className="inline-block px-8 py-3 text-xs tracking-widest border-2 hover:bg-white hover:text-black transition-all"
                  style={{ borderColor: "#ffffff", color: "#ffffff", letterSpacing: "0.2em", fontWeight: 500 }}
                >
                  EXPLORE MEN'S
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-8" style={{ backgroundColor: "#1a1a1a" }}>
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-xs tracking-widest mb-4" style={{ color: "#d4a574", letterSpacing: "0.3em" }}>
              TESTIMONIALS
            </p>
            <h2 className="text-5xl md:text-6xl text-white" style={{ fontFamily: "serif", fontWeight: 400 }}>
              What Our Clients Say
            </h2>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <button
                key={testimonial.id}
                onClick={() => openReviewModal(testimonial)}
                className="border p-8 text-left hover:border-opacity-50 transition-all cursor-pointer"
                style={{ borderColor: "#333", backgroundColor: "rgba(255,255,255,0.03)" }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <span key={i} style={{ color: "#d4a574", fontSize: "18px" }}>★</span>
                  ))}
                </div>

                {/* Short Review */}
                <p className="text-white text-sm mb-6 leading-relaxed opacity-90">
                  "{testimonial.shortReview}"
                </p>

                {/* Customer Info */}
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <p className="text-white font-medium">{testimonial.name}</p>
                      {testimonial.verified && (
                        <span 
                          className="text-xs px-2 py-0.5 rounded"
                          style={{ backgroundColor: "#2a9d8f", color: "#ffffff" }}
                        >
                          ✓ Verified
                        </span>
                      )}
                    </div>
                    <p className="text-xs mb-2" style={{ color: "#999" }}>{testimonial.location}</p>
                    <p className="text-xs" style={{ color: "#666" }}>Purchased {testimonial.purchaseDate}</p>
                  </div>
                  
                  {/* Product Thumbnail */}
                  <div 
                    className="w-16 h-16 rounded overflow-hidden flex-shrink-0"
                    style={{ backgroundColor: "#f8f8f8" }}
                  >
                    <img 
                      src={testimonial.productImage} 
                      alt={testimonial.productName}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Read More Indicator */}
                <p className="text-xs mt-4" style={{ color: "#d4a574" }}>
                  Click to read full review →
                </p>
              </button>
            ))}
          </div>

          {/* View All Reviews Link */}
          <div className="text-center mt-12">
            <a 
              href="/reviews"
              className="inline-block text-sm tracking-wider hover:opacity-70 transition-opacity"
              style={{ color: "#d4a574", letterSpacing: "0.15em" }}
            >
              VIEW ALL REVIEWS →
            </a>
          </div>
        </div>
      </section>

      {/* Review Modal */}
      {showReviewModal && selectedReview && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0,0,0,0.8)" }}
          onClick={closeReviewModal}
        >
          <div 
            className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 md:p-12"
            style={{ backgroundColor: "#ffffff" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeReviewModal}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center hover:opacity-70 transition-opacity"
              style={{ color: "#666" }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(selectedReview.stars)].map((_, i) => (
                <span key={i} style={{ color: "#d4a574", fontSize: "24px" }}>★</span>
              ))}
            </div>

            {/* Customer Info */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-2xl font-medium" style={{ fontFamily: "serif", color: "#1a1a1a" }}>
                  {selectedReview.name}
                </h3>
                {selectedReview.verified && (
                  <span 
                    className="text-xs px-3 py-1 rounded"
                    style={{ backgroundColor: "#2a9d8f", color: "#ffffff" }}
                  >
                    ✓ Verified Buyer
                  </span>
                )}
              </div>
              <p className="text-sm mb-1" style={{ color: "#666" }}>{selectedReview.location}</p>
              <p className="text-sm" style={{ color: "#999" }}>Purchased {selectedReview.purchaseDate}</p>
            </div>

            {/* Product Info */}
            <div className="flex items-center gap-4 mb-8 p-4" style={{ backgroundColor: "#f8f8f8" }}>
              <div 
                className="w-20 h-20 rounded overflow-hidden flex-shrink-0"
              >
                <img 
                  src={selectedReview.productImage} 
                  alt={selectedReview.productName}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-xs mb-1" style={{ color: "#999", letterSpacing: "0.1em" }}>
                  REVIEWED PRODUCT
                </p>
                <p className="text-base font-medium" style={{ color: "#1a1a1a" }}>
                  {selectedReview.productName}
                </p>
              </div>
            </div>

            {/* Full Review */}
            <div className="mb-8">
              <h4 className="text-sm font-medium mb-4" style={{ color: "#1a1a1a", letterSpacing: "0.05em" }}>
                FULL REVIEW
              </h4>
              <p className="text-base leading-relaxed" style={{ color: "#666" }}>
                {selectedReview.fullReview}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`/product/${selectedReview.productSlug}`}
                className="flex-1 py-4 text-center text-white text-sm font-medium tracking-wider hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "#1a1a1a", letterSpacing: "0.1em" }}
              >
                VIEW PRODUCT REVIEWED
              </a>
              <a
                href="/reviews"
                className="flex-1 py-4 text-center border-2 text-sm font-medium tracking-wider hover:bg-gray-50 transition-colors"
                style={{ borderColor: "#1a1a1a", color: "#1a1a1a", letterSpacing: "0.1em" }}
              >
                VIEW ALL REVIEWS
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Newsletter Section */}
      <section className="py-20 px-8" style={{ backgroundColor: "#f8f8f8" }}>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs tracking-widest mb-4" style={{ color: "#d4a574", letterSpacing: "0.3em" }}>
            STAY CONNECTED
          </p>
          <h2 className="text-4xl md:text-5xl mb-6" style={{ color: "#1a1a1a", fontFamily: "serif", fontWeight: 400 }}>
            Join the Inner Circle
          </h2>
          <p className="text-base mb-8 leading-relaxed" style={{ color: "#666" }}>
            Be the first to know about new collections, exclusive offers, and curated fashion inspiration delivered to your inbox.
          </p>

          {!subscribeSuccess ? (
            <>
              <form 
                onSubmit={handleSubscribe}
                className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto mb-6"
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={subscribeEmail}
                  onChange={(e) => setSubscribeEmail(e.target.value)}
                  required
                  className="flex-1 px-6 py-4 border text-sm"
                  style={{ borderColor: "#ddd", backgroundColor: "#ffffff", outline: "none" }}
                />
                <button
                  type="submit"
                  className="px-8 py-4 text-xs tracking-widest hover:opacity-90 transition-opacity whitespace-nowrap"
                  style={{ backgroundColor: "#1a1a1a", color: "#ffffff", letterSpacing: "0.2em", fontWeight: 600 }}
                >
                  SUBSCRIBE →
                </button>
              </form>

              {/* Trust Badges */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-xs" style={{ color: "#999" }}>
                <div className="flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2a9d8f" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>No spam, ever</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2a9d8f" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                  <span>Your data is protected</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#d4a574" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  <span>Join 10,000+ subscribers</span>
                </div>
              </div>

              {/* First Order Discount */}
              <div className="mt-8 p-6 border-2" style={{ borderColor: "#d4a574", backgroundColor: "#fef9f3" }}>
                <p className="text-sm font-medium mb-2" style={{ color: "#1a1a1a" }}>
                  ✨ Welcome Gift
                </p>
                <p className="text-base" style={{ color: "#666" }}>
                  Join today & enjoy <strong style={{ color: "#d4a574" }}>10% off</strong> your first purchase.
                </p>
              </div>
            </>
          ) : (
            <div className="py-12 px-8" style={{ backgroundColor: "#ffffff", border: "2px solid #2a9d8f" }}>
              <div className="mb-4">
                <svg className="mx-auto" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#2a9d8f" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h3 className="text-2xl font-medium mb-4" style={{ fontFamily: "serif", color: "#1a1a1a" }}>
                You're in ✨
              </h3>
              <p className="text-lg mb-3" style={{ color: "#2a9d8f", fontWeight: 500 }}>
                Welcome to the FADRA Inner Circle
              </p>
              <p className="text-base mb-6" style={{ color: "#666" }}>
                You'll receive exclusive collections, private offers, and styling inspiration.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="/women"
                  className="px-8 py-3 text-sm tracking-wider hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: "#1a1a1a", color: "#ffffff", letterSpacing: "0.1em" }}
                >
                  SHOP WOMEN
                </a>
                <a
                  href="/men"
                  className="px-8 py-3 text-sm tracking-wider border-2 hover:bg-gray-50 transition-colors"
                  style={{ borderColor: "#1a1a1a", color: "#1a1a1a", letterSpacing: "0.1em" }}
                >
                  SHOP MEN
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: "#1a1a1a" }}>
        <div className="max-w-7xl mx-auto px-8 md:px-12 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand Info */}
            <div>
              <h3 className="text-2xl mb-4" style={{ fontFamily: "serif", color: "#ffffff" }}>
                FADRA.
              </h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "#999" }}>
                Curating the finest in luxury fashion for the modern world. Elegance without compromise.
              </p>
              <div className="flex gap-4">
                <a href="#" className="hover:opacity-70 transition-opacity">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#999">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="hover:opacity-70 transition-opacity">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#999">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="hover:opacity-70 transition-opacity">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#999">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Women */}
            <div>
              <h4 className="font-medium mb-6 text-sm tracking-widest text-white" style={{ letterSpacing: "0.15em" }}>
                WOMEN
              </h4>
              <ul className="space-y-3 text-sm" style={{ color: "#999" }}>
                <li><a href="/products/women/dresses" className="hover:text-white transition-colors">Dresses</a></li>
                <li><a href="/products/women/hijabs" className="hover:text-white transition-colors">Hijabs</a></li>
                <li><a href="/products/women/lipgloss" className="hover:text-white transition-colors">Lip Gloss</a></li>
                <li><a href="/products/women/handbags" className="hover:text-white transition-colors">Handbags</a></li>
                <li><a href="/products/women/shoes" className="hover:text-white transition-colors">Shoes</a></li>
                <li><a href="/products/women/jewelry" className="hover:text-white transition-colors">Jewelry</a></li>
                <li><a href="/products/women/abayas" className="hover:text-white transition-colors">Abayas</a></li>
              </ul>
            </div>

            {/* Men */}
            <div>
              <h4 className="font-medium mb-6 text-sm tracking-widest text-white" style={{ letterSpacing: "0.15em" }}>
                MEN
              </h4>
              <ul className="space-y-3 text-sm" style={{ color: "#999" }}>
                <li><a href="/products/men/suits" className="hover:text-white transition-colors">Suits</a></li>
                <li><a href="/products/men/shirts" className="hover:text-white transition-colors">Shirts</a></li>
                <li><a href="/products/men/shoes" className="hover:text-white transition-colors">Shoes</a></li>
                <li><a href="/products/men/watches" className="hover:text-white transition-colors">Watches</a></li>
                <li><a href="/products/men/blazers" className="hover:text-white transition-colors">Blazers</a></li>
                <li><a href="/products/men/fragrances" className="hover:text-white transition-colors">Fragrances</a></li>
                <li><a href="/products/men/accessories" className="hover:text-white transition-colors">Accessories</a></li>
              </ul>
            </div>

            {/* Customer Care */}
            <div>
              <h4 className="font-medium mb-6 text-sm tracking-widest text-white" style={{ letterSpacing: "0.15em" }}>
                CUSTOMER CARE
              </h4>
              <ul className="space-y-3 text-sm" style={{ color: "#999" }}>
                <li><a href="/contact" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="/shipping" className="hover:text-white transition-colors">Shipping Info</a></li>
                <li><a href="/returns" className="hover:text-white transition-colors">Returns & Exchanges</a></li>
                <li><a href="/size-guide" className="hover:text-white transition-colors">Size Guide</a></li>
                <li><a href="/faq" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderColor: "#333" }}>
            <p className="text-sm" style={{ color: "#666" }}>
              © 2026 FADRA. All rights reserved.
            </p>
            <div className="flex gap-4 items-center">
              <span className="text-xs" style={{ color: "#666" }}>Visa</span>
              <span className="text-xs" style={{ color: "#666" }}>Mastercard</span>
              <span className="text-xs" style={{ color: "#666" }}>Apple Pay</span>
              <span className="text-xs" style={{ color: "#666" }}>PayPal</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}


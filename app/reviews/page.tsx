'use client';

import { useState } from 'react';

const allReviews = [
  {
    id: 1,
    stars: 5,
    review: "I recently purchased three silk hijabs from FADRA's collection, and I am absolutely blown away by the quality. The silk is incredibly soft and drapes beautifully. The color stays vibrant even after washing. The packaging was stunning - it felt like opening a luxury gift. The attention to detail in every aspect, from the material to the presentation, shows how much care goes into each piece. I've received so many compliments! This is now my go-to brand for hijabs.",
    name: "Aasim K.",
    location: "Kuala Lumpur",
    verified: true,
    purchaseDate: "January 2026",
    productName: "Silk Hijab - Emerald",
    productSlug: "silk-hijab-emerald",
    productImage: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=400&fit=crop",
    category: "Women",
    hasPhoto: true,
    photoUrl: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&h=600&fit=crop"
  },
  {
    id: 2,
    stars: 5,
    review: "As someone who values quality tailoring, I was thrilled to discover FADRA's men's collection. The navy blazer I purchased fits like it was custom-made for me. The fabric is premium wool blend that drapes perfectly, and the subtle leather detailing on the buttons adds a luxe touch. What impressed me most was the attention to construction - the stitching is impeccable, the lining is smooth, and the shoulders sit just right.",
    name: "James H.",
    location: "Penang, Malaysia",
    verified: true,
    purchaseDate: "December 2025",
    productName: "Navy Blazer",
    productSlug: "navy-blazer",
    productImage: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=400&fit=crop",
    category: "Men",
    hasPhoto: false
  },
  {
    id: 3,
    stars: 5,
    review: "I'm a beauty enthusiast with a collection that spans dozens of brands, and FADRA's lip gloss has earned a permanent spot in my everyday bag. The formula is non-sticky yet incredibly pigmented, and it lasts for hours without reapplication. But let's talk about that packaging - the rose gold tube is absolutely gorgeous and feels substantial in your hand. It's the kind of product you're proud to pull out in public.",
    name: "Stella L.",
    location: "Johor, Malaysia",
    verified: true,
    purchaseDate: "January 2026",
    productName: "Rose Lip Gloss",
    productSlug: "rose-lip-gloss",
    productImage: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=400&fit=crop",
    category: "Beauty",
    hasPhoto: true,
    photoUrl: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=600&h=600&fit=crop"
  },
  {
    id: 4,
    stars: 5,
    review: "The nude leather tote is everything I hoped for and more. The leather is buttery soft yet durable, and the size is perfect for daily use. It fits my laptop, makeup bag, and all my essentials without looking bulky. The interior organization is well thought out with multiple pockets. I appreciate the attention to detail - even the stitching and hardware feel premium. This bag has elevated my entire wardrobe.",
    name: "Nadia R.",
    location: "Shah Alam",
    verified: true,
    purchaseDate: "January 2026",
    productName: "Nude Leather Tote",
    productSlug: "nude-leather-tote",
    productImage: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop",
    category: "Women",
    hasPhoto: true,
    photoUrl: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&h=600&fit=crop"
  },
  {
    id: 5,
    stars: 5,
    review: "I've been searching for the perfect watch for months, and the chronograph watch from FADRA exceeded all expectations. The Swiss movement is incredibly precise, and the design is timeless yet modern. The weight feels substantial without being heavy, and it's comfortable to wear all day. The sapphire crystal is scratch-resistant, which is important for daily wear. This is an investment piece that I'll treasure for years.",
    name: "Ahmad F.",
    location: "Kuala Lumpur",
    verified: true,
    purchaseDate: "December 2025",
    productName: "Chronograph Watch",
    productSlug: "chronograph-watch",
    productImage: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    category: "Men",
    hasPhoto: false
  },
  {
    id: 6,
    stars: 5,
    review: "The silk evening dress is a showstopper! I wore it to a wedding and received countless compliments. The fabric flows beautifully and the cut is incredibly flattering. The modest design doesn't compromise on elegance - if anything, it enhances it. The dress photographs beautifully too. I feel confident and comfortable wearing it, which is rare for formal wear. Worth every penny!",
    name: "Mira K.",
    location: "Johor Bahru",
    verified: true,
    purchaseDate: "December 2025",
    productName: "Silk Evening Dress",
    productSlug: "silk-evening-dress",
    productImage: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop",
    category: "Women",
    hasPhoto: true,
    photoUrl: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=600&fit=crop"
  },
  {
    id: 7,
    stars: 5,
    review: "These Italian Oxford shoes are the best investment I've made in footwear. The Goodyear welt construction means they'll last for years, and the leather quality is exceptional. They were comfortable from day one - no break-in period needed. The craftsmanship is evident in every detail. They look professional with suits but can also dress down smart-casual outfits. Highly recommend!",
    name: "Daniel W.",
    location: "Penang",
    verified: true,
    purchaseDate: "January 2026",
    productName: "Italian Oxford Shoes",
    productSlug: "italian-oxford-shoes",
    productImage: "https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=400&h=400&fit=crop",
    category: "Men",
    hasPhoto: false
  },
  {
    id: 8,
    stars: 5,
    review: "I'm obsessed with FADRA's abaya collection! The cut, the fabric, the drape - everything is perfection. I ordered two and immediately went back for three more. They're elegant enough for special occasions but comfortable for everyday wear. The quality is incomparable to anything else I've found. These abayas make me feel both modest and stylish, which is exactly what I was looking for.",
    name: "Fatima A.",
    location: "Selangor",
    verified: true,
    purchaseDate: "January 2026",
    productName: "Classic Black Abaya",
    productSlug: "classic-black-abaya",
    productImage: "https://images.unsplash.com/photo-1583391733981-5242f8c1b6ce?w=400&h=400&fit=crop",
    category: "Women",
    hasPhoto: true,
    photoUrl: "https://images.unsplash.com/photo-1583391733981-5242f8c1b6ce?w=600&h=600&fit=crop"
  },
];

export default function ReviewsPage() {
  const [filterCategory, setFilterCategory] = useState('all');
  const [showPhotoOnly, setShowPhotoOnly] = useState(false);

  // Filter reviews
  let filteredReviews = [...allReviews];

  if (filterCategory !== 'all') {
    filteredReviews = filteredReviews.filter(r => r.category.toLowerCase() === filterCategory.toLowerCase());
  }

  if (showPhotoOnly) {
    filteredReviews = filteredReviews.filter(r => r.hasPhoto);
  }

  // Calculate average rating
  const averageRating = (allReviews.reduce((acc, r) => acc + r.stars, 0) / allReviews.length).toFixed(1);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#ffffff' }}>
      {/* Hero Section */}
      <section className="py-16 px-8 border-b" style={{ borderColor: '#e5e5e5', backgroundColor: '#1a1a1a' }}>
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xs tracking-widest mb-4" style={{ color: '#d4a574', letterSpacing: '0.3em' }}>
            TESTIMONIALS
          </p>
          <h1 className="text-5xl md:text-6xl mb-4 text-white" style={{ fontFamily: 'serif', fontWeight: 400 }}>
            Customer Experiences
          </h1>
          <p className="text-base max-w-2xl mx-auto mb-8" style={{ color: '#999' }}>
            Real stories from our community. Every review is verified and comes from genuine purchases.
          </p>

          {/* Rating Summary */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="text-center">
              <div className="text-6xl font-bold mb-2 text-white">{averageRating}</div>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#d4a574">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                ))}
              </div>
              <p className="text-sm" style={{ color: '#999' }}>Based on {allReviews.length} reviews</p>
            </div>

            <div className="h-12 w-px hidden md:block" style={{ backgroundColor: '#333' }}></div>

            <div className="text-center">
              <div className="text-4xl font-bold mb-2" style={{ color: '#2a9d8f' }}>100%</div>
              <p className="text-sm" style={{ color: '#999' }}>Verified Buyers</p>
            </div>

            <div className="h-12 w-px hidden md:block" style={{ backgroundColor: '#333' }}></div>

            <div className="text-center">
              <div className="text-4xl font-bold mb-2" style={{ color: '#d4a574' }}>{allReviews.filter(r => r.hasPhoto).length}</div>
              <p className="text-sm" style={{ color: '#999' }}>Photo Reviews</p>
            </div>
          </div>
        </div>
      </section>

      {/* Filters & Reviews */}
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Filters */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="sticky top-8">
              <h3 className="text-lg font-medium mb-6" style={{ fontFamily: 'serif', color: '#1a1a1a' }}>
                Filters
              </h3>

              {/* Category Filter */}
              <div className="mb-8">
                <h4 className="text-sm font-medium mb-4" style={{ color: '#1a1a1a', letterSpacing: '0.05em' }}>
                  CATEGORY
                </h4>
                <div className="space-y-3">
                  {['all', 'women', 'men', 'beauty', 'accessories'].map((cat) => (
                    <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="radio"
                        name="category"
                        value={cat}
                        checked={filterCategory === cat}
                        onChange={(e) => setFilterCategory(e.target.value)}
                        className="w-4 h-4"
                        style={{ accentColor: '#d4a574' }}
                      />
                      <span className="text-sm group-hover:opacity-70 transition-opacity capitalize" style={{ color: '#666' }}>
                        {cat === 'all' ? 'All Reviews' : cat}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Photo Reviews Toggle */}
              <div className="mb-8">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={showPhotoOnly}
                    onChange={(e) => setShowPhotoOnly(e.target.checked)}
                    className="w-4 h-4"
                    style={{ accentColor: '#d4a574' }}
                  />
                  <span className="text-sm group-hover:opacity-70 transition-opacity" style={{ color: '#666' }}>
                    Show photo reviews only
                  </span>
                </label>
              </div>

              {/* Clear Filters */}
              <button
                onClick={() => {
                  setFilterCategory('all');
                  setShowPhotoOnly(false);
                }}
                className="text-sm hover:opacity-70 transition-opacity"
                style={{ color: '#d4a574', letterSpacing: '0.05em' }}
              >
                Clear All Filters
              </button>
            </div>
          </aside>

          {/* Reviews List */}
          <div className="flex-1">
            <p className="text-sm mb-8" style={{ color: '#666' }}>
              Showing <span style={{ color: '#1a1a1a', fontWeight: 500 }}>{filteredReviews.length}</span> {filteredReviews.length === 1 ? 'review' : 'reviews'}
            </p>

            <div className="space-y-8">
              {filteredReviews.map((review) => (
                <div key={review.id} className="border-b pb-8" style={{ borderColor: '#e5e5e5' }}>
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Review Content */}
                    <div className="flex-1">
                      {/* Stars */}
                      <div className="flex gap-1 mb-3">
                        {[...Array(review.stars)].map((_, i) => (
                          <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#d4a574">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                          </svg>
                        ))}
                      </div>

                      {/* Customer Info */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex items-center gap-2">
                          <span className="font-medium" style={{ color: '#1a1a1a' }}>{review.name}</span>
                          {review.verified && (
                            <span 
                              className="text-xs px-2 py-0.5 rounded"
                              style={{ backgroundColor: '#2a9d8f', color: '#ffffff' }}
                            >
                              ✓ Verified
                            </span>
                          )}
                        </div>
                        <span className="text-xs" style={{ color: '#999' }}>•</span>
                        <span className="text-xs" style={{ color: '#999' }}>{review.purchaseDate}</span>
                      </div>

                      {/* Review Text */}
                      <p className="text-base leading-relaxed mb-4" style={{ color: '#666' }}>
                        {review.review}
                      </p>

                      {/* Product Info */}
                      <a 
                        href={`/product/${review.productSlug}`}
                        className="inline-flex items-center gap-3 p-3 hover:bg-gray-50 transition-colors"
                        style={{ backgroundColor: '#f8f8f8' }}
                      >
                        <div className="w-12 h-12 rounded overflow-hidden flex-shrink-0">
                          <img 
                            src={review.productImage} 
                            alt={review.productName}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="text-xs mb-1" style={{ color: '#999', letterSpacing: '0.1em' }}>
                            REVIEWED PRODUCT
                          </p>
                          <p className="text-sm font-medium" style={{ color: '#1a1a1a' }}>
                            {review.productName}
                          </p>
                        </div>
                      </a>
                    </div>

                    {/* Photo Review */}
                    {review.hasPhoto && (
                      <div className="md:w-48 flex-shrink-0">
                        <div className="aspect-square rounded overflow-hidden">
                          <img 
                            src={review.photoUrl} 
                            alt="Customer photo"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* No Results */}
            {filteredReviews.length === 0 && (
              <div className="text-center py-16">
                <p className="text-lg mb-4" style={{ color: '#666' }}>
                  No reviews found matching your filters.
                </p>
                <button
                  onClick={() => {
                    setFilterCategory('all');
                    setShowPhotoOnly(false);
                  }}
                  className="text-sm hover:opacity-70 transition-opacity"
                  style={{ color: '#d4a574', letterSpacing: '0.05em' }}
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-16 px-8" style={{ backgroundColor: '#f8f8f8' }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl mb-4" style={{ fontFamily: 'serif', color: '#1a1a1a', fontWeight: 400 }}>
            Share Your Experience
          </h2>
          <p className="text-base mb-8" style={{ color: '#666' }}>
            Made a purchase? We'd love to hear from you! Your review helps others make confident decisions.
          </p>
          <a
            href="/"
            className="inline-block px-8 py-4 text-sm tracking-wider hover:opacity-90 transition-opacity"
            style={{ backgroundColor: '#1a1a1a', color: '#ffffff', letterSpacing: '0.1em' }}
          >
            SHOP NOW
          </a>
        </div>
      </section>
    </div>
  );
}

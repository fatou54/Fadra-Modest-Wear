'use client';

import { useState } from 'react';
import { useCart } from '@/lib/cartContext';

const allProducts = [
  {
    id: 'nude-leather-tote',
    slug: 'nude-leather-tote',
    name: 'Nude Leather Tote',
    price: 580,
    category: 'WOMEN',
    gender: 'Women',
    badge: 'NEW',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&h=600&fit=crop',
    bestseller: false,
  },
  {
    id: 'chronograph-watch',
    slug: 'chronograph-watch',
    name: 'Chronograph Watch',
    price: 580,
    category: 'MEN',
    gender: 'Men',
    badge: 'BESTSELLER',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop',
    bestseller: true,
  },
  {
    id: 'silk-evening-dress',
    slug: 'silk-evening-dress',
    name: 'Silk Evening Dress',
    price: 380,
    category: 'WOMEN',
    gender: 'Women',
    badge: 'FEATURED',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=600&fit=crop',
    bestseller: false,
  },
  {
    id: 'italian-oxford-shoes',
    slug: 'italian-oxford-shoes',
    name: 'Italian Oxford Shoes',
    price: 280,
    category: 'MEN',
    gender: 'Men',
    badge: 'NEW',
    image: 'https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=600&h=600&fit=crop',
    bestseller: false,
  },
  {
    id: 'aviator-sunglasses',
    slug: 'aviator-sunglasses',
    name: 'Aviator Sunglasses',
    price: 180,
    category: 'UNISEX',
    gender: 'Unisex',
    badge: 'FEATURED',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&h=600&fit=crop',
    bestseller: false,
  },
  {
    id: 'silk-hijab-emerald',
    slug: 'silk-hijab-emerald',
    name: 'Silk Hijab - Emerald',
    price: 78,
    category: 'WOMEN',
    gender: 'Women',
    badge: 'BESTSELLER',
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&h=600&fit=crop',
    bestseller: true,
  },
  {
    id: 'rose-lip-gloss',
    slug: 'rose-lip-gloss',
    name: 'Rose Lip Gloss',
    price: 25,
    category: 'BEAUTY',
    gender: 'Women',
    badge: 'BESTSELLER',
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=600&h=600&fit=crop',
    bestseller: true,
  },
  {
    id: 'navy-blazer',
    slug: 'navy-blazer',
    name: 'Navy Blazer',
    price: 480,
    category: 'MEN',
    gender: 'Men',
    badge: 'NEW',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=600&fit=crop',
    bestseller: false,
  },
  {
    id: 'designer-wallet',
    slug: 'designer-wallet',
    name: 'Designer Wallet',
    price: 180,
    category: 'WOMEN',
    gender: 'Women',
    badge: 'FEATURED',
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&h=600&fit=crop',
    bestseller: false,
  },
  {
    id: 'silk-scarf',
    slug: 'silk-scarf',
    name: 'Silk Scarf',
    price: 120,
    category: 'WOMEN',
    gender: 'Women',
    badge: 'NEW',
    image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=600&h=600&fit=crop',
    bestseller: false,
  },
  {
    id: 'pearl-earrings',
    slug: 'pearl-earrings',
    name: 'Pearl Earrings',
    price: 250,
    category: 'WOMEN',
    gender: 'Women',
    badge: 'BESTSELLER',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=600&fit=crop',
    bestseller: true,
  },
  {
    id: 'leather-belt',
    slug: 'leather-belt',
    name: 'Leather Belt',
    price: 95,
    category: 'MEN',
    gender: 'Men',
    badge: 'FEATURED',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop',
    bestseller: false,
  },
];

export default function TrendingPage() {
  const { addToCart } = useCart();
  const [sortBy, setSortBy] = useState('bestselling');
  const [selectedGender, setSelectedGender] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  // Filter products
  let filteredProducts = [...allProducts];

  if (selectedGender !== 'all') {
    filteredProducts = filteredProducts.filter(p => p.gender.toLowerCase() === selectedGender.toLowerCase());
  }

  if (selectedCategory !== 'all') {
    filteredProducts = filteredProducts.filter(p => p.category === selectedCategory);
  }

  if (priceRange !== 'all') {
    if (priceRange === 'under100') {
      filteredProducts = filteredProducts.filter(p => p.price < 100);
    } else if (priceRange === '100-300') {
      filteredProducts = filteredProducts.filter(p => p.price >= 100 && p.price <= 300);
    } else if (priceRange === '300-500') {
      filteredProducts = filteredProducts.filter(p => p.price >= 300 && p.price <= 500);
    } else if (priceRange === 'over500') {
      filteredProducts = filteredProducts.filter(p => p.price > 500);
    }
  }

  // Sort products
  if (sortBy === 'bestselling') {
    filteredProducts.sort((a, b) => (b.bestseller ? 1 : 0) - (a.bestseller ? 1 : 0));
  } else if (sortBy === 'newest') {
    filteredProducts.sort((a, b) => {
      const aNew = a.badge === 'NEW' ? 1 : 0;
      const bNew = b.badge === 'NEW' ? 1 : 0;
      return bNew - aNew;
    });
  } else if (sortBy === 'price-low') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  const handleQuickAdd = (product: any) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
    alert('Added to cart!');
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#ffffff' }}>
      {/* Hero Section */}
      <section className="py-16 px-8 border-b" style={{ borderColor: '#e5e5e5' }}>
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xs tracking-widest mb-4" style={{ color: '#d4a574', letterSpacing: '0.3em' }}>
            CURATED FOR YOU
          </p>
          <h1 className="text-5xl md:text-6xl mb-4" style={{ fontFamily: 'serif', color: '#1a1a1a', fontWeight: 400 }}>
            Trending Now
          </h1>
          <p className="text-base max-w-2xl mx-auto" style={{ color: '#666' }}>
            Discover our most coveted pieces of the season. Handpicked designs that define contemporary modest luxury.
          </p>
        </div>
      </section>

      {/* Filters & Products Section */}
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar - Filters (Desktop) */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-8">
              <h3 className="text-lg font-medium mb-6" style={{ fontFamily: 'serif', color: '#1a1a1a' }}>
                Filters
              </h3>

              {/* Gender Filter */}
              <div className="mb-8">
                <h4 className="text-sm font-medium mb-4" style={{ color: '#1a1a1a', letterSpacing: '0.05em' }}>
                  GENDER
                </h4>
                <div className="space-y-3">
                  {['all', 'women', 'men', 'unisex'].map((gender) => (
                    <label key={gender} className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="radio"
                        name="gender"
                        value={gender}
                        checked={selectedGender === gender}
                        onChange={(e) => setSelectedGender(e.target.value)}
                        className="w-4 h-4"
                        style={{ accentColor: '#d4a574' }}
                      />
                      <span className="text-sm group-hover:opacity-70 transition-opacity capitalize" style={{ color: '#666' }}>
                        {gender === 'all' ? 'All' : gender}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Category Filter */}
              <div className="mb-8">
                <h4 className="text-sm font-medium mb-4" style={{ color: '#1a1a1a', letterSpacing: '0.05em' }}>
                  CATEGORY
                </h4>
                <div className="space-y-3">
                  {['all', 'WOMEN', 'MEN', 'BEAUTY', 'UNISEX'].map((cat) => (
                    <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="radio"
                        name="category"
                        value={cat}
                        checked={selectedCategory === cat}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="w-4 h-4"
                        style={{ accentColor: '#d4a574' }}
                      />
                      <span className="text-sm group-hover:opacity-70 transition-opacity capitalize" style={{ color: '#666' }}>
                        {cat === 'all' ? 'All Categories' : cat}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="mb-8">
                <h4 className="text-sm font-medium mb-4" style={{ color: '#1a1a1a', letterSpacing: '0.05em' }}>
                  PRICE RANGE
                </h4>
                <div className="space-y-3">
                  {[
                    { value: 'all', label: 'All Prices' },
                    { value: 'under100', label: 'Under RM 100' },
                    { value: '100-300', label: 'RM 100 - RM 300' },
                    { value: '300-500', label: 'RM 300 - RM 500' },
                    { value: 'over500', label: 'Over RM 500' },
                  ].map((range) => (
                    <label key={range.value} className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="radio"
                        name="price"
                        value={range.value}
                        checked={priceRange === range.value}
                        onChange={(e) => setPriceRange(e.target.value)}
                        className="w-4 h-4"
                        style={{ accentColor: '#d4a574' }}
                      />
                      <span className="text-sm group-hover:opacity-70 transition-opacity" style={{ color: '#666' }}>
                        {range.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              <button
                onClick={() => {
                  setSelectedGender('all');
                  setSelectedCategory('all');
                  setPriceRange('all');
                }}
                className="text-sm hover:opacity-70 transition-opacity"
                style={{ color: '#d4a574', letterSpacing: '0.05em' }}
              >
                Clear All Filters
              </button>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 pb-6 border-b" style={{ borderColor: '#e5e5e5' }}>
              <p className="text-sm" style={{ color: '#666' }}>
                Showing <span style={{ color: '#1a1a1a', fontWeight: 500 }}>{filteredProducts.length}</span> products
              </p>

              <div className="flex items-center gap-4">
                {/* Mobile Filter Toggle */}
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden flex items-center gap-2 px-4 py-2 border text-sm hover:border-gray-400 transition-colors"
                  style={{ borderColor: '#e5e5e5', color: '#1a1a1a' }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="4" y1="21" x2="4" y2="14"></line>
                    <line x1="4" y1="10" x2="4" y2="3"></line>
                    <line x1="12" y1="21" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12" y2="3"></line>
                    <line x1="20" y1="21" x2="20" y2="16"></line>
                    <line x1="20" y1="12" x2="20" y2="3"></line>
                    <line x1="1" y1="14" x2="7" y2="14"></line>
                    <line x1="9" y1="8" x2="15" y2="8"></line>
                    <line x1="17" y1="16" x2="23" y2="16"></line>
                  </svg>
                  Filters
                </button>

                {/* Sort Dropdown */}
                <div className="flex items-center gap-2">
                  <label className="text-sm" style={{ color: '#666' }}>Sort by:</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-2 border text-sm hover:border-gray-400 transition-colors"
                    style={{ borderColor: '#e5e5e5', color: '#1a1a1a' }}
                  >
                    <option value="bestselling">Bestselling</option>
                    <option value="newest">Newest</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Mobile Filters */}
            {showFilters && (
              <div className="lg:hidden mb-8 p-6 border" style={{ borderColor: '#e5e5e5' }}>
                {/* Same filters as desktop but in mobile layout */}
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-medium mb-4" style={{ color: '#1a1a1a' }}>GENDER</h4>
                    <div className="space-y-2">
                      {['all', 'women', 'men', 'unisex'].map((gender) => (
                        <label key={gender} className="flex items-center gap-3">
                          <input
                            type="radio"
                            name="gender-mobile"
                            value={gender}
                            checked={selectedGender === gender}
                            onChange={(e) => setSelectedGender(e.target.value)}
                            className="w-4 h-4"
                            style={{ accentColor: '#d4a574' }}
                          />
                          <span className="text-sm capitalize" style={{ color: '#666' }}>{gender === 'all' ? 'All' : gender}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-4" style={{ color: '#1a1a1a' }}>CATEGORY</h4>
                    <div className="space-y-2">
                      {['all', 'WOMEN', 'MEN', 'BEAUTY', 'UNISEX'].map((cat) => (
                        <label key={cat} className="flex items-center gap-3">
                          <input
                            type="radio"
                            name="category-mobile"
                            value={cat}
                            checked={selectedCategory === cat}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="w-4 h-4"
                            style={{ accentColor: '#d4a574' }}
                          />
                          <span className="text-sm capitalize" style={{ color: '#666' }}>{cat === 'all' ? 'All' : cat}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-4" style={{ color: '#1a1a1a' }}>PRICE</h4>
                    <div className="space-y-2">
                      {[
                        { value: 'all', label: 'All' },
                        { value: 'under100', label: 'Under RM 100' },
                        { value: '100-300', label: 'RM 100-300' },
                        { value: '300-500', label: 'RM 300-500' },
                        { value: 'over500', label: 'Over RM 500' },
                      ].map((range) => (
                        <label key={range.value} className="flex items-center gap-3">
                          <input
                            type="radio"
                            name="price-mobile"
                            value={range.value}
                            checked={priceRange === range.value}
                            onChange={(e) => setPriceRange(e.target.value)}
                            className="w-4 h-4"
                            style={{ accentColor: '#d4a574' }}
                          />
                          <span className="text-sm" style={{ color: '#666' }}>{range.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="group relative">
                  <a href={`/product/${product.slug}`}>
                    <div className="relative bg-white mb-4 overflow-hidden aspect-square">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {product.badge && (
                        <span
                          className="absolute top-3 left-3 text-white text-xs px-3 py-1 z-10"
                          style={{
                            backgroundColor:
                              product.badge === 'NEW'
                                ? '#ff6b35'
                                : product.badge === 'BESTSELLER'
                                ? '#d4a574'
                                : '#2a9d8f',
                            letterSpacing: '0.1em',
                          }}
                        >
                          {product.badge}
                        </span>
                      )}

                      {/* Hover Actions */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                        <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                          </svg>
                        </button>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            handleQuickAdd(product);
                          }}
                          className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                        >
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2">
                            <circle cx="9" cy="21" r="1"></circle>
                            <circle cx="20" cy="21" r="1"></circle>
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                          </svg>
                        </button>
                        <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <p className="text-xs mb-2" style={{ color: '#999', letterSpacing: '0.1em' }}>
                      {product.category}
                    </p>
                    <h3 className="text-base font-medium mb-2" style={{ color: '#1a1a1a' }}>
                      {product.name}
                    </h3>
                    <p className="text-lg font-medium" style={{ color: '#1a1a1a' }}>
                      RM {product.price}
                    </p>
                  </a>
                </div>
              ))}
            </div>

            {/* No Results */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-lg mb-4" style={{ color: '#666' }}>
                  No products found matching your filters.
                </p>
                <button
                  onClick={() => {
                    setSelectedGender('all');
                    setSelectedCategory('all');
                    setPriceRange('all');
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
    </div>
  );
}

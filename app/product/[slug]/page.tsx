'use client';

import { useState } from 'react';
import { useCart } from '@/lib/cartContext';
import { useParams } from 'next/navigation';

// Sample product data - In production, this would come from your database
const productsData: Record<string, any> = {
  'nude-leather-tote': {
    id: 'nude-leather-tote',
    name: 'Nude Leather Tote',
    price: 580,
    category: 'WOMEN',
    badge: 'NEW',
    images: [
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1591561954557-26941169b49e?w=800&h=800&fit=crop',
    ],
    description: 'Elegant nude leather tote crafted from premium Italian leather. Features spacious interior compartments and adjustable straps for ultimate versatility.',
    availability: 'In Stock',
    sizes: ['One Size'],
    colors: ['Nude', 'Black', 'Tan'],
    details: 'Premium Italian leather construction with gold-tone hardware. Interior features multiple pockets and compartments. Includes dust bag for storage.',
    fabricCare: 'Wipe clean with soft, damp cloth. Avoid prolonged exposure to direct sunlight. Store in dust bag when not in use.',
    shipping: 'Free standard shipping on orders over RM 250. Express delivery available. Ships within 1-2 business days.',
  },
  'chronograph-watch': {
    id: 'chronograph-watch',
    name: 'Chronograph Watch',
    price: 580,
    category: 'MEN',
    badge: 'BESTSELLER',
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1622434641406-a158123450f9?w=800&h=800&fit=crop',
    ],
    description: 'Swiss-made chronograph watch featuring precision movement and elegant design. Perfect balance of sophistication and functionality.',
    availability: 'In Stock',
    sizes: ['40mm', '42mm'],
    colors: ['Silver', 'Gold', 'Rose Gold'],
    details: 'Swiss quartz movement with chronograph function. Stainless steel case and bracelet. Water resistant to 100m. Scratch-resistant sapphire crystal.',
    fabricCare: 'Wipe with soft cloth after use. Avoid exposure to extreme temperatures. Service recommended every 2-3 years.',
    shipping: 'Free standard shipping on orders over RM 250. Arrives in luxury presentation box.',
  },
  'silk-evening-dress': {
    id: 'silk-evening-dress',
    name: 'Silk Evening Dress',
    price: 380,
    category: 'WOMEN',
    badge: 'FEATURED',
    images: [
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&h=800&fit=crop',
    ],
    description: 'Flowing silk evening dress with modest silhouette. Features elegant draping and luxurious fabric that moves beautifully.',
    availability: 'In Stock',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Red', 'Navy', 'Emerald', 'Black'],
    details: '100% silk charmeuse fabric. Fully lined. Concealed zipper closure. Floor-length hemline. Made in Italy.',
    fabricCare: 'Dry clean only. Iron on low heat if needed. Hang to store.',
    shipping: 'Free standard shipping on orders over RM 250. Express delivery available.',
  },
  'italian-oxford-shoes': {
    id: 'italian-oxford-shoes',
    name: 'Italian Oxford Shoes',
    price: 280,
    category: 'MEN',
    badge: 'NEW',
    images: [
      'https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=800&h=800&fit=crop',
    ],
    description: 'Handcrafted Italian leather oxford shoes with Goodyear welt construction for superior durability and comfort.',
    availability: 'In Stock',
    sizes: ['40', '41', '42', '43', '44', '45'],
    colors: ['Black', 'Brown', 'Tan'],
    details: 'Premium Italian calfskin leather. Goodyear welt construction. Leather sole with rubber heel. Fully leather lined.',
    fabricCare: 'Polish regularly with quality shoe cream. Use shoe trees when not worn. Avoid water exposure.',
    shipping: 'Free standard shipping on orders over RM 250.',
  },
  'aviator-sunglasses': {
    id: 'aviator-sunglasses',
    name: 'Aviator Sunglasses',
    price: 180,
    category: 'UNISEX',
    badge: 'FEATURED',
    images: [
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&h=800&fit=crop',
    ],
    description: 'Classic aviator sunglasses with UV400 protection. Timeless design that suits every face shape.',
    availability: 'In Stock',
    sizes: ['Standard'],
    colors: ['Gold/Green', 'Silver/Blue', 'Black/Grey'],
    details: 'Metal frame with spring hinges. UV400 polarized lenses. Comes with protective case and cleaning cloth.',
    fabricCare: 'Clean lenses with provided microfiber cloth. Store in case when not in use.',
    shipping: 'Free standard shipping on orders over RM 250.',
  },
  'silk-hijab-emerald': {
    id: 'silk-hijab-emerald',
    name: 'Silk Hijab - Emerald',
    price: 78,
    category: 'WOMEN',
    badge: 'BESTSELLER',
    images: [
      'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&h=800&fit=crop',
    ],
    description: 'Premium silk hijab in elegant emerald color. Lightweight and breathable with beautiful drape.',
    availability: 'In Stock',
    sizes: ['Standard'],
    colors: ['Emerald', 'Navy', 'Blush', 'Black', 'Ivory'],
    details: '100% mulberry silk. Dimensions: 180cm x 70cm. Hand-rolled edges.',
    fabricCare: 'Hand wash in cold water. Hang dry. Iron on silk setting if needed.',
    shipping: 'Free standard shipping on orders over RM 250.',
  },
  'rose-lip-gloss': {
    id: 'rose-lip-gloss',
    name: 'Rose Lip Gloss',
    price: 25,
    category: 'BEAUTY',
    badge: 'BESTSELLER',
    images: [
      'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800&h=800&fit=crop',
    ],
    description: 'Luxurious lip gloss with high-shine finish and subtle rose tint. Enriched with nourishing oils.',
    availability: 'In Stock',
    sizes: ['5ml'],
    colors: ['Rose', 'Nude', 'Berry', 'Coral'],
    details: 'Enriched with vitamin E and jojoba oil. Long-lasting formula. Non-sticky texture. Vegan and cruelty-free.',
    fabricCare: 'Store in cool, dry place. Keep away from direct sunlight.',
    shipping: 'Free standard shipping on orders over RM 250.',
  },
  'navy-blazer': {
    id: 'navy-blazer',
    name: 'Navy Blazer',
    price: 480,
    category: 'MEN',
    badge: 'NEW',
    images: [
      'https://images.unsplash.com/photo-1507679622673-989605832e3d?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1593030668469-d3f3369d3e4a?w=800&h=800&fit=crop',
    ],
    description: 'Tailored navy blazer in premium wool blend. Classic fit with modern details for versatile styling.',
    availability: 'In Stock',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Navy', 'Charcoal', 'Black'],
    details: 'Premium wool blend fabric. Fully lined. Two-button closure. Notch lapel. Functional sleeve buttons.',
    fabricCare: 'Dry clean only. Steam to remove wrinkles. Hang on quality hanger.',
    shipping: 'Free standard shipping on orders over RM 250.',
  },
};

// Related products
const relatedProducts = [
  { id: 'related-1', name: 'Leather Crossbody', price: 320, image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop', category: 'WOMEN' },
  { id: 'related-2', name: 'Designer Wallet', price: 180, image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=400&fit=crop', category: 'WOMEN' },
  { id: 'related-3', name: 'Silk Scarf', price: 120, image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400&h=400&fit=crop', category: 'WOMEN' },
  { id: 'related-4', name: 'Pearl Earrings', price: 250, image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop', category: 'WOMEN' },
];

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const product = productsData[slug];
  const { addToCart } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('details');
  const [wishlist, setWishlist] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4" style={{ fontFamily: 'serif', color: '#1a1a1a' }}>Product Not Found</h1>
          <a href="/" className="text-sm" style={{ color: '#d4a574' }}>← Back to Home</a>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (product.sizes.length > 1 && !selectedSize) {
      alert('Please select a size');
      return;
    }
    if (product.colors.length > 1 && !selectedColor) {
      alert('Please select a color');
      return;
    }

    addToCart({
      id: `${product.id}-${selectedSize}-${selectedColor}`,
      name: product.name,
      price: product.price,
      image: product.images[0],
      quantity: quantity,
    });
    
    alert('Added to cart!');
  };

  const handleWishlist = () => {
    setWishlist(!wishlist);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#ffffff' }}>
      {/* Breadcrumb */}
      <div className="px-8 py-6 border-b">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-sm" style={{ color: '#666' }}>
            <a href="/" className="hover:underline">Home</a>
            <span>/</span>
            <a href="/trending" className="hover:underline">Trending</a>
            <span>/</span>
            <span style={{ color: '#1a1a1a' }}>{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Section */}
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* LEFT SIDE - Images */}
          <div>
            {/* Main Image */}
            <div className="mb-4 relative aspect-square overflow-hidden" style={{ backgroundColor: '#f8f8f8' }}>
              {product.badge && (
                <span 
                  className="absolute top-4 left-4 text-white text-xs px-3 py-1 z-10"
                  style={{ 
                    backgroundColor: product.badge === 'NEW' ? '#ff6b35' : product.badge === 'BESTSELLER' ? '#d4a574' : '#2a9d8f',
                    letterSpacing: '0.1em' 
                  }}
                >
                  {product.badge}
                </span>
              )}
              <img 
                src={product.images[selectedImage]} 
                alt={product.name}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 cursor-zoom-in"
              />
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-3">
              {product.images.map((image: string, index: number) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className="aspect-square overflow-hidden border-2 transition-all"
                  style={{ 
                    backgroundColor: '#f8f8f8',
                    borderColor: selectedImage === index ? '#d4a574' : 'transparent'
                  }}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE - Product Info */}
          <div>
            {/* Category & Badge */}
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs tracking-widest" style={{ color: '#999', letterSpacing: '0.15em' }}>
                {product.category}
              </span>
            </div>

            {/* Product Name */}
            <h1 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: 'serif', color: '#1a1a1a', fontWeight: 400 }}>
              {product.name}
            </h1>

            {/* Price */}
            <div className="mb-6">
              <span className="text-3xl font-medium" style={{ color: '#1a1a1a' }}>
                RM {product.price}
              </span>
            </div>

            {/* Availability */}
            <div className="mb-6 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#2a9d8f' }}></div>
              <span className="text-sm" style={{ color: '#2a9d8f' }}>{product.availability}</span>
            </div>

            {/* Description */}
            <p className="text-base mb-8 leading-relaxed" style={{ color: '#666' }}>
              {product.description}
            </p>

            {/* Divider */}
            <div className="border-t mb-8" style={{ borderColor: '#e5e5e5' }}></div>

            {/* Size Selector */}
            {product.sizes.length > 1 && (
              <div className="mb-6">
                <label className="block text-sm font-medium mb-3" style={{ color: '#1a1a1a' }}>
                  Size
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size: string) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className="px-6 py-3 border-2 text-sm font-medium transition-all hover:border-gray-400"
                      style={{
                        borderColor: selectedSize === size ? '#d4a574' : '#e5e5e5',
                        color: selectedSize === size ? '#d4a574' : '#1a1a1a',
                        backgroundColor: selectedSize === size ? '#fef9f3' : '#ffffff'
                      }}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Color Selector */}
            {product.colors.length > 1 && (
              <div className="mb-6">
                <label className="block text-sm font-medium mb-3" style={{ color: '#1a1a1a' }}>
                  Color: {selectedColor && <span style={{ color: '#666' }}>({selectedColor})</span>}
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color: string) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className="px-6 py-3 border-2 text-sm font-medium transition-all hover:border-gray-400"
                      style={{
                        borderColor: selectedColor === color ? '#d4a574' : '#e5e5e5',
                        color: selectedColor === color ? '#d4a574' : '#1a1a1a',
                        backgroundColor: selectedColor === color ? '#fef9f3' : '#ffffff'
                      }}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Selector */}
            <div className="mb-8">
              <label className="block text-sm font-medium mb-3" style={{ color: '#1a1a1a' }}>
                Quantity
              </label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-12 border-2 flex items-center justify-center text-xl hover:border-gray-400 transition-colors"
                  style={{ borderColor: '#e5e5e5', color: '#1a1a1a' }}
                >
                  −
                </button>
                <span className="text-xl font-medium w-12 text-center" style={{ color: '#1a1a1a' }}>
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-12 border-2 flex items-center justify-center text-xl hover:border-gray-400 transition-colors"
                  style={{ borderColor: '#e5e5e5', color: '#1a1a1a' }}
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mb-8">
              <button
                onClick={handleAddToCart}
                className="flex-1 py-4 text-white text-sm font-medium tracking-wider hover:opacity-90 transition-opacity"
                style={{ backgroundColor: '#1a1a1a', letterSpacing: '0.1em' }}
              >
                ADD TO CART
              </button>
              <button
                onClick={handleWishlist}
                className="w-14 h-14 border-2 flex items-center justify-center hover:border-red-500 transition-colors"
                style={{ borderColor: wishlist ? '#ef4444' : '#e5e5e5' }}
              >
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill={wishlist ? '#ef4444' : 'none'}
                  stroke={wishlist ? '#ef4444' : '#1a1a1a'}
                  strokeWidth="2"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 p-6" style={{ backgroundColor: '#f8f8f8' }}>
              <div className="text-center">
                <svg className="mx-auto mb-2" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d4a574" strokeWidth="1.5">
                  <rect x="1" y="3" width="15" height="13"></rect>
                  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                  <circle cx="5.5" cy="18.5" r="2.5"></circle>
                  <circle cx="18.5" cy="18.5" r="2.5"></circle>
                </svg>
                <p className="text-xs" style={{ color: '#666' }}>Free Shipping</p>
              </div>
              <div className="text-center">
                <svg className="mx-auto mb-2" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d4a574" strokeWidth="1.5">
                  <polyline points="1 4 1 10 7 10"></polyline>
                  <polyline points="23 20 23 14 17 14"></polyline>
                  <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>
                </svg>
                <p className="text-xs" style={{ color: '#666' }}>Easy Returns</p>
              </div>
              <div className="text-center">
                <svg className="mx-auto mb-2" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d4a574" strokeWidth="1.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
                <p className="text-xs" style={{ color: '#666' }}>Authenticity</p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16 border-t" style={{ borderColor: '#e5e5e5' }}>
          {/* Tab Navigation */}
          <div className="flex gap-8 border-b" style={{ borderColor: '#e5e5e5' }}>
            {['details', 'fabric', 'shipping', 'reviews'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="py-4 text-sm font-medium tracking-wider transition-colors relative"
                style={{
                  color: activeTab === tab ? '#1a1a1a' : '#999',
                  letterSpacing: '0.1em'
                }}
              >
                {tab === 'details' && 'PRODUCT DETAILS'}
                {tab === 'fabric' && 'FABRIC & CARE'}
                {tab === 'shipping' && 'SHIPPING INFO'}
                {tab === 'reviews' && 'REVIEWS'}
                {activeTab === tab && (
                  <div 
                    className="absolute bottom-0 left-0 right-0 h-0.5"
                    style={{ backgroundColor: '#d4a574' }}
                  ></div>
                )}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="py-8">
            {activeTab === 'details' && (
              <div className="prose max-w-none">
                <p className="text-base leading-relaxed" style={{ color: '#666' }}>
                  {product.details}
                </p>
              </div>
            )}
            {activeTab === 'fabric' && (
              <div className="prose max-w-none">
                <p className="text-base leading-relaxed" style={{ color: '#666' }}>
                  {product.fabricCare}
                </p>
              </div>
            )}
            {activeTab === 'shipping' && (
              <div className="prose max-w-none">
                <p className="text-base leading-relaxed" style={{ color: '#666' }}>
                  {product.shipping}
                </p>
              </div>
            )}
            {activeTab === 'reviews' && (
              <div>
                <div className="flex items-center gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-5xl font-bold mb-2" style={{ color: '#1a1a1a' }}>4.8</div>
                    <div className="flex justify-center mb-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#d4a574">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                      ))}
                    </div>
                    <p className="text-sm" style={{ color: '#666' }}>Based on 127 reviews</p>
                  </div>
                  <div className="flex-1 space-y-2">
                    {[5, 4, 3, 2, 1].map((star) => (
                      <div key={star} className="flex items-center gap-3">
                        <span className="text-sm w-12" style={{ color: '#666' }}>{star} star</span>
                        <div className="flex-1 h-2 rounded-full" style={{ backgroundColor: '#f0f0f0' }}>
                          <div 
                            className="h-full rounded-full" 
                            style={{ 
                              backgroundColor: '#d4a574',
                              width: star === 5 ? '80%' : star === 4 ? '15%' : '5%'
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sample Review */}
                <div className="border-t pt-6" style={{ borderColor: '#e5e5e5' }}>
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#f8f8f8' }}>
                      <span style={{ color: '#d4a574', fontFamily: 'serif' }}>S</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-medium" style={{ color: '#1a1a1a' }}>Sarah M.</span>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#d4a574">
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                            </svg>
                          ))}
                        </div>
                      </div>
                      <p className="text-sm mb-2" style={{ color: '#666' }}>
                        Absolutely love this product! The quality is outstanding and it exceeded my expectations. Highly recommend!
                      </p>
                      <span className="text-xs" style={{ color: '#999' }}>Verified Purchase • 2 weeks ago</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-3xl mb-8" style={{ fontFamily: 'serif', color: '#1a1a1a', fontWeight: 400 }}>
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((item) => (
              <a key={item.id} href={`/product/${item.id}`} className="group">
                <div 
                  className="aspect-square mb-3 overflow-hidden"
                  style={{ backgroundColor: '#f8f8f8' }}
                >
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <p className="text-xs mb-2" style={{ color: '#999', letterSpacing: '0.1em' }}>{item.category}</p>
                <h3 className="text-sm font-medium mb-2" style={{ color: '#1a1a1a' }}>{item.name}</h3>
                <p className="text-base font-medium" style={{ color: '#1a1a1a' }}>RM {item.price}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

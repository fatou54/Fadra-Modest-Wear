export default function WelcomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-8" style={{ backgroundColor: '#f8f8f8' }}>
      <div className="max-w-3xl w-full text-center">
        {/* Success Icon */}
        <div className="mb-8">
          <svg className="mx-auto" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#2a9d8f" strokeWidth="2">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
        </div>

        {/* Hero */}
        <p className="text-xs tracking-widest mb-4" style={{ color: '#d4a574', letterSpacing: '0.3em' }}>
          THANK YOU
        </p>
        <h1 className="text-5xl md:text-6xl mb-6" style={{ fontFamily: 'serif', color: '#1a1a1a', fontWeight: 400 }}>
          Welcome to the Inner Circle
        </h1>
        <p className="text-lg mb-12 leading-relaxed" style={{ color: '#666' }}>
          You're now part of an exclusive community. Here's what you can expect:
        </p>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Benefit 1 */}
          <div className="p-8 text-center" style={{ backgroundColor: '#ffffff', border: '1px solid #e5e5e5' }}>
            <div className="mb-4">
              <svg className="mx-auto" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#d4a574" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <h3 className="text-lg font-medium mb-3" style={{ fontFamily: 'serif', color: '#1a1a1a' }}>
              Early Access
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: '#666' }}>
              Be the first to shop new collections before anyone else. Get exclusive 24-hour early access.
            </p>
          </div>

          {/* Benefit 2 */}
          <div className="p-8 text-center" style={{ backgroundColor: '#ffffff', border: '1px solid #e5e5e5' }}>
            <div className="mb-4">
              <svg className="mx-auto" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#d4a574" strokeWidth="1.5">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <h3 className="text-lg font-medium mb-3" style={{ fontFamily: 'serif', color: '#1a1a1a' }}>
              Special Member Discount
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: '#666' }}>
              Enjoy 10% off your first purchase and exclusive member-only pricing throughout the year.
            </p>
          </div>

          {/* Benefit 3 */}
          <div className="p-8 text-center" style={{ backgroundColor: '#ffffff', border: '1px solid #e5e5e5' }}>
            <div className="mb-4">
              <svg className="mx-auto" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#d4a574" strokeWidth="1.5">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <h3 className="text-lg font-medium mb-3" style={{ fontFamily: 'serif', color: '#1a1a1a' }}>
              Styling Inspiration
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: '#666' }}>
              Receive curated lookbooks, styling tips, and personalized fashion advice every month.
            </p>
          </div>
        </div>

        {/* Welcome Discount */}
        <div className="p-8 mb-12" style={{ backgroundColor: '#ffffff', border: '2px solid #d4a574' }}>
          <div className="mb-4">
            <svg className="mx-auto" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#d4a574" strokeWidth="1.5">
              <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
              <line x1="7" y1="7" x2="7.01" y2="7"></line>
            </svg>
          </div>
          <h3 className="text-2xl font-medium mb-3" style={{ fontFamily: 'serif', color: '#1a1a1a' }}>
            Your Welcome Gift Awaits
          </h3>
          <p className="text-lg mb-4" style={{ color: '#666' }}>
            Use code <strong style={{ color: '#d4a574', fontSize: '24px' }}>WELCOME10</strong> at checkout
          </p>
          <p className="text-sm mb-6" style={{ color: '#999' }}>
            Valid for 30 days on orders over RM 300
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/women"
            className="px-10 py-4 text-sm tracking-wider hover:opacity-90 transition-opacity"
            style={{ backgroundColor: '#1a1a1a', color: '#ffffff', letterSpacing: '0.1em', fontWeight: 500 }}
          >
            SHOP WOMEN'S COLLECTION
          </a>
          <a
            href="/men"
            className="px-10 py-4 text-sm tracking-wider border-2 hover:bg-gray-50 transition-colors"
            style={{ borderColor: '#1a1a1a', color: '#1a1a1a', letterSpacing: '0.1em', fontWeight: 500 }}
          >
            SHOP MEN'S COLLECTION
          </a>
        </div>

        {/* Additional Links */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm" style={{ color: '#999' }}>
          <a href="/new-arrivals" className="hover:opacity-70 transition-opacity">
            View New Arrivals
          </a>
          <span className="hidden sm:block">•</span>
          <a href="/trending" className="hover:opacity-70 transition-opacity">
            Trending Now
          </a>
          <span className="hidden sm:block">•</span>
          <a href="/" className="hover:opacity-70 transition-opacity">
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}

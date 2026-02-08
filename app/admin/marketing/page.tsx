'use client';

export default function MarketingManagement() {
  return (
    <div style={{ backgroundColor: '#f8f8f8', minHeight: '100vh', padding: '32px' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        
        <div style={{ marginBottom: '32px' }}>
          <h1 style={{ fontSize: '32px', fontWeight: 'bold', color: '#1a1a1a', marginBottom: '8px' }}>
            Marketing
          </h1>
          <p style={{ color: '#666', fontSize: '14px' }}>
            Manage promotions, discounts, and email campaigns
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginBottom: '24px' }}>
          <div style={{ backgroundColor: '#ffffff', padding: '24px', borderRadius: '12px', border: '1px solid #e5e5e5' }}>
            <div style={{ fontSize: '40px', marginBottom: '12px' }}>📧</div>
            <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#1a1a1a', marginBottom: '8px' }}>Email Campaigns</h3>
            <p style={{ fontSize: '14px', color: '#666', marginBottom: '16px' }}>Create and send marketing emails</p>
            <button style={{ padding: '10px 20px', backgroundColor: '#d4a574', color: '#ffffff', border: 'none', borderRadius: '6px', fontSize: '13px', fontWeight: '500', cursor: 'pointer', width: '100%' }}>
              Coming Soon
            </button>
          </div>
          
          <div style={{ backgroundColor: '#ffffff', padding: '24px', borderRadius: '12px', border: '1px solid #e5e5e5' }}>
            <div style={{ fontSize: '40px', marginBottom: '12px' }}>🎯</div>
            <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#1a1a1a', marginBottom: '8px' }}>Discount Codes</h3>
            <p style={{ fontSize: '14px', color: '#666', marginBottom: '16px' }}>Manage promo codes and offers</p>
            <button style={{ padding: '10px 20px', backgroundColor: '#d4a574', color: '#ffffff', border: 'none', borderRadius: '6px', fontSize: '13px', fontWeight: '500', cursor: 'pointer', width: '100%' }}>
              Coming Soon
            </button>
          </div>
          
          <div style={{ backgroundColor: '#ffffff', padding: '24px', borderRadius: '12px', border: '1px solid #e5e5e5' }}>
            <div style={{ fontSize: '40px', marginBottom: '12px' }}>📱</div>
            <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#1a1a1a', marginBottom: '8px' }}>Social Media</h3>
            <p style={{ fontSize: '14px', color: '#666', marginBottom: '16px' }}>Manage social media posts</p>
            <button style={{ padding: '10px 20px', backgroundColor: '#d4a574', color: '#ffffff', border: 'none', borderRadius: '6px', fontSize: '13px', fontWeight: '500', cursor: 'pointer', width: '100%' }}>
              Coming Soon
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

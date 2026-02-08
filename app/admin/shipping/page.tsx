'use client';

export default function ShippingReturns() {
  return (
    <div style={{ backgroundColor: '#f8f8f8', minHeight: '100vh', padding: '32px' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        
        <div style={{ marginBottom: '32px' }}>
          <h1 style={{ fontSize: '32px', fontWeight: 'bold', color: '#1a1a1a', marginBottom: '8px' }}>
            Shipping & Returns
          </h1>
          <p style={{ color: '#666', fontSize: '14px' }}>
            Configure shipping zones, rates, and return policies
          </p>
        </div>

        <div style={{ display: 'grid', gap: '24px' }}>
          
          <div style={{ backgroundColor: '#ffffff', padding: '32px', borderRadius: '12px', border: '1px solid #e5e5e5' }}>
            <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#1a1a1a', marginBottom: '16px' }}>Shipping Settings</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ padding: '16px', border: '1px solid #e5e5e5', borderRadius: '8px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <p style={{ fontSize: '16px', fontWeight: '600', color: '#1a1a1a', marginBottom: '4px' }}>Standard Shipping</p>
                    <p style={{ fontSize: '14px', color: '#666' }}>3-5 business days • Free for orders over RM 300</p>
                  </div>
                  <button style={{ padding: '8px 16px', backgroundColor: 'transparent', color: '#d4a574', border: '1px solid #e5e5e5', borderRadius: '6px', fontSize: '13px', cursor: 'pointer' }}>
                    Edit
                  </button>
                </div>
              </div>
              <div style={{ padding: '16px', border: '1px solid #e5e5e5', borderRadius: '8px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <p style={{ fontSize: '16px', fontWeight: '600', color: '#1a1a1a', marginBottom: '4px' }}>Express Shipping</p>
                    <p style={{ fontSize: '14px', color: '#666' }}>1-2 business days • RM 15</p>
                  </div>
                  <button style={{ padding: '8px 16px', backgroundColor: 'transparent', color: '#d4a574', border: '1px solid #e5e5e5', borderRadius: '6px', fontSize: '13px', cursor: 'pointer' }}>
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div style={{ backgroundColor: '#ffffff', padding: '32px', borderRadius: '12px', border: '1px solid #e5e5e5' }}>
            <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#1a1a1a', marginBottom: '16px' }}>Return Policy</h2>
            <div style={{ padding: '16px', border: '1px solid #e5e5e5', borderRadius: '8px' }}>
              <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.6', marginBottom: '12px' }}>
                30-day return policy for unworn items with original tags. Free returns on defective items.
              </p>
              <button style={{ padding: '10px 20px', backgroundColor: '#d4a574', color: '#ffffff', border: 'none', borderRadius: '6px', fontSize: '13px', fontWeight: '500', cursor: 'pointer' }}>
                Edit Policy
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

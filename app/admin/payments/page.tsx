'use client';

export default function PaymentsManagement() {
  return (
    <div style={{ backgroundColor: '#f8f8f8', minHeight: '100vh', padding: '32px' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        
        <div style={{ marginBottom: '32px' }}>
          <h1 style={{ fontSize: '32px', fontWeight: 'bold', color: '#1a1a1a', marginBottom: '8px' }}>
            Payment Settings
          </h1>
          <p style={{ color: '#666', fontSize: '14px' }}>
            Configure payment methods and gateways
          </p>
        </div>

        <div style={{ display: 'grid', gap: '24px' }}>
          
          <div style={{ backgroundColor: '#ffffff', padding: '32px', borderRadius: '12px', border: '1px solid #e5e5e5' }}>
            <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#1a1a1a', marginBottom: '20px' }}>Payment Methods</h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ padding: '20px', border: '1px solid #e5e5e5', borderRadius: '8px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{ width: '50px', height: '50px', backgroundColor: '#635bff', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', fontWeight: 'bold' }}>
                      Stripe
                    </div>
                    <div>
                      <p style={{ fontSize: '16px', fontWeight: '600', color: '#1a1a1a', marginBottom: '4px' }}>Stripe</p>
                      <p style={{ fontSize: '14px', color: '#2a9d8f' }}>● Active</p>
                    </div>
                  </div>
                  <button style={{ padding: '8px 16px', backgroundColor: 'transparent', color: '#d4a574', border: '1px solid #e5e5e5', borderRadius: '6px', fontSize: '13px', cursor: 'pointer' }}>
                    Configure
                  </button>
                </div>
              </div>

              <div style={{ padding: '20px', border: '1px solid #e5e5e5', borderRadius: '8px', opacity: 0.6 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{ width: '50px', height: '50px', backgroundColor: '#003087', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', fontSize: '12px', fontWeight: 'bold' }}>
                      PayPal
                    </div>
                    <div>
                      <p style={{ fontSize: '16px', fontWeight: '600', color: '#1a1a1a', marginBottom: '4px' }}>PayPal</p>
                      <p style={{ fontSize: '14px', color: '#999' }}>Not configured</p>
                    </div>
                  </div>
                  <button style={{ padding: '8px 16px', backgroundColor: '#d4a574', color: '#ffffff', border: 'none', borderRadius: '6px', fontSize: '13px', cursor: 'pointer' }}>
                    Enable
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div style={{ backgroundColor: '#ffffff', padding: '32px', borderRadius: '12px', border: '1px solid #e5e5e5' }}>
            <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#1a1a1a', marginBottom: '16px' }}>Currency Settings</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#1a1a1a', marginBottom: '8px' }}>
                  Store Currency
                </label>
                <select style={{ width: '100%', padding: '12px 16px', border: '1px solid #e5e5e5', borderRadius: '8px', fontSize: '14px' }}>
                  <option>Malaysian Ringgit (RM)</option>
                  <option>US Dollar (USD)</option>
                  <option>Euro (EUR)</option>
                </select>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

'use client';

export default function SettingsManagement() {
  return (
    <div style={{ backgroundColor: '#f8f8f8', minHeight: '100vh', padding: '32px' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        
        <div style={{ marginBottom: '32px' }}>
          <h1 style={{ fontSize: '32px', fontWeight: 'bold', color: '#1a1a1a', marginBottom: '8px' }}>
            General Settings
          </h1>
          <p style={{ color: '#666', fontSize: '14px' }}>
            Configure store settings and preferences
          </p>
        </div>

        <div style={{ display: 'grid', gap: '24px' }}>
          
          <div style={{ backgroundColor: '#ffffff', padding: '32px', borderRadius: '12px', border: '1px solid #e5e5e5' }}>
            <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#1a1a1a', marginBottom: '20px' }}>Store Information</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#1a1a1a', marginBottom: '8px' }}>Store Name</label>
                <input type="text" defaultValue="FADRA Modest Store" style={{ width: '100%', padding: '12px 16px', border: '1px solid #e5e5e5', borderRadius: '8px', fontSize: '14px' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#1a1a1a', marginBottom: '8px' }}>Store Email</label>
                <input type="email" defaultValue="fadra.wear@gmail.com" style={{ width: '100%', padding: '12px 16px', border: '1px solid #e5e5e5', borderRadius: '8px', fontSize: '14px' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#1a1a1a', marginBottom: '8px' }}>Store Phone</label>
                <input type="tel" defaultValue="+60 12 345 6789" style={{ width: '100%', padding: '12px 16px', border: '1px solid #e5e5e5', borderRadius: '8px', fontSize: '14px' }} />
              </div>
            </div>
          </div>

          <div style={{ backgroundColor: '#ffffff', padding: '32px', borderRadius: '12px', border: '1px solid #e5e5e5' }}>
            <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#1a1a1a', marginBottom: '20px' }}>Brand Colors</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#1a1a1a', marginBottom: '8px' }}>Primary Color</label>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <input type="color" defaultValue="#d4a574" style={{ width: '60px', height: '45px', border: '1px solid #e5e5e5', borderRadius: '6px', cursor: 'pointer' }} />
                  <input type="text" defaultValue="#d4a574" style={{ flex: 1, padding: '12px 16px', border: '1px solid #e5e5e5', borderRadius: '8px', fontSize: '14px' }} />
                </div>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#1a1a1a', marginBottom: '8px' }}>Secondary Color</label>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <input type="color" defaultValue="#1a1a1a" style={{ width: '60px', height: '45px', border: '1px solid #e5e5e5', borderRadius: '6px', cursor: 'pointer' }} />
                  <input type="text" defaultValue="#1a1a1a" style={{ flex: 1, padding: '12px 16px', border: '1px solid #e5e5e5', borderRadius: '8px', fontSize: '14px' }} />
                </div>
              </div>
            </div>
          </div>

          <button style={{ padding: '14px 32px', backgroundColor: '#d4a574', color: '#ffffff', border: 'none', borderRadius: '8px', fontSize: '14px', fontWeight: '600', cursor: 'pointer', width: 'fit-content' }}>
            Save Changes
          </button>

        </div>

      </div>
    </div>
  );
}

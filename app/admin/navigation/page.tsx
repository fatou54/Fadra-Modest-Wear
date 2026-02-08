'use client';

export default function NavigationMenu() {
  return (
    <div style={{ backgroundColor: '#f8f8f8', minHeight: '100vh', padding: '32px' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        
        <div style={{ marginBottom: '32px' }}>
          <h1 style={{ fontSize: '32px', fontWeight: 'bold', color: '#1a1a1a', marginBottom: '8px' }}>
            Navigation Menu
          </h1>
          <p style={{ color: '#666', fontSize: '14px' }}>
            Manage site navigation and menu structure
          </p>
        </div>

        <div style={{ backgroundColor: '#ffffff', padding: '48px', borderRadius: '12px', border: '1px solid #e5e5e5', textAlign: 'center' }}>
          <div style={{ fontSize: '64px', marginBottom: '16px' }}>🧭</div>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1a1a1a', marginBottom: '12px' }}>
            Navigation Builder Coming Soon
          </h2>
          <p style={{ color: '#666', fontSize: '16px', maxWidth: '500px', margin: '0 auto' }}>
            Customize your site navigation, menus, and link structure with our drag-and-drop interface.
          </p>
        </div>

      </div>
    </div>
  );
}

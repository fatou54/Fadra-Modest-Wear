'use client';

export default function ContentPages() {
  const pages = [
    { id: 1, name: 'About Us', url: '/about', status: 'Published', lastEdited: 'Feb 5, 2024' },
    { id: 2, name: 'Shipping Info', url: '/shipping-info', status: 'Published', lastEdited: 'Feb 3, 2024' },
    { id: 3, name: 'Authenticity', url: '/authenticity', status: 'Published', lastEdited: 'Feb 3, 2024' },
    { id: 4, name: 'Returns & Exchanges', url: '/returns-exchanges', status: 'Published', lastEdited: 'Feb 3, 2024' },
    { id: 5, name: 'Quality Promise', url: '/quality', status: 'Published', lastEdited: 'Feb 3, 2024' },
  ];

  return (
    <div style={{ backgroundColor: '#f8f8f8', minHeight: '100vh', padding: '32px' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
          <div>
            <h1 style={{ fontSize: '32px', fontWeight: 'bold', color: '#1a1a1a', marginBottom: '8px' }}>
              Content Pages
            </h1>
            <p style={{ color: '#666', fontSize: '14px' }}>
              Manage static pages and content
            </p>
          </div>
          <button style={{ padding: '12px 24px', backgroundColor: '#d4a574', color: '#ffffff', border: 'none', borderRadius: '8px', fontSize: '14px', fontWeight: '600', cursor: 'pointer' }}>
            + Create Page
          </button>
        </div>

        <div style={{ backgroundColor: '#ffffff', borderRadius: '12px', border: '1px solid #e5e5e5', overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: '#fafafa', borderBottom: '1px solid #e5e5e5' }}>
                <th style={{ padding: '16px', textAlign: 'left', fontSize: '13px', fontWeight: '600', color: '#666' }}>Page Name</th>
                <th style={{ padding: '16px', textAlign: 'left', fontSize: '13px', fontWeight: '600', color: '#666' }}>URL</th>
                <th style={{ padding: '16px', textAlign: 'left', fontSize: '13px', fontWeight: '600', color: '#666' }}>Status</th>
                <th style={{ padding: '16px', textAlign: 'left', fontSize: '13px', fontWeight: '600', color: '#666' }}>Last Edited</th>
                <th style={{ padding: '16px', textAlign: 'right', fontSize: '13px', fontWeight: '600', color: '#666' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {pages.map((page, index) => (
                <tr key={page.id} style={{ borderBottom: index !== pages.length - 1 ? '1px solid #f0f0f0' : 'none' }}>
                  <td style={{ padding: '16px', fontSize: '14px', fontWeight: '500', color: '#1a1a1a' }}>{page.name}</td>
                  <td style={{ padding: '16px', fontSize: '14px', color: '#666' }}>{page.url}</td>
                  <td style={{ padding: '16px' }}>
                    <span style={{ fontSize: '12px', fontWeight: '600', color: '#2a9d8f', backgroundColor: '#e6f7f5', padding: '4px 12px', borderRadius: '12px' }}>
                      {page.status}
                    </span>
                  </td>
                  <td style={{ padding: '16px', fontSize: '13px', color: '#666' }}>{page.lastEdited}</td>
                  <td style={{ padding: '16px', textAlign: 'right' }}>
                    <button style={{ padding: '8px 16px', backgroundColor: 'transparent', color: '#d4a574', border: '1px solid #e5e5e5', borderRadius: '6px', fontSize: '13px', cursor: 'pointer' }}>
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}

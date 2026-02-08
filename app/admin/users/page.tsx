'use client';

export default function AdminsRoles() {
  const admins = [
    { id: 1, name: 'Admin User', email: 'admin@fadra.com', role: 'Super Admin', status: 'Active', lastLogin: '2 hours ago' },
    { id: 2, name: 'Store Manager', email: 'manager@fadra.com', role: 'Manager', status: 'Active', lastLogin: '1 day ago' },
    { id: 3, name: 'Content Editor', email: 'editor@fadra.com', role: 'Editor', status: 'Active', lastLogin: '3 days ago' },
  ];

  return (
    <div style={{ backgroundColor: '#f8f8f8', minHeight: '100vh', padding: '32px' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
          <div>
            <h1 style={{ fontSize: '32px', fontWeight: 'bold', color: '#1a1a1a', marginBottom: '8px' }}>
              Admins & Roles
            </h1>
            <p style={{ color: '#666', fontSize: '14px' }}>
              Manage admin users and permissions
            </p>
          </div>
          <button style={{ padding: '12px 24px', backgroundColor: '#d4a574', color: '#ffffff', border: 'none', borderRadius: '8px', fontSize: '14px', fontWeight: '600', cursor: 'pointer' }}>
            + Add Admin
          </button>
        </div>

        <div style={{ backgroundColor: '#ffffff', borderRadius: '12px', border: '1px solid #e5e5e5', overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: '#fafafa', borderBottom: '1px solid #e5e5e5' }}>
                <th style={{ padding: '16px', textAlign: 'left', fontSize: '13px', fontWeight: '600', color: '#666' }}>Admin</th>
                <th style={{ padding: '16px', textAlign: 'left', fontSize: '13px', fontWeight: '600', color: '#666' }}>Role</th>
                <th style={{ padding: '16px', textAlign: 'left', fontSize: '13px', fontWeight: '600', color: '#666' }}>Status</th>
                <th style={{ padding: '16px', textAlign: 'left', fontSize: '13px', fontWeight: '600', color: '#666' }}>Last Login</th>
                <th style={{ padding: '16px', textAlign: 'right', fontSize: '13px', fontWeight: '600', color: '#666' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {admins.map((admin, index) => (
                <tr key={admin.id} style={{ borderBottom: index !== admins.length - 1 ? '1px solid #f0f0f0' : 'none' }}>
                  <td style={{ padding: '16px' }}>
                    <div>
                      <p style={{ fontSize: '14px', fontWeight: '500', color: '#1a1a1a', marginBottom: '2px' }}>{admin.name}</p>
                      <p style={{ fontSize: '12px', color: '#999' }}>{admin.email}</p>
                    </div>
                  </td>
                  <td style={{ padding: '16px' }}>
                    <span style={{ fontSize: '12px', fontWeight: '600', color: '#d4a574', backgroundColor: '#fef3e8', padding: '4px 12px', borderRadius: '12px' }}>
                      {admin.role}
                    </span>
                  </td>
                  <td style={{ padding: '16px' }}>
                    <span style={{ fontSize: '12px', fontWeight: '600', color: '#2a9d8f', backgroundColor: '#e6f7f5', padding: '4px 12px', borderRadius: '12px' }}>
                      {admin.status}
                    </span>
                  </td>
                  <td style={{ padding: '16px', fontSize: '13px', color: '#666' }}>{admin.lastLogin}</td>
                  <td style={{ padding: '16px', textAlign: 'right' }}>
                    <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                      <button style={{ padding: '8px 16px', backgroundColor: 'transparent', color: '#d4a574', border: '1px solid #e5e5e5', borderRadius: '6px', fontSize: '13px', cursor: 'pointer' }}>
                        Edit
                      </button>
                      <button style={{ padding: '8px 16px', backgroundColor: 'transparent', color: '#e74c3c', border: '1px solid #e5e5e5', borderRadius: '6px', fontSize: '13px', cursor: 'pointer' }}>
                        Remove
                      </button>
                    </div>
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

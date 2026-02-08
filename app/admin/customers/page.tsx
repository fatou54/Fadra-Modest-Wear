'use client';

export default function CustomersManagement() {
  const customers = [
    { id: 1, name: 'Amira Hassan', email: 'amira@example.com', orders: 12, totalSpent: 'RM 5,480', joined: 'Jan 15, 2024', status: 'VIP' },
    { id: 2, name: 'Sarah Ahmed', email: 'sarah@example.com', orders: 8, totalSpent: 'RM 3,290', joined: 'Jan 20, 2024', status: 'Regular' },
    { id: 3, name: 'Fatima Khan', email: 'fatima@example.com', orders: 15, totalSpent: 'RM 8,750', joined: 'Dec 10, 2023', status: 'VIP' },
    { id: 4, name: 'Layla Ibrahim', email: 'layla@example.com', orders: 5, totalSpent: 'RM 2,140', joined: 'Feb 1, 2024', status: 'Regular' },
    { id: 5, name: 'Mariam Ali', email: 'mariam@example.com', orders: 3, totalSpent: 'RM 1,890', joined: 'Feb 3, 2024', status: 'New' },
  ];

  return (
    <div style={{ backgroundColor: '#f8f8f8', minHeight: '100vh', padding: '32px' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        
        <div style={{ marginBottom: '32px' }}>
          <h1 style={{ fontSize: '32px', fontWeight: 'bold', color: '#1a1a1a', marginBottom: '8px' }}>
            Customers
          </h1>
          <p style={{ color: '#666', fontSize: '14px' }}>
            View and manage customer accounts and order history
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '24px' }}>
          <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '12px', border: '1px solid #e5e5e5' }}>
            <p style={{ fontSize: '12px', color: '#666', marginBottom: '8px' }}>Total Customers</p>
            <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#1a1a1a' }}>1,247</p>
          </div>
          <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '12px', border: '1px solid #e5e5e5' }}>
            <p style={{ fontSize: '12px', color: '#666', marginBottom: '8px' }}>VIP Customers</p>
            <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#d4a574' }}>89</p>
          </div>
          <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '12px', border: '1px solid #e5e5e5' }}>
            <p style={{ fontSize: '12px', color: '#666', marginBottom: '8px' }}>New This Month</p>
            <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#2a9d8f' }}>156</p>
          </div>
          <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '12px', border: '1px solid #e5e5e5' }}>
            <p style={{ fontSize: '12px', color: '#666', marginBottom: '8px' }}>Avg Order Value</p>
            <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#1a1a1a' }}>RM 428</p>
          </div>
        </div>

        <div style={{ backgroundColor: '#ffffff', borderRadius: '12px', border: '1px solid #e5e5e5', overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: '#fafafa', borderBottom: '1px solid #e5e5e5' }}>
                <th style={{ padding: '16px', textAlign: 'left', fontSize: '13px', fontWeight: '600', color: '#666' }}>Customer</th>
                <th style={{ padding: '16px', textAlign: 'left', fontSize: '13px', fontWeight: '600', color: '#666' }}>Orders</th>
                <th style={{ padding: '16px', textAlign: 'left', fontSize: '13px', fontWeight: '600', color: '#666' }}>Total Spent</th>
                <th style={{ padding: '16px', textAlign: 'left', fontSize: '13px', fontWeight: '600', color: '#666' }}>Status</th>
                <th style={{ padding: '16px', textAlign: 'left', fontSize: '13px', fontWeight: '600', color: '#666' }}>Joined</th>
                <th style={{ padding: '16px', textAlign: 'right', fontSize: '13px', fontWeight: '600', color: '#666' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer, index) => (
                <tr key={customer.id} style={{ borderBottom: index !== customers.length - 1 ? '1px solid #f0f0f0' : 'none' }}>
                  <td style={{ padding: '16px' }}>
                    <div>
                      <p style={{ fontSize: '14px', fontWeight: '500', color: '#1a1a1a', marginBottom: '2px' }}>{customer.name}</p>
                      <p style={{ fontSize: '12px', color: '#999' }}>{customer.email}</p>
                    </div>
                  </td>
                  <td style={{ padding: '16px', fontSize: '14px', color: '#666' }}>{customer.orders}</td>
                  <td style={{ padding: '16px', fontSize: '14px', fontWeight: '600', color: '#1a1a1a' }}>{customer.totalSpent}</td>
                  <td style={{ padding: '16px' }}>
                    <span style={{ fontSize: '12px', fontWeight: '600', color: customer.status === 'VIP' ? '#d4a574' : '#666', backgroundColor: customer.status === 'VIP' ? '#fef3e8' : '#f5f5f5', padding: '4px 12px', borderRadius: '12px' }}>
                      {customer.status}
                    </span>
                  </td>
                  <td style={{ padding: '16px', fontSize: '13px', color: '#666' }}>{customer.joined}</td>
                  <td style={{ padding: '16px', textAlign: 'right' }}>
                    <button style={{ padding: '8px 16px', backgroundColor: 'transparent', color: '#d4a574', border: '1px solid #e5e5e5', borderRadius: '6px', fontSize: '13px', cursor: 'pointer' }}>
                      View Profile
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

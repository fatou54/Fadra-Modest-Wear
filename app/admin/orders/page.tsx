'use client';

import { useState } from 'react';

export default function OrdersManagement() {
  const [selectedStatus, setSelectedStatus] = useState('All');

  const orders = [
    { id: 'ORD-2847', customer: 'Amira Hassan', email: 'amira@example.com', product: 'Silk Abaya - Black', amount: 'RM 459', status: 'Processing', date: 'Feb 7, 2024 - 2:30 PM', shipping: 'Standard' },
    { id: 'ORD-2846', customer: 'Sarah Ahmed', email: 'sarah@example.com', product: 'Rose Hijab Set', amount: 'RM 129', status: 'Shipped', date: 'Feb 7, 2024 - 10:15 AM', shipping: 'Express' },
    { id: 'ORD-2845', customer: 'Fatima Khan', email: 'fatima@example.com', product: 'Luxury Handbag', amount: 'RM 890', status: 'Delivered', date: 'Feb 6, 2024 - 4:45 PM', shipping: 'Express' },
    { id: 'ORD-2844', customer: 'Layla Ibrahim', email: 'layla@example.com', product: 'Pearl Dress - Ivory', amount: 'RM 599', status: 'Processing', date: 'Feb 6, 2024 - 11:20 AM', shipping: 'Standard' },
    { id: 'ORD-2843', customer: 'Mariam Ali', email: 'mariam@example.com', product: 'Modest Suit - Navy', amount: 'RM 749', status: 'Pending', date: 'Feb 5, 2024 - 3:10 PM', shipping: 'Standard' },
    { id: 'ORD-2842', customer: 'Yasmin Hassan', email: 'yasmin@example.com', product: 'Oud Perfume 50ml', amount: 'RM 299', status: 'Cancelled', date: 'Feb 5, 2024 - 9:00 AM', shipping: 'Standard' },
    { id: 'ORD-2841', customer: 'Noor Abdullah', email: 'noor@example.com', product: 'Premium Hijab - Silk', amount: 'RM 89', status: 'Delivered', date: 'Feb 4, 2024 - 1:30 PM', shipping: 'Standard' },
  ];

  const statuses = ['All', 'Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Delivered':
        return { bg: '#e6f7f5', text: '#2a9d8f' };
      case 'Shipped':
        return { bg: '#e3f2fd', text: '#4a90e2' };
      case 'Processing':
        return { bg: '#fff3e0', text: '#f39c12' };
      case 'Pending':
        return { bg: '#f5f5f5', text: '#95a5a6' };
      case 'Cancelled':
        return { bg: '#fee', text: '#e74c3c' };
      default:
        return { bg: '#f0f0f0', text: '#666' };
    }
  };

  return (
    <div style={{ backgroundColor: '#f8f8f8', minHeight: '100vh', padding: '32px' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ marginBottom: '32px' }}>
          <h1 style={{ fontSize: '32px', fontWeight: 'bold', color: '#1a1a1a', marginBottom: '8px' }}>
            Order Management
          </h1>
          <p style={{ color: '#666', fontSize: '14px' }}>
            Process orders, update statuses, and track deliveries
          </p>
        </div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '24px' }}>
          {[
            { label: 'All Orders', value: '347', color: '#1a1a1a' },
            { label: 'Pending', value: '23', color: '#95a5a6' },
            { label: 'Processing', value: '45', color: '#f39c12' },
            { label: 'Shipped', value: '89', color: '#4a90e2' },
            { label: 'Delivered', value: '178', color: '#2a9d8f' },
            { label: 'Cancelled', value: '12', color: '#e74c3c' },
          ].map((stat, index) => (
            <div key={index} style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '12px', border: '1px solid #e5e5e5' }}>
              <p style={{ fontSize: '12px', color: '#666', marginBottom: '8px' }}>{stat.label}</p>
              <p style={{ fontSize: '28px', fontWeight: 'bold', color: stat.color }}>{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '12px', border: '1px solid #e5e5e5', marginBottom: '24px' }}>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            {statuses.map(status => (
              <button
                key={status}
                onClick={() => setSelectedStatus(status)}
                style={{
                  padding: '8px 20px',
                  backgroundColor: selectedStatus === status ? '#d4a574' : 'transparent',
                  color: selectedStatus === status ? '#ffffff' : '#666',
                  border: selectedStatus === status ? 'none' : '1px solid #e5e5e5',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        {/* Orders Table */}
        <div style={{ backgroundColor: '#ffffff', borderRadius: '12px', border: '1px solid #e5e5e5', overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: '#fafafa', borderBottom: '1px solid #e5e5e5' }}>
                <th style={{ padding: '16px', textAlign: 'left', fontSize: '13px', fontWeight: '600', color: '#666' }}>Order ID</th>
                <th style={{ padding: '16px', textAlign: 'left', fontSize: '13px', fontWeight: '600', color: '#666' }}>Customer</th>
                <th style={{ padding: '16px', textAlign: 'left', fontSize: '13px', fontWeight: '600', color: '#666' }}>Product</th>
                <th style={{ padding: '16px', textAlign: 'left', fontSize: '13px', fontWeight: '600', color: '#666' }}>Amount</th>
                <th style={{ padding: '16px', textAlign: 'left', fontSize: '13px', fontWeight: '600', color: '#666' }}>Status</th>
                <th style={{ padding: '16px', textAlign: 'left', fontSize: '13px', fontWeight: '600', color: '#666' }}>Date</th>
                <th style={{ padding: '16px', textAlign: 'right', fontSize: '13px', fontWeight: '600', color: '#666' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr 
                  key={order.id}
                  style={{ 
                    borderBottom: index !== orders.length - 1 ? '1px solid #f0f0f0' : 'none',
                    transition: 'background-color 0.2s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#fafafa';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  <td style={{ padding: '16px', fontSize: '14px', fontWeight: '600', color: '#d4a574' }}>{order.id}</td>
                  <td style={{ padding: '16px' }}>
                    <div>
                      <p style={{ fontSize: '14px', fontWeight: '500', color: '#1a1a1a', marginBottom: '2px' }}>{order.customer}</p>
                      <p style={{ fontSize: '12px', color: '#999' }}>{order.email}</p>
                    </div>
                  </td>
                  <td style={{ padding: '16px', fontSize: '14px', color: '#666' }}>{order.product}</td>
                  <td style={{ padding: '16px', fontSize: '14px', fontWeight: '600', color: '#1a1a1a' }}>{order.amount}</td>
                  <td style={{ padding: '16px' }}>
                    <span style={{
                      fontSize: '12px',
                      fontWeight: '600',
                      color: getStatusColor(order.status).text,
                      backgroundColor: getStatusColor(order.status).bg,
                      padding: '4px 12px',
                      borderRadius: '12px',
                      display: 'inline-block'
                    }}>
                      {order.status}
                    </span>
                  </td>
                  <td style={{ padding: '16px', fontSize: '13px', color: '#666' }}>{order.date}</td>
                  <td style={{ padding: '16px', textAlign: 'right' }}>
                    <button
                      style={{
                        padding: '8px 16px',
                        backgroundColor: 'transparent',
                        color: '#d4a574',
                        border: '1px solid #e5e5e5',
                        borderRadius: '6px',
                        fontSize: '13px',
                        fontWeight: '500',
                        cursor: 'pointer',
                        transition: 'all 0.2s'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = '#d4a574';
                        e.currentTarget.style.backgroundColor = '#fafafa';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = '#e5e5e5';
                        e.currentTarget.style.backgroundColor = 'transparent';
                      }}
                    >
                      View Details
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

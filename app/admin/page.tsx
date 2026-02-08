'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminDashboard() {
  const router = useRouter();
  
  const stats = [
    {
      label: 'Total Sales',
      value: 'RM 48,290',
      change: '+12.5%',
      icon: '💰',
      trend: 'up'
    },
    {
      label: 'Orders Today',
      value: '24',
      change: '+8',
      icon: '📦',
      trend: 'up'
    },
    {
      label: 'New Customers',
      value: '156',
      change: '+23',
      icon: '👥',
      trend: 'up'
    },
    {
      label: 'Low Stock Alerts',
      value: '7',
      change: '3 critical',
      icon: '⚠️',
      trend: 'warning'
    }
  ];

  const recentOrders = [
    { id: 'ORD-2847', customer: 'Amira Hassan', product: 'Silk Abaya - Black', amount: 'RM 459', status: 'Processing', date: '2 hours ago' },
    { id: 'ORD-2846', customer: 'Sarah Ahmed', product: 'Rose Hijab Set', amount: 'RM 129', status: 'Shipped', date: '4 hours ago' },
    { id: 'ORD-2845', customer: 'Fatima Khan', product: 'Luxury Handbag', amount: 'RM 890', status: 'Delivered', date: '6 hours ago' },
    { id: 'ORD-2844', customer: 'Layla Ibrahim', product: 'Pearl Dress - Ivory', amount: 'RM 599', status: 'Processing', date: '1 day ago' },
    { id: 'ORD-2843', customer: 'Mariam Ali', product: 'Modest Suit - Navy', amount: 'RM 749', status: 'Pending', date: '1 day ago' }
  ];

  const trendingProducts = [
    {
      name: 'Silk Abaya - Black',
      sales: 342,
      revenue: 'RM 157,128',
      image: 'https://images.unsplash.com/photo-1583391733981-5aaa7f36adbc?w=100&h=100&fit=crop'
    },
    {
      name: 'Rose Hijab Collection',
      sales: 289,
      revenue: 'RM 37,257',
      image: 'https://images.unsplash.com/photo-1601413193096-b6fc5c5e7cb2?w=100&h=100&fit=crop'
    },
    {
      name: 'Luxury Handbag - Gold',
      sales: 234,
      revenue: 'RM 208,260',
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=100&h=100&fit=crop'
    },
    {
      name: 'Rose Lip Gloss',
      sales: 156,
      revenue: 'RM 3,900',
      image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=100&h=100&fit=crop'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Delivered':
        return '#2a9d8f';
      case 'Shipped':
        return '#4a90e2';
      case 'Processing':
        return '#f39c12';
      case 'Pending':
        return '#95a5a6';
      case 'Cancelled':
        return '#e74c3c';
      default:
        return '#666';
    }
  };

  const revenueData = [
    { day: 'Mon', amount: 4200 },
    { day: 'Tue', amount: 5800 },
    { day: 'Wed', amount: 7200 },
    { day: 'Thu', amount: 6100 },
    { day: 'Fri', amount: 8900 },
    { day: 'Sat', amount: 10200 },
    { day: 'Sun', amount: 9800 }
  ];

  const maxRevenue = Math.max(...revenueData.map(d => d.amount));

  return (
    <div style={{ backgroundColor: '#f8f8f8', minHeight: '100vh', padding: '32px' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ marginBottom: '32px' }}>
          <h1 style={{ fontSize: '32px', fontWeight: 'bold', color: '#1a1a1a', marginBottom: '8px' }}>
            Dashboard Overview
          </h1>
          <p style={{ color: '#666', fontSize: '14px' }}>
            Welcome back! Here's what's happening with your store today.
          </p>
        </div>

        {/* Stats Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px', marginBottom: '32px' }}>
          {stats.map((stat, index) => (
            <div 
              key={index}
              style={{
                backgroundColor: '#ffffff',
                padding: '24px',
                borderRadius: '12px',
                border: '1px solid #e5e5e5',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                <span style={{ fontSize: '32px' }}>{stat.icon}</span>
                <span style={{ 
                  fontSize: '12px', 
                  fontWeight: '600',
                  color: stat.trend === 'warning' ? '#ff6b35' : '#2a9d8f',
                  backgroundColor: stat.trend === 'warning' ? '#fff3e0' : '#e6f7f5',
                  padding: '4px 8px',
                  borderRadius: '6px'
                }}>
                  {stat.change}
                </span>
              </div>
              <p style={{ color: '#666', fontSize: '14px', marginBottom: '4px' }}>{stat.label}</p>
              <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#1a1a1a' }}>{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Revenue Chart & Quick Actions */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px', marginBottom: '32px' }}>
          
          {/* Revenue Chart */}
          <div style={{ backgroundColor: '#ffffff', padding: '24px', borderRadius: '12px', border: '1px solid #e5e5e5' }}>
            <h2 style={{ fontSize: '18px', fontWeight: '600', color: '#1a1a1a', marginBottom: '24px' }}>
              Revenue (Last 7 Days)
            </h2>
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', height: '200px', gap: '16px' }}>
              {revenueData.map((data, index) => (
                <div key={index} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                  <div style={{ 
                    width: '100%', 
                    backgroundColor: '#d4a574', 
                    borderRadius: '8px 8px 0 0',
                    height: `${(data.amount / maxRevenue) * 100}%`,
                    minHeight: '20px',
                    position: 'relative',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#c69563';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#d4a574';
                  }}
                  title={`RM ${data.amount}`}
                  />
                  <span style={{ fontSize: '12px', color: '#666', fontWeight: '500' }}>{data.day}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div style={{ backgroundColor: '#ffffff', padding: '24px', borderRadius: '12px', border: '1px solid #e5e5e5' }}>
            <h2 style={{ fontSize: '18px', fontWeight: '600', color: '#1a1a1a', marginBottom: '16px' }}>
              Quick Actions
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <button
                onClick={() => router.push('/admin/products')}
                style={{
                  padding: '12px 16px',
                  backgroundColor: '#d4a574',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textAlign: 'left',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#c69563';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#d4a574';
                }}
              >
                <span>➕</span> Add New Product
              </button>
              <button
                onClick={() => router.push('/admin/orders')}
                style={{
                  padding: '12px 16px',
                  backgroundColor: '#1a1a1a',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textAlign: 'left',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#333333';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#1a1a1a';
                }}
              >
                <span>📦</span> Process Orders
              </button>
              <button
                onClick={() => router.push('/admin/homepage')}
                style={{
                  padding: '12px 16px',
                  backgroundColor: '#2a9d8f',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textAlign: 'left',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#248a7d';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#2a9d8f';
                }}
              >
                <span>🏠</span> Edit Homepage
              </button>
              <button
                onClick={() => router.push('/admin/reports')}
                style={{
                  padding: '12px 16px',
                  backgroundColor: '#ffffff',
                  color: '#1a1a1a',
                  border: '2px solid #e5e5e5',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textAlign: 'left',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#d4a574';
                  e.currentTarget.style.backgroundColor = '#fafafa';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e5e5e5';
                  e.currentTarget.style.backgroundColor = '#ffffff';
                }}
              >
                <span>📊</span> View Reports
              </button>
            </div>
          </div>
        </div>

        {/* Recent Orders & Trending Products */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '24px' }}>
          
          {/* Recent Orders */}
          <div style={{ backgroundColor: '#ffffff', padding: '24px', borderRadius: '12px', border: '1px solid #e5e5e5' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h2 style={{ fontSize: '18px', fontWeight: '600', color: '#1a1a1a' }}>
                Recent Orders
              </h2>
              <button
                onClick={() => router.push('/admin/orders')}
                style={{
                  padding: '8px 16px',
                  backgroundColor: 'transparent',
                  color: '#d4a574',
                  border: 'none',
                  borderRadius: '6px',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#fafafa';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                View All →
              </button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {recentOrders.map((order, index) => (
                <div 
                  key={index}
                  style={{
                    padding: '16px',
                    border: '1px solid #f0f0f0',
                    borderRadius: '8px',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#fafafa';
                    e.currentTarget.style.borderColor = '#e5e5e5';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.borderColor = '#f0f0f0';
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                    <div>
                      <p style={{ fontSize: '14px', fontWeight: '600', color: '#1a1a1a', marginBottom: '4px' }}>
                        {order.id}
                      </p>
                      <p style={{ fontSize: '13px', color: '#666' }}>{order.customer}</p>
                    </div>
                    <span style={{
                      fontSize: '12px',
                      fontWeight: '600',
                      color: '#ffffff',
                      backgroundColor: getStatusColor(order.status),
                      padding: '4px 12px',
                      borderRadius: '12px'
                    }}>
                      {order.status}
                    </span>
                  </div>
                  <p style={{ fontSize: '13px', color: '#666', marginBottom: '4px' }}>{order.product}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '14px', fontWeight: '600', color: '#d4a574' }}>{order.amount}</span>
                    <span style={{ fontSize: '12px', color: '#999' }}>{order.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Trending Products */}
          <div style={{ backgroundColor: '#ffffff', padding: '24px', borderRadius: '12px', border: '1px solid #e5e5e5' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h2 style={{ fontSize: '18px', fontWeight: '600', color: '#1a1a1a' }}>
                Trending Products
              </h2>
              <button
                onClick={() => router.push('/admin/products')}
                style={{
                  padding: '8px 16px',
                  backgroundColor: 'transparent',
                  color: '#d4a574',
                  border: 'none',
                  borderRadius: '6px',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#fafafa';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                View All →
              </button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {trendingProducts.map((product, index) => (
                <div 
                  key={index}
                  style={{
                    display: 'flex',
                    gap: '12px',
                    padding: '12px',
                    border: '1px solid #f0f0f0',
                    borderRadius: '8px',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#fafafa';
                    e.currentTarget.style.borderColor = '#e5e5e5';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.borderColor = '#f0f0f0';
                  }}
                >
                  <img 
                    src={product.image} 
                    alt={product.name}
                    style={{
                      width: '60px',
                      height: '60px',
                      objectFit: 'cover',
                      borderRadius: '8px'
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <p style={{ fontSize: '14px', fontWeight: '600', color: '#1a1a1a', marginBottom: '4px' }}>
                      {product.name}
                    </p>
                    <p style={{ fontSize: '12px', color: '#666', marginBottom: '4px' }}>
                      {product.sales} sales
                    </p>
                    <p style={{ fontSize: '13px', fontWeight: '600', color: '#d4a574' }}>
                      {product.revenue}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

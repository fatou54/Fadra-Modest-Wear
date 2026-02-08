'use client';

import { useState } from 'react';

export default function ProductsManagement() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showAddForm, setShowAddForm] = useState(false);

  const products = [
    { id: 1, name: 'Silk Abaya - Black', category: 'Abayas', price: 459, stock: 24, status: 'Active', image: 'https://images.unsplash.com/photo-1583391733981-5aaa7f36adbc?w=100&h=100&fit=crop' },
    { id: 2, name: 'Rose Hijab Set', category: 'Hijabs', price: 129, stock: 45, status: 'Active', image: 'https://images.unsplash.com/photo-1601413193096-b6fc5c5e7cb2?w=100&h=100&fit=crop' },
    { id: 3, name: 'Luxury Handbag - Gold', category: 'Handbags', price: 890, stock: 8, status: 'Active', image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=100&h=100&fit=crop' },
    { id: 4, name: 'Pearl Dress - Ivory', category: 'Dresses', price: 599, stock: 15, status: 'Active', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=100&h=100&fit=crop' },
    { id: 5, name: 'Modest Suit - Navy', category: 'Suits', price: 749, stock: 12, status: 'Active', image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=100&h=100&fit=crop' },
    { id: 6, name: 'Oud Perfume 50ml', category: 'Fragrances', price: 299, stock: 3, status: 'Low Stock', image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=100&h=100&fit=crop' },
    { id: 7, name: 'Premium Hijab - Silk', category: 'Hijabs', price: 89, stock: 67, status: 'Active', image: 'https://images.unsplash.com/photo-1601413193096-b6fc5c5e7cb2?w=100&h=100&fit=crop' },
    { id: 8, name: 'Evening Abaya - Emerald', category: 'Abayas', price: 689, stock: 0, status: 'Out of Stock', image: 'https://images.unsplash.com/photo-1583391733981-5aaa7f36adbc?w=100&h=100&fit=crop' },
  ];

  const categories = ['All', 'Abayas', 'Dresses', 'Hijabs', 'Handbags', 'Suits', 'Fragrances'];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return { bg: '#e6f7f5', text: '#2a9d8f' };
      case 'Low Stock':
        return { bg: '#fff3e0', text: '#ff6b35' };
      case 'Out of Stock':
        return { bg: '#fee', text: '#e74c3c' };
      default:
        return { bg: '#f0f0f0', text: '#666' };
    }
  };

  return (
    <div style={{ backgroundColor: '#f8f8f8', minHeight: '100vh', padding: '32px' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
          <div>
            <h1 style={{ fontSize: '32px', fontWeight: 'bold', color: '#1a1a1a', marginBottom: '8px' }}>
              Product Management
            </h1>
            <p style={{ color: '#666', fontSize: '14px' }}>
              Manage your product catalog, inventory, and pricing
            </p>
          </div>
          <button
            onClick={() => setShowAddForm(true)}
            style={{
              padding: '12px 24px',
              backgroundColor: '#d4a574',
              color: '#ffffff',
              border: 'none',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
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
            <span style={{ fontSize: '18px' }}>+</span> Add New Product
          </button>
        </div>

        {/* Filters */}
        <div style={{ backgroundColor: '#ffffff', padding: '24px', borderRadius: '12px', border: '1px solid #e5e5e5', marginBottom: '24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 200px', gap: '16px' }}>
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                padding: '12px 16px',
                border: '1px solid #e5e5e5',
                borderRadius: '8px',
                fontSize: '14px',
                outline: 'none'
              }}
            />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              style={{
                padding: '12px 16px',
                border: '1px solid #e5e5e5',
                borderRadius: '8px',
                fontSize: '14px',
                outline: 'none',
                cursor: 'pointer'
              }}
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Products Table */}
        <div style={{ backgroundColor: '#ffffff', borderRadius: '12px', border: '1px solid #e5e5e5', overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: '#fafafa', borderBottom: '1px solid #e5e5e5' }}>
                <th style={{ padding: '16px', textAlign: 'left', fontSize: '13px', fontWeight: '600', color: '#666' }}>Product</th>
                <th style={{ padding: '16px', textAlign: 'left', fontSize: '13px', fontWeight: '600', color: '#666' }}>Category</th>
                <th style={{ padding: '16px', textAlign: 'left', fontSize: '13px', fontWeight: '600', color: '#666' }}>Price</th>
                <th style={{ padding: '16px', textAlign: 'left', fontSize: '13px', fontWeight: '600', color: '#666' }}>Stock</th>
                <th style={{ padding: '16px', textAlign: 'left', fontSize: '13px', fontWeight: '600', color: '#666' }}>Status</th>
                <th style={{ padding: '16px', textAlign: 'right', fontSize: '13px', fontWeight: '600', color: '#666' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr 
                  key={product.id}
                  style={{ 
                    borderBottom: index !== products.length - 1 ? '1px solid #f0f0f0' : 'none',
                    transition: 'background-color 0.2s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#fafafa';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  <td style={{ padding: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <img 
                        src={product.image} 
                        alt={product.name}
                        style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '8px' }}
                      />
                      <span style={{ fontSize: '14px', fontWeight: '500', color: '#1a1a1a' }}>{product.name}</span>
                    </div>
                  </td>
                  <td style={{ padding: '16px', fontSize: '14px', color: '#666' }}>{product.category}</td>
                  <td style={{ padding: '16px', fontSize: '14px', fontWeight: '600', color: '#1a1a1a' }}>RM {product.price}</td>
                  <td style={{ padding: '16px', fontSize: '14px', color: '#666' }}>{product.stock} units</td>
                  <td style={{ padding: '16px' }}>
                    <span style={{
                      fontSize: '12px',
                      fontWeight: '600',
                      color: getStatusColor(product.status).text,
                      backgroundColor: getStatusColor(product.status).bg,
                      padding: '4px 12px',
                      borderRadius: '12px',
                      display: 'inline-block'
                    }}>
                      {product.status}
                    </span>
                  </td>
                  <td style={{ padding: '16px', textAlign: 'right' }}>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
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
                        Edit
                      </button>
                      <button
                        style={{
                          padding: '8px 16px',
                          backgroundColor: 'transparent',
                          color: '#e74c3c',
                          border: '1px solid #e5e5e5',
                          borderRadius: '6px',
                          fontSize: '13px',
                          fontWeight: '500',
                          cursor: 'pointer',
                          transition: 'all 0.2s'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = '#e74c3c';
                          e.currentTarget.style.backgroundColor = '#fee';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = '#e5e5e5';
                          e.currentTarget.style.backgroundColor = 'transparent';
                        }}
                      >
                        Delete
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

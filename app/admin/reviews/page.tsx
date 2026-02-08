'use client';

import { useState } from 'react';

export default function ReviewsManagement() {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const reviews = [
    { id: 1, customer: 'Amira Hassan', product: 'Silk Abaya - Black', rating: 5, comment: 'Absolutely stunning! The quality is exceptional and the fit is perfect. Will definitely order more.', status: 'Approved', date: 'Feb 7, 2024', verified: true },
    { id: 2, customer: 'Sarah Ahmed', product: 'Rose Hijab Set', rating: 5, comment: 'Beautiful fabric and colors. Exactly as shown in the pictures. Very happy with my purchase!', status: 'Approved', date: 'Feb 6, 2024', verified: true },
    { id: 3, customer: 'Fatima Khan', product: 'Luxury Handbag', rating: 4, comment: 'Great quality handbag, but the strap is a bit short for my preference. Overall very satisfied.', status: 'Approved', date: 'Feb 5, 2024', verified: true },
    { id: 4, customer: 'Anonymous', product: 'Pearl Dress', rating: 2, comment: 'Not worth the price. Quality is poor.', status: 'Pending', date: 'Feb 5, 2024', verified: false },
    { id: 5, customer: 'Layla Ibrahim', product: 'Modest Suit - Navy', rating: 5, comment: 'Professional and elegant. Perfect for work. The tailoring is impeccable!', status: 'Approved', date: 'Feb 4, 2024', verified: true },
    { id: 6, customer: 'Mariam Ali', product: 'Oud Perfume', rating: 5, comment: 'The scent is divine! Long-lasting and sophisticated. Best oud perfume I\'ve tried.', status: 'Approved', date: 'Feb 3, 2024', verified: true },
  ];

  const filters = ['All', 'Approved', 'Pending', 'Rejected'];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Approved':
        return { bg: '#e6f7f5', text: '#2a9d8f' };
      case 'Pending':
        return { bg: '#fff3e0', text: '#f39c12' };
      case 'Rejected':
        return { bg: '#fee', text: '#e74c3c' };
      default:
        return { bg: '#f0f0f0', text: '#666' };
    }
  };

  const renderStars = (rating: number) => {
    return '⭐'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  return (
    <div style={{ backgroundColor: '#f8f8f8', minHeight: '100vh', padding: '32px' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ marginBottom: '32px' }}>
          <h1 style={{ fontSize: '32px', fontWeight: 'bold', color: '#1a1a1a', marginBottom: '8px' }}>
            Reviews Management
          </h1>
          <p style={{ color: '#666', fontSize: '14px' }}>
            Moderate customer reviews and testimonials
          </p>
        </div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '24px' }}>
          <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '12px', border: '1px solid #e5e5e5' }}>
            <p style={{ fontSize: '12px', color: '#666', marginBottom: '8px' }}>Total Reviews</p>
            <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#1a1a1a' }}>284</p>
          </div>
          <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '12px', border: '1px solid #e5e5e5' }}>
            <p style={{ fontSize: '12px', color: '#666', marginBottom: '8px' }}>Average Rating</p>
            <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#d4a574' }}>4.8 ⭐</p>
          </div>
          <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '12px', border: '1px solid #e5e5e5' }}>
            <p style={{ fontSize: '12px', color: '#666', marginBottom: '8px' }}>Pending Reviews</p>
            <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#f39c12' }}>12</p>
          </div>
        </div>

        {/* Filters */}
        <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '12px', border: '1px solid #e5e5e5', marginBottom: '24px' }}>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                style={{
                  padding: '8px 20px',
                  backgroundColor: selectedFilter === filter ? '#d4a574' : 'transparent',
                  color: selectedFilter === filter ? '#ffffff' : '#666',
                  border: selectedFilter === filter ? 'none' : '1px solid #e5e5e5',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Reviews List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {reviews.map(review => (
            <div 
              key={review.id}
              style={{ 
                backgroundColor: '#ffffff', 
                padding: '24px', 
                borderRadius: '12px', 
                border: '1px solid #e5e5e5' 
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                    <span style={{ fontSize: '16px', fontWeight: '600', color: '#1a1a1a' }}>
                      {review.customer}
                    </span>
                    {review.verified && (
                      <span style={{ fontSize: '12px', color: '#2a9d8f', backgroundColor: '#e6f7f5', padding: '2px 8px', borderRadius: '4px' }}>
                        ✓ Verified Buyer
                      </span>
                    )}
                  </div>
                  <p style={{ fontSize: '14px', color: '#666', marginBottom: '8px' }}>
                    {review.product}
                  </p>
                  <div style={{ fontSize: '16px', marginBottom: '12px' }}>
                    {renderStars(review.rating)}
                  </div>
                  <p style={{ fontSize: '14px', color: '#1a1a1a', lineHeight: '1.6' }}>
                    {review.comment}
                  </p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '12px' }}>
                  <span style={{
                    fontSize: '12px',
                    fontWeight: '600',
                    color: getStatusColor(review.status).text,
                    backgroundColor: getStatusColor(review.status).bg,
                    padding: '4px 12px',
                    borderRadius: '12px'
                  }}>
                    {review.status}
                  </span>
                  <span style={{ fontSize: '12px', color: '#999' }}>{review.date}</span>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '8px', paddingTop: '16px', borderTop: '1px solid #f0f0f0' }}>
                <button
                  style={{
                    padding: '8px 16px',
                    backgroundColor: '#2a9d8f',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '6px',
                    fontSize: '13px',
                    fontWeight: '500',
                    cursor: 'pointer'
                  }}
                >
                  Approve
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
                    cursor: 'pointer'
                  }}
                >
                  Reject
                </button>
                <button
                  style={{
                    padding: '8px 16px',
                    backgroundColor: 'transparent',
                    color: '#666',
                    border: '1px solid #e5e5e5',
                    borderRadius: '6px',
                    fontSize: '13px',
                    fontWeight: '500',
                    cursor: 'pointer'
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

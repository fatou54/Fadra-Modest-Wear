'use client';

import { useState } from 'react';

export default function HomepageBuilder() {
  const [activeSection, setActiveSection] = useState('hero');

  const sections = [
    { id: 'hero', name: 'Hero Section', icon: '🎯' },
    { id: 'categories', name: 'Category Grid', icon: '📦' },
    { id: 'trending', name: 'Trending Now', icon: '🔥' },
    { id: 'testimonials', name: 'Testimonials', icon: '💬' },
    { id: 'subscribe', name: 'Email Subscribe', icon: '✉️' },
  ];

  return (
    <div style={{ backgroundColor: '#f8f8f8', minHeight: '100vh', padding: '32px' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ marginBottom: '32px' }}>
          <h1 style={{ fontSize: '32px', fontWeight: 'bold', color: '#1a1a1a', marginBottom: '8px' }}>
            Homepage Builder
          </h1>
          <p style={{ color: '#666', fontSize: '14px' }}>
            Customize your homepage sections, content, and layout
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '250px 1fr', gap: '24px' }}>
          
          {/* Sidebar */}
          <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '12px', border: '1px solid #e5e5e5', height: 'fit-content' }}>
            <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#666', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Sections
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {sections.map(section => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  style={{
                    padding: '12px 16px',
                    backgroundColor: activeSection === section.id ? '#d4a574' : 'transparent',
                    color: activeSection === section.id ? '#ffffff' : '#666',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: '500',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    textAlign: 'left',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px'
                  }}
                >
                  <span style={{ fontSize: '18px' }}>{section.icon}</span>
                  {section.name}
                </button>
              ))}
            </div>
          </div>

          {/* Content Editor */}
          <div style={{ backgroundColor: '#ffffff', padding: '32px', borderRadius: '12px', border: '1px solid #e5e5e5' }}>
            
            {activeSection === 'hero' && (
              <div>
                <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1a1a1a', marginBottom: '24px' }}>
                  Hero Section
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#1a1a1a', marginBottom: '8px' }}>
                      Main Title
                    </label>
                    <input
                      type="text"
                      defaultValue="Modest Fashion, Timeless Elegance"
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '1px solid #e5e5e5',
                        borderRadius: '8px',
                        fontSize: '14px',
                        outline: 'none'
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#1a1a1a', marginBottom: '8px' }}>
                      Subtitle
                    </label>
                    <textarea
                      defaultValue="Discover our exclusive collection of modest wear that combines contemporary style with traditional values"
                      rows={3}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '1px solid #e5e5e5',
                        borderRadius: '8px',
                        fontSize: '14px',
                        outline: 'none',
                        resize: 'vertical'
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#1a1a1a', marginBottom: '8px' }}>
                      Background Image URL
                    </label>
                    <input
                      type="text"
                      defaultValue="https://images.unsplash.com/photo-1490481651871-ab68de25d43d"
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '1px solid #e5e5e5',
                        borderRadius: '8px',
                        fontSize: '14px',
                        outline: 'none'
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#1a1a1a', marginBottom: '8px' }}>
                      Button Text
                    </label>
                    <input
                      type="text"
                      defaultValue="Shop New Collection"
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '1px solid #e5e5e5',
                        borderRadius: '8px',
                        fontSize: '14px',
                        outline: 'none'
                      }}
                    />
                  </div>
                  <button
                    style={{
                      padding: '14px 24px',
                      backgroundColor: '#d4a574',
                      color: '#ffffff',
                      border: 'none',
                      borderRadius: '8px',
                      fontSize: '14px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      marginTop: '16px'
                    }}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            )}

            {activeSection === 'categories' && (
              <div>
                <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1a1a1a', marginBottom: '24px' }}>
                  Category Grid
                </h2>
                <p style={{ color: '#666', fontSize: '14px', marginBottom: '24px' }}>
                  Manage the 6 main categories displayed on the homepage
                </p>
                <div style={{ display: 'grid', gap: '16px' }}>
                  {['Abayas', 'Dresses', 'Handbags', 'Suits', 'Fragrances', 'Hijabs'].map((category, index) => (
                    <div key={index} style={{ padding: '16px', border: '1px solid #e5e5e5', borderRadius: '8px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '16px', fontWeight: '600', color: '#1a1a1a' }}>{category}</span>
                        <button style={{
                          padding: '8px 16px',
                          backgroundColor: 'transparent',
                          color: '#d4a574',
                          border: '1px solid #e5e5e5',
                          borderRadius: '6px',
                          fontSize: '13px',
                          cursor: 'pointer'
                        }}>
                          Edit
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeSection === 'trending' && (
              <div>
                <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1a1a1a', marginBottom: '24px' }}>
                  Trending Now Section
                </h2>
                <p style={{ color: '#666', fontSize: '14px', marginBottom: '24px' }}>
                  Select products to feature in the trending section (shows 8 products)
                </p>
                <button
                  style={{
                    padding: '12px 24px',
                    backgroundColor: '#d4a574',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: '600',
                    cursor: 'pointer'
                  }}
                >
                  Select Products
                </button>
              </div>
            )}

            {activeSection === 'testimonials' && (
              <div>
                <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1a1a1a', marginBottom: '24px' }}>
                  Testimonials
                </h2>
                <p style={{ color: '#666', fontSize: '14px', marginBottom: '24px' }}>
                  Manage customer testimonials displayed on the homepage
                </p>
                <button
                  style={{
                    padding: '12px 24px',
                    backgroundColor: '#d4a574',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: '600',
                    cursor: 'pointer'
                  }}
                >
                  Add Testimonial
                </button>
              </div>
            )}

            {activeSection === 'subscribe' && (
              <div>
                <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1a1a1a', marginBottom: '24px' }}>
                  Email Subscribe Section
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#1a1a1a', marginBottom: '8px' }}>
                      Section Title
                    </label>
                    <input
                      type="text"
                      defaultValue="JOIN THE INNER CIRCLE"
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '1px solid #e5e5e5',
                        borderRadius: '8px',
                        fontSize: '14px',
                        outline: 'none'
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#1a1a1a', marginBottom: '8px' }}>
                      Description
                    </label>
                    <textarea
                      defaultValue="Get early access to new arrivals, exclusive offers, and styling tips"
                      rows={2}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '1px solid #e5e5e5',
                        borderRadius: '8px',
                        fontSize: '14px',
                        outline: 'none',
                        resize: 'vertical'
                      }}
                    />
                  </div>
                  <button
                    style={{
                      padding: '14px 24px',
                      backgroundColor: '#d4a574',
                      color: '#ffffff',
                      border: 'none',
                      borderRadius: '8px',
                      fontSize: '14px',
                      fontWeight: '600',
                      cursor: 'pointer'
                    }}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>

      </div>
    </div>
  );
}

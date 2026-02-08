'use client';

export default function CategoriesManagement() {
  const categories = [
    { id: 1, name: 'Abayas', products: 42, slug: 'abayas', active: true },
    { id: 2, name: 'Dresses', products: 38, slug: 'dresses', active: true },
    { id: 3, name: 'Hijabs', products: 67, slug: 'hijabs', active: true },
    { id: 4, name: 'Handbags', products: 23, slug: 'handbags', active: true },
    { id: 5, name: 'Suits', products: 19, slug: 'suits', active: true },
    { id: 6, name: 'Fragrances', products: 15, slug: 'fragrances', active: true },
  ];

  return (
    <div style={{ backgroundColor: '#f8f8f8', minHeight: '100vh', padding: '32px' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
          <div>
            <h1 style={{ fontSize: '32px', fontWeight: 'bold', color: '#1a1a1a', marginBottom: '8px' }}>
              Categories
            </h1>
            <p style={{ color: '#666', fontSize: '14px' }}>
              Manage product categories and collections
            </p>
          </div>
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
            + Add Category
          </button>
        </div>

        <div style={{ display: 'grid', gap: '16px' }}>
          {categories.map(category => (
            <div key={category.id} style={{ backgroundColor: '#ffffff', padding: '24px', borderRadius: '12px', border: '1px solid #e5e5e5' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#1a1a1a', marginBottom: '4px' }}>{category.name}</h3>
                  <p style={{ fontSize: '14px', color: '#666' }}>{category.products} products • /{category.slug}</p>
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button style={{ padding: '8px 16px', backgroundColor: 'transparent', color: '#d4a574', border: '1px solid #e5e5e5', borderRadius: '6px', fontSize: '13px', cursor: 'pointer' }}>
                    Edit
                  </button>
                  <button style={{ padding: '8px 16px', backgroundColor: 'transparent', color: '#e74c3c', border: '1px solid #e5e5e5', borderRadius: '6px', fontSize: '13px', cursor: 'pointer' }}>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

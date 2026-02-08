'use client';

export default function CollectionsManagement() {
  const collections = [
    { id: 1, name: 'New Arrivals', products: 24, image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=200&h=200&fit=crop', active: true },
    { id: 2, name: 'Trending Now', products: 8, image: 'https://images.unsplash.com/photo-1583391733981-5aaa7f36adbc?w=200&h=200&fit=crop', active: true },
    { id: 3, name: 'Women Collection', products: 156, image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=200&h=200&fit=crop', active: true },
    { id: 4, name: 'Men Collection', products: 78, image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=200&h=200&fit=crop', active: true },
    { id: 5, name: 'Sale Items', products: 32, image: 'https://images.unsplash.com/photo-1558769132-cb1aea00f1df?w=200&h=200&fit=crop', active: true },
  ];

  return (
    <div style={{ backgroundColor: '#f8f8f8', minHeight: '100vh', padding: '32px' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
          <div>
            <h1 style={{ fontSize: '32px', fontWeight: 'bold', color: '#1a1a1a', marginBottom: '8px' }}>
              Collections
            </h1>
            <p style={{ color: '#666', fontSize: '14px' }}>
              Curate and manage product collections
            </p>
          </div>
          <button style={{ padding: '12px 24px', backgroundColor: '#d4a574', color: '#ffffff', border: 'none', borderRadius: '8px', fontSize: '14px', fontWeight: '600', cursor: 'pointer' }}>
            + Create Collection
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}>
          {collections.map(collection => (
            <div key={collection.id} style={{ backgroundColor: '#ffffff', borderRadius: '12px', border: '1px solid #e5e5e5', overflow: 'hidden' }}>
              <img src={collection.image} alt={collection.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <div style={{ padding: '20px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#1a1a1a', marginBottom: '8px' }}>{collection.name}</h3>
                <p style={{ fontSize: '14px', color: '#666', marginBottom: '16px' }}>{collection.products} products</p>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button style={{ flex: 1, padding: '10px', backgroundColor: 'transparent', color: '#d4a574', border: '1px solid #e5e5e5', borderRadius: '6px', fontSize: '13px', fontWeight: '500', cursor: 'pointer' }}>
                    Edit
                  </button>
                  <button style={{ flex: 1, padding: '10px', backgroundColor: 'transparent', color: '#666', border: '1px solid #e5e5e5', borderRadius: '6px', fontSize: '13px', fontWeight: '500', cursor: 'pointer' }}>
                    Manage
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

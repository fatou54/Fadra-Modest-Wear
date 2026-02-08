'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const menuItems = [
    { 
      icon: '📊', 
      label: 'Dashboard', 
      href: '/admin',
      active: pathname === '/admin'
    },
    { 
      icon: '📦', 
      label: 'Products', 
      href: '/admin/products',
      active: pathname?.startsWith('/admin/products')
    },
    { 
      icon: '🗂️', 
      label: 'Categories', 
      href: '/admin/categories',
      active: pathname?.startsWith('/admin/categories')
    },
    { 
      icon: '🛒', 
      label: 'Orders', 
      href: '/admin/orders',
      active: pathname?.startsWith('/admin/orders')
    },
    { 
      icon: '👥', 
      label: 'Customers', 
      href: '/admin/customers',
      active: pathname?.startsWith('/admin/customers')
    },
    { 
      icon: '⭐', 
      label: 'Reviews', 
      href: '/admin/reviews',
      active: pathname?.startsWith('/admin/reviews')
    },
    { 
      icon: '🏠', 
      label: 'Homepage Builder', 
      href: '/admin/homepage',
      active: pathname?.startsWith('/admin/homepage')
    },
    { 
      icon: '👗', 
      label: 'Collections', 
      href: '/admin/collections',
      active: pathname?.startsWith('/admin/collections')
    },
    { 
      icon: '🧭', 
      label: 'Navigation Menu', 
      href: '/admin/menu',
      active: pathname?.startsWith('/admin/menu')
    },
    { 
      icon: '📢', 
      label: 'Marketing', 
      href: '/admin/marketing',
      active: pathname?.startsWith('/admin/marketing')
    },
    { 
      icon: '📄', 
      label: 'Content Pages', 
      href: '/admin/pages',
      active: pathname?.startsWith('/admin/pages')
    },
    { 
      icon: '🚚', 
      label: 'Shipping & Returns', 
      href: '/admin/shipping',
      active: pathname?.startsWith('/admin/shipping')
    },
    { 
      icon: '💳', 
      label: 'Payments', 
      href: '/admin/payments',
      active: pathname?.startsWith('/admin/payments')
    },
    { 
      icon: '📊', 
      label: 'Reports & Analytics', 
      href: '/admin/reports',
      active: pathname?.startsWith('/admin/reports')
    },
    { 
      icon: '⚙️', 
      label: 'Settings', 
      href: '/admin/settings',
      active: pathname?.startsWith('/admin/settings')
    },
    { 
      icon: '👨‍💼', 
      label: 'Admins & Roles', 
      href: '/admin/users',
      active: pathname?.startsWith('/admin/users')
    },
  ];

  return (
    <div className="min-h-screen flex" style={{ backgroundColor: '#f5f5f5' }}>
      {/* Sidebar */}
      <aside 
        className={`fixed top-0 left-0 h-full transition-all duration-300 z-40 ${sidebarOpen ? 'w-64' : 'w-20'}`}
        style={{ backgroundColor: '#1a1a1a' }}
      >
        {/* Logo & Toggle */}
        <div className="h-16 flex items-center justify-between px-4 border-b" style={{ borderColor: '#333' }}>
          {sidebarOpen && (
            <Link href="/admin" className="text-xl font-bold" style={{ fontFamily: 'serif', color: '#d4a574' }}>
              FADRA
            </Link>
          )}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-white hover:opacity-70 transition-opacity"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-2 overflow-y-auto" style={{ height: 'calc(100vh - 64px)' }}>
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg mb-1 transition-all ${
                item.active ? 'bg-opacity-100' : 'hover:bg-opacity-50'
              }`}
              style={{
                backgroundColor: item.active ? '#d4a574' : 'transparent',
                color: item.active ? '#1a1a1a' : '#ffffff'
              }}
            >
              <span className="text-lg">{item.icon}</span>
              {sidebarOpen && (
                <span className="text-sm font-medium">{item.label}</span>
              )}
            </Link>
          ))}
        </nav>

        {/* Admin Info at Bottom */}
        <div className="absolute bottom-4 left-0 right-0 px-4">
          <div className="p-3 rounded-lg" style={{ backgroundColor: '#333' }}>
            {sidebarOpen ? (
              <div>
                <p className="text-sm font-medium text-white">Admin User</p>
                <p className="text-xs" style={{ color: '#999' }}>fadra.wear@gmail.com</p>
              </div>
            ) : (
              <div className="text-center text-white text-xl">👤</div>
            )}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-20'}`}>
        {/* Top Bar */}
        <header className="h-16 flex items-center justify-between px-8 border-b" style={{ backgroundColor: '#ffffff', borderColor: '#e5e5e5' }}>
          <div>
            <h1 className="text-xl font-medium" style={{ color: '#1a1a1a' }}>
              Admin Dashboard
            </h1>
          </div>
          <div className="flex items-center gap-4">
            {/* View Store */}
            <a
              href="/"
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 text-sm hover:opacity-70 transition-opacity"
              style={{ color: '#666' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
              View Store
            </a>

            {/* Notifications */}
            <button className="relative p-2 hover:opacity-70 transition-opacity">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
              </svg>
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full" style={{ backgroundColor: '#ff6b35' }}></span>
            </button>

            {/* Logout */}
            <button 
              className="px-4 py-2 text-sm hover:opacity-70 transition-opacity"
              style={{ color: '#ff6b35' }}
            >
              Logout
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-8">
          {children}
        </main>
      </div>
    </div>
  );
}

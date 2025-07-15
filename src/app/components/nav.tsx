'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const Navigation = () => {
  const [isClient, setIsClient] = useState(false);
  const pathname = usePathname();
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'SSR', href: '/task-ssr' },
    { name: 'SSG', href: '/task-ssg' },
    { name: 'ISR', href: '/task-isr/1' },
    { name: 'CSR', href: '/task-csr' },
  ];

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-4 py-3 text-sm font-medium transition-colors ${
                isClient && pathname === item.href
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-300 hover:bg-gray-700'
              }`}
            >
              {item.name}
              {item.name !== 'Home' && (
                <span className="ml-2 text-xs bg-blue-500 px-2 py-0.5 rounded-full">
                  {item.name}
                </span>
              )}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
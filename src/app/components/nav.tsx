'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
  { href: '/', label: 'Home' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
  { href: '/products', label: 'Products' },
  { href: '/login', label: 'Login' },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="bg-gray-100 px-6 py-4 flex gap-4 shadow">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={clsx(
            'font-medium',
            pathname === link.href
              ? 'text-blue-600 underline'
              : 'text-gray-700 hover:text-black'
          )}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}

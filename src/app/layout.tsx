import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navigation from './components/nav';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Demo chiến lược render trong Next.js',
  description: 'Trình diễn SSR, SSG, ISR và CSR trong ứng dụng Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className={`${inter.className} bg-gray-50 min-h-screen flex flex-col`}>
     
        
        <Navigation />
        
        <main className="flex-grow max-w-6xl w-full mx-auto px-4 py-8">
          {children}
        </main>
        
       
      </body>
    </html>
  );
}

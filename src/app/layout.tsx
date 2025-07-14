import Nav from './components/nav';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Multi Page App',
  description: 'A simple Next.js multi-page app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}


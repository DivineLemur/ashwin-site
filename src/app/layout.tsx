import type { Metadata } from 'next';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Ashwin Revankar — Product Manager',
  description: 'Product Manager at Zynga, scaling games from 0 to 1 and 10 to 100.',
  openGraph: {
    title: 'Ashwin Revankar',
    description: 'Product Manager at Zynga, scaling games from 0 to 1 and 10 to 100.',
    url: 'https://ashwinrevankar.dev',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

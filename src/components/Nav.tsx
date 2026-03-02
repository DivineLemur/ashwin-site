'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Writing' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, background: 'rgba(250,249,247,0.88)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', borderBottom: '1px solid var(--border)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0.8rem 1.5rem 0' }}>
        <Link href="/" style={{ fontFamily: 'var(--font-editorial)', fontSize: '1.1rem', fontWeight: 400, color: 'var(--text)', textDecoration: 'none', letterSpacing: '-0.02em', display: 'block', marginBottom: '0.5rem' }}>
          Ashwin Revankar
        </Link>
        <ul style={{ display: 'flex', gap: '1.5rem', listStyle: 'none', margin: 0, padding: '0 0 0.8rem 0', borderTop: '1px solid var(--border)', paddingTop: '0.6rem' }}>
          {links.map(({ href, label }) => {
            const active = pathname.startsWith(href);
            return (
              <li key={href}>
                <Link href={href} style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.09em', textTransform: 'uppercase', color: active ? 'var(--accent-warm)' : 'var(--muted)', textDecoration: 'none' }}>
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

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
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1.2rem 3rem',
        background: 'rgba(250,249,247,0.88)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <Link
        href="/"
        style={{
          fontFamily: 'var(--font-editorial)',
          fontSize: '1.25rem',
          fontWeight: 400,
          color: 'var(--text)',
          textDecoration: 'none',
          letterSpacing: '-0.02em',
        }}
      >
        Ashwin Revankar
      </Link>

      <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none' }}>
        {links.map(({ href, label }) => {
          const active = pathname.startsWith(href);
          return (
            <li key={href}>
              <Link
                href={href}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  letterSpacing: '0.09em',
                  textTransform: 'uppercase',
                  color: active ? 'var(--accent-warm)' : 'var(--muted)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

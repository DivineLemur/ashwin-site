export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--border)',
        padding: '2.5rem 3rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem',
      }}
    >
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--muted)' }}>
        © {new Date().getFullYear()} Ashwin Revankar
      </span>
      <div style={{ display: 'flex', gap: '1.5rem' }}>
        {[
          { label: 'GitHub', href: 'https://github.com/DivineLemur' },
          { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ashwin-revankar/' },
          { label: 'Twitter', href: 'https://twitter.com/ashwin_revankar' },
        ].map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '12px',
              letterSpacing: '0.06em',
              color: 'var(--muted)',
              textDecoration: 'none',
            }}
          >
            {label} ↗
          </a>
        ))}
      </div>
    </footer>
  );
}

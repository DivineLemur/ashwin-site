import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact — Ashwin',
  description: 'Get in touch.',
};

export default function ContactPage() {
  return (
    <div style={{ maxWidth: '820px', margin: '0 auto', padding: '8rem 3rem 6rem' }}>
      <p style={labelStyle}>Contact</p>
      <h1 style={headingStyle}>Let's talk.</h1>

      <p style={subStyle}>
        I'm currently open to PM roles at AI companies. If you're working on something
        interesting or just want to talk product and AI, reach out.
      </p>

      <div style={{ marginTop: '3rem', display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px' }}>
        {[
          {
            label: 'Email',
            value: 'ashrev2000@gmail.com',
            href: 'mailto:ashrev2000@gmail.com',
          },
          {
            label: 'LinkedIn',
            value: 'ashwin-revankar',
            href: 'https://www.linkedin.com/in/ashwin-revankar/',
          },
          {
            label: 'GitHub',
            value: 'DivineLemur',
            href: 'https://github.com/DivineLemur',
          },
          {
            label: 'Twitter',
            value: '@ashwin_revankar',
            href: 'https://twitter.com/ashwin_revankar',
          },
        ].map(({ label, value, href }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('mailto') ? '_self' : '_blank'}
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '1.2rem 1.4rem',
              border: '1px solid var(--border)',
              textDecoration: 'none',
              transition: 'border-color 0.2s',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--muted)',
              }}
            >
              {label}
            </span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                color: 'var(--text)',
              }}
            >
              {value} ↗
            </span>
          </a>
        ))}
      </div>

      <div
        style={{
          marginTop: '4rem',
          padding: '2rem',
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          maxWidth: '400px',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-editorial)',
            fontSize: '1rem',
            fontStyle: 'italic',
            color: 'var(--muted)',
            lineHeight: 1.6,
            marginBottom: '0.75rem',
          }}
        >
          "The best products come from people who truly understand the problem — and can
          communicate it to both engineers and users."
        </p>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '10px',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'var(--border)',
          }}
        >
          Something I believe
        </span>
      </div>
    </div>
  );
}

const labelStyle: React.CSSProperties = {
  fontFamily: 'var(--font-mono)',
  fontSize: '11px',
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: 'var(--accent-warm)',
  marginBottom: '1rem',
};

const headingStyle: React.CSSProperties = {
  fontFamily: 'var(--font-editorial)',
  fontSize: 'clamp(2rem, 5vw, 3.2rem)',
  fontWeight: 300,
  letterSpacing: '-0.03em',
  color: 'var(--text)',
  marginBottom: '1rem',
};

const subStyle: React.CSSProperties = {
  fontFamily: 'var(--font-mono)',
  fontSize: '13px',
  color: 'var(--muted)',
  maxWidth: '480px',
  lineHeight: '1.8',
};

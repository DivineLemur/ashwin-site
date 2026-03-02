import Link from 'next/link';
import type { CSSProperties } from 'react';

export default function Home() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        maxWidth: '820px',
        margin: '0 auto',
        padding: '8rem 3rem 6rem',
      }}
    >
      <p
        className="animate-fade-up delay-1"
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '11px',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: 'var(--muted)',
          marginBottom: '1.5rem',
        }}
      >
        Product Manager · Zynga · Builder
      </p>

      <h1
        className="animate-fade-up delay-2"
        style={{
          fontFamily: 'var(--font-editorial)',
          fontSize: 'clamp(3rem, 7vw, 5.5rem)',
          fontWeight: 300,
          lineHeight: 1.05,
          letterSpacing: '-0.03em',
          color: 'var(--text)',
          marginBottom: '2rem',
        }}
      >
        Hi, I&apos;m{' '}
        <span style={{ color: 'var(--accent-warm)', fontStyle: 'italic' }}>
          Ashwin Revankar.
        </span>
      </h1>

      <p
        className="animate-fade-up delay-3"
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '15px',
          color: 'var(--muted)',
          maxWidth: '480px',
          lineHeight: '1.8',
          marginBottom: '1.2rem',
          fontWeight: 500,
        }}
      >
        I&apos;m a <b>Product Manager at Zynga</b>, scaling <a href="https://www.gameofthroneslegends.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-warm)', textDecoration: 'none', borderBottom: '1px solid var(--accent-warm)' }}>GOT Legends</a> ($XXM+ ARR) and working on AI native <em>new games development</em> strategy (0-1).
        Prev led Casino games portfolio for India.
      </p>

      <p
        className="animate-fade-up delay-3"
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '15px',
          color: 'var(--muted)',
          maxWidth: '480px',
          lineHeight: '1.8',
          marginBottom: '2.5rem',
          fontWeight: 500,
        }}
      >
        I build stuff in my free time and sometimes write about it.
      </p>

      <div className="animate-fade-up delay-4" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <Link href="/projects" style={btnPrimaryStyle}>
          View Projects
        </Link>
        <Link href="/blog" style={btnGhostStyle}>
          Writing
        </Link>
        <a href="/resume.pdf" target="_blank" style={btnGhostStyle}>
          Resume ↗
        </a>
      </div>

      <div
        className="animate-fade-up delay-5"
        style={{
          marginTop: '6rem',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        <div style={{ width: '32px', height: '1px', background: 'var(--border)' }} />
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--muted)', letterSpacing: '0.06em' }}>
          Observing
        </span>
      </div>
    </div>
  );
}

const btnPrimaryStyle: CSSProperties = {
  display: 'inline-block',
  padding: '0.7rem 1.5rem',
  fontFamily: 'var(--font-mono)',
  fontSize: '11px',
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  textDecoration: 'none',
  background: 'var(--text)',
  color: 'var(--bg)',
  border: '1px solid var(--text)',
  cursor: 'pointer',
  transition: 'all 0.2s',
};

const btnGhostStyle: CSSProperties = {
  display: 'inline-block',
  padding: '0.7rem 1.5rem',
  fontFamily: 'var(--font-mono)',
  fontSize: '11px',
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  textDecoration: 'none',
  background: 'transparent',
  color: 'var(--muted)',
  border: '1px solid var(--border)',
  cursor: 'pointer',
  transition: 'all 0.2s',
};
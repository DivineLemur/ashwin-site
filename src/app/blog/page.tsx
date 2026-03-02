import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';

export const metadata: Metadata = {
  title: 'Writing — Ashwin',
  description: 'Thoughts on product, AI, and building things.',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div style={{ maxWidth: '820px', margin: '0 auto', padding: '8rem 3rem 6rem' }}>
      <p style={labelStyle}>Writing</p>
      <h1 style={headingStyle}>Blog</h1>
      <p style={subStyle}>
        I write about product management, AI, strategy, and whatever I'm thinking through.
        Roughly one post a month.
      </p>

<a      
        href="https://substack.com/@ashwinrevankar"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          marginTop: '1.2rem',
          fontFamily: 'var(--font-mono)',
          fontSize: '12px',
          letterSpacing: '0.06em',
          color: 'var(--accent-warm)',
          textDecoration: 'none',
          borderBottom: '1px solid var(--accent-warm)',
          paddingBottom: '2px',
        }}
      >
        Also on Substack
      </a>

      <div style={{ marginTop: '3.5rem' }}>
        {posts.length === 0 ? (
          <div
            style={{
              borderTop: '1px solid var(--border)',
              borderBottom: '1px solid var(--border)',
              padding: '3rem 0',
              textAlign: 'center',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '13px',
                color: 'var(--muted)',
              }}
            >
              First post coming soon.
            </p>
          </div>
        ) : (
          posts.map((post, i) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                gap: '2rem',
                padding: '1.6rem 0',
                borderTop: i === 0 ? '1px solid var(--border)' : undefined,
                borderBottom: '1px solid var(--border)',
                textDecoration: 'none',
              }}
            >
              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-editorial)',
                    fontSize: '1.2rem',
                    fontWeight: 400,
                    color: 'var(--text)',
                    letterSpacing: '-0.01em',
                    display: 'block',
                    marginBottom: '0.3rem',
                  }}
                >
                  {post.title}
                </span>
                {post.excerpt && (
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '12px',
                      color: 'var(--muted)',
                    }}
                  >
                    {post.excerpt}
                  </span>
                )}
              </div>
              <div style={{ textAlign: 'right', flexShrink: 0 }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    color: 'var(--muted)',
                    display: 'block',
                  }}
                >
                  {new Date(post.date).toLocaleDateString('en-US', {
                    month: 'short',
                    year: 'numeric',
                  })}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '10px',
                    color: 'var(--border)',
                  }}
                >
                  {post.readingTime}
                </span>
              </div>
            </Link>
          ))
        )}
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
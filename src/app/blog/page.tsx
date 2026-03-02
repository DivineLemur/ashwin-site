import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getPost, getAllPosts } from '@/lib/posts';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} — Ashwin`,
    description: post.excerpt,
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <div style={{ maxWidth: '680px', margin: '0 auto', padding: '8rem 3rem 6rem' }}>
      <Link
        href="/blog"
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '11px',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: 'var(--muted)',
          textDecoration: 'none',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.4rem',
          marginBottom: '3rem',
        }}
      >
        ← Writing
      </Link>

      <header style={{ marginBottom: '3rem' }}>
        <div
          style={{
            display: 'flex',
            gap: '1.5rem',
            marginBottom: '1.5rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            color: 'var(--muted)',
            letterSpacing: '0.06em',
          }}
        >
          <span>
            {new Date(post!.date).toLocaleDateString('en-US', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </span>
          <span>·</span>
          <span>{post!.readingTime}</span>
        </div>

        <h1
          style={{
            fontFamily: 'var(--font-editorial)',
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 300,
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            color: 'var(--text)',
            marginBottom: '1rem',
          }}
        >
          {post!.title}
        </h1>

        {post!.excerpt && (
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', color: 'var(--muted)', lineHeight: '1.7' }}>
            {post!.excerpt}
          </p>
        )}

        {post!.tags && post!.tags.length > 0 && (
          <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1.2rem', flexWrap: 'wrap' }}>
            {post!.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '10px',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  padding: '0.2rem 0.65rem',
                  border: '1px solid var(--border)',
                  color: 'var(--muted)',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      <hr style={{ border: 'none', borderTop: '1px solid var(--border)', marginBottom: '3rem' }} />

      <article className="prose-custom">
        <MDXRemote source={post!.content} />
      </article>
    </div>
  );
}
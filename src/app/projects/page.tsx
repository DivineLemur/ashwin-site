import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects — Ashwin',
  description: 'Things I have built and shipped.',
};

const projects = [
  {
    name: 'Podcast Summarizer',
    description: (
      <>
        Automated podcast summarization system that uses Claude AI to generate editorial-style summaries of podcast episodes daily, deployed with GitHub Actions.
        <br />
        <strong>Stack:</strong> Node.js, Claude AI API, GitHub Actions, RSS Parser, Next.js (frontend)
      </>
    ),
    tags: ['AI', 'Audio', 'Consumer_Tech'],
    github: 'https://github.com/DivineLemur/podcast-summaries',
    year: '2025',
  },
  {
    name: 'Personal Website',
    description: (
    <>
      'Built a minimalist personal website from scratch using Next.js 16, MDX, and Vercel. Features a blog with markdown support, responsive design, and auto-deployment on every git push. Designed with a clean editorial aesthetic using Cormorant Garamond and Geist Mono. 
      <br />
      <strong>Stack:</strong> Next.js · TypeScript · Vercel · GitHub',
      </> 
     ), 
    tags: ['Deployment', 'UI'],
    github: 'https://github.com/DivineLemur/ashwin-site',
    live: 'https://ashwinrevankar.com',
    year: '2026',
  },
  {
    name: 'Morning Newsletter Brief',
    description:
    (
      <>
        'An automated AI-powered newsletter digest system that transforms your daily newsletters into intelligent 10-minute summaries. Built with Google Apps Script and Claude AI, it automatically fetches, categorizes, and synthesizes newsletters every morning.' 
        <br />
        <strong>Stack:</strong> Google Apps Script · Gmail API · Google Drive API · JavaScript',
        </> 
       ),
    tags: ['Text_ingestion', 'LLM'],
    year: '2025',
  },
];

export default function ProjectsPage() {
  return (
    <div style={{ maxWidth: '820px', margin: '0 auto', padding: '8rem 3rem 6rem' }}>
      <p style={labelStyle}>Work</p>
      <h1 style={headingStyle}>Projects</h1>
      <p style={subStyle}>
        A selection of things I've built, shipped, or prototyped. Each one taught me something.
      </p>

      <div style={{ marginTop: '3.5rem' }}>
        {projects.map((p, i) => (
          <div
            key={i}
            style={{
              borderTop: i === 0 ? '1px solid var(--border)' : undefined,
              borderBottom: '1px solid var(--border)',
              padding: '2.2rem 0',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                gap: '2rem',
                flexWrap: 'wrap',
                marginBottom: '0.75rem',
              }}
            >
              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '10px',
                    letterSpacing: '0.1em',
                    color: 'var(--muted)',
                    textTransform: 'uppercase',
                    marginRight: '1rem',
                  }}
                >
                  {p.year}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-editorial)',
                    fontSize: '1.4rem',
                    fontWeight: 400,
                    letterSpacing: '-0.01em',
                    color: 'var(--text)',
                  }}
                >
                  {p.name}
                </span>
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                {p.github && (
                  <a href={p.github} target="_blank" rel="noopener noreferrer" style={linkStyle}>
                    GitHub ↗
                  </a>
                )}
                {p.live && (
                  <a href={p.live} target="_blank" rel="noopener noreferrer" style={linkStyle}>
                    Live ↗
                  </a>
                )}
              </div>
            </div>

            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '13px',
                color: 'var(--muted)',
                maxWidth: '560px',
                lineHeight: '1.8',
                marginBottom: '1.2rem',
              }}
            >
              {p.description}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {p.tags.map((tag) => (
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
          </div>
        ))}
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

const linkStyle: React.CSSProperties = {
  fontFamily: 'var(--font-mono)',
  fontSize: '11px',
  letterSpacing: '0.06em',
  textTransform: 'uppercase',
  color: 'var(--muted)',
  textDecoration: 'none',
  borderBottom: '1px solid var(--border)',
  paddingBottom: '2px',
};

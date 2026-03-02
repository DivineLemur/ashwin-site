import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects — Ashwin',
  description: 'Things I have built and shipped.',
};

const projects = [
  {
    name: 'Project One',
    description:
      'A short, punchy description of what this project does and why it matters. What problem does it solve? What was the outcome?',
    tags: ['AI', 'Product', 'B2B'],
    github: 'https://github.com/',
    live: 'https://example.com',
    year: '2024',
  },
  {
    name: 'Project Two',
    description:
      'Another project description. Lead with impact — how many users, what metric moved, what was technically or strategically interesting.',
    tags: ['LLM', 'Prototyping', 'Python'],
    github: 'https://github.com/',
    live: null,
    year: '2024',
  },
  {
    name: 'Project Three',
    description:
      'Describe the problem space first, then your approach. Great PM portfolios show thinking, not just delivery.',
    tags: ['Strategy', 'API', 'Growth'],
    github: 'https://github.com/',
    live: 'https://example.com',
    year: '2023',
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

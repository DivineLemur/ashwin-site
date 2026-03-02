import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About — Ashwin',
  description: 'Product manager, background, and resume.',
};

const experience = [
  {
    role: 'Product Manager',
    company: 'Zynga',
    period: '2024 – Present',
    notes: 'Building new games 0→1 / scaling existing games 10→100 stages.',
  },
  {
    role: 'Associate Product Manager',
    company: 'Head Digital Works (A23)',
    period: '2022 – 2024',
    notes: 'Led development of A23 Poker / Worked on Fraud, Retention funnel',
  },
];

const education = [
  {
    degree: 'B.Tech, Computer Science',
    school: 'BITS-Pilani',
    year: '2022',
  },
];

const skills = [
  'Product Strategy', 'LLM Products', 'User Research',
  'SQL', 'Python', 'Data Analysis', 'Roadmapping', 'A/B Testing',
];

export default function AboutPage() {
  return (
    <div style={{ maxWidth: '820px', margin: '0 auto', padding: '8rem 3rem 6rem' }}>
      <p style={labelStyle}>About</p>
      <h1 style={headingStyle}>Bio & Resume</h1>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0,1.2fr) minmax(0,1fr)',
          gap: '5rem',
          marginTop: '3rem',
        }}
      >
        {/* Left — bio */}
        <div>
          <p style={bioStyle}>
            Currently trying to grow GOT Legends and working on new game 0-1 strategy,  previously led Casino games portfoliio. 
          </p>
          <p style={bioStyle}>
            I care deeply about building products that are genuinely useful — not just technically
            impressive. I'm interested in AI products, game design, and the overlap between them.
          </p>
          <p style={bioStyle}>
            Outside of work I write here, read voraciously, play football avidely and tinker with side projects.
          </p>

          <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="/resume.pdf" target="_blank" style={btnPrimaryStyle}>
              Download Resume ↗
            </a>
          </div>
        </div>

        {/* Right — resume */}
        <div>
          {/* Experience */}
          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={resumeSectionLabel}>Experience</h2>
            {experience.map((job, i) => (
              <div key={i} style={{ marginBottom: '1.5rem' }}>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '13px',
                    color: 'var(--text)',
                    marginBottom: '0.1rem',
                  }}
                >
                  {job.role}
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    color: 'var(--muted)',
                    marginBottom: '0.3rem',
                  }}
                >
                  <span>{job.company}</span>
                  <span>{job.period}</span>
                </div>
                <p
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '12px',
                    color: 'var(--muted)',
                    lineHeight: 1.6,
                  }}
                >
                  {job.notes}
                </p>
              </div>
            ))}
          </section>

          {/* Education */}
          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={resumeSectionLabel}>Education</h2>
            {education.map((e, i) => (
              <div key={i} style={{ marginBottom: '1rem' }}>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '13px',
                    color: 'var(--text)',
                  }}
                >
                  {e.degree}
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    color: 'var(--muted)',
                  }}
                >
                  <span>{e.school}</span>
                  <span>{e.year}</span>
                </div>
              </div>
            ))}
          </section>

          {/* Skills */}
          <section>
            <h2 style={resumeSectionLabel}>Skills</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {skills.map((s) => (
                <span
                  key={s}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '10px',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    padding: '0.25rem 0.65rem',
                    border: '1px solid var(--border)',
                    color: 'var(--muted)',
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </section>
        </div>
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
};

const bioStyle: React.CSSProperties = {
  fontFamily: 'var(--font-mono)',
  fontSize: '13px',
  color: 'var(--muted)',
  lineHeight: '1.85',
  marginBottom: '1rem',
};

const resumeSectionLabel: React.CSSProperties = {
  fontFamily: 'var(--font-mono)',
  fontSize: '10px',
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: 'var(--accent-warm)',
  marginBottom: '1rem',
  fontWeight: 500,
};

const btnPrimaryStyle: React.CSSProperties = {
  display: 'inline-block',
  padding: '0.65rem 1.4rem',
  fontFamily: 'var(--font-mono)',
  fontSize: '11px',
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  textDecoration: 'none',
  background: 'var(--text)',
  color: 'var(--bg)',
  border: '1px solid var(--text)',
};

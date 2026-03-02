# ashwin.dev

Personal website built with Next.js 14 + MDX. Clean, minimal, fast.

## Stack

- **Next.js 14** (App Router)
- **MDX** for blog posts
- **Tailwind CSS** for styling
- **Vercel** for hosting

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
src/
  app/
    page.tsx          → Home / Hero
    projects/page.tsx → Projects
    blog/
      page.tsx        → Blog index
      [slug]/page.tsx → Individual post
    about/page.tsx    → Bio + Resume
    contact/page.tsx  → Contact links
  components/
    Nav.tsx
    Footer.tsx
  lib/
    posts.ts          → MDX file utilities
content/
  blog/
    *.mdx             → Your blog posts go here
public/
  resume.pdf          → Drop your resume here
```

## Writing a blog post

Create a new file in `content/blog/your-post-slug.mdx`:

```mdx
---
title: "Your Post Title"
date: "2024-12-01"
excerpt: "One sentence that describes the post."
tags: ["AI", "Product"]
---

Your content here. Standard Markdown works perfectly.

## Heading

Regular paragraphs, **bold**, *italic*, `code`, links, etc.
```

Then `git push` — Vercel deploys automatically.

## Customizing content

| File | What to change |
|------|---------------|
| `src/app/page.tsx` | Hero heading, tagline, bio |
| `src/app/projects/page.tsx` | Project list at the top of the file |
| `src/app/about/page.tsx` | Experience, education, skills arrays |
| `src/app/contact/page.tsx` | Email, social links |
| `src/components/Footer.tsx` | Footer social links |
| `public/resume.pdf` | Replace with your actual resume |

## Deploying to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import your repo
3. Click Deploy — that's it
4. Add your custom domain in Vercel Settings → Domains

Every `git push` to `main` will auto-deploy.

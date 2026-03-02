import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDir = path.join(process.cwd(), 'content/blog');

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags?: string[];
  readingTime?: string;
}

export interface Post extends PostMeta {
  content: string;
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(postsDir)) return [];

  const files = fs
    .readdirSync(postsDir)
    .filter((f) => f.endsWith('.mdx') || f.endsWith('.md'));

  return files
    .map((filename) => {
      const slug = filename.replace(/\.mdx?$/, '');
      const raw = fs.readFileSync(path.join(postsDir, filename), 'utf8');
      const { data } = matter(raw);
      const wordCount = raw.split(/\s+/).length;
      const readingTime = `${Math.ceil(wordCount / 200)} min read`;

      return {
        slug,
        title: data.title || slug,
        date: data.date ? String(data.date) : '',
        excerpt: data.excerpt || '',
        tags: data.tags || [],
        readingTime,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPost(slug: string): Post | null {
  const mdxPath = path.join(postsDir, `${slug}.mdx`);
  const mdPath = path.join(postsDir, `${slug}.md`);
  const filePath = fs.existsSync(mdxPath)
    ? mdxPath
    : fs.existsSync(mdPath)
    ? mdPath
    : null;

  if (!filePath) return null;

  const raw = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(raw);
  const wordCount = raw.split(/\s+/).length;

  return {
    slug,
    title: data.title || slug,
    date: data.date ? String(data.date) : '',
    excerpt: data.excerpt || '',
    tags: data.tags || [],
    content,
    readingTime: `${Math.ceil(wordCount / 200)} min read`,
  };
}
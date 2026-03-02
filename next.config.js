/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  outputFileTracingIncludes: {
    '/blog/[slug]': ['./content/blog/**/*'],
  },
};

module.exports = nextConfig;

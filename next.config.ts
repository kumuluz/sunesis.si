import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Static HTML export — deployed as static files on Netlify.
  output: 'export',
  // The site uses trailing-slash URLs throughout (e.g. /en/expertise/agentic-ai/).
  trailingSlash: true,
  // next/image optimization needs a server; with static export we serve plain <img>.
  images: { unoptimized: true },
}

export default nextConfig

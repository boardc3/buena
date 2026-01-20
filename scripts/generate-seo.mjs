import fs from 'node:fs'
import path from 'node:path'

function ensureTrailingSlash(url) {
  return url.endsWith('/') ? url : `${url}/`
}

function getSiteUrl() {
  const direct = process.env.VITE_SITE_URL || process.env.SITE_URL
  if (direct) return direct
  const vercel = process.env.VERCEL_URL
  if (vercel) return `https://${vercel}`
  // Local fallback (useful for `vite preview` or local Lighthouse runs)
  return 'http://localhost:5173'
}

const root = process.cwd()
const publicDir = path.join(root, 'public')
fs.mkdirSync(publicDir, { recursive: true })

const siteUrl = ensureTrailingSlash(getSiteUrl())

// robots.txt
const robots = `User-agent: *
Allow: /

Sitemap: ${siteUrl}sitemap.xml
`
fs.writeFileSync(path.join(publicDir, 'robots.txt'), robots)

// sitemap.xml (single-page)
const now = new Date().toISOString()
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap)


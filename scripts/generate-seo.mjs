import fs from 'node:fs'
import path from 'node:path'

function ensureTrailingSlash(url) {
  return url.endsWith('/') ? url : `${url}/`
}

function getSiteUrl() {
  // Priority: explicit site URL > Vercel production URL > Vercel preview URL > local
  const direct = process.env.VITE_SITE_URL || process.env.SITE_URL
  if (direct) return direct
  
  // Vercel production domain
  const vercelProduction = process.env.VERCEL_PROJECT_PRODUCTION_URL
  if (vercelProduction) return `https://${vercelProduction}`
  
  // Vercel URL (preview or production)
  const vercel = process.env.VERCEL_URL
  if (vercel) return `https://${vercel}`
  
  // Local fallback (useful for `vite preview` or local Lighthouse runs)
  return 'http://localhost:5173'
}

const root = process.cwd()
const publicDir = path.join(root, 'public')
fs.mkdirSync(publicDir, { recursive: true })

const siteUrl = ensureTrailingSlash(getSiteUrl())
const now = new Date().toISOString()

console.log(`[SEO] Generating for: ${siteUrl}`)

// robots.txt - comprehensive directives
const robots = `# Robots.txt for 5441 E Via Buena Vista
# https://www.robotstxt.org/

User-agent: *
Allow: /

# Sitemaps
Sitemap: ${siteUrl}sitemap.xml

# Crawl-delay for politeness (optional)
Crawl-delay: 1

# Specific bot directives
User-agent: Googlebot
Allow: /

User-agent: Googlebot-Image
Allow: /

User-agent: Bingbot
Allow: /
`
fs.writeFileSync(path.join(publicDir, 'robots.txt'), robots)
console.log('[SEO] robots.txt generated')

// sitemap.xml with image sitemap extension
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset 
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
>
  <url>
    <loc>${siteUrl}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    <image:image>
      <image:loc>${siteUrl}og.jpg</image:loc>
      <image:title>5441 E Via Buena Vista Paradise Valley Luxury Estate</image:title>
      <image:caption>$12,495,000 Paradise Valley luxury estate with wellness guest house and Mummy Mountain views</image:caption>
      <image:geo_location>Paradise Valley, Arizona, USA</image:geo_location>
    </image:image>
  </url>
</urlset>
`
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap)
console.log('[SEO] sitemap.xml generated')

console.log('[SEO] Generation complete!')


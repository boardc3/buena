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

// sitemap.xml with image and video sitemap extensions
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset 
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
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
    <video:video>
      <video:thumbnail_loc>${siteUrl}og.jpg</video:thumbnail_loc>
      <video:title>5441 E Via Buena Vista - Paradise Valley Luxury Estate Tour</video:title>
      <video:description>Explore 5441 E Via Buena Vista, a stunning $12,495,000 luxury estate in Paradise Valley, AZ 85253. This wellness-forward property features 8,492 sq ft, 6 bedrooms, 8 bathrooms, a separate wellness guest house with infrared sauna, steam room, cold plunge and gym, plus panoramic Mummy Mountain views.</video:description>
      <video:content_loc>${siteUrl}video-tour.mp4</video:content_loc>
      <video:player_loc allow_embed="yes">${siteUrl}watch.html</video:player_loc>
      <video:duration>150</video:duration>
      <video:publication_date>2024-01-01T00:00:00+00:00</video:publication_date>
      <video:family_friendly>yes</video:family_friendly>
      <video:requires_subscription>no</video:requires_subscription>
      <video:live>no</video:live>
      <video:tag>5441 E Via Buena Vista</video:tag>
      <video:tag>Paradise Valley luxury homes</video:tag>
      <video:tag>Arizona real estate</video:tag>
      <video:category>Real Estate</video:category>
    </video:video>
  </url>
  <url>
    <loc>${siteUrl}watch.html</loc>
    <lastmod>${now}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
    <video:video>
      <video:thumbnail_loc>${siteUrl}og.jpg</video:thumbnail_loc>
      <video:title>5441 E Via Buena Vista Video Tour - Paradise Valley Luxury Estate</video:title>
      <video:description>Cinematic video tour of 5441 E Via Buena Vista, a $12,495,000 luxury estate in Paradise Valley, Arizona 85253. Features 8,492 sq ft, 6 bedrooms, 8 bathrooms, wellness guest house, and Mummy Mountain views. MLS 6970548.</video:description>
      <video:content_loc>${siteUrl}video-tour.mp4</video:content_loc>
      <video:player_loc allow_embed="yes">${siteUrl}watch.html</video:player_loc>
      <video:duration>150</video:duration>
      <video:publication_date>2024-01-01T00:00:00+00:00</video:publication_date>
      <video:family_friendly>yes</video:family_friendly>
      <video:requires_subscription>no</video:requires_subscription>
      <video:live>no</video:live>
      <video:tag>luxury real estate</video:tag>
      <video:tag>Paradise Valley</video:tag>
      <video:tag>5441 E Via Buena Vista</video:tag>
      <video:tag>Arizona luxury homes</video:tag>
      <video:category>Real Estate</video:category>
    </video:video>
  </url>
</urlset>
`
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap)
console.log('[SEO] sitemap.xml generated with video page')

console.log('[SEO] Generation complete!')


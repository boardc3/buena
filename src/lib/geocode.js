const NOMINATIM_BASE = 'https://nominatim.openstreetmap.org/search'

function cacheKey(query) {
  return `geo:v1:${query.toLowerCase().trim()}`
}

export async function geocode(query) {
  const key = cacheKey(query)
  const cached = typeof window !== 'undefined' ? window.localStorage.getItem(key) : null
  if (cached) return JSON.parse(cached)

  const url = new URL(NOMINATIM_BASE)
  url.searchParams.set('q', query)
  url.searchParams.set('format', 'json')
  url.searchParams.set('limit', '1')

  const res = await fetch(url.toString(), {
    headers: {
      // Nominatim usage policy asks for a valid UA; browsers restrict UA header,
      // so we at least provide a referrer + keep the request minimal & cached.
      'Accept': 'application/json',
    },
  })
  if (!res.ok) throw new Error(`Geocode failed (${res.status})`)

  const json = await res.json()
  const first = json?.[0]
  if (!first) throw new Error(`No geocode result for: ${query}`)

  const result = {
    lat: Number(first.lat),
    lng: Number(first.lon),
    displayName: first.display_name,
  }

  try {
    window.localStorage.setItem(key, JSON.stringify(result))
  } catch {
    // ignore quota errors
  }

  return result
}

export function haversineMiles(a, b) {
  const toRad = (d) => (d * Math.PI) / 180
  const R = 3958.7613 // miles
  const dLat = toRad(b.lat - a.lat)
  const dLng = toRad(b.lng - a.lng)
  const lat1 = toRad(a.lat)
  const lat2 = toRad(b.lat)

  const sinDLat = Math.sin(dLat / 2)
  const sinDLng = Math.sin(dLng / 2)
  const h = sinDLat * sinDLat + Math.cos(lat1) * Math.cos(lat2) * sinDLng * sinDLng
  return 2 * R * Math.asin(Math.min(1, Math.sqrt(h)))
}

export function directionsUrl(originAddress, destinationQuery) {
  const url = new URL('https://www.google.com/maps/dir/')
  url.searchParams.set('api', '1')
  url.searchParams.set('origin', originAddress)
  url.searchParams.set('destination', destinationQuery)
  return url.toString()
}


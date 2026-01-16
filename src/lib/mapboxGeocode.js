function cacheKey(query) {
  return `mbxgeo:v1:${query.toLowerCase().trim()}`
}

export async function mapboxGeocode(query, token) {
  const key = cacheKey(query)
  const cached = typeof window !== 'undefined' ? window.localStorage.getItem(key) : null
  if (cached) return JSON.parse(cached)

  const url = new URL(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(query)}.json`)
  url.searchParams.set('access_token', token)
  url.searchParams.set('limit', '1')
  url.searchParams.set('autocomplete', 'false')

  const res = await fetch(url.toString())
  if (!res.ok) throw new Error(`Mapbox geocode failed (${res.status})`)

  const json = await res.json()
  const feat = json?.features?.[0]
  if (!feat) throw new Error(`No geocode result for: ${query}`)
  const [lng, lat] = feat.center

  const result = { lat: Number(lat), lng: Number(lng), displayName: feat.place_name }
  try {
    window.localStorage.setItem(key, JSON.stringify(result))
  } catch {
    // ignore quota errors
  }
  return result
}


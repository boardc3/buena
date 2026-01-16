// Small geo helpers for map overlays (no heavy dependencies).

export function circleGeoJSON(centerLngLat, radiusMeters, steps = 96) {
  const [lng, lat] = centerLngLat
  const coords = []

  const toRad = (d) => (d * Math.PI) / 180
  const toDeg = (r) => (r * 180) / Math.PI
  const R = 6378137 // earth radius in meters

  const latRad = toRad(lat)
  const lngRad = toRad(lng)
  const angDist = radiusMeters / R

  for (let i = 0; i <= steps; i++) {
    const bearing = (i / steps) * 2 * Math.PI
    const sinLat = Math.sin(latRad)
    const cosLat = Math.cos(latRad)

    const sinAng = Math.sin(angDist)
    const cosAng = Math.cos(angDist)

    const lat2 = Math.asin(sinLat * cosAng + cosLat * sinAng * Math.cos(bearing))
    const lng2 =
      lngRad +
      Math.atan2(
        Math.sin(bearing) * sinAng * cosLat,
        cosAng - sinLat * Math.sin(lat2),
      )

    coords.push([toDeg(lng2), toDeg(lat2)])
  }

  return {
    type: 'Feature',
    properties: {},
    geometry: {
      type: 'Polygon',
      coordinates: [coords],
    },
  }
}

export function lineGeoJSON(aLngLat, bLngLat) {
  return {
    type: 'Feature',
    properties: {},
    geometry: {
      type: 'LineString',
      coordinates: [aLngLat, bLngLat],
    },
  }
}


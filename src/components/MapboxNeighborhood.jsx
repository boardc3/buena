import { useEffect, useMemo, useRef, useState } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'
import { PROPERTY } from '../data/property'
import { directionsUrl, haversineMiles } from '../lib/geocode'
import { mapboxGeocode } from '../lib/mapboxGeocode'
import { circleGeoJSON, lineGeoJSON } from '../lib/geoShapes'

function clsx(...parts) {
  return parts.filter(Boolean).join(' ')
}

function makeEl(className) {
  const el = document.createElement('div')
  el.className = className
  return el
}

function buildMarkerEl(kind, isSelected) {
  const el = makeEl(
    clsx('bv-marker', kind === 'home' ? 'bv-marker--home' : 'bv-marker--poi', isSelected ? 'bv-marker--selected' : ''),
  )
  const core = document.createElement('div')
  core.className = 'bv-marker__core'
  el.appendChild(core)
  return el
}

export default function MapboxNeighborhood() {
  const token = import.meta.env.VITE_MAPBOX_TOKEN
  const mapRef = useRef(null)
  const mapObjRef = useRef(null)
  const markersRef = useRef([])
  const overlayReadyRef = useRef(false)

  const categories = PROPERTY.map.categories
  const [activeCategoryId, setActiveCategoryId] = useState(categories[0]?.id)
  const [propertyPoint, setPropertyPoint] = useState(null)
  const [poiPoints, setPoiPoints] = useState({})
  const [selectedQuery, setSelectedQuery] = useState(null)
  const [error, setError] = useState(null)
  const [panelOpen, setPanelOpen] = useState(true)
  const [viewMode, setViewMode] = useState('valley') // 'estate' | 'valley'

  const activeCategory = useMemo(
    () => categories.find((c) => c.id === activeCategoryId) ?? categories[0],
    [activeCategoryId, categories],
  )
  const activeItems = activeCategory?.items ?? []
  const allItems = useMemo(() => categories.flatMap((c) => c.items ?? []), [categories])
  const allQueries = useMemo(() => Array.from(new Set(allItems.map((i) => i.query))), [allItems])

  // Preload geocodes once (cached in localStorage) so switching categories feels instant.
  useEffect(() => {
    let cancelled = false
    async function preload() {
      if (!token) return
      try {
        const center = await mapboxGeocode(PROPERTY.map.centerQuery, token)
        if (cancelled) return
        setPropertyPoint(center)

        const results = await Promise.allSettled(allQueries.map((q) => mapboxGeocode(q, token)))
        if (cancelled) return
        const next = {}
        results.forEach((r, idx) => {
          const q = allQueries[idx]
          if (r.status === 'fulfilled') next[q] = r.value
        })
        setPoiPoints((prev) => ({ ...next, ...prev }))
      } catch (e) {
        if (cancelled) return
        setError(e instanceof Error ? e.message : 'Map data failed to load')
      }
    }
    preload()
    return () => {
      cancelled = true
    }
  }, [allQueries, token])

  useEffect(() => {
    let cancelled = false
    async function run() {
      setError(null)
      try {
        const center = await mapboxGeocode(PROPERTY.map.centerQuery, token)
        if (cancelled) return
        setPropertyPoint(center)

        // Geocode category items
        const toGeocode = activeItems.map((i) => i.query)
        const results = await Promise.allSettled(toGeocode.map((q) => mapboxGeocode(q, token)))
        if (cancelled) return
        const next = {}
        results.forEach((r, idx) => {
          const q = toGeocode[idx]
          if (r.status === 'fulfilled') next[q] = r.value
        })
        setPoiPoints((prev) => ({ ...prev, ...next }))
        setSelectedQuery(toGeocode[0] ?? null)
      } catch (e) {
        if (cancelled) return
        setError(e instanceof Error ? e.message : 'Map data failed to load')
      }
    }
    run()
    return () => {
      cancelled = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCategoryId, token])

  // Init mapbox
  useEffect(() => {
    if (!token) return
    if (!mapRef.current) return
    if (mapObjRef.current) return

    mapboxgl.accessToken = token

    const map = new mapboxgl.Map({
      container: mapRef.current,
      style: 'mapbox://styles/mapbox/dark-v11',
      center: [-111.95, 33.55],
      zoom: 12.6,
      pitch: 45,
      bearing: -12,
      antialias: true,
    })

    map.addControl(new mapboxgl.NavigationControl({ visualizePitch: true }), 'top-right')

    map.on('load', () => {
      // Add subtle 3D buildings for a premium feel (only where available)
      const layers = map.getStyle().layers || []
      const labelLayerId = layers.find((l) => l.type === 'symbol' && l.layout?.['text-field'])?.id
      map.addLayer(
        {
          id: '3d-buildings',
          source: 'composite',
          'source-layer': 'building',
          filter: ['==', 'extrude', 'true'],
          type: 'fill-extrusion',
          minzoom: 14,
          paint: {
            'fill-extrusion-color': '#101318',
            'fill-extrusion-height': ['get', 'height'],
            'fill-extrusion-base': ['get', 'min_height'],
            'fill-extrusion-opacity': 0.55,
          },
        },
        labelLayerId,
      )

      // Premium overlays (radius halo + selected connection line)
      if (!map.getSource('bv-radius')) {
        map.addSource('bv-radius', { type: 'geojson', data: { type: 'FeatureCollection', features: [] } })
        map.addLayer({
          id: 'bv-radius-fill',
          type: 'fill',
          source: 'bv-radius',
          paint: { 'fill-color': '#D4AF37', 'fill-opacity': 0.10 },
        })
        map.addLayer({
          id: 'bv-radius-line',
          type: 'line',
          source: 'bv-radius',
          paint: { 'line-color': '#D4AF37', 'line-width': 1.2, 'line-opacity': 0.55 },
        })
      }

      if (!map.getSource('bv-line')) {
        map.addSource('bv-line', { type: 'geojson', data: { type: 'FeatureCollection', features: [] } })
        map.addLayer({
          id: 'bv-line-glow',
          type: 'line',
          source: 'bv-line',
          paint: { 'line-color': '#D4AF37', 'line-width': 6, 'line-opacity': 0.10 },
        })
        map.addLayer({
          id: 'bv-line',
          type: 'line',
          source: 'bv-line',
          paint: { 'line-color': '#D4AF37', 'line-width': 1.6, 'line-opacity': 0.65 },
        })
      }

      overlayReadyRef.current = true
    })

    mapObjRef.current = map
    return () => {
      map.remove()
      mapObjRef.current = null
    }
  }, [token])

  // Markers + camera sync
  useEffect(() => {
    const map = mapObjRef.current
    if (!map) return
    if (!propertyPoint) return

    // Clear previous markers
    markersRef.current.forEach((m) => m.remove())
    markersRef.current = []

    // Property marker
    const homeEl = buildMarkerEl('home', false)
    const homeMarker = new mapboxgl.Marker({ element: homeEl })
      .setLngLat([propertyPoint.lng, propertyPoint.lat])
      .setPopup(
        new mapboxgl.Popup({ closeButton: false, closeOnClick: true, offset: 18 }).setHTML(
          `<div style="font-weight:600;">${PROPERTY.title}</div>
           <div style="opacity:.75;font-size:12px;margin-top:2px;">${PROPERTY.subtitle}</div>
           <div style="margin-top:10px;font-size:12px;">
             <a style="text-decoration:underline;color:rgba(212,175,55,0.95);" target="_blank" rel="noreferrer" href="${directionsUrl(
               PROPERTY.address,
               PROPERTY.address,
             )}">Open in Maps</a>
           </div>`,
        ),
      )
      .addTo(map)
    markersRef.current.push(homeMarker)

    // POI markers
    activeItems.forEach((item) => {
      const p = poiPoints[item.query]
      if (!p) return
      const el = buildMarkerEl('poi', selectedQuery === item.query)
      el.style.cursor = 'pointer'
      el.addEventListener('click', () => setSelectedQuery(item.query))
      const popup = new mapboxgl.Popup({ closeButton: false, closeOnClick: true, offset: 18 }).setHTML(
        `<div style="font-weight:600;">${item.name}</div>
         <div style="opacity:.75;font-size:12px;margin-top:2px;">${item.note ?? ''}</div>
         <div style="margin-top:10px;font-size:12px;">
           <a style="text-decoration:underline;color:rgba(212,175,55,0.95);" target="_blank" rel="noreferrer" href="${directionsUrl(
             PROPERTY.address,
             item.query,
           )}">Directions</a>
         </div>`,
      )
      const marker = new mapboxgl.Marker({ element: el }).setLngLat([p.lng, p.lat]).setPopup(popup).addTo(map)
      markersRef.current.push(marker)
    })

    // Fit camera
    const bounds = new mapboxgl.LngLatBounds([propertyPoint.lng, propertyPoint.lat], [propertyPoint.lng, propertyPoint.lat])
    activeItems.forEach((item) => {
      const p = poiPoints[item.query]
      if (!p) return
      bounds.extend([p.lng, p.lat])
    })
    const rightPad = panelOpen ? 520 : 160
    map.fitBounds(bounds, { padding: { top: 160, right: rightPad, bottom: 160, left: 160 }, duration: 1200 })

    // Update radius overlay around property (~2 miles by default)
    if (overlayReadyRef.current) {
      const radiusMeters = viewMode === 'estate' ? 1609.34 : 8046.72 // 1mi vs 5mi
      const radiusFeature = circleGeoJSON([propertyPoint.lng, propertyPoint.lat], radiusMeters)
      map.getSource('bv-radius')?.setData({ type: 'FeatureCollection', features: [radiusFeature] })
    }
  }, [activeItems, poiPoints, propertyPoint, selectedQuery, panelOpen, viewMode])

  useEffect(() => {
    const map = mapObjRef.current
    if (!map) return
    if (!propertyPoint) return
    if (!selectedQuery) return
    const p = poiPoints[selectedQuery]
    if (!p) return
    map.flyTo({
      center: [p.lng, p.lat],
      zoom: viewMode === 'estate' ? 14.8 : 13.8,
      speed: 0.9,
      curve: 1.2,
      essential: true,
    })

    // Connection line
    if (overlayReadyRef.current) {
      const line = lineGeoJSON([propertyPoint.lng, propertyPoint.lat], [p.lng, p.lat])
      map.getSource('bv-line')?.setData({ type: 'FeatureCollection', features: [line] })
    }
  }, [poiPoints, propertyPoint, selectedQuery])

  useEffect(() => {
    const map = mapObjRef.current
    if (!map) return
    if (!overlayReadyRef.current) return
    if (!selectedQuery) {
      map.getSource('bv-line')?.setData({ type: 'FeatureCollection', features: [] })
    }
  }, [selectedQuery])

  const listItems = useMemo(() => {
    if (!propertyPoint) return activeItems.map((i) => ({ ...i, distanceMi: null }))
    return activeItems.map((i) => {
      const p = poiPoints[i.query]
      const d = p ? haversineMiles(propertyPoint, p) : null
      return { ...i, distanceMi: d }
    })
  }, [activeItems, poiPoints, propertyPoint])

  if (!token) {
    return (
      <section id="map" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border hairline surface p-10">
            <div className="text-xs tracking-[0.28em] uppercase text-luxury-gold mb-4">Neighborhood</div>
            <div className="text-3xl font-display font-semibold">Mapbox token required</div>
            <p className="mt-4 text-white/70 max-w-3xl">
              Add a Mapbox token to enable the bespoke neighborhood map. Create a `.env` file with:
            </p>
            <pre className="mt-5 rounded-2xl border border-white/10 bg-black/40 p-5 text-sm text-white/80 overflow-auto">
VITE_MAPBOX_TOKEN=YOUR_TOKEN_HERE
            </pre>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="map" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="text-xs tracking-[0.28em] uppercase text-luxury-gold mb-4">Neighborhood</div>
          <h2 className="text-4xl md:text-5xl font-display font-semibold tracking-[-0.02em]">
            The lifestyle radius.
          </h2>
          <p className="mt-4 text-lg text-white/70 max-w-3xl">
            Curated for a private client: aviation, clubs, resorts, power dining, premium care.
          </p>
        </motion.div>

        <div className="relative rounded-3xl overflow-hidden border hairline surface">
          <div className="relative">
            {/* Full-bleed map canvas */}
            <div ref={mapRef} className="h-[82vh] min-h-[760px] w-full" />

            {/* View toggle */}
            <div className="absolute top-6 left-6 z-20 rounded-2xl border hairline bg-black/45 backdrop-blur-xl p-2">
              <div className="flex">
                <button
                  onClick={() => setViewMode('estate')}
                  className={clsx(
                    'px-4 py-2 rounded-xl text-sm font-semibold transition',
                    viewMode === 'estate' ? 'bg-luxury-gold text-black' : 'text-white/75 hover:text-white',
                  )}
                >
                  Estate
                </button>
                <button
                  onClick={() => setViewMode('valley')}
                  className={clsx(
                    'px-4 py-2 rounded-xl text-sm font-semibold transition',
                    viewMode === 'valley' ? 'bg-luxury-gold text-black' : 'text-white/75 hover:text-white',
                  )}
                >
                  Valley
                </button>
              </div>
            </div>

            {/* Collapsible side panel */}
            <div
              className={clsx(
                'absolute top-0 right-0 z-20 h-full w-full max-w-[420px] border-l hairline bg-black/55 backdrop-blur-xl transition-transform duration-300',
                panelOpen ? 'translate-x-0' : 'translate-x-[calc(100%-56px)]',
              )}
            >
              <button
                onClick={() => setPanelOpen((v) => !v)}
                className="absolute top-6 -left-5 w-10 h-10 rounded-2xl border hairline bg-black/55 backdrop-blur-xl flex items-center justify-center text-white/80 hover:text-white"
                title={panelOpen ? 'Collapse' : 'Expand'}
              >
                {panelOpen ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
              </button>

              <div className={clsx('p-6 lg:p-7', panelOpen ? 'opacity-100' : 'opacity-0 pointer-events-none')}>
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-white/85">Curate</div>
                  {error ? <div className="text-sm text-red-200">{error}</div> : null}
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {categories.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => setActiveCategoryId(c.id)}
                      className={clsx(
                        'px-4 py-2 rounded-full text-sm font-semibold border transition',
                        c.id === activeCategoryId
                          ? 'bg-luxury-gold text-black border-luxury-gold'
                          : 'bg-white/5 text-white/80 border-white/10 hover:bg-white/10',
                      )}
                    >
                      {c.label}
                    </button>
                  ))}
                </div>

                <div className="mt-6">
                  <div className="text-xs uppercase tracking-[0.22em] text-white/50 mb-3">Places</div>
                  <div className="space-y-2">
                    {listItems.map((item) => {
                      const isSelected = selectedQuery === item.query
                      const distance = item.distanceMi ? `${item.distanceMi.toFixed(1)} mi` : '…'
                      return (
                        <button
                          key={item.query}
                          onClick={() => setSelectedQuery(item.query)}
                          className={clsx(
                            'w-full text-left rounded-2xl p-4 border transition flex items-start justify-between gap-4',
                            isSelected ? 'border-luxury-gold bg-white/5' : 'border-white/10 hover:border-white/16 bg-white/0',
                          )}
                        >
                          <div className="min-w-0">
                            <div className="font-semibold text-white/90 truncate">{item.name}</div>
                            <div className="text-sm text-white/55 truncate">
                              {item.note ? (
                                <>
                                  <span className="text-white/70">{item.note}</span>
                                  <span className="text-white/35"> · </span>
                                </>
                              ) : null}
                              {distance}
                            </div>
                          </div>
                          <a
                            href={directionsUrl(PROPERTY.address, item.query)}
                            target="_blank"
                            rel="noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="shrink-0 inline-flex items-center gap-2 text-sm text-white/70 hover:text-white"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </button>
                      )
                    })}
                  </div>
                </div>
                <div className="mt-6 text-xs text-white/45">
                  Map is Mapbox GL with 3D buildings. Curated pins are approximate.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Navigation } from 'lucide-react'

export default function InteractiveMap() {
  const mapRef = useRef(null)
  const [mapLoaded, setMapLoaded] = useState(false)

  useEffect(() => {
    // Using Google Maps embed as fallback - more reliable than API
    // You can replace this with the Google Maps JavaScript API if you have an API key
    if (mapRef.current) {
      const iframe = document.createElement('iframe')
      iframe.src = 'https://www.google.com/maps?q=5441+E+Via+Buena+Vista+Paradise+Valley+AZ+85253&output=embed'
      iframe.width = '100%'
      iframe.height = '100%'
      iframe.frameBorder = '0'
      iframe.style.border = '0'
      iframe.allowFullScreen = true
      iframe.loading = 'lazy'
      iframe.referrerPolicy = 'no-referrer-when-downgrade'
      
      mapRef.current.appendChild(iframe)
      setMapLoaded(true)
    }
  }, [])

  return (
    <section className="py-20 bg-luxury-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="text-sm text-luxury-gold mb-3 tracking-wider uppercase">Location</div>
          <h2 className="text-5xl md:text-6xl font-display font-bold text-luxury-dark mb-4">
            Interactive Map
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Explore the property's strategic location in Paradise Valley
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-lg overflow-hidden shadow-2xl"
        >
          <div ref={mapRef} className="w-full h-[600px] md:h-[700px] bg-gray-200" />
          
          {/* Map overlay info */}
          <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md rounded-lg p-4 shadow-lg max-w-xs border border-gray-200">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-luxury-gold mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-luxury-dark mb-1">
                  5441 E Via Buena Vista
                </h3>
                <p className="text-sm text-gray-600">
                  Paradise Valley, AZ 85253
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  Mockingbird Lane Estates
                </p>
              </div>
            </div>
          </div>

          {/* Nearby points of interest */}
          <div className="absolute bottom-4 left-4 right-4 md:right-auto md:max-w-xs">
            <div className="bg-white/95 backdrop-blur-md rounded-lg p-4 shadow-lg border border-gray-200">
              <h4 className="font-semibold text-luxury-dark mb-2 flex items-center gap-2">
                <Navigation className="w-4 h-4 text-luxury-gold" />
                Nearby
              </h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Old Town Scottsdale: 5 min</li>
                <li>• Phoenix Airport: 20 min</li>
                <li>• Camelback Mountain: 10 min</li>
                <li>• Desert Botanical Garden: 15 min</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

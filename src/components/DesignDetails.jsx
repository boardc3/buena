import { motion } from 'framer-motion'

export default function DesignDetails() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-sm text-luxury-gold mb-3 tracking-wider uppercase text-center">Design Excellence</div>
          <h2 className="text-5xl md:text-6xl font-display font-bold text-luxury-dark mb-8 text-center">
            Built to a Luxury Standard
          </h2>
          
          <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
            <p className="text-xl leading-relaxed">
              This isn't just a big house—it's a spec at a luxury standard. The property represents a rare combination: 
              a <strong className="text-luxury-dark">new-build contemporary estate</strong> created with a specific, high-profile design-build stack 
              that includes Eagle Luxury, Drewett Works, The Draftery, and Holly Wright Design.
            </p>

            <p className="leading-relaxed">
              The wellness suite in a separate structure means the home supports <strong className="text-luxury-dark">two lifestyles simultaneously</strong>: 
              entertaining and hosting in the main house while someone else runs a true spa and fitness routine without 
              crossing paths. This level of functional separation is unusually sophisticated at this price point.
            </p>

            <p className="leading-relaxed">
              With <strong className="text-luxury-dark">two primary suites</strong>, the layout offers flexibility for multi-generational living, 
              longer-term guests, or "primary + VIP primary" hosting—common in Paradise Valley's luxury market. The home 
              theater, lounge, and butler's pantry are designed around events: dinners, screenings, and catered parties, 
              not just daily living.
            </p>

            <div className="bg-luxury-light p-8 rounded-lg my-8 border-l-4 border-luxury-gold">
              <p className="text-lg font-semibold text-luxury-dark mb-2">
                The Lot & Privacy Package
              </p>
              <p className="leading-relaxed">
                The 45,884 sq ft lot (approximately 1.05 acres) features a resort-style backyard: pool, spa, meditation 
                lawn, mist system, full outdoor kitchen, and expansive patios. In Paradise Valley, privacy + outdoor program 
                is often the deciding factor because you can "live outside" most of the year, and buyers expect separation 
                from neighbors with a yard that functions like a private resort.
              </p>
            </div>

            <p className="leading-relaxed">
              Attention to detail signals quality: <strong className="text-luxury-dark">Molteni&C Dada closets</strong> (premium Italian cabinetry/closet 
              systems), walls of glass, climate-controlled garage with A/C and humidifier, plus full smart home systems. 
              These are the specifications buyers look for when they want a "no excuses" modern build—and they matter at 
              resale in PV's competitive luxury segment.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

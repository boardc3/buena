import { motion } from 'framer-motion'
import { Home, Mountain, Waves, UtensilsCrossed, Sparkles, Heart } from 'lucide-react'

export default function PropertyHighlights() {
  const highlights = [
    {
      icon: <Home className="w-8 h-8" />,
      title: 'New-Build Design Team Estate',
      description: 'Created with a high-profile design-build stack: Eagle Luxury / Drewett Works / The Draftery / Holly Wright Design',
    },
    {
      icon: <Waves className="w-8 h-8" />,
      title: 'Wellness-Focused Program',
      description: 'Separate guest house with infrared sauna, steam room, cold plunge, and gym - support two lifestyles simultaneously',
    },
    {
      icon: <Mountain className="w-8 h-8" />,
      title: 'Mummy Mountain Views',
      description: 'Exceptional mountain sightlines paired with walls of glass and indoor-outdoor modern design',
    },
    {
      icon: <UtensilsCrossed className="w-8 h-8" />,
      title: 'Entertainment-Ready',
      description: 'Home theater, lounge, butler\'s pantry, outdoor kitchen - designed around events and hosting',
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Luxury Specifications',
      description: 'Molteni&C Dada closets, climate-controlled garage, full smart home systems, custom details throughout',
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Privacy & Resort Living',
      description: '1.05-acre lot with resort-style backyard, pool, spa, meditation lawn, mist system, and exceptional privacy',
    },
  ]

  return (
    <section id="features" className="py-20 bg-luxury-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="text-sm text-luxury-gold mb-3 tracking-wider uppercase">Why This Property</div>
          <h2 className="text-5xl md:text-6xl font-display font-bold text-luxury-dark mb-4">
            Extraordinary Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A rare combination of new-build excellence, wellness-forward design, and Paradise Valley's finest location
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="text-luxury-gold mb-4">
                {highlight.icon}
              </div>
              <h3 className="text-2xl font-display font-semibold text-luxury-dark mb-3">
                {highlight.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

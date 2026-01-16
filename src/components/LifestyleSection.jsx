import { motion } from 'framer-motion'
import { Utensils, ShoppingBag, Mountain, Leaf, Music } from 'lucide-react'

export default function LifestyleSection() {
  const lifestyleFeatures = [
    {
      icon: <Utensils className="w-8 h-8" />,
      title: 'Dining & Nightlife',
      description: 'Old Town Scottsdale features 100+ restaurants, bars, and nightclubs. Luxury dining at Scottsdale Fashion Square with Neiman Marcus, Nordstrom, and premier restaurants.',
    },
    {
      icon: <Mountain className="w-8 h-8" />,
      title: 'Mountain Access',
      description: 'Mummy Mountain and Camelback Mountain at your doorstep. Camelback Mountain offers signature hiking trails (Echo Canyon/Cholla) with seasonal access.',
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: 'Desert Botanical Garden',
      description: '50,000+ desert plants displayed across thematic trails, with events and programming—a top Phoenix-area attraction just minutes away.',
    },
    {
      icon: <Music className="w-8 h-8" />,
      title: 'Musical Instrument Museum',
      description: 'Flagship Phoenix attraction featuring thousands of instruments and global cultural exhibits—world-class culture within reach.',
    },
  ]

  const resorts = [
    'Andaz Scottsdale Resort and Bungalows',
    'JW Marriott Scottsdale Camelback Inn Resort & Spa',
    'Hermosa Inn',
    'And 6 more luxury resorts',
  ]

  return (
    <section id="lifestyle" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="text-sm text-luxury-gold mb-3 tracking-wider uppercase">Lifestyle</div>
          <h2 className="text-5xl md:text-6xl font-display font-bold text-luxury-dark mb-4">
            Lifestyle & Entertainment
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            World-class amenities and attractions within your reach
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {lifestyleFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex gap-6 bg-luxury-light p-8 rounded-lg"
            >
              <div className="flex-shrink-0 text-luxury-gold">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-2xl font-display font-semibold text-luxury-dark mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-luxury-dark to-gray-900 text-white rounded-lg p-8 md:p-12"
        >
          <h3 className="text-3xl font-display font-bold mb-6">
            Resort Lifestyle Without Traveling
          </h3>
          <p className="text-xl mb-6 text-gray-300">
            Paradise Valley is home to 9 luxury resorts, offering five-star amenities:
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {resorts.map((resort, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-2 h-2 bg-luxury-gold rounded-full" />
                <span className="text-lg">{resort}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-300 leading-relaxed">
            Access spas, fine dining, tennis, pools, and holiday programming without leaving your neighborhood. 
            This resort ecosystem boosts desirability and makes Paradise Valley ideal for second-home buyers 
            seeking a complete luxury experience.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

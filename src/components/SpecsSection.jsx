import { motion } from 'framer-motion'
import { Square, Ruler, Building2, TreePine, Car } from 'lucide-react'

export default function SpecsSection() {
  const specs = [
    {
      icon: <Square className="w-6 h-6" />,
      label: 'Living Area',
      value: '8,492 sq ft',
      subtext: '11,718 sq ft under roof',
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      label: 'Bedrooms',
      value: '6',
      subtext: 'Including 2 primary suites',
    },
    {
      icon: <Ruler className="w-6 h-6" />,
      label: 'Bathrooms',
      value: '8',
      subtext: 'Luxury finishes throughout',
    },
    {
      icon: <TreePine className="w-6 h-6" />,
      label: 'Lot Size',
      value: '1.05 Acres',
      subtext: '45,884 sq ft',
    },
    {
      icon: <Car className="w-6 h-6" />,
      label: 'Year Built',
      value: '2023',
      subtext: 'New-build contemporary',
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-luxury-dark to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="text-sm text-luxury-gold mb-3 tracking-wider uppercase">Property Details</div>
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-4">
            Specifications
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {specs.map((spec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-luxury-gold mb-4 flex justify-center">
                {spec.icon}
              </div>
              <div className="text-4xl md:text-5xl font-display font-bold mb-2">
                {spec.value}
              </div>
              <div className="text-lg font-medium mb-1">{spec.label}</div>
              <div className="text-sm text-gray-400">{spec.subtext}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 bg-white/10 backdrop-blur-md rounded-lg p-8 max-w-4xl mx-auto border border-white/20"
        >
          <h3 className="text-2xl font-display font-semibold mb-4">
            Key Features
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-gray-300">
            <ul className="space-y-2">
              <li>• Separate guest house with wellness suite</li>
              <li>• Infrared sauna, steam room, cold plunge</li>
              <li>• Home theater with lounge</li>
              <li>• Butler's pantry</li>
              <li>• Full outdoor kitchen</li>
            </ul>
            <ul className="space-y-2">
              <li>• Resort-style pool & spa</li>
              <li>• Meditation lawn with mist system</li>
              <li>• Climate-controlled garage</li>
              <li>• Smart home systems</li>
              <li>• Molteni&C Dada closets</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { MapPin, Shield, Briefcase, Plane } from 'lucide-react'

export default function LocationFeatures() {
  const features = [
    {
      icon: <MapPin className="w-8 h-8" />,
      title: 'Mockingbird Lane Estates',
      description: '33-home luxury community, positioned near shopping, dining, nightlife, theaters, and outdoor activities. Small neighborhood count means quieter, more consistent feel.',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Low-Density Privacy',
      description: 'Paradise Valley intentionally preserves a rural lifestyle with exceptional privacy. Population of just 12,658 with high educational attainment and income levels.',
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: 'Strategic Location',
      description: 'Close to both Phoenix and Scottsdale—approximately 15-20 minutes to downtown Phoenix and the airport. Access to major hubs without sacrificing privacy.',
    },
    {
      icon: <Plane className="w-8 h-8" />,
      title: 'Resort Ecosystem',
      description: 'Home to 9 resorts, 3 golf courses, and 4 medical centers. Access five-star spas, dining, tennis, and pools without traveling.',
    },
  ]

  return (
    <section id="location" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="text-sm text-luxury-gold mb-3 tracking-wider uppercase">Location</div>
          <h2 className="text-5xl md:text-6xl font-display font-bold text-luxury-dark mb-4">
            Paradise Valley Location
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ultra-exclusive enclave that balances privacy with proximity to everything
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex gap-6"
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
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-luxury-light rounded-lg p-8 md:p-12"
        >
          <h3 className="text-3xl font-display font-bold text-luxury-dark mb-6">
            Why Paradise Valley?
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Paradise Valley's origin story is literally residents incorporating to preserve a rural lifestyle 
                and avoid being "swallowed up" by surrounding growth. Today, it remains intentionally low-density 
                with exceptional privacy norms.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The location is strategic: close enough to Scottsdale/Phoenix action that you don't feel isolated, 
                while still being inside Paradise Valley's low-density environment. You get choice density—strong 
                public options and top private schools within a short drive.
              </p>
            </div>
            <div>
              <p className="text-gray-700 leading-relaxed mb-4">
                The town is predominantly single-family residential yet home to 9 resorts, 3 golf courses, and 
                4 medical centers. This unusual combination means you can access five-star amenities without "traveling."
              </p>
              <p className="text-gray-700 leading-relaxed">
                Paradise Valley Police publishes comprehensive crime statistics and maps, providing transparency 
                that high-net-worth buyers appreciate. This level of public reporting supports due diligence and 
                contributes to the area's desirability.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

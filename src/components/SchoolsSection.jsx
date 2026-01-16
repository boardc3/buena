import { motion } from 'framer-motion'
import { GraduationCap, Award } from 'lucide-react'

export default function SchoolsSection() {
  const publicSchools = [
    {
      name: 'Cherokee Elementary School',
      rating: '8/10',
      distance: '0.3 mi',
      district: 'Scottsdale Unified School District',
    },
    {
      name: 'Cocopah Middle School',
      rating: '9/10',
      distance: '2.3 mi',
      district: 'Scottsdale Unified School District',
    },
    {
      name: 'Chaparral High School',
      rating: '9/10',
      distance: '2.1 mi',
      district: 'Scottsdale Unified School District',
    },
  ]

  const privateSchools = [
    'Phoenix Country Day School',
    'Jones-Gordon School',
    'Other specialty/independent schools',
  ]

  return (
    <section className="py-20 bg-luxury-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="text-sm text-luxury-gold mb-3 tracking-wider uppercase">Education</div>
          <h2 className="text-5xl md:text-6xl font-display font-bold text-luxury-dark mb-4">
            Education Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Outstanding public and private school options within minutes
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Public Schools */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-lg p-8 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="w-8 h-8 text-luxury-gold" />
              <h3 className="text-3xl font-display font-bold text-luxury-dark">
                Public Schools
              </h3>
            </div>
            <p className="text-gray-600 mb-6">
              Scottsdale Unified School District
            </p>
            <div className="space-y-6">
              {publicSchools.map((school, index) => (
                <div key={index} className="border-l-4 border-luxury-gold pl-4">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-xl font-semibold text-luxury-dark">
                      {school.name}
                    </h4>
                    <span className="bg-luxury-gold text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {school.rating}
                    </span>
                  </div>
                  <p className="text-gray-600">
                    {school.distance} away
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Private Schools */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-lg p-8 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-8 h-8 text-luxury-gold" />
              <h3 className="text-3xl font-display font-bold text-luxury-dark">
                Private Schools
              </h3>
            </div>
            <p className="text-gray-600 mb-6">
              Top-tier private options listed in Paradise Valley
            </p>
            <div className="space-y-4">
              {privateSchools.map((school, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-luxury-gold rounded-full" />
                  <span className="text-lg text-gray-700">{school}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 p-4 bg-luxury-light rounded-lg">
              <p className="text-sm text-gray-600">
                Large, luxury PV properties frequently attract buyers who want choice density—strong public 
                options and top private options within a short drive.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

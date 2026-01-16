import { motion } from 'framer-motion'
import { PROPERTY } from '../data/property'

export default function SignatureMoments() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="text-sm text-luxury-gold mb-3 tracking-wider uppercase">How it lives</div>
          <h2 className="text-5xl md:text-6xl font-display font-bold text-luxury-dark mb-4">
            Signature Moments
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A quick, buyer-minded tour of what makes this estate feel different—wellness, flow, and effortless hosting.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROPERTY.moments.map((m, idx) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm hover:shadow-lg transition"
            >
              <div className="text-xs tracking-wider uppercase text-gray-500 mb-3">
                Moment {idx + 1}
              </div>
              <div className="text-xl font-display font-semibold text-luxury-dark mb-2">
                {m.title}
              </div>
              <p className="text-gray-600 leading-relaxed">{m.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


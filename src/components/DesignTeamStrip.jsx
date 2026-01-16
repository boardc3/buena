import { motion } from 'framer-motion'
import { PROPERTY } from '../data/property'

export default function DesignTeamStrip() {
  return (
    <section className="py-14 bg-luxury-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-12 gap-8 items-center"
        >
          <div className="lg:col-span-4">
            <div className="text-sm text-luxury-gold tracking-wider uppercase mb-2">Design-build pedigree</div>
            <div className="text-2xl md:text-3xl font-display font-semibold">
              Built with a named design stack.
            </div>
          </div>
          <div className="lg:col-span-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {PROPERTY.designTeam.map((name) => (
                <div
                  key={name}
                  className="rounded-2xl border border-white/15 bg-white/5 px-5 py-4 text-sm text-white/85"
                >
                  {name}
                </div>
              ))}
            </div>
            <div className="mt-3 text-xs text-white/50">
              Add logos later if desired—this section is intentionally “quiet luxury.”
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


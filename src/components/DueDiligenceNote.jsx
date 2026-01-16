import { motion } from 'framer-motion'

export default function DueDiligenceNote() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-amber-200 bg-amber-50 p-8 md:p-10"
        >
          <div className="text-sm tracking-wider uppercase text-amber-900/70 mb-3">Precision note</div>
          <h3 className="text-3xl font-display font-bold text-amber-950 mb-4">
            A quick verification checklist (smart buyers will ask anyway)
          </h3>
          <p className="text-amber-900/80 leading-relaxed max-w-4xl">
            Some public portals can lag or mix prior-improvement data with new-build listings. Before purchase,
            confirm final permitted square footage and certificates, whether this was a teardown/new build vs. major remodel,
            and that the guest house/wellness structure is fully permitted.
          </p>
          <div className="mt-6 grid md:grid-cols-3 gap-4 text-amber-950">
            <div className="rounded-xl bg-white/70 border border-amber-200 p-5">
              <div className="font-semibold mb-1">Permits + COO</div>
              <div className="text-sm text-amber-900/80">Final inspections, CO/COO, and as-built square footage.</div>
            </div>
            <div className="rounded-xl bg-white/70 border border-amber-200 p-5">
              <div className="font-semibold mb-1">Guest house / wellness</div>
              <div className="text-sm text-amber-900/80">Confirm it’s fully permitted as a separate structure/program.</div>
            </div>
            <div className="rounded-xl bg-white/70 border border-amber-200 p-5">
              <div className="font-semibold mb-1">Smart systems + warranty</div>
              <div className="text-sm text-amber-900/80">Transferability, service providers, and documentation.</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


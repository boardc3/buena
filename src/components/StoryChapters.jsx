import { motion } from 'framer-motion'
import { PROPERTY } from '../data/property'

export default function StoryChapters() {
  return (
    <section id="story" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid lg:grid-cols-12 gap-10 items-end"
        >
          <div className="lg:col-span-5">
            <div className="text-xs tracking-[0.28em] uppercase text-luxury-gold mb-4">
              The buyer story
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-semibold leading-[1.03] tracking-[-0.02em]">
              {PROPERTY.copy.storyTitle}
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-lg md:text-xl text-white/70 leading-relaxed">
              {PROPERTY.copy.storyBody}
            </p>
            <div className="mt-6 text-sm text-white/55">
              Design team:{' '}
              <span className="text-white/75">{PROPERTY.designTeam.join(' · ')}</span>
            </div>
          </div>
        </motion.div>

        <div className="mt-14 grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 rounded-3xl border hairline surface p-10">
            <div className="text-xs tracking-[0.28em] uppercase text-white/55 mb-3">Wellness</div>
            <div className="text-2xl md:text-3xl font-display font-semibold">
              A separate wellness guest house—built like a private spa.
            </div>
            <p className="mt-4 text-white/70 leading-relaxed max-w-2xl">
              Infrared sauna, steam room, cold plunge, and gym—so recovery and routine don’t interfere with
              hosting and daily flow.
            </p>
            <div className="mt-7 flex flex-wrap gap-2 text-sm">
              {['Infrared sauna', 'Steam room', 'Cold plunge', 'Gym'].map((x) => (
                <span key={x} className="px-4 py-2 rounded-full border hairline bg-white/5 text-white/75">
                  {x}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 rounded-3xl border hairline surface p-10">
            <div className="text-xs tracking-[0.28em] uppercase text-white/55 mb-3">Entertaining</div>
            <div className="text-2xl md:text-3xl font-display font-semibold">
              A home that hosts like a venue.
            </div>
            <p className="mt-4 text-white/70 leading-relaxed">
              Theater + lounge, butler’s pantry, outdoor kitchen, and patios designed for large-scale evenings that
              feel effortless.
            </p>
          </div>
        </div>

        <div className="mt-6 grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5 rounded-3xl border hairline surface p-10">
            <div className="text-xs tracking-[0.28em] uppercase text-white/55 mb-3">Views</div>
            <div className="text-2xl md:text-3xl font-display font-semibold">
              Mummy Mountain in frame.
            </div>
            <p className="mt-4 text-white/70 leading-relaxed">
              In Paradise Valley, sightlines are value. Walls of glass and indoor–outdoor architecture turn the
              view into a daily feature—not a selling line.
            </p>
          </div>

          <div className="lg:col-span-7 rounded-3xl border hairline surface p-10">
            <div className="text-xs tracking-[0.28em] uppercase text-white/55 mb-3">Detail</div>
            <div className="text-2xl md:text-3xl font-display font-semibold">
              {PROPERTY.copy.detailsTitle}
            </div>
            <p className="mt-4 text-white/70 leading-relaxed">
              {PROPERTY.copy.detailsBody}
            </p>
            <div className="mt-7 flex flex-wrap gap-2 text-sm">
              {['Molteni&C Dada closets', 'Smart home systems', 'Climate-controlled garage'].map((x) => (
                <span key={x} className="px-4 py-2 rounded-full border hairline bg-white/5 text-white/75">
                  {x}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


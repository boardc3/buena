import { motion } from 'framer-motion'
import { PROPERTY } from '../data/property'

export default function StoryChapters() {
  return (
    <section id="story" className="py-24" aria-label="Property story and features" itemScope itemType="https://schema.org/SingleFamilyResidence">
      {/* Hidden SEO content for crawlers - Address optimized */}
      <div className="sr-only">
        <h1 itemProp="name">5441 E Via Buena Vista, Paradise Valley, AZ 85253 - Luxury Home for Sale</h1>
        <h2>5441 East Via Buena Vista, Paradise Valley, Arizona 85253</h2>
        <p itemProp="description">
          5441 E Via Buena Vista is a $12,495,000 luxury home for sale in Paradise Valley, Arizona 85253. 
          This 8,492 square foot estate at 5441 Via Buena Vista features 6 bedrooms, 8 bathrooms, and 
          sits on 1.05 acres with Mummy Mountain views. 5441 E Via Buena Vista includes a separate 
          wellness guest house with infrared sauna, steam room, cold plunge, and gym. 
          Built in 2023 by Eagle Luxury Properties. MLS 6970548.
        </p>
        <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
          <span itemProp="streetAddress">5441 E Via Buena Vista</span>,
          <span itemProp="addressLocality">Paradise Valley</span>,
          <span itemProp="addressRegion">AZ</span>
          <span itemProp="postalCode">85253</span>
        </div>
        <p>Address variations: 5441 East Via Buena Vista, 5441 Via Buena Vista Paradise Valley, 
           5441 E Via Buena Vista Paradise Valley AZ, 5441 Via Buena Vista AZ 85253</p>
        <span itemProp="numberOfBedrooms">6</span> bedrooms,
        <span itemProp="numberOfBathroomsTotal">8</span> bathrooms,
        <span itemProp="floorSize">8492</span> square feet,
        built in <span itemProp="yearBuilt">2023</span>
      </div>

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
            <h3 className="text-xs tracking-[0.28em] uppercase text-white/55 mb-3">Wellness</h3>
            <h4 className="text-2xl md:text-3xl font-display font-semibold">
              A separate wellness guest house—built like a private spa.
            </h4>
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
            <h3 className="text-xs tracking-[0.28em] uppercase text-white/55 mb-3">Entertaining</h3>
            <h4 className="text-2xl md:text-3xl font-display font-semibold">
              A home that hosts like a venue.
            </h4>
            <p className="mt-4 text-white/70 leading-relaxed">
              Theater + lounge, butler’s pantry, outdoor kitchen, and patios designed for large-scale evenings that
              feel effortless.
            </p>
          </div>
        </div>

        <div className="mt-6 grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5 rounded-3xl border hairline surface p-10">
            <h3 className="text-xs tracking-[0.28em] uppercase text-white/55 mb-3">Views</h3>
            <h4 className="text-2xl md:text-3xl font-display font-semibold">
              Mummy Mountain in frame.
            </h4>
            <p className="mt-4 text-white/70 leading-relaxed">
              In Paradise Valley, sightlines are value. Walls of glass and indoor–outdoor architecture turn the
              view into a daily feature—not a selling line.
            </p>
          </div>

          <div className="lg:col-span-7 rounded-3xl border hairline surface p-10">
            <h3 className="text-xs tracking-[0.28em] uppercase text-white/55 mb-3">Detail</h3>
            <h4 className="text-2xl md:text-3xl font-display font-semibold">
              {PROPERTY.copy.detailsTitle}
            </h4>
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

        {/* Property Specifications - SEO Rich */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16"
        >
          <div className="text-xs tracking-[0.28em] uppercase text-luxury-gold mb-4">Property Details</div>
          <h3 className="text-3xl md:text-4xl font-display font-semibold mb-8">
            5441 E Via Buena Vista Specifications
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: 'List Price', value: '$12,495,000' },
              { label: 'MLS Number', value: '6970548' },
              { label: 'Living Space', value: '8,492 sq ft' },
              { label: 'Under Roof', value: '11,718 sq ft' },
              { label: 'Bedrooms', value: '6' },
              { label: 'Bathrooms', value: '8' },
              { label: 'Lot Size', value: '1.05 acres' },
              { label: 'Year Built', value: '2023' },
              { label: 'Location', value: 'Paradise Valley, AZ' },
              { label: 'Neighborhood', value: 'Mockingbird Lane Estates' },
              { label: 'Builder', value: 'Eagle Luxury' },
              { label: 'Architect', value: 'Drewett Works' },
            ].map((spec) => (
              <div key={spec.label} className="rounded-2xl border hairline bg-white/5 p-5">
                <div className="text-xs text-white/50 uppercase tracking-wider mb-1">{spec.label}</div>
                <div className="text-lg font-semibold text-white/90">{spec.value}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Section - Great for Featured Snippets */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16"
          itemScope
          itemType="https://schema.org/FAQPage"
        >
          <div className="text-xs tracking-[0.28em] uppercase text-luxury-gold mb-4">Common Questions</div>
          <h3 className="text-3xl md:text-4xl font-display font-semibold mb-8">
            About This Paradise Valley Estate
          </h3>
          <div className="space-y-4">
            {[
              {
                q: 'What makes 5441 E Via Buena Vista unique?',
                a: 'This Paradise Valley estate features a rare combination: a separate wellness guest house with infrared sauna, steam room, cold plunge, and gym—allowing fitness and recovery to happen privately while the main home stays event-ready. Built in 2023 by a premier design team including Eagle Luxury, Drewett Works, and Holly Wright Design.',
              },
              {
                q: 'What are the key amenities?',
                a: 'The property includes a resort-style pool and spa, home theater, outdoor kitchen, butler\'s pantry, climate-controlled garage, smart home automation, two primary suites, and panoramic Mummy Mountain views from walls of glass throughout.',
              },
              {
                q: 'What schools are nearby?',
                a: 'Top schools in the area include Phoenix Country Day School (private PK-12), Chaparral High School (top-rated public), Cherokee Elementary, Brophy College Preparatory, and Notre Dame Preparatory High School.',
              },
              {
                q: 'How do I schedule a private showing?',
                a: 'Contact Irina Ahdoot at 480-370-0941 or Irina.Ahdoot@gmail.com to schedule a private tour of this Paradise Valley luxury estate.',
              },
            ].map((faq, i) => (
              <details
                key={i}
                className="group rounded-2xl border hairline bg-white/5 overflow-hidden"
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <summary className="px-6 py-5 cursor-pointer list-none flex items-center justify-between text-white/90 font-semibold hover:bg-white/5 transition">
                  <span itemProp="name">{faq.q}</span>
                  <span className="text-luxury-gold group-open:rotate-45 transition-transform text-xl">+</span>
                </summary>
                <div
                  className="px-6 pb-5 text-white/70 leading-relaxed"
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <p itemProp="text">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}


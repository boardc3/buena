import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-14 border-t border-white/10" role="contentinfo" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div itemScope itemType="https://schema.org/RealEstateListing">
            <h3 className="text-2xl font-display font-semibold mb-4" itemProp="name">
              5441 E Via Buena Vista
            </h3>
            <p className="text-white/60" itemProp="description">
              Paradise Valley Luxury Estate
              <br />
              A new-build, design-team estate with a wellness-forward program
            </p>
            <meta itemProp="price" content="12495000" />
            <meta itemProp="priceCurrency" content="USD" />
          </div>

          <nav aria-label="Footer navigation">
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-white/60">
              <li>
                <a href="#gallery" className="hover:text-luxury-gold transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#story" className="hover:text-luxury-gold transition-colors">Story</a>
              </li>
              <li>
                <a href="#map" className="hover:text-luxury-gold transition-colors">Neighborhood</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-luxury-gold transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <div itemScope itemType="https://schema.org/PostalAddress">
            <h4 className="font-semibold mb-4">Property Information</h4>
            <ul className="space-y-2 text-white/60 text-sm">
              <li>MLS #: <span itemProp="identifier">6970548</span></li>
              <li>8,492 sq ft | 6 Bed | 8 Bath</li>
              <li>1.05 Acres | Built 2023</li>
              <li>
                <span itemProp="addressLocality">Paradise Valley</span>, 
                <span itemProp="addressRegion">AZ</span> 
                <span itemProp="postalCode">85253</span>
              </li>
            </ul>
          </div>
        </div>

        {/* SEO Keywords Section */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <p className="text-white/40 text-xs leading-relaxed max-w-4xl mx-auto text-center">
            Paradise Valley luxury real estate | Arizona luxury homes for sale | Scottsdale area estates | 
            Mummy Mountain views | Wellness home Arizona | New construction Paradise Valley | 
            Luxury home with guest house | Paradise Valley AZ 85253 | High-end real estate Phoenix metro | 
            Mockingbird Lane Estates | Eagle Luxury Properties | Drewett Works architecture
          </p>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-white/45 text-sm">
          <p>
            &copy; {currentYear} 5441 E Via Buena Vista | Paradise Valley Luxury Estate | MLS 6970548
            <br />
            <span className="text-white/35">
              $12,495,000 | 8,492 sq ft | 6 Bed | 8 Bath | 1.05 Acres | Built 2023
            </span>
            <br />
            Information deemed reliable but not guaranteed.
          </p>
        </div>
      </div>
    </footer>
  )
}

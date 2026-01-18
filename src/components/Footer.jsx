import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-14 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-display font-semibold mb-4">
              5441 E Via Buena Vista
            </h3>
            <p className="text-white/60">
              Paradise Valley Luxury Estate
              <br />
              A new-build, design-team estate with a wellness-forward program
            </p>
          </div>

          <div>
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
          </div>

          <div>
            <h4 className="font-semibold mb-4">Property Information</h4>
            <ul className="space-y-2 text-white/60 text-sm">
              <li>MLS #: 6970548</li>
              <li>8,492 sq ft | 6 Bed | 8 Bath</li>
              <li>1.05 Acres | Built 2023</li>
              <li>Paradise Valley, AZ 85253</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-white/45 text-sm">
          <p>
            &copy; {currentYear} 5441 E Via Buena Vista. All rights reserved.
            <br />
            Information deemed reliable but not guaranteed.
          </p>
        </div>
      </div>
    </footer>
  )
}

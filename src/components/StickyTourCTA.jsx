import { Phone, CalendarDays } from 'lucide-react'

export default function StickyTourCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-4">
        <div className="rounded-2xl border border-white/15 bg-luxury-dark/90 backdrop-blur-xl shadow-2xl px-4 py-3 flex items-center justify-between gap-3">
          <div className="min-w-0">
            <div className="text-sm text-white/80 truncate">5441 E Via Buena Vista</div>
            <div className="text-xs text-white/55 truncate">Private showings · by appointment</div>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-luxury-gold text-luxury-dark px-4 py-2 text-sm font-semibold hover:brightness-110 transition"
            >
              <CalendarDays className="w-4 h-4" />
              Arrange tour
            </a>
            <a
              href="tel:+1234567890"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 text-white px-4 py-2 text-sm font-semibold hover:bg-white/10 transition"
            >
              <Phone className="w-4 h-4" />
              Call
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}


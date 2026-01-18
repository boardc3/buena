import { useState } from 'react'
import { CalendarDays, ChevronDown, Play } from 'lucide-react'
import { motion } from 'framer-motion'
import { PROPERTY } from '../data/property'
import heroVideo from '../assets/IA-1.0.mp4'
import heroPoster from '../assets/stills/hero_01.jpg'

export default function HeroVideo() {
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlay = () => {
    setIsPlaying(true)
    // Video playback logic will go here when you add your video
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Container - Replace with your video element */}
      <div className="absolute inset-0 bg-black">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={heroVideo}
          poster={heroPoster}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onPlay={() => setIsPlaying(true)}
        />
        {/* Cinematic overlays */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(1200px 600px at 20% 10%, rgba(212,175,55,0.18), rgba(0,0,0,0) 60%), radial-gradient(900px 600px at 80% 0%, rgba(255,255,255,0.06), rgba(0,0,0,0) 55%), linear-gradient(180deg, rgba(0,0,0,0.05), rgba(0,0,0,0.75))',
          }}
        />

        {/* Optional tap-to-play affordance (iOS can block autoplay in some cases) */}
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.button
              onClick={handlePlay}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: 'spring' }}
              className="p-8 rounded-full bg-white/10 backdrop-blur-xl hover:bg-white/15 transition-all border border-white/15"
            >
              <Play size={64} fill="white" className="text-white ml-2" />
            </motion.button>
          </div>
        )}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <div className="text-xs md:text-sm text-luxury-gold tracking-[0.28em] uppercase">
                Paradise Valley Luxury Estate
              </div>
              <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-white/40" />
              <div className="text-xs md:text-sm text-white/65">{PROPERTY.price}</div>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-semibold mb-6 leading-[0.95] tracking-[-0.02em]">
              {PROPERTY.copy.heroHeadline}
            </h1>
            <p className="text-lg md:text-2xl mb-8 max-w-3xl text-white/75 leading-relaxed">
              {PROPERTY.copy.heroSubhead}
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              {PROPERTY.quickFacts.slice(0, 4).map((f) => (
                <div key={f.label} className="px-5 py-2.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-xl">
                  <span className="text-white/60">{f.label}</span>{' '}
                  <span className="text-white/90 font-semibold">{f.value}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-luxury-gold text-black px-6 py-3 text-sm font-semibold hover:brightness-110 transition"
              >
                <CalendarDays className="w-4 h-4" />
                Request a private tour
              </a>
              <a
                href="#story"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 text-white px-6 py-3 text-sm font-semibold hover:bg-white/10 transition"
              >
                See the story
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, repeat: Infinity, repeatType: 'reverse', duration: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 cursor-pointer"
        onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <ChevronDown className="text-white w-6 h-6" />
      </motion.div>
    </section>
  )
}

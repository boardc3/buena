import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import HeroVideo from './components/HeroVideo'
import StoryChapters from './components/StoryChapters'
import PhotoGallery from './components/PhotoGallery'
import MapboxNeighborhood from './components/MapboxNeighborhood'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import StickyTourCTA from './components/StickyTourCTA'

function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-[#07080B]">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-luxury-gold focus:text-black focus:px-4 focus:py-2 focus:rounded-full">
        Skip to main content
      </a>
      <Navbar scrolled={scrolled} />
      <main id="main-content" role="main">
        <HeroVideo />
        <StoryChapters />
        <PhotoGallery />
        <MapboxNeighborhood />
        <ContactSection />
      </main>
      <Footer />
      <StickyTourCTA />
    </div>
  )
}

export default App

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
      <Navbar scrolled={scrolled} />
      <HeroVideo />
      <StoryChapters />
      <PhotoGallery />
      <MapboxNeighborhood />
      <ContactSection />
      <Footer />
      <StickyTourCTA />
    </div>
  )
}

export default App

import { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import g1 from '../assets/stills/gallery_01.jpg'
import g2 from '../assets/stills/gallery_02.jpg'
import g3 from '../assets/stills/gallery_03.jpg'
import g4 from '../assets/stills/gallery_04.jpg'
import g5 from '../assets/stills/gallery_05.jpg'
import g6 from '../assets/stills/gallery_06.jpg'
import g7 from '../assets/stills/gallery_07.jpg'
import g8 from '../assets/stills/gallery_08.jpg'

export default function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  // Stills extracted from the film (swap for photography later if desired)
  const galleryImages = [
    { id: 1, src: g1, alt: 'Estate still 1', title: 'Arrival' },
    { id: 2, src: g2, alt: 'Estate still 2', title: 'Volume' },
    { id: 3, src: g3, alt: 'Estate still 3', title: 'Light' },
    { id: 4, src: g4, alt: 'Estate still 4', title: 'Calm' },
    { id: 5, src: g5, alt: 'Estate still 5', title: 'Resort yard' },
    { id: 6, src: g6, alt: 'Estate still 6', title: 'Wellness' },
    { id: 7, src: g7, alt: 'Estate still 7', title: 'Entertaining' },
    { id: 8, src: g8, alt: 'Estate still 8', title: 'Night' },
  ]

  const openLightbox = (index) => {
    setCurrentIndex(index)
    setSelectedImage(galleryImages[index])
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    const next = (currentIndex + 1) % galleryImages.length
    setCurrentIndex(next)
    setSelectedImage(galleryImages[next])
  }

  const prevImage = () => {
    const prev = (currentIndex - 1 + galleryImages.length) % galleryImages.length
    setCurrentIndex(prev)
    setSelectedImage(galleryImages[prev])
  }

  return (
    <section id="gallery" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="text-xs tracking-[0.28em] uppercase text-luxury-gold mb-4">Gallery</div>
          <h2 className="text-4xl md:text-5xl font-display font-semibold tracking-[-0.02em]">
            A visual tour.
          </h2>
          <p className="mt-4 text-lg text-white/70 max-w-2xl">
            From arrival to wellness pavilion to resort yard—light, volume, and finish, captured the way this home lives.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-sm font-medium">
                  View Full Size
                </div>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5">
                <div className="text-sm text-white/90 font-semibold">{image.title}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white hover:text-luxury-gold transition-colors z-10 p-2 hover:bg-white/10 rounded-full"
              >
                <X size={32} />
              </button>
              
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  prevImage()
                }}
                className="absolute left-4 text-white hover:text-luxury-gold transition-colors z-10 p-2 hover:bg-white/10 rounded-full"
              >
                <ChevronLeft size={40} />
              </button>
              
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  nextImage()
                }}
                className="absolute right-4 text-white hover:text-luxury-gold transition-colors z-10 p-2 hover:bg-white/10 rounded-full"
              >
                <ChevronRight size={40} />
              </button>

              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="max-w-6xl max-h-full"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full max-h-[80vh] object-contain rounded-lg"
                />
                <div className="text-white text-center mt-4">{currentIndex + 1} / {galleryImages.length}</div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

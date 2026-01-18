import { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import t1 from '../assets/stills/tour/tour_01.jpg'
import t2 from '../assets/stills/tour/tour_02.jpg'
import t3 from '../assets/stills/tour/tour_03.jpg'
import t4 from '../assets/stills/tour/tour_04.jpg'
import t5 from '../assets/stills/tour/tour_05.jpg'
import t6 from '../assets/stills/tour/tour_06.jpg'
import t7 from '../assets/stills/tour/tour_07.jpg'
import t8 from '../assets/stills/tour/tour_08.jpg'
import t9 from '../assets/stills/tour/tour_09.jpg'
import t10 from '../assets/stills/tour/tour_10.jpg'
import t11 from '../assets/stills/tour/tour_11.jpg'
import t12 from '../assets/stills/tour/tour_12.jpg'
import t13 from '../assets/stills/tour/tour_13.jpg'
import t14 from '../assets/stills/tour/tour_14.jpg'
import t15 from '../assets/stills/tour/tour_15.jpg'
import t16 from '../assets/stills/tour/tour_16.jpg'

export default function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  // Stills extracted from the film (swap for photography later if desired)
  const galleryImages = [
    { id: 1, src: t1, alt: 'Estate scene 1', title: 'Scene 01' },
    { id: 2, src: t2, alt: 'Estate scene 2', title: 'Scene 02' },
    { id: 3, src: t3, alt: 'Estate scene 3', title: 'Scene 03' },
    { id: 4, src: t4, alt: 'Estate scene 4', title: 'Scene 04' },
    { id: 5, src: t5, alt: 'Estate scene 5', title: 'Scene 05' },
    { id: 6, src: t6, alt: 'Estate scene 6', title: 'Scene 06' },
    { id: 7, src: t7, alt: 'Estate scene 7', title: 'Scene 07' },
    { id: 8, src: t8, alt: 'Estate scene 8', title: 'Scene 08' },
    { id: 9, src: t9, alt: 'Estate scene 9', title: 'Scene 09' },
    { id: 10, src: t10, alt: 'Estate scene 10', title: 'Scene 10' },
    { id: 11, src: t11, alt: 'Estate scene 11', title: 'Scene 11' },
    { id: 12, src: t12, alt: 'Estate scene 12', title: 'Scene 12' },
    { id: 13, src: t13, alt: 'Estate scene 13', title: 'Scene 13' },
    { id: 14, src: t14, alt: 'Estate scene 14', title: 'Scene 14' },
    { id: 15, src: t15, alt: 'Estate scene 15', title: 'Scene 15' },
    { id: 16, src: t16, alt: 'Estate scene 16', title: 'Scene 16' },
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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

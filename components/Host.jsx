import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

// Placeholder images — replace src values with real photos
const photos = [
  { id: 1, src: '/images/cody-1.jpg', alt: 'Cody Hall - Host' },
  { id: 2, src: '/images/cody-2.jpg', alt: 'Cody with family' },
  { id: 3, src: '/images/cody-3.jpg', alt: 'Cody Hall on stage' },
  { id: 4, src: '/images/cody-4.jpg', alt: 'Cody at work' },
  { id: 5, src: '/images/cody-5.jpg', alt: 'Cody Hall' },
]

// Credentials

export default function Host() {
  const [activePhoto, setActivePhoto] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const nextPhoto = () => setActivePhoto((p) => (p + 1) % photos.length)
  const prevPhoto = () => setActivePhoto((p) => (p - 1 + photos.length) % photos.length)

  return (
    <section id="host" className="section-pad bg-charcoal relative overflow-hidden grain-overlay" ref={ref}>
      {/* Background */}
      <div
        className="absolute top-0 left-0 w-[600px] h-[600px] opacity-5"
        style={{ background: 'radial-gradient(ellipse, #CD7F32 0%, transparent 70%)' }}
      
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Label */}
        <motion.div
          className="flex items-center gap-4 mb-16"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="w-8 h-px bg-gold/60" />
          <span className="text-xs tracking-ultra uppercase text-gold">Your Host</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Photo carousel */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.1 }}
          >
            {/* Main photo frame */}
            <div className="relative overflow-hidden bg-charcoal-light aspect-[3/4]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePhoto}
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {photos[activePhoto].src ? (
                    <img
                      src={photos[activePhoto].src}
                      alt={photos[activePhoto].alt}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    /* Placeholder — replace with real photos */
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-charcoal to-black-rich">
                      <div
                        className="text-7xl font-display font-light text-gold/20 mb-4"
                        style={{ fontFamily: 'var(--font-display)' }}
                      >
                        CH
                      </div>
                      <p className="text-xs tracking-ultra uppercase text-gray-muted">
                        {photos[activePhoto].alt}
                      </p>
                      <p className="text-[10px] text-gray-muted/50 mt-2">
                        Replace with real photo
                      </p>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black-deep/60 via-transparent to-transparent pointer-events-none" />

              {/* Photo counter */}
              <div className="absolute bottom-5 left-5 text-xs tracking-ultra uppercase text-beige/70">
                {String(activePhoto + 1).padStart(2, '0')} / {String(photos.length).padStart(2, '0')}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-6">
              <button
                onClick={prevPhoto}
                className="w-10 h-10 border border-gold/30 flex items-center justify-center text-gold hover:bg-gold/10 transition-all duration-300 text-sm"
              >
                ←
              </button>

              {/* Thumbnail dots */}
              <div className="flex gap-2">
                {photos.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActivePhoto(i)}
                    className={`transition-all duration-300 ${
                      i === activePhoto
                        ? 'w-8 h-1 bg-gold'
                        : 'w-4 h-1 bg-gold/30 hover:bg-gold/60'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextPhoto}
                className="w-10 h-10 border border-gold/30 flex items-center justify-center text-gold hover:bg-gold/10 transition-all duration-300 text-sm"
              >
                →
              </button>
            </div>

            {/* Decorative border */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-gold/10 pointer-events-none" />
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h2
              className="font-display font-light leading-tight mb-2"
              style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 4vw, 4rem)' }}
            >
              Cody Hall
            </h2>
            <p className="text-xs tracking-ultra uppercase text-gold mb-8">
              Host & Entrepreneur
            </p>

            <div className="space-y-4 text-gray-warm text-sm leading-relaxed font-light">
              <p>
                Cody Hall is an entrepreneur with a track record of building, scaling, and exiting successful businesses. 
                From launching startups to advising high-growth companies, he has developed deep expertise in operations, 
                team-building, and business strategy.
              </p>
              <p>
                As the leader of a multinational BPO, Cody helps businesses worldwide streamline operations with remote 
                staffing and call center solutions. He also consults on marketing, sales, and organizational management.
              </p>
              <p>
                Beyond business, Cody is a dedicated family man. He resides in Las Vegas and Mexico with his wife and 
                three children. Through <em className="text-beige/80">The Faces: Entrepreneurs Are People Too</em>, he shares insights from 
                founders and business leaders, exploring the personal and professional realities of entrepreneurship.
              </p>
            </div>

            {/* CTA */}
            <motion.div
              className="mt-10"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <a
                href="https://www.linkedin.com/in/codhal/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-xs tracking-wide-xl uppercase border border-gold/30 text-gold px-6 py-3 hover:bg-gold/10 hover:border-gold/60 transition-all duration-300"
              >
                Connect on LinkedIn
                <span>→</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

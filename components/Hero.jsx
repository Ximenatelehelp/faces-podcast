import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Hero() {
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden grain-overlay"
      id="home"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-black-deep" />
      <div className="absolute inset-0 bg-gradient-to-br from-black-deep via-charcoal to-black-deep opacity-90" />

      {/* Animated glow */}
      <motion.div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full"
        style={{
          background:
            'radial-gradient(ellipse, rgba(201,168,76,0.08) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute bottom-0 right-0 w-[600px] h-[400px] rounded-full"
        style={{
          background:
            'radial-gradient(ellipse, rgba(201,168,76,0.04) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />

      {/* Background texture */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-gradient-to-b from-charcoal via-black-rich to-black-deep" />
      </div>

      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-black-deep via-transparent to-black-deep/60 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black-deep/70 via-transparent to-black-deep/70 pointer-events-none" />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center max-w-5xl mx-auto px-6"
        style={{ y, opacity }}
      >
        {/* Main headline */}
        <motion.h1
          className="font-display font-light leading-[0.9] mb-6"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3.5rem, 10vw, 9rem)',
          }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            delay: 0.4,
            ease: [0.25, 0.1, 0, 1],
          }}
        >
          <span className="block text-beige">Entrepreneurs</span>
          <span className="block italic text-gold-gradient">
            Are People Too
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-gray-warm text-lg md:text-xl font-body font-light max-w-2xl mx-auto leading-relaxed mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          Real stories. Real lessons. The human side of entrepreneurship —
          raw, honest, and deeply inspiring.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <a
            href="#episodes"
            className="group flex items-center gap-3 bg-gold hover:bg-gold-light text-black-deep text-sm tracking-wide-xl uppercase px-8 py-4 transition-all duration-300 font-medium"
          >
            Watch Latest Episodes
            <span className="group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </a>

          <a
            href="#booking"
            className="flex items-center gap-3 border border-beige/20 hover:border-gold/50 text-beige hover:text-gold text-sm tracking-wide-xl uppercase px-8 py-4 transition-all duration-300"
          >
            Be a Guest
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="mt-16 flex items-center justify-center gap-10 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          {[
            { number: '100+', label: 'Episodes' },
            { number: '50K+', label: 'Listeners' },
            { number: '5★', label: 'Rated' },
          ].map((stat) => (
            <div key={stat.label}>
              <div
                className="text-2xl md:text-3xl font-display font-light text-gold"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {stat.number}
              </div>

              <div className="text-xs tracking-wide-xl uppercase text-gray-muted mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-xs tracking-ultra uppercase text-gray-muted">
          Scroll
        </span>

        <motion.div
          className="w-px h-12 bg-gradient-to-b from-gold/60 to-transparent"
          animate={{ scaleY: [0, 1, 0], originY: 0 }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </motion.div>
    </section>
  )
}
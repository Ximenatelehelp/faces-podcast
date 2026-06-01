import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="section-pad bg-black-rich relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] opacity-5"
        style={{
          background: 'radial-gradient(ellipse, #C9A84C 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section label */}
        <motion.div
          className="flex items-center gap-4 mb-16"
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ duration: 0.8 }}
        >
          <span className="w-8 h-px bg-gold/60" />
          <span className="text-xs tracking-ultra uppercase text-gold">About the Show</span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Typography */}
          <div>
            <motion.h2
              className="font-display font-light leading-tight mb-8"
              style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              transition={{ duration: 0.9, delay: 0.1 }}
            >
              More Than a{' '}
              <span className="italic text-gold-gradient">Podcast.</span>
              <br />
              A Movement.
            </motion.h2>

            <motion.div
              className="space-y-5 text-gray-warm leading-relaxed text-base font-light"
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              transition={{ duration: 0.9, delay: 0.2 }}
            >
              <p>
                The Faces Podcast aims to inspire and educate entrepreneurs by sharing real stories of challenges, 
                successes, and lessons learned from industry leaders.
              </p>
              <p>
                Through insightful conversations, it highlights the human side of entrepreneurship, offering valuable 
                business insights, legal strategies, and practical advice.
              </p>
              <p>
                By fostering a supportive community, the podcast encourages innovation, problem-solving, and meaningful 
                connections among entrepreneurs and business professionals.
              </p>
            </motion.div>

            {/* Platform links */}
            <motion.div
              className="mt-10 flex flex-wrap gap-3"
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              transition={{ duration: 0.9, delay: 0.3 }}
            >
              {[
                { label: 'Spotify', href: 'https://open.spotify.com/show/2aoZ68aUAaCiDhKplSpZxQ' },
                { label: 'YouTube', href: 'https://youtube.com/@thefacescast' },
                { label: 'Apple Podcasts', href: '#' },
              ].map((platform) => (
                <a
                  key={platform.label}
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs tracking-wide-xl uppercase px-5 py-2.5 border border-gold/30 text-gold-pale hover:bg-gold/10 hover:border-gold/60 transition-all duration-300"
                >
                  {platform.label}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right: Visual card */}
          <motion.div
            className="relative"
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {/* Main card */}
            <div className="relative bg-charcoal border border-gold/10 p-10 overflow-hidden">
              {/* Inner glow */}
              <div
                className="absolute top-0 right-0 w-64 h-64 opacity-20"
                style={{
                  background: 'radial-gradient(ellipse, #C9A84C 0%, transparent 70%)',
                }}
              />

              <div className="relative z-10">
                <div
                  className="text-6xl font-display font-light text-gold/20 mb-4"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  "
                </div>
                <p
                  className="text-xl md:text-2xl font-display font-light italic text-beige/90 leading-relaxed"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  The stories you've never heard from the founders you need to know.
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="w-10 h-px bg-gold/40" />
                  <span className="text-xs tracking-ultra uppercase text-gold">The Faces Podcast</span>
                </div>
              </div>
            </div>

            {/* Decorative offset border */}
            <div className="absolute -bottom-3 -right-3 w-full h-full border border-gold/10 pointer-events-none" />
          </motion.div>
        </div>

        {/* Mission pillars */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-px bg-gold/10">
          {[
            {
              icon: '◈',
              title: 'Real Stories',
              desc: 'Unfiltered conversations with founders who have lived it — the wins, losses, and everything in between.',
            },
            {
              icon: '◇',
              title: 'Practical Wisdom',
              desc: 'Business insights, legal strategies, and operational advice you can apply today.',
            },
            {
              icon: '◉',
              title: 'Human Connection',
              desc: 'Fostering community among entrepreneurs and business professionals worldwide.',
            },
          ].map((pillar, i) => (
            <motion.div
              key={pillar.title}
              className="bg-black-rich p-10 group hover:bg-charcoal transition-colors duration-500"
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              transition={{ duration: 0.8, delay: 0.4 + i * 0.1 }}
            >
              <div className="text-2xl text-gold/60 mb-5 group-hover:text-gold transition-colors duration-300">
                {pillar.icon}
              </div>
              <h3
                className="text-xl font-display font-light text-beige mb-3"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {pillar.title}
              </h3>
              <p className="text-sm text-gray-warm leading-relaxed">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

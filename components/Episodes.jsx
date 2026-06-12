import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const episodes = [
  {
    number: 101,
    guest: 'Ferdinando Esquivel',
    title: 'Entrepreneurial Leadership',
    youtubeId: 'TWdy667D6OY',
    thumbnail: '/images/ferdinando-esquivel.png',
    tags: ['Leadership', 'Entrepreneurship'],
  },
  {
    number: 100,
    guest: 'Jesse Ramos',
    title: 'Building Empires from Nothing',
    youtubeId: 'PZz8EBc3Rko',
    thumbnail: `https://img.youtube.com/vi/PZz8EBc3Rko/maxresdefault.jpg`,
    tags: ['Entrepreneurship', 'Growth'],
  },
  {
    number: 99,
    guest: 'David Arkin',
    title: 'The Art of Strategic Exits',
    youtubeId: 'BTj-CgwecG8',
    thumbnail: `https://img.youtube.com/vi/BTj-CgwecG8/maxresdefault.jpg`,
    tags: ['Strategy', 'Business'],
  },
]

function EpisodeCard({ episode, index }) {
  const [isHovered, setIsHovered] = useState(false)
  const [showVideo, setShowVideo] = useState(false)

  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, delay: index * 0.12, ease: [0.25, 0.1, 0, 1] }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Thumbnail */}
      <div className="relative overflow-hidden aspect-video bg-charcoal">
        {showVideo ? (
          <iframe
            src={`https://www.youtube.com/embed/${episode.youtubeId}?autoplay=1`}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <>
            {/* Thumbnail image */}
            <img
              src={episode.thumbnail}
              alt={episode.guest}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              onError={(e) => {
                e.target.style.display = 'none'
              }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black-deep via-black-deep/30 to-transparent" />
            <motion.div
              className="absolute inset-0 bg-black-deep/40"
              animate={{ opacity: isHovered ? 0.3 : 0 }}
              transition={{ duration: 0.3 }}
            />

            {/* Episode number badge */}
            <div className="absolute top-4 left-4">
              <span className="text-xs tracking-ultra uppercase bg-gold text-black-deep px-3 py-1 font-medium">
                EP. {episode.number}
              </span>
            </div>

            {/* Play button */}
            <motion.button
              onClick={() => setShowVideo(true)}
              className="absolute inset-0 flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="w-14 h-14 rounded-full border border-beige/60 flex items-center justify-center backdrop-blur-sm"
                animate={{ scale: isHovered ? 1.1 : 1, borderColor: isHovered ? 'rgba(201,168,76,0.8)' : 'rgba(240,230,208,0.6)' }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-0 h-0 border-l-[14px] border-l-beige border-y-[9px] border-y-transparent ml-1" />
              </motion.div>
            </motion.button>
          </>
        )}
      </div>

      {/* Info */}
      <div className="pt-5 pb-8 border-b border-gold/10">
        <div className="flex items-center gap-2 mb-3">
          {episode.tags.map((tag) => (
            <span key={tag} className="text-[10px] tracking-wider uppercase text-gold/70 border border-gold/20 px-2 py-0.5">
              {tag}
            </span>
          ))}
        </div>
        <h3
          className="text-2xl font-display font-light text-beige mb-1 group-hover:text-gold-pale transition-colors duration-300"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {episode.guest}
        </h3>
        <p className="text-sm text-gray-warm">{episode.title}</p>

        {/* Watch link */}
        <motion.a
          href={`https://youtu.be/${episode.youtubeId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-4 text-xs tracking-wide-xl uppercase text-gold hover:text-gold-pale transition-colors duration-300 group/link"
        >
          Watch on YouTube
          <span className="group-hover/link:translate-x-1 transition-transform duration-300">→</span>
        </motion.a>
      </div>
    </motion.div>
  )
}
export default function Episodes() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  return (
    <section id="episodes" className="section-pad bg-black-deep relative" ref={ref}>
      {/* Ambient glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-5"
        style={{ background: 'radial-gradient(ellipse, #C9A84C 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <motion.div
            className="flex items-center gap-4 mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="w-8 h-px bg-gold/60" />
            <span className="text-xs tracking-ultra uppercase text-gold">Featured Episodes</span>
          </motion.div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <motion.h2
              className="font-display font-light leading-tight"
              style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.1 }}
            >
              The Conversations
              <br />
              <span className="italic text-gold-gradient">That Matter.</span>
            </motion.h2>

            <motion.a
              href="https://youtube.com/@thefacescast"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 text-xs tracking-wide-xl uppercase px-6 py-3 border border-gold/30 text-gold hover:bg-gold/10 transition-all duration-300 self-start md:self-auto"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              View All Episodes →
            </motion.a>
          </div>
        </div>

                {/* Episodes grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {episodes.map((ep, i) => (
            <EpisodeCard key={ep.number} episode={ep} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}

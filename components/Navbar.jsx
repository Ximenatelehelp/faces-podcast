import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const guestFormUrl = 'https://www.thefacespodcast.com/beaguest'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Episodes', href: '#episodes' },
  { label: 'Host', href: '#host' },
  { label: 'Be a Guest', href: guestFormUrl, external: true },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? 'bg-black-deep/90 backdrop-blur-md border-b border-gold/10 py-4'
            : 'bg-transparent py-7'
        }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.25, 0.1, 0, 1] }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

          {/* LOGO */}
          <a href="#" className="flex items-center">
            <img
              src="/images/logo.png"
              alt="The Faces Podcast"
              className="h-14 md:h-16 w-auto"
            />
          </a>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                className="text-xs tracking-wide-xl uppercase text-gray-warm hover:text-beige transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}

            <a
              href={guestFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-wide-xl uppercase px-6 py-2.5 border border-gold/40 text-gold hover:bg-gold hover:text-black-deep transition-all duration-300"
            >
              Apply Now
            </a>
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <motion.span
              className="block w-6 h-px bg-beige"
              animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 5 : 0 }}
            />
            <motion.span
              className="block w-6 h-px bg-beige"
              animate={{ opacity: menuOpen ? 0 : 1 }}
            />
            <motion.span
              className="block w-6 h-px bg-beige"
              animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -5 : 0 }}
            />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black-deep/98 backdrop-blur-lg flex flex-col items-center justify-center gap-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                onClick={() => setMenuOpen(false)}
                className="text-4xl font-display font-light text-beige hover:text-gold transition-colors"
                style={{ fontFamily: 'var(--font-display)' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                {link.label}
              </motion.a>
            ))}

            <motion.a
              href={guestFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="text-sm tracking-ultra uppercase px-10 py-4 border border-gold/40 text-gold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
            >
              Apply Now
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const trailX = useMotionValue(-100)
  const trailY = useMotionValue(-100)

  const springConfig = { damping: 25, stiffness: 200 }
  const trailSpringX = useSpring(cursorX, { damping: 40, stiffness: 120 })
  const trailSpringY = useSpring(cursorY, { damping: 40, stiffness: 120 })

  const isHovering = useRef(false)

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 6)
      cursorY.set(e.clientY - 6)
    }

    const handleMouseOver = (e) => {
      if (e.target.closest('a, button, [data-hover]')) {
        isHovering.current = true
      }
    }
    const handleMouseOut = () => { isHovering.current = false }

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mouseover', handleMouseOver)
    window.addEventListener('mouseout', handleMouseOut)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mouseover', handleMouseOver)
      window.removeEventListener('mouseout', handleMouseOut)
    }
  }, [])

  return (
    <>
      <motion.div
        style={{ x: cursorX, y: cursorY }}
        className="fixed top-0 left-0 w-3 h-3 bg-gold rounded-full pointer-events-none z-[9999] mix-blend-difference"
      />
      <motion.div
        style={{ x: trailSpringX, y: trailSpringY }}
        className="fixed top-0 left-0 w-8 h-8 border border-gold/40 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />
    </>
  )
}

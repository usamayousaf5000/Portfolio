import { motion, useScroll, useSpring, useReducedMotion } from 'framer-motion'

export function ScrollProgress() {
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  if (reduce) {
    return null
  }

  return (
    <motion.div
      className="from-cyan-400 via-violet-500 to-fuchsia-500 pointer-events-none fixed top-0 right-0 left-0 z-[500] h-[3px] origin-left bg-gradient-to-r shadow-[0_0_12px_rgba(34,211,238,0.45)]"
      style={{ scaleX }}
      animate={{ opacity: [0.85, 1, 0.85] }}
      transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
      aria-hidden
    />
  )
}

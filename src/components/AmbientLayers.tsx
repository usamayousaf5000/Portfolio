import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

/**
 * Extra depth for the hero: soft orbs, rings, and light particles.
 * Renders nothing when reduced motion is preferred.
 */
export function HeroAmbient() {
  const reduce = useReducedMotion()
  if (reduce) return null

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      {/* Slow-drifting ring */}
      <motion.div
        className="border-cyan-500/20 absolute top-[12%] right-[8%] h-64 w-64 rounded-full border border-dashed sm:h-80 sm:w-80"
        animate={{ rotate: 360, scale: [1, 1.05, 1] }}
        transition={{
          rotate: { duration: 120, repeat: Infinity, ease: 'linear' },
          scale: { duration: 14, repeat: Infinity, ease: 'easeInOut' },
        }}
      />
      <motion.div
        className="border-violet-500/15 absolute bottom-[18%] left-[5%] h-48 w-48 rounded-full border border-dotted sm:h-56 sm:w-56"
        animate={{ rotate: -360, y: [0, 12, 0] }}
        transition={{
          rotate: { duration: 90, repeat: Infinity, ease: 'linear' },
          y: { duration: 10, repeat: Infinity, ease: 'easeInOut' },
        }}
      />
      {/* Mid-size glow orbs (different paths than HeroSection’s main orbs) */}
      <motion.div
        className="absolute top-[20%] left-[35%] h-40 w-40 rounded-full bg-cyan-400/10 blur-2xl"
        animate={{
          y: [0, 20, 0],
          x: [0, -16, 0],
          opacity: [0.35, 0.6, 0.35],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-[20%] bottom-[25%] h-32 w-32 rounded-full bg-fuchsia-500/10 blur-2xl"
        animate={{
          y: [0, -18, 0],
          x: [0, 20, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
      <motion.div
        className="bg-violet-500/8 absolute top-[60%] left-[15%] h-24 w-24 rounded-full blur-xl"
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}

/** Tiny floating dots (hero foreground z-index below content) */
export function HeroParticles() {
  const reduce = useReducedMotion()
  if (reduce) return null

  const seeds = [12, 28, 44, 61, 75, 88, 22, 67, 91, 5]
  return (
    <div
      className="pointer-events-none absolute inset-0 z-[1] overflow-hidden"
      aria-hidden
    >
      {seeds.map((left, i) => {
        const top = (i * 37 + left) % 92
        return (
          <motion.span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-cyan-400/40"
            style={{ left: `${left % 90}%`, top: `${top}%` }}
            animate={{
              y: [0, -10 - (i % 3) * 4, 0],
              opacity: [0.2, 0.65, 0.2],
            }}
            transition={{
              duration: 4 + (i % 4) * 0.8,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.25,
            }}
          />
        )
      })}
    </div>
  )
}

type FloatWrapProps = {
  children: ReactNode
  className?: string
  y?: [number, number, number]
  duration?: number
  delay?: number
}

export function FloatWrap({
  children,
  className = '',
  y = [0, -6, 0],
  duration = 5.5,
  delay = 0,
}: FloatWrapProps) {
  const reduce = useReducedMotion()
  if (reduce) {
    return <div className={className}>{children}</div>
  }
  return (
    <motion.div
      className={className}
      animate={{ y }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
    >
      {children}
    </motion.div>
  )
}

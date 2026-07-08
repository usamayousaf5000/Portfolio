import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from 'framer-motion'
import { useTypewriter } from '../hooks/useTypewriter'
import {
  availability,
  clientHeadline,
  experience,
  fiverrProfileUrl,
  heroStats,
  site,
  siteTagline,
} from '../content'
import { isFiverrLinkReady } from '../lib/fiverr'
import { mailto } from '../lib/mailto'
import { FloatWrap, HeroAmbient, HeroParticles } from './AmbientLayers'

const ease = [0.22, 1, 0.36, 1] as const

function FloatingOrbs({ reduce }: { reduce: boolean | null }) {
  if (reduce) return null
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      <motion.div
        className="absolute -left-24 top-1/4 h-80 w-80 rounded-full bg-cyan-500/15 blur-3xl"
        animate={{ y: [0, -36, 0], x: [0, 24, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -right-20 top-1/2 h-72 w-72 rounded-full bg-violet-500/15 blur-3xl"
        animate={{ y: [0, 28, 0], x: [0, -18, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-fuchsia-500/10 blur-3xl"
        animate={{ scale: [1, 1.12, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}

export function HeroSection() {
  const reduce = useReducedMotion()
  const typedTitle = useTypewriter(site.title, 38, 500, !reduce)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const springX = useSpring(mx, { stiffness: 64, damping: 18 })
  const springY = useSpring(my, { stiffness: 64, damping: 18 })
  const orbX = useTransform(springX, (v) => v * 0.4)
  const orbY = useTransform(springY, (v) => v * 0.4)
  const orb2X = useTransform(springX, (v) => v * -0.6)
  const orb2Y = useTransform(springY, (v) => v * -0.5)

  const currentWork = experience[0]
  const fiverrReady = isFiverrLinkReady(fiverrProfileUrl)

  function onHeroPointer(e: React.MouseEvent<HTMLElement>) {
    if (reduce) return
    const el = e.currentTarget
    const r = el.getBoundingClientRect()
    mx.set(((e.clientX - r.left) / r.width - 0.5) * 2)
    my.set(((e.clientY - r.top) / r.height - 0.5) * 2)
  }

  function onHeroPointerLeave() {
    mx.set(0)
    my.set(0)
  }

  return (
    <section
      className="from-surface-0 via-surface-0 to-surface-1/90 relative min-h-[min(100svh,58rem)] overflow-hidden bg-gradient-to-b"
      aria-label="Introduction"
      onMouseMove={onHeroPointer}
      onPointerLeave={onHeroPointerLeave}
    >
      <div className="from-slate-800/20 pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.4)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_0%,#000,transparent)]" />
      <FloatingOrbs reduce={!!reduce} />
      <HeroAmbient />
      <HeroParticles />
      <motion.div
        className="pointer-events-none absolute top-1/4 left-[15%] h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl"
        style={{ x: orbX, y: orbY }}
        aria-hidden
      />
      <motion.div
        className="bg-violet-500/20 pointer-events-none absolute top-1/2 right-[10%] h-56 w-56 rounded-full blur-3xl"
        style={{ x: orb2X, y: orb2Y }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto grid min-h-[min(90svh,52rem)] w-full max-w-screen-2xl items-center gap-10 px-3 py-20 sm:px-4 md:px-6 lg:grid-cols-12 lg:px-8 xl:px-10">
        <div className="lg:col-span-7">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <FloatWrap y={[0, -4, 0]} duration={4.2} className="inline-block">
              <span className="border-cyan-500/25 inline-flex items-center gap-1.5 rounded-full border-2 border-cyan-500/20 bg-slate-900/40 px-2.5 py-1 text-xs font-medium text-cyan-300/90 shadow-[0_0_24px_-4px_rgba(34,211,238,0.15)] backdrop-blur">
                <span
                  className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]"
                  aria-hidden
                />
                {availability}
              </span>
            </FloatWrap>
            <FloatWrap
              y={[0, 5, 0]}
              duration={5.5}
              delay={0.6}
              className="inline-block"
            >
              <span className="text-fg-dim border-slate-700/60 inline-flex rounded-full border border-slate-600/50 bg-slate-900/30 px-2.5 py-1 text-xs">
                {currentWork?.role} @ {currentWork?.company}
              </span>
            </FloatWrap>
          </div>

          <motion.p
            className="text-cyan-400/90 mb-2 text-xs font-semibold tracking-[0.3em] uppercase"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
          >
            Portfolio, {site.location}
          </motion.p>
          <motion.h1
            className="font-display text-4xl leading-[1.05] font-bold tracking-tight sm:text-5xl lg:text-6xl"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease }}
          >
            <span className="text-fg block">{site.name.split(' ')[0]}</span>
            <span className="text-fg-dim block text-2xl font-medium sm:text-3xl">
              {site.name.split(' ').slice(1).join(' ')}
            </span>
          </motion.h1>
          <p
            className="font-display text-gradient mt-3 min-h-[1.2em] text-2xl font-semibold sm:text-3xl"
            aria-label={site.title}
          >
            {reduce ? site.title : typedTitle}
            {!reduce && (
              <motion.span
                className="ml-0.5 inline-block h-8 w-0.5 translate-y-1 bg-cyan-400"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                aria-hidden
              />
            )}
          </p>
          <motion.p
            className="text-fg mt-4 max-w-3xl text-lg font-medium leading-snug sm:text-xl"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12, ease }}
          >
            {clientHeadline}
          </motion.p>
          <motion.p
            className="text-fg-dim mt-3 max-w-3xl text-base leading-relaxed sm:text-lg"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2, ease }}
          >
            {siteTagline}
          </motion.p>

          <dl
            className="border-slate-700/50 text-fg-dim mt-6 grid max-w-3xl grid-cols-1 gap-3 border-y border-slate-800/40 py-5 sm:grid-cols-3"
            aria-label="At a glance"
          >
            {heroStats.map((s) => (
              <div
                key={s.label}
                className="border-slate-700/30 sm:border-slate-700/20 border-slate-800/20 border-b pb-2 last:border-b-0 sm:border-b-0 sm:border-l sm:px-2 sm:pb-0 first:sm:border-l-0 first:sm:pl-0"
              >
                <dt className="text-xs font-semibold tracking-widest text-slate-500 uppercase">
                  {s.label}
                </dt>
                <dd className="text-fg font-display text-lg font-semibold">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>

          <motion.div
            className="mt-6 flex flex-wrap items-center gap-3"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5, ease }}
          >
            {fiverrReady && (
              <motion.a
                href={fiverrProfileUrl}
                target="_blank"
                rel="noreferrer"
                className="from-[#1dbf73] to-[#19a463] text-surface-0 inline-flex items-center justify-center rounded-full bg-gradient-to-r px-5 py-2.5 text-sm font-bold no-underline shadow-lg shadow-[#1dbf73]/25"
                whileHover={reduce ? undefined : { scale: 1.04, y: -2 }}
                whileTap={reduce ? undefined : { scale: 0.98 }}
              >
                Hire me on Fiverr
              </motion.a>
            )}
            <motion.a
              href={mailto(site.email)}
              className={
                fiverrReady
                  ? 'text-fg border-slate-500 hover:border-cyan-500/50 hover:text-cyan-300 inline-flex items-center justify-center rounded-full border-2 border-slate-600/80 bg-slate-900/50 px-5 py-2.5 text-sm font-semibold no-underline backdrop-blur-sm'
                  : 'from-cyan-500 to-violet-600 text-surface-0 inline-flex items-center justify-center rounded-full bg-gradient-to-r px-5 py-2.5 text-sm font-semibold no-underline shadow-lg shadow-cyan-500/20'
              }
              whileHover={
                reduce
                  ? undefined
                  : fiverrReady
                    ? { y: -2 }
                    : { scale: 1.04, y: -2 }
              }
              whileTap={reduce ? undefined : { scale: 0.98 }}
            >
              {fiverrReady ? 'Or email me' : 'Get in touch'}
            </motion.a>
            <motion.a
              href={fiverrReady ? '#clients' : '#projects'}
              className="text-fg-dim border-slate-500 hover:text-cyan-300 inline-flex items-center justify-center rounded-full border border-slate-600/60 bg-transparent px-4 py-2.5 text-sm font-semibold no-underline"
              whileHover={reduce ? undefined : { y: -2 }}
            >
              {fiverrReady ? 'Why hire me' : 'View work'}
            </motion.a>
            <motion.a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-fg-dim border-slate-600 hover:text-cyan-300 inline-flex items-center justify-center rounded-full border border-transparent bg-transparent px-3 py-2.5 text-sm font-semibold no-underline"
              whileHover={reduce ? undefined : { y: -2 }}
            >
              LinkedIn
            </motion.a>
            <motion.a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              className="text-fg-dim border-slate-600 hover:text-fuchsia-300 inline-flex items-center justify-center rounded-full border border-transparent bg-transparent px-3 py-2.5 text-sm font-semibold no-underline"
              whileHover={reduce ? undefined : { y: -2 }}
            >
              GitHub
            </motion.a>
          </motion.div>
          <p className="text-fg-dim/80 mt-4 text-xs sm:text-sm">
            Full stack (MERN/MEAN), production habits, English and Urdu
            {fiverrReady ? ', secure checkout and reviews on Fiverr' : ''}
          </p>
        </div>

        <div className="flex justify-center lg:col-span-5 lg:justify-end">
          <FloatWrap
            y={[0, -7, 0]}
            duration={6}
            delay={0.2}
            className="w-full max-w-sm"
          >
            <motion.div
              className="relative w-full p-[2px]"
              initial={reduce ? false : { opacity: 0, scale: 0.94, rotate: -1 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease }}
            >
            <motion.div
              className="from-cyan-500/60 via-violet-500/50 to-fuchsia-500/60 pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br opacity-80 blur-sm"
              aria-hidden
              animate={
                reduce
                  ? undefined
                  : { opacity: [0.55, 0.85, 0.55], scale: [1, 1.02, 1] }
              }
              transition={
                reduce
                  ? undefined
                  : { duration: 5, repeat: Infinity, ease: 'easeInOut' }
              }
            />
            <div className="bg-surface-1 border-slate-700/60 relative flex w-full max-w-sm flex-col items-center rounded-2xl border p-6 shadow-2xl">
              <p className="text-fg-dim mb-3 w-full text-left text-xs font-semibold tracking-widest uppercase">
                Profile
              </p>
              <div
                className="to-slate-800/0 pointer-events-none absolute -inset-1 rounded-2xl bg-gradient-to-b from-cyan-500/10"
                aria-hidden
              />
              <img
                src={site.avatar}
                width={208}
                height={260}
                alt={site.name}
                className="border-surface-0 relative aspect-[4/5] h-auto w-44 rounded-2xl border-4 border-slate-800 object-cover object-top shadow-lg sm:w-52"
              />
              <p className="font-display relative mt-4 text-center text-lg font-semibold">
                {site.name}
              </p>
              <p className="text-fg-dim text-center text-sm">{site.title}</p>
              <motion.a
                href="#contact"
                className="text-cyan-400 relative z-10 mt-3 text-sm font-medium no-underline"
                whileHover={reduce ? undefined : { x: 2 }}
              >
                Contact &amp; details ↓
              </motion.a>
            </div>
          </motion.div>
          </FloatWrap>
        </div>
      </div>

      <motion.a
        href="#about"
        className="border-slate-600/80 text-fg-dim absolute bottom-6 left-1/2 z-20 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-2 no-underline backdrop-blur"
        aria-label="Scroll to about section"
        animate={reduce ? undefined : { y: [0, 8, 0] }}
        transition={reduce ? undefined : { duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        whileHover={reduce ? undefined : { scale: 1.1, borderColor: 'rgb(34 211 238 / 0.5)' }}
      >
        ↓
      </motion.a>
    </section>
  )
}

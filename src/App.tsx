import { useRef, useState } from 'react'
import { motion, useInView, useMotionValueEvent, useReducedMotion, useScroll } from 'framer-motion'
import { Reveal } from './components/Reveal'
import { ScrollProgress } from './components/ScrollProgress'
import { SiteHeader } from './components/SiteHeader'
import { SiteFooter } from './components/SiteFooter'
import { HeroSection } from './components/HeroSection'
import { ForClientsSection } from './components/ForClientsSection'
import {
  about,
  aboutBackground,
  aboutFocus,
  additionalCertificates,
  certificate,
  contactFiverrCta,
  contactIntro,
  fiverrProfileUrl,
  education,
  engineeringPractices,
  experience,
  expertiseHighlights,
  hobbies,
  languages,
  principles,
  professionalInterests,
  projects,
  relevantCoursework,
  services,
  site,
  skillGroups,
  workProcess,
} from './content'
import { isFiverrLinkReady } from './lib/fiverr'
import { mailto } from './lib/mailto'

const langToPercent: Record<string, number> = {
  Fluent: 100,
  Intermediate: 70,
  Basics: 30,
}

const ease = [0.22, 1, 0.36, 1] as const

const staggerContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.06 },
  },
}

const staggerItem = {
  hidden: { opacity: 0, y: 18, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring' as const, stiffness: 85, damping: 20, mass: 0.8 },
  },
}

const projectCardClass =
  'group border-slate-700/60 bg-slate-900/40 relative flex h-full min-h-0 w-full flex-col overflow-hidden rounded-2xl border p-6 shadow-md transition-shadow duration-300 hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-950/20'

/** Main section title: no numbered kickers, subtle left rule */
const sectionH2 = 'font-display text-fg border-cyan-500/35 border-l-2 pl-4 text-3xl font-bold sm:text-4xl'

function stackToTags(stack: string) {
  return stack
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean)
}

function LanguageBar({
  name,
  level,
  pct,
}: {
  name: string
  level: string
  pct: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })
  const reduce = useReducedMotion()

  return (
    <li>
      <div className="text-fg flex items-center justify-between text-sm">
        <span className="font-medium">{name}</span>
        <span className="text-fg-dim text-xs">{level}</span>
      </div>
      <div
        ref={ref}
        className="bg-surface-2 mt-1.5 h-1.5 overflow-hidden rounded-full"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={pct}
        aria-label={`${name} proficiency ${level}`}
      >
        {reduce ? (
          <div
            className="from-cyan-400 to-violet-500 h-1.5 rounded-full bg-gradient-to-r"
            style={{ width: `${pct}%` }}
          />
        ) : (
          <motion.div
            className="from-cyan-400 to-violet-500 h-1.5 rounded-full bg-gradient-to-r"
            initial={{ width: 0 }}
            animate={inView ? { width: `${pct}%` } : { width: 0 }}
            transition={{ duration: 1.1, ease }}
          />
        )}
      </div>
    </li>
  )
}

export default function App() {
  const reduce = useReducedMotion()
  const { scrollY } = useScroll()
  const [headerSolid, setHeaderSolid] = useState(false)
  const fiverrReady = isFiverrLinkReady(fiverrProfileUrl)

  useMotionValueEvent(scrollY, 'change', (v) => {
    setHeaderSolid(v > 8)
  })

  return (
    <div className="bg-surface-0 text-fg relative min-h-svh">
      <ScrollProgress />

      <a
        href="#main"
        className="bg-cyan-400 text-surface-0 absolute top-4 left-4 z-[200] -translate-y-[200%] rounded-lg px-4 py-2 font-semibold no-underline transition focus:translate-y-0"
      >
        Skip to main content
      </a>

      <SiteHeader headerSolid={headerSolid} />

      <main id="main" className="relative">
        <HeroSection />

        <ForClientsSection />

        <section
          id="about"
          className="border-slate-800/50 scroll-mt-20 border-b bg-surface-0"
          aria-labelledby="about-heading"
        >
          <div className="mx-auto w-full max-w-screen-2xl px-3 py-20 sm:px-4 md:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-12">
              <div className="lg:col-span-6">
                <Reveal>
                  <h2 id="about-heading" className={sectionH2}>
                    Who I am
                  </h2>
                </Reveal>
                <Reveal delay={0.05} className="mt-4">
                  <p className="text-fg-dim text-lg leading-relaxed">{about}</p>
                </Reveal>
                <Reveal delay={0.08} className="mt-4">
                  <p className="text-fg-dim text-base leading-relaxed sm:text-lg">
                    {aboutFocus}
                  </p>
                </Reveal>
                <Reveal delay={0.1} className="mt-4">
                  <p className="text-fg-dim text-base leading-relaxed sm:text-lg">
                    {aboutBackground}
                  </p>
                </Reveal>
                <Reveal delay={0.1} className="mt-6">
                  <p className="text-fg text-xs font-bold tracking-widest uppercase">
                    At a glance
                  </p>
                  <ul
                    className="text-fg-dim marker:text-cyan-500/60 mt-2 list-inside list-disc text-sm sm:text-base"
                    role="list"
                  >
                    {expertiseHighlights.map((e) => (
                      <li key={e} className="pl-0">
                        {e}
                      </li>
                    ))}
                  </ul>
                </Reveal>
                <Reveal delay={0.12} className="mt-6">
                  <p className="text-fg text-xs font-bold tracking-widest uppercase">
                    Professional interests
                  </p>
                  <ul
                    className="text-fg-dim marker:text-cyan-500/50 mt-2 list-outside list-disc pl-5 text-sm sm:text-base"
                    role="list"
                  >
                    {professionalInterests.map((e) => (
                      <li key={e} className="pl-0">
                        {e}
                      </li>
                    ))}
                  </ul>
                </Reveal>
                <Reveal delay={0.14} className="mt-6">
                  <p className="text-fg text-xs font-bold tracking-widest uppercase">
                    Hobbies
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2" role="list">
                    {hobbies.map((h) => (
                      <motion.span
                        key={h}
                        className="border-slate-700/80 bg-surface-1/80 text-fg-dim rounded-full border px-3 py-1 text-sm"
                        role="listitem"
                        whileHover={
                          reduce
                            ? undefined
                            : {
                                scale: 1.04,
                                y: -2,
                                borderColor: 'rgb(34 211 238 / 0.4)',
                              }
                        }
                      >
                        {h}
                      </motion.span>
                    ))}
                  </div>
                </Reveal>
              </div>
              <div className="mx-auto flex w-full max-w-[22rem] flex-col gap-4 sm:max-w-[26rem] lg:col-span-6 lg:max-w-[28rem]">
                <Reveal>
                  <div className="border-slate-700/60 from-slate-800/30 overflow-hidden rounded-2xl border-2 p-0.5 bg-gradient-to-b to-transparent">
                    <motion.img
                      src={site.avatar}
                      alt={site.name}
                      width={480}
                      height={640}
                      className="aspect-[3/4] h-auto w-full rounded-[0.9rem] object-cover object-[center_12%]"
                      whileInView={reduce ? undefined : { scale: 1.02 }}
                      transition={{ duration: 0.6, ease }}
                      viewport={{ once: true }}
                    />
                  </div>
                </Reveal>
                <Reveal delay={0.1}>
                  <div className="glow-border from-slate-800 to-slate-900 border-slate-800 flex flex-col justify-between rounded-2xl border border-slate-800 bg-gradient-to-br p-5">
                    <h3 className="text-fg font-display text-lg font-semibold">
                      Contact card
                    </h3>
                    <div>
                      <a
                        href={mailto(site.email)}
                        className="text-cyan-400 mt-1 block break-all text-sm font-medium no-underline"
                      >
                        {site.email}
                      </a>
                      <a
                        href={`tel:${site.phone.replace(/\s/g, '')}`}
                        className="text-fg-dim text-sm no-underline"
                      >
                        {site.phone}
                      </a>
                      <p className="text-fg-dim/90 mt-1 text-sm">{site.location}</p>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
            <div className="border-slate-800/50 mt-16 border-t pt-12">
              <Reveal>
                <h3
                  className="font-display text-fg text-xl font-bold sm:text-2xl"
                  id="principles"
                >
                  Principles I work by
                </h3>
                <p className="text-fg-dim mt-2 max-w-3xl text-sm sm:text-base">
                  Short, durable ideas that show up in code review, in APIs, and in
                  how we talk about trade-offs with stakeholders.
                </p>
              </Reveal>
              <ul
                className="mt-8 grid list-none gap-4 sm:grid-cols-2"
                role="list"
                aria-label="Principles I work by"
              >
                {principles.map((p, i) => (
                  <Reveal key={p.title} delay={i * 0.05}>
                    <li className="border-slate-700/40 bg-slate-900/20 h-full rounded-xl border p-4">
                      <h4 className="text-cyan-400/90 text-sm font-semibold">
                        {p.title}
                      </h4>
                      <p className="text-fg-dim mt-2 text-sm leading-relaxed">
                        {p.text}
                      </p>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section
          id="services"
          className="border-slate-800/30 scroll-mt-20 border-b bg-slate-900/25"
          aria-labelledby="services-heading"
        >
          <div className="mx-auto w-full max-w-screen-2xl px-3 py-20 sm:px-4 md:px-6 lg:px-8">
            <Reveal>
              <h2 id="services-heading" className={sectionH2}>
                Services
              </h2>
              <p className="text-fg-dim mt-2 max-w-3xl text-pretty text-sm sm:text-base">
                A clear way of working: understand the problem, ship in iterations,
                and keep production healthy with reviews and tests.
              </p>
            </Reveal>
            <ul
              className="mt-10 grid list-none gap-4 sm:grid-cols-2"
              role="list"
            >
              {services.map((s, index) => (
                <Reveal key={s.title} delay={index * 0.06}>
                  <li
                    className="border-slate-700/60 from-slate-800/20 hover:border-cyan-500/20 group h-full rounded-2xl border bg-slate-900/30 p-5 transition"
                  >
                    <h3 className="font-display text-fg text-lg font-semibold">
                      {s.title}
                    </h3>
                    <p className="text-fg-dim mt-2 text-sm leading-relaxed sm:text-base">
                      {s.description}
                    </p>
                    <ul
                      className="text-fg-dim marker:text-cyan-500/40 mt-3 list-outside list-disc pl-4 text-sm leading-relaxed"
                      role="list"
                    >
                      {s.points.map((pt) => (
                        <li key={pt} className="pl-0.5">
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="process"
          className="border-slate-800/50 scroll-mt-20 border-b bg-surface-0"
          aria-labelledby="process-heading"
        >
          <div className="mx-auto w-full max-w-screen-2xl px-3 py-20 sm:px-4 md:px-6 lg:px-8">
            <Reveal>
              <h2 id="process-heading" className={sectionH2}>
                How I work
              </h2>
              <p className="text-fg-dim mt-2 max-w-3xl text-pretty text-sm sm:text-base">
                A repeatable way to go from “idea” to something running in
                production, with fewer surprises in between.
              </p>
            </Reveal>
            <ol
              className="text-fg-dim mt-10 list-none space-y-4 pl-0"
              role="list"
            >
              {workProcess.map((w, i) => (
                <Reveal key={w.title} delay={i * 0.06}>
                  <li
                    className="border-slate-700/50 bg-slate-900/25 flex flex-col gap-1 rounded-2xl border p-4 sm:flex-row sm:items-start sm:gap-4"
                    role="listitem"
                  >
                    <span
                      className="text-cyan-500/80 font-display shrink-0 text-2xl font-bold tabular-nums"
                      aria-hidden
                    >
                      {w.step}
                    </span>
                    <div>
                      <h3 className="text-fg text-base font-semibold">
                        {w.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed sm:text-base">
                        {w.detail}
                      </p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
            <Reveal delay={0.15}>
              <p className="text-fg mt-8 text-sm font-bold tracking-widest uppercase">
                In code & delivery
              </p>
              <ul
                className="text-fg-dim marker:text-violet-500/50 mt-2 list-outside list-disc pl-5 text-sm leading-relaxed sm:text-base"
                role="list"
              >
                {engineeringPractices.map((e) => (
                  <li key={e}>{e}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        <section
          id="experience"
          className="scroll-mt-20 bg-surface-0"
          aria-labelledby="exp-heading"
        >
          <div className="mx-auto w-full max-w-screen-2xl px-3 py-20 sm:px-4 md:px-6 lg:px-8">
            <Reveal>
              <h2 id="exp-heading" className={sectionH2}>
                Work history
              </h2>
              <p className="text-fg-dim mt-1 max-w-3xl text-sm sm:text-base">
                Where I have been in depth: scope of the role, focus areas, and
                concrete impact, not just job titles.
              </p>
            </Reveal>
            <div className="relative mt-10">
              <div
                className="from-cyan-500/40 via-violet-500/30 to-fuchsia-500/20 pointer-events-none absolute top-0 bottom-6 left-3 w-px bg-gradient-to-b md:left-4"
                aria-hidden
              />
              {experience.map((job, i) => (
                <Reveal key={job.company} delay={i * 0.12}>
                  <div
                    className="bg-surface-1/40 border-slate-700/60 group hover:border-cyan-500/25 relative mb-6 last:mb-0 ml-0 rounded-2xl border p-6 pl-10 shadow-lg backdrop-blur transition-colors md:ml-2 md:pl-12"
                  >
                    <span
                      className="bg-gradient-to-b from-cyan-400 to-violet-500 absolute top-7 left-3 h-2.5 w-2.5 -translate-x-1/2 rounded-full shadow-[0_0_12px_rgba(34,211,238,0.5)] ring-2 ring-slate-900 md:left-4"
                      aria-hidden
                    />
                    <p className="text-cyan-400/80 text-xs font-bold tracking-widest uppercase">
                      {job.period}
                    </p>
                    <h3 className="font-display text-fg mt-1 text-xl font-semibold md:text-2xl">
                      {job.role}
                    </h3>
                    <p className="text-fuchsia-400/80 text-sm font-semibold">
                      {job.company}
                    </p>
                    <p className="text-fg-dim/80 mt-1 text-xs sm:text-sm">
                      {job.location}
                    </p>
                    <p className="text-fg-dim border-slate-700/40 mt-3 border-l-2 border-cyan-500/30 pl-3 text-sm leading-relaxed">
                      {job.summary}
                    </p>
                    <p className="text-fg mt-4 text-xs font-bold tracking-widest uppercase">
                      Focus
                    </p>
                    <ul
                      className="text-fg-dim marker:text-cyan-500/40 mt-1 list-outside list-disc pl-4 text-sm leading-relaxed"
                      role="list"
                    >
                      {job.focusAreas.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                    <p className="text-fg mt-4 text-xs font-bold tracking-widest uppercase">
                      Highlights
                    </p>
                    <ul
                      className="text-fg-dim marker:text-cyan-500/50 mt-1 list-disc space-y-2 pl-4 text-sm leading-relaxed"
                      role="list"
                    >
                      {job.items.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section
          id="projects"
          className="border-slate-800/50 scroll-mt-20 border-y bg-slate-950/30"
          aria-labelledby="proj-heading"
        >
          <div className="mx-auto w-full max-w-screen-2xl px-3 py-20 sm:px-4 md:px-6 lg:px-8">
            <Reveal>
              <h2 id="proj-heading" className={sectionH2}>
                Case studies
              </h2>
              <p className="text-fg-dim mt-2 max-w-3xl text-pretty text-sm sm:text-base">
                Each card is a real build: what it was for, what had to be solved,
                how it was done, and what shipped. Two columns on large screens so
                the section uses the full width.
              </p>
            </Reveal>
            <ul
              className="mt-10 grid w-full list-none grid-cols-1 gap-6 sm:mt-12 lg:grid-cols-2 lg:gap-8"
              role="list"
            >
              {projects.map((p, i) => (
                <motion.li
                  key={p.name}
                  className={projectCardClass}
                  whileHover={
                    reduce
                      ? undefined
                      : {
                          y: -6,
                          rotate: 0.4,
                          boxShadow:
                            '0 24px 48px -18px rgba(34, 211, 238, 0.18)',
                        }
                  }
                  initial={reduce ? false : { opacity: 0, y: 28, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: '-0px' }}
                  transition={{
                    type: 'spring',
                    stiffness: 75,
                    damping: 22,
                    delay: i * 0.06,
                  }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-3 border-b border-slate-800/80 pb-4">
                    <div>
                      <h3 className="font-display text-fg text-lg font-semibold sm:text-xl">
                        {p.name}
                      </h3>
                      <p className="text-fg-dim/80 mt-1 text-xs sm:text-sm">
                        {p.kind}
                      </p>
                    </div>
                  </div>
                  <div
                    className="mt-4 flex flex-wrap gap-2"
                    aria-label="Stack"
                  >
                    {stackToTags(p.stack).map((t) => (
                      <span
                        key={t}
                        className="border-slate-600/60 text-fg-dim/90 rounded-md border bg-slate-800/40 px-2.5 py-1 text-xs font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 space-y-4 text-sm leading-relaxed">
                    <div>
                      <p className="text-slate-500 text-[11px] font-bold tracking-widest uppercase">
                        Context
                      </p>
                      <p className="text-fg-dim mt-1.5">{p.context}</p>
                    </div>
                    <div>
                      <p className="text-slate-500 text-[11px] font-bold tracking-widest uppercase">
                        Problem
                      </p>
                      <p className="text-fg-dim mt-1.5">{p.problem}</p>
                    </div>
                    <div>
                      <p className="text-slate-500 text-[11px] font-bold tracking-widest uppercase">
                        Approach
                      </p>
                      <p className="text-fg-dim mt-1.5">{p.approach}</p>
                    </div>
                  </div>
                  <p className="text-fg text-[11px] font-bold tracking-widest uppercase mt-5">
                    Outcomes
                  </p>
                  <ul
                    className="text-fg-dim border-slate-800/60 mt-2 list-none space-y-2 border-l-2 border-cyan-500/20 pl-3 text-sm"
                    role="list"
                  >
                    {p.outcomes.map((o) => (
                      <li key={o} className="pl-0">
                        {o}
                      </li>
                    ))}
                  </ul>
                  <p className="text-fg text-[11px] font-bold tracking-widest uppercase mt-4">
                    Tech focus
                  </p>
                  <div
                    className="mt-2 flex flex-wrap gap-2"
                    role="list"
                    aria-label="Tech focus"
                  >
                    {p.techHighlights.map((t) => (
                      <span
                        key={t}
                        className="text-fg-dim border-slate-700/50 rounded bg-slate-800/30 px-2 py-1 text-xs"
                        role="listitem"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="skills"
          className="scroll-mt-20 bg-surface-0"
          aria-labelledby="skills-heading"
        >
          <div className="mx-auto w-full max-w-screen-2xl px-3 py-20 sm:px-4 md:px-6 lg:px-8">
            <Reveal>
              <h2 id="skills-heading" className={sectionH2}>
                Tech & practices
              </h2>
              <p className="text-fg-dim mt-2 text-sm sm:text-base">
                Tools and habits I use every day.
              </p>
            </Reveal>
            {reduce ? (
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {skillGroups.map((g) => (
                  <div
                    key={g.label}
                    className="border-slate-700/60 from-slate-800/20 rounded-2xl border p-4"
                  >
                    <h3 className="text-fg-dim text-xs font-bold tracking-widest uppercase">
                      {g.label}
                    </h3>
                    <ul
                      className="mt-3 flex flex-wrap gap-2"
                      role="list"
                      aria-label={g.label}
                    >
                      {g.items.map((tag) => (
                        <li
                          key={tag}
                          className="text-fg border-slate-700/80 bg-slate-800/30 rounded-full border px-2.5 py-1 text-sm"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ) : (
              <motion.div
                className="mt-8 grid gap-4 sm:grid-cols-2"
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
              >
                {skillGroups.map((g) => (
                  <motion.div
                    key={g.label}
                    variants={staggerItem}
                    className="border-slate-700/60 from-slate-800/20 hover:border-cyan-500/20 group rounded-2xl border p-4 transition-colors"
                  >
                    <h3 className="text-fg-dim text-xs font-bold tracking-widest uppercase">
                      {g.label}
                    </h3>
                    <ul
                      className="mt-3 flex flex-wrap gap-2"
                      role="list"
                      aria-label={g.label}
                    >
                      {g.items.map((tag) => (
                        <li key={tag}>
                          <span className="text-fg border-slate-700/80 group-hover:shadow-cyan-500/10 group-hover:border-cyan-500/30 inline-block rounded-full border bg-slate-800/30 px-2.5 py-1 text-sm transition">
                            {tag}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </section>

        <section
          id="education"
          className="border-slate-800/50 scroll-mt-20 border-y bg-slate-900/20"
          aria-labelledby="edu-heading"
        >
          <div className="mx-auto w-full max-w-screen-2xl px-3 py-20 sm:px-4 md:px-6 lg:px-8">
            <Reveal>
              <h2 id="edu-heading" className={sectionH2}>
                Education & languages
              </h2>
              <p className="text-fg-dim mt-1 max-w-3xl text-sm sm:text-base">
                Formal training, industry certificate, and spoken languages: the
                foundation behind the work above.
              </p>
            </Reveal>
            <div className="mt-10 grid gap-4 sm:grid-cols-1 lg:grid-cols-3">
              <Reveal>
                <div className="border-slate-700/60 flex h-full flex-col rounded-2xl border p-5">
                  <h3 className="text-fg-dim text-xs font-bold tracking-widest uppercase">
                    Degree
                  </h3>
                  <p className="font-display text-fg pt-1 text-lg font-semibold">
                    {education.degree}
                  </p>
                  <p className="text-fg text-sm font-medium">
                    {education.school}
                  </p>
                  <p className="text-fg-dim text-sm">{education.period}</p>
                  <p className="text-fg-dim mt-3 text-sm leading-relaxed">
                    {education.highlights}
                  </p>
                  <h4 className="text-fg text-xs font-bold tracking-widest uppercase mt-4">
                    Relevant coursework
                  </h4>
                  <ul
                    className="text-fg-dim marker:text-cyan-500/40 mt-1 list-outside list-disc pl-4 text-sm leading-relaxed"
                    role="list"
                  >
                    {relevantCoursework.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={0.05}>
                <div className="from-violet-500/5 border-slate-700/60 to-fuchsia-500/5 flex h-full flex-col rounded-2xl border bg-gradient-to-br p-5">
                  <h3 className="text-fg-dim text-xs font-bold tracking-widest uppercase">
                    Certificates
                  </h3>
                  <p className="text-fg pt-1 text-sm font-semibold">
                    {certificate.name}
                  </p>
                  <p className="text-fuchsia-400/90 text-sm">
                    {certificate.org}
                    <span className="text-fg-dim/80"> ({certificate.period})</span>
                  </p>
                  <h4 className="text-fg text-xs font-bold tracking-widest uppercase mt-4">
                    More training
                  </h4>
                  <ul className="text-fg-dim mt-2 list-none space-y-2 text-sm" role="list">
                    {additionalCertificates.map((c) => (
                      <li
                        key={c.name}
                        className="border-slate-800/50 border-b border-dashed pb-2 last:border-0"
                      >
                        {c.name}
                        <span className="text-fg-dim/80 block text-xs">
                          {c.issuer}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="border-slate-700/60 h-full rounded-2xl border p-5">
                  <h3 className="text-fg-dim text-xs font-bold tracking-widest uppercase">
                    Languages
                  </h3>
                  <p className="text-fg-dim mt-1 text-xs sm:text-sm">
                    Professional communication and collaboration (spoken).
                  </p>
                  <ul
                    className="mt-3 space-y-2"
                    role="list"
                    aria-label="Spoken language proficiency"
                  >
                    {languages.map((l) => {
                      const pct = langToPercent[l.level] ?? 50
                      return (
                        <LanguageBar
                          key={l.name}
                          name={l.name}
                          level={l.level}
                          pct={pct}
                        />
                      )
                    })}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section
          className="from-surface-1 via-surface-0 to-surface-0 scroll-mt-20 border-t border-slate-800/40 bg-gradient-to-b"
          id="contact"
          aria-labelledby="contact-heading"
        >
          <div className="mx-auto w-full max-w-screen-2xl px-3 py-20 sm:px-4 sm:py-24 md:px-6 lg:px-8">
            <motion.div
              className="border-slate-600/50 from-cyan-500/5 to-violet-500/5 relative overflow-hidden rounded-3xl border bg-gradient-to-br p-10 sm:p-14"
              initial={reduce ? false : { opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease }}
            >
              <div
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(167,139,250,0.12),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(34,211,238,0.1),transparent_45%)]"
                aria-hidden
              />
              <h2
                id="contact-heading"
                className="font-display text-fg border-cyan-500/35 relative mt-0 border-l-2 pl-4 text-3xl font-bold sm:text-5xl"
              >
                <span className="text-gradient">Let&apos;s work</span> on your
                next release
              </h2>
              <p className="text-fg-dim relative mt-4 max-w-3xl text-base sm:text-lg">
                {contactIntro}
              </p>
              <p className="text-fg-dim relative mt-3 max-w-3xl text-sm sm:text-base">
                {contactFiverrCta}
              </p>
              {fiverrReady && (
                <motion.a
                  href={fiverrProfileUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="from-[#1dbf73] to-[#19a463] text-surface-0 relative mt-6 inline-flex items-center justify-center rounded-2xl bg-gradient-to-r px-6 py-3.5 text-sm font-bold no-underline shadow-lg shadow-[#1dbf73]/20 sm:text-base"
                  whileHover={reduce ? undefined : { scale: 1.02, y: -1 }}
                  whileTap={reduce ? undefined : { scale: 0.99 }}
                >
                  Open my Fiverr profile
                  <span className="ml-2" aria-hidden>
                    ↗
                  </span>
                </motion.a>
              )}
              <p className="text-fg-dim relative mt-6 text-xs font-bold tracking-widest text-slate-500 uppercase sm:mt-8">
                Email
              </p>
              <p className="text-fg-dim relative mt-1 text-lg sm:text-xl">
                <a
                  className="text-cyan-400 font-semibold no-underline break-all hover:underline"
                  href={mailto(site.email)}
                >
                  {site.email}
                </a>
              </p>
              <p className="text-fg-dim relative mt-2 text-sm sm:text-base">
                Phone:{' '}
                <a
                  className="text-fg font-medium no-underline hover:underline"
                  href={`tel:${site.phone.replace(/\s/g, '')}`}
                >
                  {site.phone}
                </a>
                <span className="text-fg-dim/90 block sm:inline sm:before:content-['\002C\00a0']">
                  {site.location}
                </span>
              </p>
              <p className="text-fg-dim relative mt-6 flex flex-wrap items-center gap-4 text-sm sm:text-base">
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-400/90 no-underline hover:underline"
                >
                  LinkedIn
                </a>
                <span className="text-slate-600" aria-hidden>
                  {', '}
                </span>
                <a
                  href={site.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-violet-300/90 no-underline hover:underline"
                >
                  GitHub
                </a>
              </p>
            </motion.div>
            <motion.p
              className="text-fg-dim font-display mt-12 text-center text-xl sm:text-2xl"
              initial={reduce ? false : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Thanks for visiting
            </motion.p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

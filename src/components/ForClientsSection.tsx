import { motion, useReducedMotion } from 'framer-motion'
import { Reveal } from './Reveal'
import {
  buyerTrustPoints,
  fiverrGuaranteeNote,
  fiverrOfferings,
  fiverrProfileUrl,
  fiverrResponsePledge,
  fiverrTestimonialPlaceholders,
} from '../content'
import { isFiverrLinkReady } from '../lib/fiverr'

const sectionH2 =
  'font-display text-fg border-cyan-500/35 border-l-2 pl-4 text-3xl font-bold sm:text-4xl'

export function ForClientsSection() {
  const reduce = useReducedMotion()
  const fiverrReady = isFiverrLinkReady(fiverrProfileUrl)

  return (
    <section
      id="clients"
      className="border-slate-800/50 scroll-mt-20 border-b bg-slate-950/40"
      aria-labelledby="clients-heading"
    >
      <div className="mx-auto w-full max-w-screen-2xl px-3 py-20 sm:px-4 md:px-6 lg:px-8">
        <Reveal>
          <h2 id="clients-heading" className={sectionH2}>
            Why people hire me (and what you can expect)
          </h2>
          <p className="text-fg-dim mt-2 max-w-3xl text-pretty text-sm sm:text-base">
            {fiverrResponsePledge}
          </p>
        </Reveal>

        {fiverrReady && (
          <motion.a
            href={fiverrProfileUrl}
            target="_blank"
            rel="noreferrer"
            className="from-[#1dbf73] to-[#19a463] text-surface-0 mt-8 inline-flex w-full max-w-md items-center justify-center rounded-2xl bg-gradient-to-r px-5 py-3.5 text-sm font-bold shadow-lg shadow-[#1dbf73]/20 sm:text-base"
            whileHover={reduce ? undefined : { scale: 1.02, y: -1 }}
            whileTap={reduce ? undefined : { scale: 0.99 }}
          >
            View & order on Fiverr
            <span className="ml-2" aria-hidden>
              →
            </span>
          </motion.a>
        )}

        <ul
          className="mt-10 grid list-none gap-4 sm:grid-cols-2"
          role="list"
          aria-label="Why work with this developer"
        >
          {buyerTrustPoints.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.05}>
              <li className="border-slate-700/50 from-slate-900/30 h-full rounded-2xl border border-slate-800/60 bg-gradient-to-b to-transparent p-5">
                <h3 className="text-cyan-400/90 text-base font-semibold">
                  {b.title}
                </h3>
                <p className="text-fg-dim mt-2 text-sm leading-relaxed sm:text-base">
                  {b.text}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={0.1}>
          <h3 className="text-fg mt-14 text-lg font-bold tracking-tight sm:text-xl">
            What you can hire me to build
          </h3>
          <p className="text-fg-dim mt-1 text-sm sm:text-base">
            Typical Fiverr-style requests I am set up to deliver (we scope the exact
            deliverables in your order):
          </p>
          <ul
            className="text-fg-dim marker:text-[#1dbf73]/60 mt-4 list-outside list-disc space-y-2 pl-5 text-sm leading-relaxed sm:text-base"
            role="list"
          >
            {fiverrOfferings.map((o) => (
              <li key={o}>{o}</li>
            ))}
          </ul>
        </Reveal>

        <div className="mt-12 border-t border-slate-800/60 pt-10">
          <h3
            className="text-fg text-lg font-bold sm:text-xl"
            id="client-reviews"
          >
            What clients say
          </h3>
          <p className="text-fg-dim mt-1 text-sm sm:text-base">
            Replace the placeholder quotes below with real Fiverr reviews as you earn
            them. Social proof is one of the fastest ways to convert new buyers.
          </p>
          <ul className="mt-6 space-y-4" role="list">
            {fiverrTestimonialPlaceholders.map((t, idx) => (
              <li
                key={`t-${idx}`}
                className="border-slate-800/50 bg-surface-0/50 rounded-2xl border p-4 sm:p-5"
              >
                <figure>
                  <blockquote
                    className="text-fg/95 border-cyan-500/10 border-l-2 pl-3 text-sm italic sm:text-base"
                    cite="fiverr"
                  >
                    {t.quote}
                  </blockquote>
                  <figcaption className="text-fg-dim mt-3 text-xs sm:text-sm">
                    <span className="text-fg font-medium not-italic">{t.name}</span>
                    <span className="text-fg-dim/80 block not-italic">
                      {t.project}
                    </span>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-fg-dim border-slate-800/50 mt-10 max-w-3xl rounded-lg border border-dashed border-slate-700/60 p-4 text-sm leading-relaxed sm:text-base">
          <span className="text-fg font-medium">How we work: </span>
          {fiverrGuaranteeNote}
        </p>
      </div>
    </section>
  )
}

import { motion, useReducedMotion } from 'framer-motion'
import { fiverrProfileUrl, nav, site, siteTagline } from '../content'
import { isFiverrLinkReady } from '../lib/fiverr'
import { mailto } from '../lib/mailto'

export function SiteFooter() {
  const reduce = useReducedMotion()
  const year = new Date().getFullYear()
  const fiverrReady = isFiverrLinkReady(fiverrProfileUrl)

  return (
    <footer
      className="border-slate-800/80 from-slate-900/50 border-t border-slate-800/40 bg-slate-950/80 bg-gradient-to-b to-slate-950"
      id="site-footer"
    >
      <div className="mx-auto w-full max-w-screen-2xl px-3 py-14 sm:px-4 md:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="font-display text-fg flex items-center gap-2 text-lg font-bold">
              <span className="from-cyan-500 to-violet-500 flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br text-xs font-extrabold text-white">
                UY
              </span>
              {site.name}
            </div>
            <p className="text-fg-dim mt-3 max-w-xs text-sm leading-relaxed">
              {siteTagline}
            </p>
          </div>

          <div>
            <h2 className="text-fg text-sm font-bold tracking-widest uppercase">
              Navigate
            </h2>
            <ul className="mt-3 space-y-2" role="list">
              {nav.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-fg-dim hover:text-cyan-400 text-sm no-underline transition"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-fg text-sm font-bold tracking-widest uppercase">
              Connect
            </h2>
            <ul className="text-fg-dim mt-3 space-y-2 text-sm" role="list">
              {fiverrReady && (
                <li>
                  <a
                    className="text-[#1dbf73] font-medium no-underline hover:underline"
                    href={fiverrProfileUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Fiverr: hire here
                  </a>
                </li>
              )}
              <li>
                <a
                  className="text-cyan-400/90 no-underline hover:underline"
                  href={mailto(site.email)}
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  className="no-underline hover:text-fg"
                  href={`tel:${site.phone.replace(/\s/g, '')}`}
                >
                  {site.phone}
                </a>
              </li>
              <li className="text-fg-dim/80">{site.location}</li>
              <li>
                <a
                  className="text-cyan-400/80 no-underline hover:underline"
                  href={site.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
                <span className="text-slate-600" aria-hidden>
                  {', '}
                </span>
                <a
                  className="text-violet-400/80 no-underline hover:underline"
                  href={site.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-fg text-sm font-bold tracking-widest uppercase">
              Work together
            </h2>
            <p className="text-fg-dim mt-3 text-sm">
              {fiverrReady
                ? 'Buying on Fiverr? Use the green button in the header or the link in Connect. For custom or NDA work after we align, email works too.'
                : 'Have a product idea or a role? I usually reply within a business day.'}
            </p>
            {fiverrReady && (
              <motion.a
                href={fiverrProfileUrl}
                target="_blank"
                rel="noreferrer"
                className="from-[#1dbf73] to-[#19a463] text-surface-0 mt-4 inline-flex rounded-full bg-gradient-to-r px-4 py-2.5 text-sm font-bold no-underline"
                whileHover={reduce ? undefined : { scale: 1.03 }}
                whileTap={reduce ? undefined : { scale: 0.98 }}
              >
                Fiverr profile
              </motion.a>
            )}
            <motion.a
              href={mailto(site.email)}
              className="from-cyan-500/90 to-violet-500/90 text-surface-0 mt-2 inline-flex rounded-full bg-gradient-to-r px-4 py-2.5 text-sm font-semibold no-underline"
              whileHover={reduce ? undefined : { scale: 1.03 }}
              whileTap={reduce ? undefined : { scale: 0.98 }}
            >
              Email me
            </motion.a>
          </div>
        </div>

        <div className="text-fg-dim mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800/60 pt-8 text-xs sm:flex-row sm:text-sm">
          <p>
            © {year} {site.name}. All rights reserved. Built to showcase
            experience and work, not official employer branding.
          </p>
          <a
            href="#"
            className="text-cyan-400/80 hover:text-cyan-300 inline-flex items-center gap-1 font-medium no-underline"
          >
            <span aria-hidden>↑</span> Back to top
          </a>
        </div>
      </div>
    </footer>
  )
}

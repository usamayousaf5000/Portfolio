import { useEffect, useId, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { fiverrProfileUrl, nav, site } from '../content'
import { isFiverrLinkReady } from '../lib/fiverr'
import { mailto } from '../lib/mailto'

type SiteHeaderProps = {
  headerSolid: boolean
}

export function SiteHeader({ headerSolid }: SiteHeaderProps) {
  const reduce = useReducedMotion()
  const [menuOpen, setMenuOpen] = useState(false)
  const menuId = useId()

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [menuOpen])

  function closeMenu() {
    setMenuOpen(false)
  }

  const fiverrReady = isFiverrLinkReady(fiverrProfileUrl)

  return (
    <motion.header
      className={[
        'sticky top-0 z-50 border-b transition-all duration-300',
        headerSolid
          ? 'border-slate-800/80 bg-surface-0/90 backdrop-blur-xl'
          : 'border-transparent bg-surface-0/40 backdrop-blur-sm',
      ].join(' ')}
      initial={false}
      style={{
        boxShadow: headerSolid
          ? '0 8px 32px -8px rgba(0,0,0,0.45)'
          : 'none',
      }}
    >
      {/* Utility strip: contact at a glance */}
      <div className="border-b border-slate-800/50">
        <div className="text-fg-dim mx-auto flex w-full max-w-screen-2xl flex-wrap items-center justify-between gap-x-4 gap-y-1 px-3 py-1.5 text-xs sm:px-4 md:px-6 lg:px-8">
          <span className="text-fg-dim/90 flex items-center gap-2">
            <span className="text-cyan-500/80" aria-hidden>
              ●
            </span>
            {site.location}
          </span>
          <a
            href={mailto(site.email)}
            className="text-cyan-400/90 hover:text-cyan-300 font-medium no-underline"
          >
            {site.email}
          </a>
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-screen-2xl items-center justify-between gap-4 px-3 py-3 sm:px-4 md:px-6 lg:px-8">
        <motion.a
          href="#"
          className="text-fg group flex min-w-0 items-center gap-3 no-underline"
          whileHover={reduce ? undefined : { scale: 1.01 }}
          whileTap={reduce ? undefined : { scale: 0.99 }}
          onClick={closeMenu}
        >
          <span className="font-display from-cyan-500 to-violet-500 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-sm font-bold text-white shadow-md shadow-cyan-500/10">
            UY
          </span>
          <span className="min-w-0">
            <span className="font-display text-fg block truncate text-base font-semibold leading-tight sm:text-lg">
              {site.name}
            </span>
            <span className="text-fg-dim block truncate text-xs font-medium sm:text-sm">
              {site.title}
              {', '}
              {site.location.split(',')[0]}
            </span>
          </span>
        </motion.a>

        <nav
          className="text-fg-dim hidden min-w-0 flex-1 items-center justify-center overflow-x-auto overscroll-x-contain [scrollbar-width:none] md:flex md:gap-0.5 [&::-webkit-scrollbar]:hidden"
          aria-label="Primary"
        >
          {nav.map((item) => (
            <motion.a
              key={item.id}
              href={`#${item.id}`}
              className="text-fg-dim hover:text-cyan-400 group relative shrink-0 rounded-full px-2.5 py-2 text-sm font-medium whitespace-nowrap no-underline transition-colors sm:px-3"
              whileHover={reduce ? undefined : { y: -1 }}
            >
              {item.label}
              <span
                className="from-cyan-400/0 via-cyan-400 to-violet-400/0 pointer-events-none absolute bottom-1.5 left-2 right-2 h-px scale-x-0 bg-gradient-to-r transition-transform group-hover:scale-x-100"
                aria-hidden
              />
            </motion.a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <div className="text-fg-dim hidden items-center gap-2 sm:flex">
            {fiverrReady && (
              <motion.a
                href={fiverrProfileUrl}
                target="_blank"
                rel="noreferrer"
                className="from-[#1dbf73] to-[#19a463] text-surface-0 inline-flex items-center justify-center rounded-full bg-gradient-to-r px-4 py-2 text-sm font-bold no-underline shadow-sm shadow-[#1dbf73]/20"
                whileHover={reduce ? undefined : { scale: 1.04 }}
                whileTap={reduce ? undefined : { scale: 0.98 }}
              >
                Hire on Fiverr
              </motion.a>
            )}
            <motion.a
              href={mailto(site.email)}
              className={[
                'inline-flex items-center justify-center rounded-full px-3 py-2 text-sm font-semibold whitespace-nowrap no-underline',
                fiverrReady
                  ? 'text-fg hover:border-cyan-500/50 border-2 border-slate-500/50 bg-slate-900/40'
                  : 'text-surface-0 border-0 bg-gradient-to-r from-cyan-500 to-violet-600',
              ].join(' ')}
              whileHover={reduce ? undefined : { scale: 1.04 }}
              whileTap={reduce ? undefined : { scale: 0.98 }}
            >
              {fiverrReady ? 'Email' : 'Get in touch'}
            </motion.a>
          </div>
          <button
            type="button"
            className="text-fg border-slate-600/80 bg-slate-900/50 hover:border-cyan-500/50 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border-2 md:hidden"
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-controls={menuId}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          id={menuId}
          className="bg-surface-0/98 fixed inset-0 z-40 flex flex-col justify-center px-6 pt-28 md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
        >
          <nav
            className="flex flex-col items-center gap-1"
            aria-label="Primary mobile"
          >
            {nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-fg font-display w-full max-w-sm rounded-xl py-3 text-center text-lg font-medium no-underline"
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
            {fiverrReady && (
              <a
                href={fiverrProfileUrl}
                target="_blank"
                rel="noreferrer"
                className="from-[#1dbf73] to-[#19a463] text-surface-0 mt-4 w-full max-w-sm rounded-2xl bg-gradient-to-r py-3.5 text-center text-base font-bold no-underline"
                onClick={closeMenu}
              >
                Hire on Fiverr
              </a>
            )}
            <a
              href={mailto(site.email)}
              className="text-cyan-400 border-cyan-500/30 mt-2 w-full max-w-sm rounded-full border-2 py-3 text-center text-base font-semibold no-underline"
              onClick={closeMenu}
            >
              {site.email}
            </a>
          </nav>
        </div>
      )}
    </motion.header>
  )
}

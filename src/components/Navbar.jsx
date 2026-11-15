import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useScroll } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'
import { NAV_LINKS, SITE } from '../config/site'

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (id) => (e) => {
    e.preventDefault()
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? 'border-gold/20 bg-bg/90 shadow-lg backdrop-blur-md'
          : 'border-transparent bg-emerald-deep/40 backdrop-blur-sm'
      }`}
    >
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6" aria-label="Main">
        <a href="#home" onClick={go('home')} className="group flex items-center gap-3">
          <span className="grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-full bg-white p-1 ring-2 ring-gold/70">
            <img src="/images/logo.png" alt={`${SITE.nameEn} logo`} className="h-full w-full object-contain" />
          </span>
          <span className="leading-tight">
            <span className={`block text-base font-bold transition-colors group-hover:!text-[#D4AF69] sm:text-lg ${scrolled ? 'text-ink' : 'text-white'}`}>{SITE.nameBn}</span>
            <span className="block font-en text-[11px] text-gold-text">{SITE.nameEn}</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={go(l.id)}
              className={`nav-link rounded-full px-3 py-2 font-en text-[13px] font-medium ${
                scrolled ? 'text-ink' : 'text-white/90'
              }`}
            >
              {l.label}
            </a>
          ))}
          <div className="ml-2"><ThemeToggle theme={theme} onToggle={onToggleTheme} /></div>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'মেনু বন্ধ করুন' : 'মেনু খুলুন'}
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-full border border-gold/40 text-gold-text"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-gold/20 bg-bg lg:hidden"
          >
            <div className="flex flex-col px-4 py-3">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={go(l.id)}
                  className="rounded-lg px-3 py-3 font-en text-sm font-medium text-ink hover:bg-gold/10"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div style={{ scaleX: scrollYProgress }} className="absolute bottom-0 left-0 h-[3px] w-full origin-left bg-gold" />
    </motion.header>
  )
}

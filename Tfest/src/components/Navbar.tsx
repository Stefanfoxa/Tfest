import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { ASSETS } from '../lib/assets'
import { EVENT } from '../data/siteContent'

type LinkId = 'home' | 'timeline' | 'competition'

const LINKS: { id: LinkId; label: string; to: string }[] = [
  { id: 'home', label: 'Beranda', to: '/' },
  { id: 'competition', label: 'Competition', to: '/competition' },
  { id: 'timeline', label: 'Timeline', to: '/#timeline' },
]

function isActive(id: LinkId, pathname: string, hash: string): boolean {
  if (id === 'competition') return pathname.startsWith('/competition')
  if (pathname !== '/') return false
  return id === 'timeline' ? hash === '#timeline' : hash !== '#timeline'
}

const pill =
  'inline-flex min-h-[44px] items-center justify-center rounded-full px-6 text-sm font-medium tracking-wide transition duration-200 hover:-translate-y-0.5'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const wrapRef = useRef<HTMLDivElement>(null)
  const { pathname, hash } = useLocation()

  // Klik di luar menu atau tombol Esc menutup menu mobile.
  useEffect(() => {
    if (!open) return
    const onPointer = (e: PointerEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('pointerdown', onPointer)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onPointer)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  const renderLinks = (onClick?: () => void) =>
    LINKS.map((l) => {
      const active = isActive(l.id, pathname, hash)
      return (
        <Link
          key={l.id}
          to={l.to}
          aria-current={active ? 'page' : undefined}
          onClick={onClick}
          className={`${pill} ${
            active
              ? 'bg-gold font-semibold text-forest shadow-gold-btn'
              : 'border border-cream/70 bg-forest/40 text-cream hover:bg-cream hover:text-forest'
          }`}
        >
          {l.label}
        </Link>
      )
    })

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gold/20 bg-forest/85 backdrop-blur-[20px]">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-4 md:px-8">
        <div ref={wrapRef} className="relative flex items-center gap-3">
          <Link
            to="/"
            aria-label={`${EVENT.fullName}, ke Beranda`}
            className="block transition duration-200 hover:scale-110"
            onClick={() => setOpen(false)}
          >
            <img src={ASSETS.logo} alt={`Logo ${EVENT.fullName}`} width={40} height={40} className="h-10 w-10" />
          </Link>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream/60 text-cream md:hidden"
            aria-label={open ? 'Tutup menu' : 'Buka menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>

          {open && (
            <nav
              id="mobile-menu"
              aria-label="Menu utama"
              className="glass absolute left-0 top-full mt-3 flex w-60 flex-col gap-2 rounded-3xl p-3 md:hidden"
            >
              {renderLinks(() => setOpen(false))}
            </nav>
          )}
        </div>

        <nav aria-label="Menu utama" className="ml-auto hidden items-center gap-3 md:flex">
          {renderLinks()}
        </nav>
      </div>
    </header>
  )
}

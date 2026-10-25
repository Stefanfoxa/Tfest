import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { ASSETS } from '../lib/assets'
import { EVENT } from '../data/siteContent'

type LinkId = 'home' | 'timeline' | 'competition'

const LINKS: { id: LinkId; label: string; to: string }[] = [
  { id: 'home', label: 'Beranda', to: '/' },
  { id: 'competition', label: 'Competition', to: '/competition' },
  { id: 'competition', label: 'Competition', to: '/#lomba' },
  { id: 'timeline', label: 'Timeline', to: '/#timeline' },
]

function isActive(id: LinkId, pathname: string, hash: string): boolean {
  if (id === 'competition') return pathname.startsWith('/competition')
  if (pathname !== '/') return false
  return id === 'timeline' ? hash === '#timeline' : hash !== '#timeline'
  if (id === 'timeline') return hash === '#timeline'
  if (id === 'competition') return hash === '#lomba'
  return hash !== '#timeline' && hash !== '#lomba'
}

const pill =
@@ -73,28 +74,30 @@
            className="block transition duration-200 hover:scale-110"
            onClick={() => setOpen(false)}
          >
            <img src={ASSETS.logo} alt={`Logo ${EVENT.fullName}`} width={40} height={40} className="h-10 w-10" />
            <span className="grid h-11 w-11 place-items-center rounded-full bg-cream ring-2 ring-gold/70">
              <img src={ASSETS.logo} alt={`Logo ${EVENT.fullName}`} width={32} height={32} className="h-8 w-8 object-contain" />
            </span>
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

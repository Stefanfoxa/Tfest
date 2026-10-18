import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { COMPETITIONS, type ColorKey, type Competition } from '../data/competitions'
import { COLOR_STYLES } from '../lib/colorStyles'

// Deskripsi singkat tiap lomba, diringkas dari handbook masing-masing.
const BLURB: Record<string, string> = {
  pfec: 'Lomba esai ilmiah populer untuk pelajar SMA/SMK/MA sederajat se-Indonesia. Tuangkan gagasanmu tentang optimalisasi dana perkebunan untuk kesejahteraan dan transformasi sektor perkebunan.',
  pfc3: 'Lomba konten kreatif untuk mahasiswa dan masyarakat umum. Kemas informasi Treasury Festival 2026 dan peran Dana Perkebunan menjadi video yang orisinal, positif, dan informatif.',
  pfpbc: 'Lomba policy brief untuk mahasiswa D3/D4/S1. Kaji isu Dana Perkebunan dan ajukan rekomendasi kebijakan berbasis data, dari abstrak dan full paper hingga final di PKN STAN.',
  pfic: 'Lomba infografis individu untuk mahasiswa. Ubah data dan isu Dana Perkebunan menjadi sajian visual yang menarik, informatif, dan edukatif.',
}

// Kelas ditulis utuh supaya tidak dibuang Tailwind.
const ACCENT: Record<ColorKey, string> = {
  aec: 'text-aec-lite border-aec-lite',
  aice: 'text-aice-lite border-aice-lite',
  arc: 'text-arc-lite border-arc-lite',
  avoc: 'text-avoc-lite border-avoc-lite',
  lcca: 'text-lcca-lite border-lcca-lite',
}

const WIB = '+07:00'

// Menentukan apakah pendaftaran belum dibuka, sedang berjalan, atau sudah tutup (waktu WIB).
function phase(c: Competition, now: number) {
  const reg = c.timeline[0]
  const open = new Date(`${reg.start}T00:00:00${WIB}`).getTime()
  const close = new Date(`${reg.end ?? reg.start}T23:59:59${WIB}`).getTime()
  if (now < open) return { label: 'Pendaftaran dibuka dalam', target: open }
  if (now <= close) return { label: 'Pendaftaran ditutup dalam', target: close }
  return { label: 'Pendaftaran telah ditutup', target: null }
}

function useNow() {
  const [now, setNow] = useState(() => Date.now())
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(id)
  }, [])
  return now
}

const arrowBtn =
  'grid h-12 w-12 shrink-0 place-items-center rounded-full border border-cream/25 bg-cream/10 text-cream transition duration-200 hover:scale-110 hover:bg-gold hover:text-forest'

// Tombol tautan. Jika URL di data/competitions.ts masih kosong, tombol tampil redup dan tidak bisa diklik.
function ActionLink({ href, className, children }: { href: string; className: string; children: React.ReactNode }) {
  const base = 'inline-flex min-h-[54px] items-center justify-center gap-2 rounded-full px-9 text-base font-semibold transition duration-200'
  if (!href) {
    return (
      <span role="link" aria-disabled="true" title="Tautan segera tersedia" className={`${base} cursor-not-allowed opacity-50 ${className}`}>
        {children}
      </span>
    )
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`${base} hover:-translate-y-1 hover:scale-105 ${className}`}>
      {children}
    </a>
  )
}

export default function CompetitionSlider() {
  const [i, setI] = useState(0)
  const [paused, setPaused] = useState(false)
  const touchX = useRef<number | null>(null)
  const now = useNow()
  const total = COMPETITIONS.length
  const go = (n: number) => setI((n + total) % total)

  // Geser otomatis tiap 8 detik; berhenti saat kursor/fokus ada di atas slider.
  useEffect(() => {
    if (paused) return
    const id = setInterval(() => setI((v) => (v + 1) % total), 8000)
    return () => clearInterval(id)
  }, [paused, total])

  const c = COMPETITIONS[i]
  const { label, target } = phase(c, now)
  const left = target ? Math.max(0, Math.floor((target - now) / 1000)) : 0
  const units = [
    ['Hari', Math.floor(left / 86400)],
    ['Jam', Math.floor((left % 86400) / 3600)],
    ['Menit', Math.floor((left % 3600) / 60)],
    ['Detik', left % 60],
  ] as const

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Daftar lomba Treasury Festival 2026"
      className="relative mx-auto w-full max-w-5xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return
        const dx = e.changedTouches[0].clientX - touchX.current
        if (Math.abs(dx) > 50) go(i + (dx < 0 ? 1 : -1))
        touchX.current = null
      }}
    >
      <div className="glass rounded-[32px] px-6 pb-8 pt-10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)] md:px-24 md:pb-12 md:pt-14">
        {/* key={slug}: konten dipasang ulang tiap pindah slide sehingga animasi masuk berjalan. */}
        <div key={c.slug} className="animate-slide-in flex flex-col items-center text-center" aria-live="polite">
          <span className={`rounded-full border px-6 py-2 text-sm font-semibold uppercase tracking-[0.25em] ${ACCENT[c.color]}`}>
            {c.code}
          </span>

          <h2 className="mt-6 max-w-3xl text-[clamp(34px,5vw,64px)] leading-[1.2] text-cream">
            {c.name} <span className={ACCENT[c.color].split(' ')[0]}>({c.code})</span>
          </h2>

          <p className="mt-5 max-w-3xl text-base leading-relaxed text-cream/85 md:text-xl md:leading-relaxed">
            {BLURB[c.slug]}
          </p>

          <p className="mt-9 text-xs font-semibold uppercase tracking-[0.25em] text-cream md:text-sm">{label}</p>

          {target ? (
            <div className="mt-4 flex items-center gap-2 md:gap-4">
              {units.map(([name, value], k) => (
                <div key={name} className="flex items-center gap-2 md:gap-4">
                  <div className="min-w-[66px] rounded-2xl border border-cream/15 bg-cream/5 px-2 py-3 md:min-w-[100px] md:py-4">
                    <div className={`text-[11px] font-semibold uppercase tracking-widest md:text-xs ${ACCENT[c.color].split(' ')[0]}`}>
                      {name}
                    </div>
                    <div className="mt-1 text-3xl tabular-nums text-cream md:text-5xl">{String(value).padStart(2, '0')}</div>
                  </div>
                  {k < 3 && <span className="text-2xl text-gold md:text-3xl">:</span>}
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-4 rounded-2xl border border-cream/15 bg-cream/5 px-8 py-4 text-lg text-cream/80">
              Terima kasih atas antusiasmenya!
            </div>
          )}

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <ActionLink
              href={c.guidebookUrl}
              className="border border-cream/50 text-cream hover:bg-cream hover:text-forest"
            >
              Handbook
            </ActionLink>
            <ActionLink href={c.registerUrl} className={`border ${COLOR_STYLES[c.color].pillActive}`}>
              Link Pendaftaran &rarr;
            </ActionLink>
          </div>
        </div>

        {/* Kontrol bawah: panah (khusus HP) mengapit titik-titik penanda slide. */}
        <div className="mt-9 flex items-center justify-center gap-4">
          <button type="button" aria-label="Lomba sebelumnya" onClick={() => go(i - 1)} className={`${arrowBtn} md:hidden`}>
            <ChevronLeft size={24} />
          </button>
          <div className="flex items-center gap-2.5">
            {COMPETITIONS.map((x, k) => (
              <button
                key={x.slug}
                type="button"
                aria-label={`Tampilkan ${x.code}`}
                aria-current={k === i}
                onClick={() => setI(k)}
                className={`h-2.5 rounded-full transition-all duration-300 ${k === i ? 'w-9 bg-gold' : 'w-2.5 bg-cream/30 hover:bg-cream/60'}`}
              />
            ))}
          </div>
          <button type="button" aria-label="Lomba berikutnya" onClick={() => go(i + 1)} className={`${arrowBtn} md:hidden`}>
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Panah desktop di sisi kiri dan kanan kartu. */}
      <button type="button" aria-label="Lomba sebelumnya" onClick={() => go(i - 1)} className={`${arrowBtn} absolute left-5 top-1/2 hidden -translate-y-1/2 md:grid`}>
        <ChevronLeft size={26} />
      </button>
      <button type="button" aria-label="Lomba berikutnya" onClick={() => go(i + 1)} className={`${arrowBtn} absolute right-5 top-1/2 hidden -translate-y-1/2 md:grid`}>
        <ChevronRight size={26} />
      </button>
    </div>
  )
}

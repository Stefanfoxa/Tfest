import { Link } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import { EVENT } from '../data/siteContent'
import { DecorLayer } from './Decor'
import { DECOR } from '../decorConfig'

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-4 pb-24 pt-28 text-center">
      <DecorLayer items={DECOR.hero} />
      <div className="relative z-10 mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-gold md:text-base">Politeknik Keuangan Negara STAN</p>

        {/* Dua baris terpisah (block) + jarak atas: tidak ada huruf "y" yang menimpa angka 2026. */}
        <h1 className="relative isolate mt-6 text-[clamp(52px,11vw,150px)] leading-[1.1] text-cream">
          <span className="block">{EVENT.nameMain}</span>
          <span className="relative mt-2 block text-gold md:mt-4">
            <DecorLayer items={DECOR.heroYear} />
            {EVENT.year}
          </span>
        </h1>

        <p className="mt-8 text-[clamp(22px,3vw,38px)] leading-snug text-gold">
          <span className="block sm:inline">{EVENT.tagline[0]}</span>
          <span className="mx-3 hidden text-cream/50 sm:inline">&bull;</span>
          <span className="block sm:inline">{EVENT.tagline[1]}</span>
        </p>
      </div>

      <Link
        to="/#welcome"
        aria-label="Gulir ke bawah"
        className="absolute bottom-8 left-1/2 grid h-12 w-12 -translate-x-1/2 animate-bounce place-items-center rounded-full border border-gold/60 text-gold transition hover:bg-gold hover:text-forest"
      >
        <ChevronDown size={26} />
      </Link>
    </section>
  )
}

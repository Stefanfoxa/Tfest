import { Link } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import { ASSETS } from '../lib/assets'
import { EVENT } from '../data/siteContent'

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-center justify-center overflow-hidden px-4 pb-24 pt-28 text-center">
      {/* Lapisan latar: foto (jika ada), motif daun, cahaya emas, lalu memudar ke hijau tua. */}
      <img src={ASSETS.heroBg} alt="" aria-hidden="true" className="absolute inset-0 -z-30 h-full w-full object-cover opacity-30" />
      <div className="absolute inset-0 -z-20 bg-batik" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(241,154,32,0.22),transparent_60%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-forest" />
      <div aria-hidden="true" className="animate-floaty absolute -left-24 top-40 -z-10 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
      <div aria-hidden="true" className="animate-floaty absolute -right-24 bottom-32 -z-10 h-80 w-80 rounded-full bg-aice-lite/10 blur-3xl" />

      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-gold md:text-base">Politeknik Keuangan Negara STAN</p>

        {/* Dua baris terpisah (block) + jarak atas: tidak ada huruf "y" yang menimpa angka 2026. */}
        <h1 className="mt-6 text-[clamp(52px,11vw,150px)] leading-[1.1] text-cream">
          <span className="block">{EVENT.nameMain}</span>
          <span className="mt-2 block text-gold md:mt-4">{EVENT.year}</span>
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

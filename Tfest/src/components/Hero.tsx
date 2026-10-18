import { Link } from 'react-router-dom'
import { ASSETS } from '../lib/assets'
import { EVENT } from '../data/siteContent'

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-center justify-center overflow-hidden px-4 pb-20 pt-28 text-center">
      {/* Foto latar dekoratif, selalu diberi overlay hijau tua. */}
      <img
        src={ASSETS.heroBg}
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        className="absolute inset-0 -z-30 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-forest/85 via-forest/75 to-forest" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(241,154,32,0.22),transparent_60%)]" />

      <div className="mx-auto flex w-full max-w-6xl flex-col items-center">
        <span aria-hidden="true" className="mb-6 block h-3 w-3 rotate-45 bg-gold" />

        {/* line-height dibuat lega supaya baris judul tidak saling menimpa saat teks turun ke baris baru. */}
        <h1 className="max-w-full break-words text-[clamp(42px,10vw,160px)] leading-[1.12] text-cream">
          {EVENT.nameMain} <span className="whitespace-nowrap text-gold">{EVENT.year}</span>
        </h1>

        <p className="mt-8 font-display text-[clamp(22px,4.5vw,56px)] leading-[1.25] text-gold">
          {EVENT.tagline[0]}
          <br />
          {EVENT.tagline[1]}
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          <Link
            to="/#timeline"
            className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-gradient-to-r from-gold to-gold-light px-9 text-sm font-semibold text-forest shadow-gold-btn transition duration-200 hover:-translate-y-1 hover:scale-105"
          >
            Timeline
          </Link>
          <Link
            to="/competition"
            className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-cream/70 bg-forest/40 px-9 text-sm font-medium text-cream transition duration-200 hover:-translate-y-1 hover:bg-cream hover:text-forest"
          >
            Competition
          </Link>
        </div>
      </div>
    </section>
  )
}

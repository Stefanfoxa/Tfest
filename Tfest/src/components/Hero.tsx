import { ASSETS } from '../lib/assets'
import { EVENT } from '../data/siteContent'
import CompetitionSlider from './CompetitionSlider'

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden px-4 pb-24 pt-28 text-center md:pt-36">
      {/* Lapisan latar: foto (jika ada), motif daun, cahaya emas, lalu memudar ke hijau tua. */}
      <img
        src={ASSETS.heroBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-30 h-full w-full object-cover opacity-30"
      />
      <div className="absolute inset-0 -z-20 bg-batik" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(241,154,32,0.22),transparent_60%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-forest" />
      <div aria-hidden="true" className="animate-floaty absolute -left-24 top-48 -z-10 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
      <div aria-hidden="true" className="animate-floaty absolute -right-24 top-96 -z-10 h-80 w-80 rounded-full bg-aice-lite/10 blur-3xl" />

      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-gold md:text-base">
          Politeknik Keuangan Negara STAN
        </p>

        {/* Dua baris terpisah (block) + jarak atas: tidak ada lagi huruf "y" yang menimpa angka 2026. */}
        <h1 className="mt-6 text-[clamp(46px,9.5vw,124px)] leading-[1.1] text-cream">
          <span className="block">{EVENT.nameMain}</span>
          <span className="mt-2 block text-gold md:mt-4">{EVENT.year}</span>
        </h1>

        <p className="mt-8 text-[clamp(20px,2.8vw,34px)] leading-snug text-gold">
          {EVENT.tagline[0]}
          <span className="mx-3 text-cream/50">&bull;</span>
          <span className="inline-block">{EVENT.tagline[1]}</span>
        </p>

        <div className="mt-14 md:mt-20">
          <CompetitionSlider />
        </div>
      </div>
    </section>
  )
}

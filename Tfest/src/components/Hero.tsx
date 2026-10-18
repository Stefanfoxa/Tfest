import { ASSETS } from '../lib/assets'
import { EVENT } from '../data/siteContent'

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-center justify-center overflow-hidden px-4 pb-16 pt-24 text-center">
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

      <div className="mx-auto w-full max-w-6xl">
        <h1 className="break-words text-[clamp(42px,10vw,160px)] leading-[0.95] text-cream">
          {EVENT.nameMain} <span className="whitespace-nowrap text-gold">{EVENT.year}</span>
        </h1>
        <p className="mt-6 font-display text-[clamp(22px,4.5vw,56px)] leading-tight text-gold">
          {EVENT.tagline[0]}
          <br />
          {EVENT.tagline[1]}
        </p>
      </div>
    </section>
  )
}

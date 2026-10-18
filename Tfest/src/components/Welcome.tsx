import { ASSETS } from '../lib/assets'
import { EVENT } from '../data/siteContent'

export default function Welcome() {
  return (
    <section id="welcome" className="bg-forest px-4 py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-8 rounded-[28px] border border-soil/15 bg-cream p-6 md:grid-cols-2 md:gap-12 md:p-12">
        <img
          src={ASSETS.maskot}
          alt={`Maskot ${EVENT.fullName}`}
          width={520}
          height={520}
          loading="lazy"
          className="mx-auto h-auto w-full max-w-sm md:max-w-md"
        />
        <div>
          <h2 className="text-3xl leading-tight text-forest md:text-5xl">Welcome to {EVENT.fullName}</h2>
          <span aria-hidden="true" className="my-5 block h-1 w-16 rounded-full bg-gold" />
          {/* Paragraf deskripsi kosong sampai teksnya diberikan (lihat data/siteContent.ts). */}
          {EVENT.welcomeText && (
            <p className="text-base leading-relaxed text-forest md:text-lg">{EVENT.welcomeText}</p>
          )}
        </div>
      </div>
    </section>
  )
}

import { ASSETS } from '../lib/assets'
import { DecorLayer } from './Decor'
import { DECOR } from '../decorConfig'

interface SubHeaderProps {
  title: string
}

export default function SubHeader({ title }: SubHeaderProps) {
  return (
    // pt-16 menyisakan ruang untuk navbar yang fixed.
    <section className="relative isolate overflow-hidden pt-16">
      <img
        src={ASSETS.subheaderBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-forest/85" />
      <DecorLayer items={DECOR.subheader} />
      <div className="relative z-10 px-4 py-12 text-center md:py-16">
        <h1 className="break-words pl-[0.2em] text-2xl leading-tight uppercase tracking-[0.2em] text-cream sm:text-3xl md:pl-[0.3em] md:text-5xl md:tracking-[0.3em]">
          {title}
        </h1>
        <span aria-hidden="true" className="mx-auto mt-4 block h-0.5 w-24 bg-gold" />
      </div>
    </section>
  )
}

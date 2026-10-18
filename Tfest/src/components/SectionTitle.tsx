// Judul bagian di antara divider: font The Season, besar, dengan garis emas di bawahnya.
interface Props {
  id?: string
  title: string
  subtitle?: string
}

export default function SectionTitle({ id, title, subtitle }: Props) {
  return (
    <div id={id} className="scroll-mt-16 px-4 pb-10 pt-8 text-center md:pb-14 md:pt-12">
      {/* clamp: mengecil otomatis di HP supaya kata tidak terpotong. */}
      <h2 className="font-season text-[clamp(46px,12vw,104px)] font-bold leading-[1.05] tracking-wide text-cream">{title}</h2>
      <span aria-hidden="true" className="mx-auto mt-6 block h-1 w-28 rounded-full bg-gold md:w-40" />
      {subtitle && <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-cream/85 md:text-2xl">{subtitle}</p>}
    </div>
  )
}

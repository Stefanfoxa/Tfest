// Judul bagian di antara divider: League Spartan bold, huruf kapital, garis emas di bawahnya.
interface Props {
  id?: string
  title: string
  subtitle?: string
}

export default function SectionTitle({ id, title, subtitle }: Props) {
  return (
    <div id={id} className="scroll-mt-16 px-4 pb-10 pt-6 text-center md:pb-14">
      <h2 className="font-spartan text-4xl font-extrabold uppercase tracking-[0.2em] text-cream md:text-6xl md:tracking-[0.25em]">
        <span className="pl-[0.2em]">{title}</span>
      </h2>
      <span aria-hidden="true" className="mx-auto mt-5 block h-1 w-28 rounded-full bg-gold" />
      {subtitle && <p className="mx-auto mt-5 max-w-2xl text-base text-cream/80 md:text-xl">{subtitle}</p>}
    </div>
  )
}

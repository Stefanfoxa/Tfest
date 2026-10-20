// Pemisah bagian: garis ganda emas memudar, belah ketupat berlapis di tengah, dan titik-titik hiasan.
export default function Divider() {
  return (
    <div role="separator" className="px-4 py-12 md:py-16">
      <div className="mx-auto flex max-w-4xl items-center gap-3 md:gap-5">
        <div className="flex flex-1 flex-col gap-[3px]">
          <span className="h-px bg-gradient-to-r from-transparent to-gold" />
          <span className="h-px bg-gradient-to-r from-transparent to-gold/40" />
        </div>

        <span className="h-1.5 w-1.5 rounded-full bg-gold/60" />
        <span className="h-2.5 w-2.5 rotate-45 border border-gold" />

        <span className="relative block h-7 w-7 rotate-45 border border-gold md:h-8 md:w-8">
          <span className="absolute inset-[5px] bg-gold" />
          <span className="absolute inset-[10px] bg-forest" />
        </span>

        <span className="h-2.5 w-2.5 rotate-45 border border-gold" />
        <span className="h-1.5 w-1.5 rounded-full bg-gold/60" />

        <div className="flex flex-1 flex-col gap-[3px]">
          <span className="h-px bg-gradient-to-l from-transparent to-gold" />
          <span className="h-px bg-gradient-to-l from-transparent to-gold/40" />
        </div>
      </div>
    </div>
  )
}

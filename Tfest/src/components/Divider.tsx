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

        {/* Sepasang daun emas kecil (satu dicerminkan) menggantikan belah ketupat tengah. */}
        <span aria-hidden="true" className="flex items-center">
          <img src="/images/decor/webp/leaf-gold-gradient.webp" alt="" draggable={false} loading="lazy" decoding="async" className="pointer-events-none h-11 w-auto select-none md:h-14" style={{ transform: 'rotate(-38deg)' }} />
          <img src="/images/decor/webp/leaf-gold-gradient.webp" alt="" draggable={false} loading="lazy" decoding="async" className="pointer-events-none -ml-2 h-11 w-auto select-none md:h-14" style={{ transform: 'scaleX(-1) rotate(-38deg)' }} />
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

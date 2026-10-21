// Pemisah bagian: garis ganda emas memudar, belah ketupat berlapis di tengah, dan sepasang daun sawit emas
// yang mengapit belah ketupat (utuh, tidak terpotong; satu dicerminkan).
const LEAF = '/images/decor/webp/leaf-gold-gradient.webp'

function Leaf({ side }: { side: 'left' | 'right' }) {
  // Daun diputar hingga ujungnya menghadap keluar (pangkal dekat belah ketupat).
  const transform = side === 'left' ? 'translate(-50%, -50%) rotate(-74deg)' : 'translate(-50%, -50%) scaleX(-1) rotate(-74deg)'
  return (
    <span aria-hidden="true" className="relative block h-10 w-[3.25rem] shrink-0 md:h-12 md:w-[4.5rem]">
      <img
        src={LEAF}
        alt=""
        draggable={false}
        loading="lazy"
        decoding="async"
        className="pointer-events-none absolute left-1/2 top-1/2 h-12 w-auto max-w-none select-none opacity-95 md:h-[3.75rem]"
        style={{ transform }}
      />
    </span>
  )
}

export default function Divider() {
  return (
    <div role="separator" className="px-4 py-12 md:py-16">
      <div className="mx-auto flex max-w-4xl items-center gap-1 md:gap-3">
        <div className="flex flex-1 flex-col gap-[3px]">
          <span className="h-px bg-gradient-to-r from-transparent to-gold" />
          <span className="h-px bg-gradient-to-r from-transparent to-gold/40" />
        </div>

        <Leaf side="left" />

        <span className="relative mx-1 block h-7 w-7 rotate-45 border border-gold md:h-8 md:w-8">
          <span className="absolute inset-[5px] bg-gold" />
          <span className="absolute inset-[10px] bg-forest" />
        </span>

        <Leaf side="right" />

        <div className="flex flex-1 flex-col gap-[3px]">
          <span className="h-px bg-gradient-to-l from-transparent to-gold" />
          <span className="h-px bg-gradient-to-l from-transparent to-gold/40" />
        </div>
      </div>
    </div>
  )
}

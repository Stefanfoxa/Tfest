// Siku-siku melengkung berwarna emas di keempat pojok kartu, dengan cahaya (glow) dan ujung lengan yang memudar.
// Pakai di dalam elemen ber-"relative": <div className="relative ..."><CornerFrame /> ... </div>
const CORNERS = [
  { pos: 'left-3 top-3', shape: 'rounded-tl-[24px] border-l-4 border-t-4', angle: '135deg' },
  { pos: 'right-3 top-3', shape: 'rounded-tr-[24px] border-r-4 border-t-4', angle: '225deg' },
  { pos: 'bottom-3 left-3', shape: 'rounded-bl-[24px] border-b-4 border-l-4', angle: '45deg' },
  { pos: 'bottom-3 right-3', shape: 'rounded-br-[24px] border-b-4 border-r-4', angle: '315deg' },
] as const

export default function CornerFrame() {
  return (
    <>
      {CORNERS.map((c) => (
        // Pembungkus membawa drop-shadow (glow); anak membawa garis + mask pemudaran.
        <span
          key={c.pos}
          aria-hidden="true"
          className={`pointer-events-none absolute ${c.pos} h-14 w-14 md:h-20 md:w-20`}
          style={{ filter: 'drop-shadow(0 0 9px rgba(241,154,32,0.95))' }}
        >
          <span
            className={`block h-full w-full border-gold ${c.shape}`}
            style={{
              maskImage: `linear-gradient(${c.angle}, #000 35%, rgba(0,0,0,0.3) 100%)`,
              WebkitMaskImage: `linear-gradient(${c.angle}, #000 35%, rgba(0,0,0,0.3) 100%)`,
            }}
          />
        </span>
      ))}
    </>
  )
}

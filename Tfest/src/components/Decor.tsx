import type { CSSProperties } from 'react'
import type { DecorItem } from '../decorConfig'

// Kelas ditulis utuh supaya tidak dibuang Tailwind.
const FROM = { md: 'hidden md:block', lg: 'hidden lg:block', xl: 'hidden xl:block' } as const
const ANIM = { sway: 'decor-sway', 'sway-m': 'decor-sway decor-sway-m', twinkle: 'decor-twinkle' } as const

export default function Decor(d: DecorItem) {
  const { rotate = 0, flip = false, opacity = 1 } = d
  const style = {
    top: d.top,
    right: d.right,
    bottom: d.bottom,
    left: d.left,
    width: d.width,
    opacity,
    zIndex: d.z ?? 0,
    mixBlendMode: d.blend,
    transform: `${d.center ? 'translate(-50%, -50%) ' : d.centerY ? 'translateY(-50%) ' : ''}rotate(${rotate}deg)${flip ? ' scaleX(-1)' : ''}`,
    transformOrigin: d.center || d.centerY ? 'center' : (d.origin ?? 'bottom center'),
    maskImage: d.mask,
    WebkitMaskImage: d.mask,
    animationDelay: d.delay ? `${d.delay}s` : undefined,
    '--rot': `${rotate}deg`,
    '--flip': flip ? -1 : 1,
    '--op': opacity,
  } as CSSProperties
  const cls = ['pointer-events-none absolute h-auto max-w-none select-none', d.from ? FROM[d.from] : '', d.animate ? ANIM[d.animate] : '']
  return (
    <img
      src={`/images/decor/webp/${d.src}.webp`}
      alt=""
      aria-hidden="true"
      draggable={false}
      loading="lazy"
      decoding="async"
      className={cls.join(' ')}
      style={style}
    />
  )
}

export function DecorLayer({ items }: { items: DecorItem[] }) {
  return (
    <>
      {items.map((d, i) => (
        <Decor key={`${d.src}-${i}`} {...d} />
      ))}
    </>
  )
}

import { COMPETITIONS, type ColorKey } from './competitions'

export interface Contact {
  code: string
  pic: string
  /** Nomor WhatsApp format internasional tanpa "+" (untuk wa.me). */
  whatsapp: string
  textClass: string
  hoverClass: string
}

// Kelas Tailwind ditulis utuh (bukan dirangkai) supaya tidak terbuang saat build.
const STYLES: Record<ColorKey, { textClass: string; hoverClass: string }> = {
  aec: { textClass: 'text-aec-lite', hoverClass: 'hover:border-aec-lite hover:shadow-glow-aec' },
  aice: { textClass: 'text-aice-lite', hoverClass: 'hover:border-aice-lite hover:shadow-glow-aice' },
  arc: { textClass: 'text-arc-lite', hoverClass: 'hover:border-arc-lite hover:shadow-glow-arc' },
  avoc: { textClass: 'text-avoc-lite', hoverClass: 'hover:border-avoc-lite hover:shadow-glow-avoc' },
  lcca: { textClass: 'text-lcca-lite', hoverClass: 'hover:border-lcca-lite hover:shadow-glow-lcca' },
}

export const CONTACTS: Contact[] = COMPETITIONS.map((c) => ({
  code: c.code,
  pic: c.pic,
  whatsapp: c.whatsapp,
  ...STYLES[c.color],
}))

export function formatPhone(n: string): string {
  return `+${n.slice(0, 2)} ${n.slice(2).replace(/(\d{3})(\d{4})(\d+)/, '$1-$2-$3')}`
}

import type { Competition, EventType } from '../data/competitions'
import { parseISO } from './calendar'

/** Satu titik acara di kalender. Kegiatan berentang tanggal dipecah menjadi acara buka dan tutup. */
export interface CalEvent {
  id: string
  date: string
  title: string
  /** Teks singkat untuk label di sel kalender. */
  pill: string
  type: EventType
  description: string
  competitionName: string
  /** Hanya untuk kegiatan berentang. */
  rangeStart?: string
  rangeEnd?: string
}

export function buildEvents(c: Competition): CalEvent[] {
  const out: CalEvent[] = []
  c.timeline.forEach((item, i) => {
    const base = { type: item.type, description: item.description, competitionName: c.name }
    if (item.end && item.end !== item.start) {
      const range = { rangeStart: item.start, rangeEnd: item.end }
      out.push({ ...base, ...range, id: `${c.slug}-${i}-s`, date: item.start, title: `Pembukaan ${item.label}`, pill: `Buka ${item.short}` })
      out.push({ ...base, ...range, id: `${c.slug}-${i}-e`, date: item.end, title: `Penutupan ${item.label}`, pill: `Tutup ${item.short}` })
    } else {
      out.push({ ...base, id: `${c.slug}-${i}`, date: item.start, title: item.label, pill: item.short })
    }
  })
  // Sort stabil: acara pada tanggal yang sama tetap berurutan seperti di brief.
  return out.sort((a, b) => (a.date < b.date ? -1 : a.date > b.date ? 1 : 0))
}

export function buildRanges(c: Competition): { start: string; end: string }[] {
  return c.timeline.filter((t) => t.end && t.end !== t.start).map((t) => ({ start: t.start, end: t.end as string }))
}

/** Daftar bulan dari tanggal paling awal sampai paling akhir di semua lomba. */
export function getMonthSpan(comps: Competition[]): { year: number; month: number }[] {
  const dates = comps.flatMap((c) => c.timeline.flatMap((t) => [t.start, t.end ?? t.start])).sort()
  if (dates.length === 0) return []
  const first = parseISO(dates[0])
  const last = parseISO(dates[dates.length - 1])
  const out: { year: number; month: number }[] = []
  let y = first.y
  let m = first.m
  while (y < last.y || (y === last.y && m <= last.m)) {
    out.push({ year: y, month: m })
    m += 1
    if (m > 12) {
      m = 1
      y += 1
    }
  }
  return out
}

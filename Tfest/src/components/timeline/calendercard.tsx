import { useMemo } from 'react'
import type { ColorKey } from '../../data/competitions'
import { COLOR_STYLES } from '../../lib/colorStyles'
import { MONTH_NAMES, WEEKDAYS, monthGrid, toISO } from '../../lib/calendar'
import type { CalEvent } from '../../lib/timeline'

interface Props {
  color: ColorKey
  year: number
  month: number
  events: CalEvent[]
  ranges: { start: string; end: string }[]
  onPrev: () => void
  onNext: () => void
  onOpenDate: (day: number, events: CalEvent[]) => void
}

const navBtn =
  'inline-flex min-h-[44px] items-center justify-center rounded-full bg-gradient-to-r from-gold to-gold-light px-4 text-xs font-semibold text-forest shadow-gold-btn transition duration-200 hover:-translate-y-0.5 hover:scale-105 sm:px-6 sm:text-sm'

const cell =
  'relative flex aspect-square flex-col overflow-hidden rounded-xl border p-1 text-left sm:aspect-auto sm:min-h-[88px] sm:p-2 lg:min-h-[100px]'

export default function CalendarCard({ color, year, month, events, ranges, onPrev, onNext, onOpenDate }: Props) {
  const style = COLOR_STYLES[color]
  const cells = useMemo(() => monthGrid(year, month), [year, month])
  const byDate = useMemo(() => {
    const map = new Map<string, CalEvent[]>()
    for (const ev of events) {
      const list = map.get(ev.date)
      if (list) list.push(ev)
      else map.set(ev.date, [ev])
    }
    return map
  }, [events])

  return (
    <div className="rounded-[28px] border border-soil/15 bg-cream p-4 text-forest sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="order-first w-full text-center text-xl leading-tight text-forest sm:order-none sm:w-auto sm:flex-1 sm:text-3xl">
          {MONTH_NAMES[month - 1]} {year}
        </h3>
        <button type="button" onClick={onPrev} className={`${navBtn} sm:order-first`}>
          ‹ Sebelum
        </button>
        <button type="button" onClick={onNext} className={navBtn}>
          Berikut ›
        </button>
      </div>

      <div className="mt-5 grid grid-cols-7 gap-1 sm:gap-2">
        {WEEKDAYS.map((w) => (
          <div
            key={w}
            className="rounded-lg bg-forest/10 py-2 text-center text-[11px] font-semibold text-forest sm:text-sm"
          >
            {w}
          </div>
        ))}
      </div>

      <div className="mt-1 grid grid-cols-7 gap-1 sm:mt-2 sm:gap-2">
        {cells.map((day, idx) => {
          if (day === null) {
            return <div key={`empty-${idx}`} aria-hidden="true" className={`${cell} border-dashed border-soil/20`} />
          }
          const key = toISO(year, month, day)
          const evs = byDate.get(key) ?? []
          const inRange = ranges.some((r) => key > r.start && key < r.end)

          const number = <span className="text-xs font-semibold leading-none text-forest sm:text-sm">{day}</span>

          if (evs.length === 0) {
            return (
              <div key={key} className={`${cell} ${inRange ? style.tint : 'border-soil/15 bg-cream'}`}>
                {number}
              </div>
            )
          }

          return (
            <button
              key={key}
              type="button"
              onClick={() => onOpenDate(day, evs)}
              aria-label={`${day} ${MONTH_NAMES[month - 1]}: ${evs.map((e) => e.title).join(', ')}`}
              className={`${cell} border-2 ${style.cellBorder} ${inRange ? style.tintBg : 'bg-cream'} transition duration-200 hover:-translate-y-0.5 ${style.cellHover} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest`}
            >
              {number}
              <span aria-hidden="true" className="mt-1 hidden flex-col gap-1 sm:flex">
                {evs.slice(0, 2).map((e) => (
                  <span
                    key={e.id}
                    className={`block truncate rounded-full px-2 py-0.5 text-[11px] font-semibold leading-tight ${style.badge}`}
                  >
                    {e.pill}
                  </span>
                ))}
                {evs.length > 2 && <span className="text-[11px] font-semibold text-forest">+{evs.length - 2}</span>}
              </span>
              <span aria-hidden="true" className="mt-auto flex gap-0.5 sm:hidden">
                {evs.slice(0, 3).map((e) => (
                  <span key={e.id} className={`h-1.5 w-1.5 rounded-full ${style.dot}`} />
                ))}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

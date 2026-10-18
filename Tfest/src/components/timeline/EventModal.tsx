import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import type { ColorKey } from '../../data/competitions'
import { COLOR_STYLES } from '../../lib/colorStyles'
import { formatLong } from '../../lib/calendar'
import type { CalEvent } from '../../lib/timeline'

interface Props {
  title: string
  events: CalEvent[]
  color: ColorKey
  onClose: () => void
}

const FOCUSABLE = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'

function dateText(ev: CalEvent): string {
  if (ev.rangeStart && ev.rangeEnd) return `${formatLong(ev.rangeStart)} – ${formatLong(ev.rangeEnd)}`
  return formatLong(ev.date)
}

export default function EventModal({ title, events, color, onClose }: Props) {
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const onCloseRef = useRef(onClose)
  onCloseRef.current = onClose
  const style = COLOR_STYLES[color]

  // Esc menutup, Tab terkunci di dalam dialog (focus trap), fokus dikembalikan saat ditutup.
  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null
    closeRef.current?.focus()
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        onCloseRef.current()
        return
      }
      if (e.key !== 'Tab' || !dialogRef.current) return
      const items = Array.from(dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE))
      if (items.length === 0) return
      const first = items[0]
      const last = items[items.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
      previous?.focus()
    }
  }, [])

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-forest/80 p-4 backdrop-blur-sm"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="event-modal-title"
        className="max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-[24px] border border-soil/15 bg-cream p-5 text-forest sm:p-7"
      >
        <div className="flex items-start justify-between gap-4">
          <h3 id="event-modal-title" className="text-xl leading-snug text-forest sm:text-2xl">
            {title}
          </h3>
          <button
            ref={closeRef}
            type="button"
            aria-label="Tutup"
            onClick={onClose}
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-soil/20 text-forest transition duration-200 hover:bg-forest hover:text-cream"
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>
        <span aria-hidden="true" className="my-4 block h-1 w-14 rounded-full bg-gold" />

        <ul className="flex flex-col gap-3">
          {events.map((ev) => (
            <li key={ev.id} className={`rounded-2xl border-l-4 bg-forest/5 p-4 ${style.agendaBorder}`}>
              <span className={`inline-block rounded-full px-2.5 py-1 text-[11px] font-semibold ${style.badge}`}>
                {ev.type}
              </span>
              <p className="mt-2 text-base font-semibold leading-snug text-forest">{ev.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-forest/80">{ev.competitionName}</p>
              <p className={`mt-2 text-sm font-semibold ${style.ink}`}>{dateText(ev)}</p>
              {ev.description && <p className="mt-2 text-sm leading-relaxed text-forest">{ev.description}</p>}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

import { CalendarDays } from 'lucide-react'
import type { ColorKey } from '../../data/competitions'
import { COLOR_STYLES } from '../../lib/colorStyles'
import { formatShort } from '../../lib/calendar'
import type { CalEvent } from '../../lib/timeline'

interface Props {
  color: ColorKey
  events: CalEvent[]
  onOpen: (event: CalEvent) => void
}

export default function AgendaCard({ color, events, onOpen }: Props) {
  const style = COLOR_STYLES[color]

  return (
    <div className="flex flex-col rounded-[28px] border border-soil/15 bg-cream p-4 text-forest sm:p-6">
      <h3 className="flex items-center gap-3 text-2xl leading-tight text-forest">
        <CalendarDays size={26} aria-hidden="true" className="shrink-0 text-soil" />
        Semua Agenda
      </h3>
      <span aria-hidden="true" className="my-4 block h-px bg-soil/15" />

      {events.length === 0 ? (
        <p className="text-sm text-forest/70">Belum ada agenda.</p>
      ) : (
        // Di desktop tinggi dibatasi 520px dan bisa di-scroll.
        <ul className="flex flex-col gap-3 overflow-y-auto pr-1 lg:max-h-[520px]">
          {events.map((ev) => (
            <li key={ev.id}>
              <button
                type="button"
                onClick={() => onOpen(ev)}
                className={`flex w-full items-start gap-3 rounded-2xl border-l-4 bg-forest/5 p-3 text-left transition duration-200 hover:-translate-y-0.5 hover:bg-forest/10 sm:p-4 ${style.agendaBorder}`}
              >
                <span className={`w-16 shrink-0 text-sm font-bold leading-snug ${style.ink}`}>{formatShort(ev.date)}</span>
                <span className="flex flex-1 flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <span className="text-sm font-medium leading-snug text-forest">{ev.title}</span>
                  <span
                    className={`inline-block shrink-0 self-start rounded-full px-2.5 py-1 text-[11px] font-semibold ${style.badge}`}
                  >
                    {ev.type}
                  </span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

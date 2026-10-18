import { useMemo, useState } from 'react'
import { COMPETITIONS } from '../../data/competitions'
import { EVENT } from '../../data/siteContent'
import { COLOR_STYLES } from '../../lib/colorStyles'
import { MONTH_NAMES, formatShort, toISO } from '../../lib/calendar'
import { buildEvents, buildRanges, getMonthSpan, type CalEvent } from '../../lib/timeline'
import CalendarCard from './CalendarCard'
import AgendaCard from './AgendaCard'
import EventModal from './EventModal'

interface ModalState {
  title: string
  events: CalEvent[]
}

const goldBtn =
  'inline-flex min-h-[48px] items-center justify-center rounded-full bg-gradient-to-r from-gold to-gold-light px-9 text-sm font-semibold text-forest shadow-gold-btn transition duration-200 hover:-translate-y-1 hover:scale-105'

const pillBase =
  'inline-flex min-h-[44px] items-center justify-center rounded-full border px-5 text-sm font-semibold tracking-wide transition duration-200 hover:-translate-y-0.5'

function Ornament() {
  return (
    <div aria-hidden="true" className="mb-6 flex items-center justify-center gap-3">
      <span className="h-px w-12 bg-gradient-to-r from-transparent to-gold" />
      <span className="h-3 w-3 rotate-45 bg-gold" />
      <span className="h-px w-12 bg-gradient-to-l from-transparent to-gold" />
    </div>
  )
}

export default function Timeline() {
  const months = useMemo(() => getMonthSpan(COMPETITIONS), [])
  const [activeSlug, setActiveSlug] = useState(COMPETITIONS[0]?.slug ?? '')
  const [monthIdx, setMonthIdx] = useState(0)
  const [started, setStarted] = useState(false)
  const [showClosing, setShowClosing] = useState(false)
  const [modal, setModal] = useState<ModalState | null>(null)

  const active = COMPETITIONS.find((c) => c.slug === activeSlug) ?? COMPETITIONS[0]
  const events = useMemo(() => (active ? buildEvents(active) : []), [active])
  const ranges = useMemo(() => (active ? buildRanges(active) : []), [active])

  if (!active || months.length === 0) {
    return <section id="timeline" aria-label="Timeline" className="scroll-mt-16 bg-forest" />
  }

  const { year, month } = months[monthIdx]
  const monthPrefix = toISO(year, month, 1).slice(0, 7)
  const monthEvents = events.filter((e) => e.date.startsWith(monthPrefix))
  const isLastMonth = monthIdx === months.length - 1

  const selectCompetition = (slug: string) => {
    setActiveSlug(slug)
    setMonthIdx(0) // mengganti lomba selalu kembali ke bulan pertama
  }
  const goPrev = () => {
    if (monthIdx === 0) setStarted(false) // bulan pertama: kembali ke Intro
    else setMonthIdx(monthIdx - 1)
  }
  const goNext = () => {
    if (isLastMonth) setShowClosing(true) // bulan terakhir: buka Penutup
    else setMonthIdx(monthIdx + 1)
  }

  const titleParts = (() => {
    const i = EVENT.closingTitle.lastIndexOf(' ')
    return { main: EVENT.closingTitle.slice(0, i), last: EVENT.closingTitle.slice(i + 1) }
  })()

  return (
    <section
      id="timeline"
      aria-label="Timeline"
      className="relative scroll-mt-16 bg-forest px-4 pb-20 pt-4 md:pb-28"
    >
      <div className="mx-auto max-w-6xl">
        {/* 1. Intro */}
        {!started && !showClosing && (
          <div className="glass mx-auto max-w-3xl rounded-[28px] px-6 py-12 text-center md:px-14 md:py-16">
            <Ornament />
            <h2 className="text-3xl leading-tight text-cream md:text-5xl">
              Explore Timeline of {EVENT.nameMain} <span className="text-gold">{EVENT.year}</span>.
            </h2>
            <div className="mt-10">
              <button
                type="button"
                className={goldBtn}
                onClick={() => {
                  setStarted(true)
                  setMonthIdx(0)
                }}
              >
                Click Here →
              </button>
            </div>
          </div>
        )}

        {/* 2. Kalender + agenda */}
        {started && !showClosing && (
          <>
            <div role="group" aria-label="Pilih lomba" className="flex flex-wrap justify-center gap-2 md:gap-3">
              {COMPETITIONS.map((c) => {
                const isActive = c.slug === active.slug
                const style = COLOR_STYLES[c.color]
                return (
                  <button
                    key={c.slug}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => selectCompetition(c.slug)}
                    className={`${pillBase} ${isActive ? style.pillActive : `border-cream/60 bg-forest/40 text-cream ${style.pillHover}`}`}
                  >
                    Explore {c.code}
                  </button>
                )
              })}
            </div>
            <p className="mt-4 text-center text-sm leading-relaxed text-cream/80">{active.name}</p>

            <div className="mt-8 grid gap-6 lg:grid-cols-[1.35fr_1fr] lg:items-start">
              <CalendarCard
                color={active.color}
                year={year}
                month={month}
                events={events}
                ranges={ranges}
                onPrev={goPrev}
                onNext={goNext}
                onOpenDate={(day, evs) =>
                  setModal({ title: `Acara pada tanggal ${day} ${MONTH_NAMES[month - 1]}`, events: evs })
                }
              />
              <AgendaCard
                color={active.color}
                events={monthEvents}
                onOpen={(ev) => setModal({ title: `Acara Agenda (${formatShort(ev.date)})`, events: [ev] })}
              />
            </div>
          </>
        )}

        {/* 3. Penutup */}
        {showClosing && (
          <div className="glass mx-auto max-w-3xl rounded-[28px] px-6 py-12 text-center md:px-14 md:py-16">
            <Ornament />
            <h2 className="text-3xl leading-tight text-cream md:text-5xl">
              {titleParts.main} <span className="text-gold">{titleParts.last}</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-cream/90 md:text-lg">
              {EVENT.closingThanks}
            </p>
            <div className="mt-10">
              <button type="button" className={goldBtn} onClick={() => setShowClosing(false)}>
                Kembali →
              </button>
            </div>
          </div>
        )}
      </div>

      {modal && <EventModal title={modal.title} events={modal.events} color={active.color} onClose={() => setModal(null)} />}
    </section>
  )
}

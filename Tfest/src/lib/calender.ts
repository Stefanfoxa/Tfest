// Helper kalender. Tanggal selalu berupa string ISO "YYYY-MM-DD" (bulan 1-12), sehingga perbandingan
// string sama dengan perbandingan tanggal dan tidak ada masalah zona waktu.

export const MONTH_NAMES = [
  'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
  'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember',
]
export const MONTH_SHORT = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des']
/** Minggu dimulai hari Minggu. */
export const WEEKDAYS = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab']

const pad = (n: number) => String(n).padStart(2, '0')

export function parseISO(s: string): { y: number; m: number; d: number } {
  const [y, m, d] = s.split('-').map(Number)
  return { y, m, d }
}

export function toISO(y: number, m: number, d: number): string {
  return `${y}-${pad(m)}-${pad(d)}`
}

/** Grid tetap 7 kolom x 6 baris = 42 sel; null = sel kosong di luar bulan. */
export function monthGrid(year: number, month: number): (number | null)[] {
  const firstWeekday = new Date(year, month - 1, 1).getDay()
  const daysInMonth = new Date(year, month, 0).getDate()
  return Array.from({ length: 42 }, (_, i) => {
    const day = i - firstWeekday + 1
    return day >= 1 && day <= daysInMonth ? day : null
  })
}

/** "19 Oktober 2026" */
export function formatLong(s: string): string {
  const { y, m, d } = parseISO(s)
  return `${d} ${MONTH_NAMES[m - 1]} ${y}`
}

/** "19 Okt" */
export function formatShort(s: string): string {
  const { m, d } = parseISO(s)
  return `${d} ${MONTH_SHORT[m - 1]}`
}

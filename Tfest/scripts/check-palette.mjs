// Memeriksa bahwa tidak ada warna di luar palet PRD Bagian 6.1.
import { readdirSync, readFileSync, statSync } from 'node:fs'
import { join, extname } from 'node:path'

const ALLOWED = new Set(
  [
    '#012e23', '#eeeae2', '#f19a20', '#572f08', // palet utama
    '#f7b955', // accent2 AEC
    '#0b5a45', '#1f8a6a', '#5fb89a', // AICE
    '#8a5a2b', '#c8985f', // ARC
    '#9c5508', '#8a4a0a', '#e0782a', // AVOC
    '#52691f', '#46601a', '#a9c25a', // LCCA
  ],
)
const ALLOWED_RGB = new Set(['1,46,35', '238,234,226', '241,154,32', '87,47,8'])

const TARGETS = ['index.html', 'tailwind.config.js', 'src', 'public/images']
const EXT = new Set(['.ts', '.tsx', '.css', '.html', '.js', '.svg'])
const DEFAULT_TW =
  /\b(?:bg|text|border|from|via|to|ring|fill|stroke|outline|divide|decoration|accent|caret)-(?:white|black|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose|slate|gray|zinc|neutral|stone)\b/g

function walk(p, out = []) {
  const s = statSync(p)
  if (s.isDirectory()) readdirSync(p).forEach((f) => walk(join(p, f), out))
  else if (EXT.has(extname(p))) out.push(p)
  return out
}

const problems = []
for (const t of TARGETS) {
  let files
  try { files = walk(t) } catch { continue }
  for (const f of files) {
    const src = readFileSync(f, 'utf8')
    for (const m of src.matchAll(/#[0-9a-fA-F]{3,8}\b/g)) {
      const hex = m[0].toLowerCase()
      // Abaikan anchor/ID seperti "#timeline" (bukan 3/4/6/8 hex valid) — cek panjang.
      if (![4, 5, 7, 9].includes(hex.length)) continue
      if (!ALLOWED.has(hex)) problems.push(`${f}: ${m[0]}`)
    }
    for (const m of src.matchAll(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/g)) {
      if (!ALLOWED_RGB.has(`${m[1]},${m[2]},${m[3]}`)) problems.push(`${f}: ${m[0]})`)
    }
    for (const m of src.matchAll(/\b(?:hsla?|oklch|oklab|lab|lch)\(/g)) problems.push(`${f}: ${m[0]}`)
    for (const m of src.matchAll(DEFAULT_TW)) problems.push(`${f}: kelas warna bawaan Tailwind "${m[0]}"`)
  }
}

if (problems.length) {
  console.error('Warna di luar palet ditemukan:\n' + problems.map((p) => '  - ' + p).join('\n'))
  process.exit(1)
}
console.log('OK: semua warna berada dalam palet PRD Bagian 6.1.')

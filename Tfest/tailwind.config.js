/** @type {import('tailwindcss').Config} */
// Semua warna di sini berasal dari PRD Bagian 6.1. Warna bawaan Tailwind dimatikan
// (colors di-override, bukan di-extend) supaya tidak ada warna di luar palet yang bisa terpakai.
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      forest: '#012e23', // utama
      cream: '#eeeae2', // krem (basic colour)
      gold: {
        DEFAULT: '#f19a20', // emas
        light: '#f7b955', // ujung gradient emas (accent2 AEC)
      },
      soil: '#572f08', // cokelat
      // Semua lomba memakai emas (permintaan terbaru). Turunan per kompetisi (PRD 6.1): fill, end (ujung gradient), ink (teks di atas krem),
      // on (teks di atas fill), lite (versi terang untuk latar gelap).
      aec: { fill: '#f19a20', end: '#f7b955', ink: '#572f08', on: '#012e23', lite: '#f19a20' },
      aice: { fill: '#f19a20', end: '#f7b955', ink: '#572f08', on: '#012e23', lite: '#f19a20' },
      arc: { fill: '#f19a20', end: '#f7b955', ink: '#572f08', on: '#012e23', lite: '#f19a20' },
      avoc: { fill: '#f19a20', end: '#f7b955', ink: '#572f08', on: '#012e23', lite: '#f19a20' },
      lcca: { fill: '#f19a20', end: '#f7b955', ink: '#572f08', on: '#012e23', lite: '#f19a20' },
    },
    extend: {
      fontFamily: {
        // Libre Baskerville hanya memuat 0-9, ditaruh paling depan agar semua angka memakainya.
        display: ['"Libre Baskerville"', '"The Season"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        // League Spartan: judul bagian di antara divider.
        spartan: ['"League Spartan"', 'system-ui', 'sans-serif'],
        sans: ['"Libre Baskerville"', 'Poppins', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'gold-btn': '0 8px 24px -6px rgba(241, 154, 32, 0.55)',
        'glow-aec': '0 0 28px -6px #f19a20',
        'glow-aice': '0 0 28px -6px #f19a20',
        'glow-arc': '0 0 28px -6px #f19a20',
        'glow-avoc': '0 0 28px -6px #f19a20',
        'glow-lcca': '0 0 28px -6px #f19a20',
      },
    },
  },
  plugins: [],
}

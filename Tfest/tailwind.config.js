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
      // Turunan per kompetisi (PRD 6.1): fill, end (ujung gradient), ink (teks di atas krem),
      // on (teks di atas fill), lite (versi terang untuk latar gelap).
      aec: { fill: '#f19a20', end: '#f7b955', ink: '#572f08', on: '#012e23', lite: '#f19a20' },
      aice: { fill: '#0b5a45', end: '#1f8a6a', ink: '#0b5a45', on: '#eeeae2', lite: '#5fb89a' },
      arc: { fill: '#572f08', end: '#8a5a2b', ink: '#572f08', on: '#eeeae2', lite: '#c8985f' },
      avoc: { fill: '#9c5508', end: '#f19a20', ink: '#8a4a0a', on: '#eeeae2', lite: '#e0782a' },
      lcca: { fill: '#52691f', end: '#f19a20', ink: '#46601a', on: '#eeeae2', lite: '#a9c25a' },
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
        'glow-aice': '0 0 28px -6px #5fb89a',
        'glow-arc': '0 0 28px -6px #c8985f',
        'glow-avoc': '0 0 28px -6px #e0782a',
        'glow-lcca': '0 0 28px -6px #a9c25a',
      },
    },
  },
  plugins: [],
}

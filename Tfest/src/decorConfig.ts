// Konfigurasi dekorasi per section. Ubah posisi/ukuran/opacity di sini tanpa menyentuh komponen section.
// Semua nilai posisi & lebar berupa string CSS. File gambar: public/images/decor/webp/<src>.webp

export interface DecorItem {
  src: string
  top?: string
  right?: string
  bottom?: string
  left?: string
  /** Lebar (CSS), disarankan clamp()/vw agar responsif. */
  width: string
  rotate?: number
  /** Cerminkan horizontal. */
  flip?: boolean
  opacity?: number
  /** mix-blend-mode; elemen cahaya memakai 'screen'. */
  blend?: 'screen'
  /** Sembunyikan di bawah breakpoint ini (default: tampil di semua ukuran). */
  from?: 'md' | 'lg' | 'xl'
  /** sway = goyang pelan (desktop saja), sway-m = juga di HP (maks. 2 elemen), twinkle = berkedip (desktop saja). */
  animate?: 'sway' | 'sway-m' | 'twinkle'
  /** mask-image CSS untuk menyamarkan tepi yang terpotong lurus. */
  mask?: string
  origin?: string
  /** Titik tengah gambar ditaruh di (left, top). */
  center?: boolean
  z?: number
  delay?: number
}

// Memudar sebelum mencapai sisi yang terpotong lurus (kanan & atas), jadi tepinya tidak terlihat.
const HAZE_MASK = 'radial-gradient(ellipse 62% 62% at 38% 62%, #000 15%, transparent 100%)'
const TREE = 'clamp(160px, 26vw, 420px)'

export const DECOR = {
  hero: [
    { src: 'glow-sunbeam-topleft', top: '-2vw', left: '-2vw', width: 'clamp(220px, 34vw, 520px)', opacity: 0.7, blend: 'screen' },
    { src: 'leaf-gold-pale-corner', top: '0', right: '0', width: 'clamp(110px, 22vw, 340px)', opacity: 0.9, animate: 'sway', origin: 'top right' },
    { src: 'palm-oil-large-fruit', bottom: '0', right: '-3vw', width: TREE, animate: 'sway-m' },
    { src: 'palm-date-small-fruit', bottom: '0', left: '-2vw', width: 'clamp(110px, 16vw, 260px)', animate: 'sway-m' },
    { src: 'glow-star-white', top: '24%', left: '14%', width: 'clamp(40px, 5vw, 80px)', blend: 'screen', from: 'md', animate: 'twinkle' },
    { src: 'glow-star-white', top: '40%', right: '13%', width: 'clamp(32px, 4vw, 64px)', blend: 'screen', from: 'md', animate: 'twinkle', delay: 1.6 },
  ] as DecorItem[],
  // Di dalam span tahun "2026" (relatif terhadap angka), tepat di belakang teks.
  heroYear: [
    { src: 'glow-starburst-center', top: '50%', left: '50%', width: 'clamp(240px, 32vw, 520px)', opacity: 0.45, blend: 'screen', center: true, from: 'md', animate: 'twinkle', z: -1 },
  ] as DecorItem[],
  welcome: [
    { src: 'leaf-gold-gradient', top: '-34px', left: '-18px', width: 'clamp(80px, 12vw, 190px)', rotate: -18, animate: 'sway' },
    { src: 'leaf-olive-gold', bottom: '-44px', right: '-22px', width: 'clamp(90px, 13vw, 200px)', rotate: 14, flip: true, from: 'md', animate: 'sway' },
  ] as DecorItem[],
  timelineCard: [
    { src: 'glow-haze-peach', top: '-70px', right: '-70px', width: 'clamp(160px, 24vw, 340px)', opacity: 0.8, blend: 'screen', mask: HAZE_MASK },
    { src: 'leaf-gold-glitter', bottom: '-90px', left: '-100px', width: 'clamp(100px, 15vw, 240px)', rotate: 8, flip: true, from: 'md', animate: 'sway' },
  ] as DecorItem[],
  // Layar kalender/agenda: hanya di margin luar, layar lebar (>= 1280 px), opacity <= 0.5.
  timelineMargin: [
    { src: 'leaf-gold-gradient', top: '8%', left: '-34px', width: '110px', rotate: -12, opacity: 0.45, from: 'xl' },
    { src: 'leaf-gold-gradient', top: '8%', right: '-34px', width: '110px', rotate: 12, flip: true, opacity: 0.45, from: 'xl' },
  ] as DecorItem[],
  subheader: [
    { src: 'leaf-gold-gradient', top: '50%', left: '-1vw', width: 'clamp(56px, 9vw, 150px)', rotate: -15, z: 0 },
    { src: 'leaf-gold-gradient', top: '50%', right: '-1vw', width: 'clamp(56px, 9vw, 150px)', rotate: 15, flip: true, z: 0 },
  ] as DecorItem[],
  footer: [
    { src: 'glow-lensflare-soft', top: '0', right: '0', width: 'clamp(180px, 28vw, 420px)', opacity: 0.35, blend: 'screen' },
    { src: 'palm-date-small-fruit', bottom: '0', left: '0', width: 'clamp(90px, 11vw, 180px)', opacity: 0.35, from: 'md' },
  ] as DecorItem[],
}
